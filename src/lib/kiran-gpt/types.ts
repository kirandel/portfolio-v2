export type KiranModeId = 'about' | 'product' | 'fun';

export interface ModeConfig {
  id: KiranModeId;
  label: string;
  description: string;
  placeholder: string;
  suggestedQuestions: string[];
  systemInstruction: string;
  toneGuidelines: string[];
  retrievalTags: string[];
  emptyStateTitle: string;
  emptyStateHint: string;
}

export type MessageRole = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
}

export interface KiranChatRequest {
  mode: KiranModeId;
  messages: ChatMessage[];
  input: string;
}
