import { Send } from 'lucide-react';
import type { FormEvent, KeyboardEvent } from 'react';

interface ChatInputProps {
  inputValue: string;
  placeholder: string;
  buttonGradient: string;
  buttonShadowColor: string;
  disabled?: boolean;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
}

export function ChatInput({
  inputValue,
  placeholder,
  buttonGradient,
  buttonShadowColor,
  disabled,
  onInputChange,
  onSubmit,
}: ChatInputProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl p-3 sm:p-4 flex items-end gap-2 sm:gap-3"
      style={{ background: '#0F1115', boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)' }}
    >
      <textarea
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        rows={2}
        className="flex-1 min-w-0 bg-transparent text-white outline-none resize-none leading-snug"
        style={{
          fontSize: '15px',
          opacity: inputValue ? 1 : 0.6,
          maxHeight: '110px',
        }}
      />
      <button
        type="submit"
        disabled={disabled || !inputValue.trim()}
        className="rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
        style={{
          width: '44px',
          height: '44px',
          background: buttonGradient,
          boxShadow: `0 4px 16px ${buttonShadowColor}`,
        }}
      >
        <Send className="w-5 h-5 text-white" />
      </button>
    </form>
  );
}
