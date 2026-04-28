export type KiranModeId = 'about' | 'product' | 'fun';

export interface IncomingMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface KnowledgeChunk {
  id: string;
  path: string;
  tags: string[];
  content: string;
}
