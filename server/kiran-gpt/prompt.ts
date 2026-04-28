import { KIRAN_MODES } from '../../src/lib/kiran-gpt/modes';
import { GLOBAL_SYSTEM_PROMPT, buildModeSystemPrompt } from '../../src/lib/kiran-gpt/prompts';
import type { KiranModeId, IncomingMessage, KnowledgeChunk } from './types';

export function buildPromptInput(params: {
  mode: KiranModeId;
  input: string;
  messages: IncomingMessage[];
  retrieved: KnowledgeChunk[];
}) {
  const { mode, input, messages, retrieved } = params;
  const context = retrieved
    .map((chunk, index) => `[${index + 1}] ${chunk.path}\n${chunk.content}`)
    .join('\n\n');

  return {
    system: [GLOBAL_SYSTEM_PROMPT, buildModeSystemPrompt(mode), `Mode hints: ${KIRAN_MODES[mode].toneGuidelines.join(', ')}`]
      .filter(Boolean)
      .join('\n\n'),
    history: messages.slice(-10).map((message) => `${message.role.toUpperCase()}: ${message.content}`).join('\n'),
    context: context || 'No relevant curated context found.',
    user: input,
  };
}
