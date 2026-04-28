import OpenAI from 'openai';
import { z } from 'zod';
import fs from 'node:fs';
import path from 'node:path';

let openaiClient: OpenAI | null = null;
const MODEL_CANDIDATES = ['gpt-4.1-mini', 'gpt-4o-mini'] as const;
type KiranModeId = 'about' | 'product' | 'fun';

const MODE_PROMPTS: Record<KiranModeId, string> = {
  about:
    'Focus on Kiran’s background, leadership style, and values. Be concise, specific, and friendly.',
  product:
    'Focus on product strategy, zero-to-one execution, tradeoffs, and measurable outcomes from Kiran’s work.',
  fun:
    'Keep answers playful, funny, and light while grounded in Kiran’s profile. Roast prompts are allowed, but keep them warm, tasteful, and never mean-spirited.',
};
const ABOUT_MODE_FILE_URL = new URL('../src/content/kiran/profile/about.md', import.meta.url);
const ABOUT_MODE_RELATIVE_PATH = 'src/content/kiran/profile/about.md';
const PRODUCT_MODE_FILE_URL = new URL('../src/content/kiran/profile/product-philosophy.md', import.meta.url);
const PRODUCT_MODE_RELATIVE_PATH = 'src/content/kiran/profile/product-philosophy.md';
const FUN_MODE_FILE_URL = new URL('../src/content/kiran/personality/fun-facts.md', import.meta.url);
const FUN_MODE_RELATIVE_PATH = 'src/content/kiran/personality/fun-facts.md';
let aboutModeContextCache: string | null = null;
let aboutModeLoadMeta: { loadedFrom?: string; attempted: string[] } = { attempted: [] };
let productModeContextCache: string | null = null;
let productModeLoadMeta: { loadedFrom?: string; attempted: string[] } = { attempted: [] };
let funModeContextCache: string | null = null;
let funModeLoadMeta: { loadedFrom?: string; attempted: string[] } = { attempted: [] };

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
const inFlightByIp = new Map<string, number>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;
const MAX_CONCURRENT_PER_IP = 1;

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

function getAboutModeContext() {
  if (aboutModeContextCache !== null) return aboutModeContextCache;

  const candidates = [
    ABOUT_MODE_FILE_URL.pathname,
    path.resolve(process.cwd(), ABOUT_MODE_RELATIVE_PATH),
    `/var/task/${ABOUT_MODE_RELATIVE_PATH}`,
    path.resolve(path.dirname(ABOUT_MODE_FILE_URL.pathname), '..', ABOUT_MODE_RELATIVE_PATH),
  ];

  aboutModeLoadMeta = { attempted: [...candidates] };

  for (const candidate of candidates) {
    try {
      if (!fs.existsSync(candidate)) continue;
      const raw = fs.readFileSync(candidate, 'utf8');
      const cleaned = raw.replace(/^---[\s\S]*?---\s*/m, '').trim();
      if (cleaned.length > 0) {
        aboutModeContextCache = cleaned;
        aboutModeLoadMeta.loadedFrom = candidate;
        return aboutModeContextCache;
      }
    } catch {
      // try next candidate path
    }
  }

  aboutModeContextCache = '';
  return aboutModeContextCache;
}

function getProductModeContext() {
  if (productModeContextCache !== null) return productModeContextCache;

  const candidates = [
    PRODUCT_MODE_FILE_URL.pathname,
    path.resolve(process.cwd(), PRODUCT_MODE_RELATIVE_PATH),
    `/var/task/${PRODUCT_MODE_RELATIVE_PATH}`,
    path.resolve(path.dirname(PRODUCT_MODE_FILE_URL.pathname), '..', PRODUCT_MODE_RELATIVE_PATH),
  ];

  productModeLoadMeta = { attempted: [...candidates] };

  for (const candidate of candidates) {
    try {
      if (!fs.existsSync(candidate)) continue;
      const raw = fs.readFileSync(candidate, 'utf8');
      const cleaned = raw.replace(/^---[\s\S]*?---\s*/m, '').trim();
      if (cleaned.length > 0) {
        productModeContextCache = cleaned;
        productModeLoadMeta.loadedFrom = candidate;
        return productModeContextCache;
      }
    } catch {
      // try next candidate path
    }
  }

  productModeContextCache = '';
  return productModeContextCache;
}

