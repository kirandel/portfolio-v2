import { useMemo, useState } from 'react';
import { trackKiranEvent } from '@/lib/kiran-gpt/analytics';
import { KIRAN_MODES } from '@/lib/kiran-gpt/modes';
import type { ChatMessage, KiranModeId } from '@/lib/kiran-gpt/types';

function uid() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useKiranGPT() {
  const [selectedMode, setSelectedMode] = useState<KiranModeId>('product');
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const modeConfig = useMemo(() => KIRAN_MODES[selectedMode], [selectedMode]);

  const switchMode = (mode: KiranModeId) => {
    setSelectedMode(mode);
    setMessages([]);
    setError(null);
    trackKiranEvent('kiranGPT_mode_selected', { mode });
  };

  const submitQuestion = async (question?: string) => {
    const input = (question ?? inputValue).trim();
    if (!input || isLoading) return;

    setError(null);
    setInputValue('');

    const userMessage: ChatMessage = { id: uid(), role: 'user', content: input };
    const assistantMessage: ChatMessage = { id: uid(), role: 'assistant', content: '' };
    const nextMessages = [...messages, userMessage, assistantMessage];
    setMessages(nextMessages);
    setIsLoading(true);
    trackKiranEvent('kiranGPT_question_submitted', {
      mode: selectedMode,
      questionLength: input.length,
      source: question ? 'suggested' : 'typed',
    });
    if (question) {
      trackKiranEvent('kiranGPT_suggested_question_clicked', {
        mode: selectedMode,
        question,
      });
    }

    try {
      const start = performance.now();
      const response = await fetch('/api/kiran-gpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: selectedMode,
          input,
          messages: messages.slice(-10),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error(`Request failed (${response.status})`);
      }

      trackKiranEvent('kiranGPT_response_stream_started', { mode: selectedMode });
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((msg) => (msg.id === assistantMessage.id ? { ...msg, content: accumulated } : msg)),
        );
      }

      trackKiranEvent('kiranGPT_response_completed', {
        mode: selectedMode,
        responseChars: accumulated.length,
        latencyMs: Math.round(performance.now() - start),
      });
      trackKiranEvent('kiranGPT_conversation_length_updated', { count: nextMessages.length });
    } catch (err) {
      const fallback =
        'I could not generate a response right now. Please try again, or ask a different question.';
      setMessages((prev) =>
        prev.map((msg) => (msg.id === assistantMessage.id ? { ...msg, content: fallback } : msg)),
      );
      setError(err instanceof Error ? err.message : 'Unknown error');
      trackKiranEvent('kiranGPT_error', {
        mode: selectedMode,
        errorType: err instanceof Error ? err.message : 'unknown',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    selectedMode,
    modeConfig,
    inputValue,
    setInputValue,
    messages,
    isLoading,
    error,
    switchMode,
    submitQuestion,
  };
}
