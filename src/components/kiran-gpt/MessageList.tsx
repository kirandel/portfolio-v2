import { useEffect, useRef } from 'react';
import type { ChatMessage } from '@/lib/kiran-gpt/types';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading]);

  return (
    <div className="kiran-chat-scrollbar flex-1 min-h-0 overflow-y-auto space-y-4 mb-6 pr-2">
      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className="rounded-3xl px-5 py-4 max-w-[84%]"
            style={{
              background:
                message.role === 'assistant'
                  ? 'linear-gradient(135deg, #151922 0%, #1A2030 100%)'
                  : 'linear-gradient(135deg, #2E2947 0%, #3a3154 100%)',
            }}
          >
            <p className="text-white" style={{ fontSize: '15px', lineHeight: '1.6', opacity: 0.95 }}>
              {message.content}
            </p>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="flex justify-start">
          <div
            className="rounded-3xl px-5 py-3 max-w-[84%] text-white"
            style={{ background: 'linear-gradient(135deg, #151922 0%, #1A2030 100%)', opacity: 0.85 }}
          >
            Thinking...
          </div>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}
