import OpenAI from 'openai';
import { z } from 'zod';
import { buildPromptInput } from '../server/kiran-gpt/prompt';
import { retrieveContext } from '../server/kiran-gpt/retrieve';
import type { KiranModeId } from '../server/kiran-gpt/types';

let openaiClient: OpenAI | null = null;
const MODEL_CANDIDATES = ['gpt-4.1-mini', 'gpt-4o-mini'] as const;

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  if (!openaiClient) {
    openaiClient = new OpenAI({ apiKey });
  }
  return openaiClient;
}

const bodySchema = z.object({
  mode: z.enum(['about', 'product', 'fun']),
  input: z.string().min(1).max(1200),
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant', 'system']),
        content: z.string().max(4000),
      }),
    )
    .max(16)
    .default([]),
});

const requestsByIp = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;

function getRequestBody(req: any) {
  if (!req?.body) return null;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return req.body;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const ip =
    req.headers?.['x-forwarded-for']?.toString().split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  const now = Date.now();
  const entry = requestsByIp.get(ip);
  if (!entry || entry.resetAt < now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else if (entry.count >= MAX_PER_WINDOW) {
    res.status(429).json({ error: 'Rate limit reached. Please try again shortly.' });
    return;
  } else {
    entry.count += 1;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: 'OPENAI_API_KEY is missing on the server.' });
    return;
  }

  const parsed = bodySchema.safeParse(getRequestBody(req));
  if (!parsed.success) {
    res.status(400).json({ error: 'Invalid request payload.' });
    return;
  }

  const { mode, input, messages } = parsed.data;
  const retrieved = retrieveContext(mode as KiranModeId, input);
  const prompt = buildPromptInput({
    mode: mode as KiranModeId,
    input,
    messages,
    retrieved,
  });

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Transfer-Encoding', 'chunked');

  try {
    const client = getOpenAIClient();
    if (!client) {
      res.status(500).end('Server is missing OpenAI credentials.');
      return;
    }

    let stream: Awaited<ReturnType<typeof client.responses.stream>> | null = null;
    let lastError: unknown = null;

    for (const model of MODEL_CANDIDATES) {
      try {
        stream = await client.responses.stream({
          model,
          input: [
            { role: 'system', content: prompt.system },
            { role: 'system', content: `Relevant context:\n${prompt.context}` },
            { role: 'system', content: `Conversation so far:\n${prompt.history || 'No prior turns.'}` },
            { role: 'user', content: prompt.user },
          ],
        });
        break;
      } catch (error) {
        lastError = error;
      }
    }

    if (!stream) {
      throw lastError ?? new Error('No supported model was available for this API key.');
    }

    for await (const event of stream) {
      if (event.type === 'response.output_text.delta' && event.delta) {
        res.write(event.delta);
      }
    }

    res.end();
  } catch (error) {
    console.error('kiran-gpt-error', {
      message: error instanceof Error ? error.message : String(error),
    });
    res.status(500).end('Something went wrong while generating a response.');
  }
}
