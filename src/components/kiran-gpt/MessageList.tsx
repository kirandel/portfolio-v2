import { useEffect, useRef } from 'react';
import type { ChatMessage } from '@/lib/kiran-gpt/types';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading: boolean;
}

function splitBoldSegments(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
  return parts.map((part, index) => {
    const boldMatch = /^\*\*(.*?)\*\*$/.exec(part);
    if (boldMatch) {
      return <strong key={`b-${index}`}>{boldMatch[1]}</strong>;
    }
    return <span key={`t-${index}`}>{part}</span>;
  });
}

type ParsedBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'ol'; items: string[] }
  | { type: 'ul'; items: string[] };

function parseMessageBlocks(content: string): ParsedBlock[] {
  const normalized = content
    .replace(/\r\n/g, '\n')
    .replace(/\s+(\d+\.\s+\*\*)/g, '\n$1')
    .replace(/\s+(?=[-*]\s+)/g, '\n');
  const lines = normalized.split('\n').map((line) => line.trim());
  const blocks: ParsedBlock[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line) {
      i += 1;
      continue;
    }

    const headingMatch = /^(#{1,3})\s+(.+)$/.exec(line);
    if (headingMatch) {
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2],
      });
      i += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, ''));
        i += 1;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    const paragraphLines: string[] = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i] &&
      !/^(#{1,3})\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i])
    ) {
      paragraphLines.push(lines[i]);
      i += 1;
    }
    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const endRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading]);

  return (
    <div ref={containerRef} className="kiran-chat-scrollbar flex-1 min-h-0 overflow-y-auto space-y-4 mb-6 pr-2">
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
            <div className="text-white" style={{ fontSize: '15px', lineHeight: '1.65', opacity: 0.95 }}>
              {parseMessageBlocks(message.content).map((block, index) => {
                if (block.type === 'heading') {
                  return (
                    <p
                      key={`${message.id}-heading-${index}`}
                      style={{
                        marginBottom: '10px',
                        fontWeight: 700,
                        fontSize: block.level === 1 ? '17px' : block.level === 2 ? '16px' : '15px',
                        opacity: 0.98,
                      }}
                    >
                      {splitBoldSegments(block.text)}
                    </p>
                  );
                }

                if (block.type === 'ol') {
                  return (
                    <ol key={`${message.id}-ol-${index}`} style={{ marginBottom: '10px', paddingLeft: '20px' }}>
                      {block.items.map((item, itemIndex) => (
                        <li key={`${message.id}-ol-${index}-${itemIndex}`} style={{ marginBottom: '7px' }}>
                          {splitBoldSegments(item)}
                        </li>
                      ))}
                    </ol>
                  );
                }

                if (block.type === 'ul') {
                  return (
                    <ul key={`${message.id}-ul-${index}`} style={{ marginBottom: '10px', paddingLeft: '20px' }}>
                      {block.items.map((item, itemIndex) => (
                        <li key={`${message.id}-ul-${index}-${itemIndex}`} style={{ marginBottom: '7px' }}>
                          {splitBoldSegments(item)}
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={`${message.id}-p-${index}`} style={{ marginBottom: '10px' }}>
                    {splitBoldSegments(block.text)}
                  </p>
                );
              })}
            </div>
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
