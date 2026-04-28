import type { Request, Response } from 'express';
import OpenAI from 'openai';
import { z } from 'zod';
import { buildPromptInput } from './prompt';
import { retrieveContext } from './retrieve';
import type { KiranModeId } from './types';

let openaiClient: OpenAI | null = null;

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

export async function kiranGptRoute(req: Request, res: Response) {
  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: 'OPENAI_API_KEY is missing on the server.' });
    return;
  }

  const parsed = bodySchema.safeParse(req.body);
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
  res.setHeader('Transfer-Encoding', 'chunked');

  try {
    const client = getOpenAIClient();
    if (!client) {
      res.status(500).end('Server is missing OpenAI credentials.');
      return;
    }

    const stream = await client.responses.stream({
      model: 'gpt-4.1-mini',
      input: [
        { role: 'system', content: prompt.system },
        { role: 'system', content: `Relevant context:\n${prompt.context}` },
        { role: 'system', content: `Conversation so far:\n${prompt.history || 'No prior turns.'}` },
        { role: 'user', content: prompt.user },
      ],
    });

    for await (const event of stream) {
      if (event.type === 'response.output_text.delta' && event.delta) {
        res.write(event.delta);
      }
    }

    res.end();
  } catch (error) {
    console.error('kiran-gpt-error', error);
    res.status(500).end('Something went wrong while generating a response.');
  }
}
