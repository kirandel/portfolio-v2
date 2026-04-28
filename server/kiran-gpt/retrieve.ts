import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { KIRAN_MODES } from '../../src/lib/kiran-gpt/modes';
import type { KiranModeId, KnowledgeChunk } from './types';

const CONTENT_ROOT = path.resolve(process.cwd(), 'src/content/kiran');

let cache: KnowledgeChunk[] | null = null;

function walkMarkdown(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkMarkdown(fullPath));
      continue;
    }
    if (entry.isFile() && fullPath.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

function loadKnowledge(): KnowledgeChunk[] {
  if (cache) return cache;
  if (!fs.existsSync(CONTENT_ROOT)) {
    cache = [];
    return cache;
  }

  cache = walkMarkdown(CONTENT_ROOT).map((fullPath) => {
    const raw = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(raw);
    const content = parsed.content.replace(/\s+/g, ' ').trim();
    const tags = Array.isArray(parsed.data.tags)
      ? parsed.data.tags.map((tag: string) => tag.toLowerCase())
      : [];

    return {
      id: path.relative(CONTENT_ROOT, fullPath).replace(/\\/g, '/'),
      path: path.relative(CONTENT_ROOT, fullPath).replace(/\\/g, '/'),
      tags,
      content,
    };
  });

  return cache;
}

function scoreChunk(chunk: KnowledgeChunk, question: string, mode: KiranModeId): number {
  const terms = question.toLowerCase().split(/\W+/).filter(Boolean);
  const modeTags = KIRAN_MODES[mode].retrievalTags;
  const haystack = `${chunk.content} ${chunk.tags.join(' ')}`.toLowerCase();
  let score = 0;

  for (const term of terms) {
    if (haystack.includes(term)) score += 1;
  }

  for (const tag of modeTags) {
    if (chunk.tags.includes(tag)) score += 2;
  }

  if (chunk.path.includes(mode)) score += 1;
  return score;
}

export function retrieveContext(mode: KiranModeId, input: string, topK = 4): KnowledgeChunk[] {
  return loadKnowledge()
    .map((chunk) => ({ chunk, score: scoreChunk(chunk, input, mode) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((entry) => entry.chunk);
}
