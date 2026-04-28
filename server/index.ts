import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { kiranGptRoute } from './kiran-gpt/route';

const app = express();
const port = Number(process.env.KIRAN_GPT_API_PORT || 8787);

const requestsByIp = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 20;

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/kiran-gpt', (req, res, next) => {
  const ip = req.ip || 'unknown';
  const now = Date.now();
  const entry = requestsByIp.get(ip);

  if (!entry || entry.resetAt < now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_PER_WINDOW) {
    res.status(429).json({ error: 'Rate limit reached. Please try again shortly.' });
    return;
  }

  entry.count += 1;
  next();
});

app.post('/api/kiran-gpt', kiranGptRoute);

app.listen(port, () => {
  console.log(`KiranGPT API listening on http://localhost:${port}`);
});
