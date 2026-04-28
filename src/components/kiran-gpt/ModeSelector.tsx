import { KIRAN_MODES, MODE_ORDER } from '@/lib/kiran-gpt/modes';
import type { KiranModeId } from '@/lib/kiran-gpt/types';

interface ModeSelectorProps {
  selectedMode: KiranModeId;
  onSelect: (mode: KiranModeId) => void;
}

const modeStyles: Record<KiranModeId, { gradient: string }> = {
  about: { gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  product: { gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  fun: { gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
};

export function ModeSelector({ selectedMode, onSelect }: ModeSelectorProps) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {MODE_ORDER.map((modeId) => {
        const mode = KIRAN_MODES[modeId];
        const isActive = selectedMode === modeId;
        return (
          <button
            key={mode.id}
            onClick={() => onSelect(mode.id)}
            className="w-full rounded-2xl p-5 transition-all duration-300 cursor-pointer relative overflow-hidden text-left"
            style={{
              background: isActive ? modeStyles[modeId].gradient : 'rgba(255, 255, 255, 0.05)',
              boxShadow: isActive
                ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(255, 255, 255, 0.1)'
                : '0 2px 8px rgba(0, 0, 0, 0.2)',
              transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
              border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="relative z-10">
              <p className="text-white mb-1" style={{ fontSize: '18px', fontWeight: '600' }}>
                {mode.label}
              </p>
              <p className="text-white" style={{ fontSize: '14px', opacity: 0.7, lineHeight: '1.4' }}>
                {mode.description}
              </p>
            </div>
            {isActive && (
              <div
                className="absolute inset-0 opacity-50 blur-xl"
                style={{ background: modeStyles[modeId].gradient }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