function getFunModeContext() {
  if (funModeContextCache !== null) return funModeContextCache;

  const candidates = [
    FUN_MODE_FILE_URL.pathname,
    path.resolve(process.cwd(), FUN_MODE_RELATIVE_PATH),
    `/var/task/${FUN_MODE_RELATIVE_PATH}`,
    path.resolve(path.dirname(FUN_MODE_FILE_URL.pathname), '..', FUN_MODE_RELATIVE_PATH),
  ];

  funModeLoadMeta = { attempted: [...candidates] };

  for (const candidate of candidates) {
    try {
      if (!fs.existsSync(candidate)) continue;
      const raw = fs.readFileSync(candidate, 'utf8');
      const cleaned = raw.replace(/^---[\s\S]*?---\s*/m, '').trim();
      if (cleaned.length > 0) {
        funModeContextCache = cleaned;
        funModeLoadMeta.loadedFrom = candidate;
        return funModeContextCache;
      }
    } catch {
      // try next candidate path
    }
  }

  funModeContextCache = '';
  return funModeContextCache;
}

function buildPromptInput(params: {
  mode: KiranModeId;
  input: string;
  messages: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>;
}) {
  const { mode, input, messages } = params;
  const history = messages
    .slice(-10)
    .map((message) => `${message.role.toUpperCase()}: ${message.content}`)
    .join('\n');

  const system = [
    'You are KiranGPT, an assistant for Kiran Delneuville’s portfolio website.',
    'Default to third-person voice about Kiran (e.g., "Kiran is...", "He...").',
    'Only use first-person voice if the user explicitly asks you to roleplay as Kiran.',
    'Be truthful, concise, and specific. If unsure, say so instead of guessing.',
    'Keep answers professional and recruiter-safe. Avoid profanity, insults, harsh negativity, personal attacks, or edgy/controversial phrasing.',
    'Do not speculate negatively about Kiran or invent weaknesses. If asked to be negative, decline and redirect to balanced, factual framing.',
    'If user requests harmful, illegal, hateful, sexual, or abusive content, refuse briefly and redirect to relevant portfolio topics.',
    MODE_PROMPTS[mode],
  ].join('\n\n');

  return {
    system,
    history: history || 'No prior turns.',
    modeContext:
      mode === 'about' ? getAboutModeContext() : mode === 'product' ? getProductModeContext() : getFunModeContext(),
    user: input,
  };
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
  const currentInFlight = inFlightByIp.get(ip) ?? 0;
  if (currentInFlight >= MAX_CONCURRENT_PER_IP) {
    res.status(429).json({ error: 'Too many concurrent requests. Please wait for the current response to finish.' });
    return;
  }

  const prompt = buildPromptInput({ mode: mode as KiranModeId, input, messages });
  if (!prompt.modeContext) {
    const details =
      mode === 'about' ? aboutModeLoadMeta : mode === 'product' ? productModeLoadMeta : funModeLoadMeta;
    console.error('kiran-gpt-mode-context-missing', { mode, ...details });
    res
      .status(500)
      .json({ error: `${mode} mode context failed to load in this deployment.`, details });
    return;
  }

  const client = getOpenAIClient();
  if (!client) {
    res.status(500).end('Server is missing OpenAI credentials.');
    return;
  }

  try {
    const moderation = await client.moderations.create({
      model: 'omni-moderation-latest',
      input,
    });
    if (moderation.results?.[0]?.flagged) {
      res
        .status(400)
        .json({ error: 'That request is outside the supported scope. Please ask about Kiran’s background, product work, or interests.' });
      return;
    }
  } catch {
    // Fail open on moderation API hiccups to preserve availability.
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Transfer-Encoding', 'chunked');

  inFlightByIp.set(ip, currentInFlight + 1);
  try {
    let stream: Awaited<ReturnType<typeof client.responses.stream>> | null = null;
    let lastError: unknown = null;

    for (const model of MODEL_CANDIDATES) {
      try {
        stream = await client.responses.stream({
          model,
          input: [
            { role: 'system', content: prompt.system },
            ...(prompt.modeContext
              ? [{ role: 'system' as const, content: `${mode} Mode Knowledge:\n${prompt.modeContext}` }]
              : []),
            { role: 'system', content: `Conversation so far:\n${prompt.history}` },
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
  } finally {
    const nextInFlight = Math.max((inFlightByIp.get(ip) ?? 1) - 1, 0);
    if (nextInFlight === 0) {
      inFlightByIp.delete(ip);
    } else {
      inFlightByIp.set(ip, nextInFlight);
    }
  }
}
