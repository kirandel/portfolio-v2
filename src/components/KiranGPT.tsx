import { useRef } from 'react';
import { ChatInput } from './kiran-gpt/ChatInput';
import { MessageList } from './kiran-gpt/MessageList';
import { ModeSelector } from './kiran-gpt/ModeSelector';
import { SuggestedQuestions } from './kiran-gpt/SuggestedQuestions';
import { useKiranGPT } from '@/hooks/useKiranGPT';
import type { KiranModeId } from '@/lib/kiran-gpt/types';

/** Gap between fixed nav bottom and "Meet KiranGPT" when snapping on narrow screens. */
const TITLE_GAP_BELOW_HEADER_PX = 10;

export function KiranGPT() {
  const { selectedMode, modeConfig, inputValue, setInputValue, messages, isLoading, error, switchMode, submitQuestion } =
    useKiranGPT();
  const meetTitleRef = useRef<HTMLHeadingElement>(null);

  /** Align the heading just under the fixed header (delta scroll works reliably on iOS; avoids 767px excluding 768-wide layouts). */
  const scrollMeetTitleBelowNav = () => {
    if (typeof window === 'undefined') return;
    // Stacked layout only (below Tailwind `lg`); covers phones + small tablets / responsive widths like 768–820px.
    if (!window.matchMedia('(max-width: 1023px)').matches) return;

    const el = meetTitleRef.current;
    const header = document.querySelector('header');
    if (!el || !header) return;

    const targetTop = header.getBoundingClientRect().bottom + TITLE_GAP_BELOW_HEADER_PX;
    const titleTop = el.getBoundingClientRect().top;
    const delta = titleTop - targetTop;
    if (Math.abs(delta) < 4) return;

    window.scrollBy({ top: delta, behavior: 'smooth' });
  };

  const handleModeSelect = (mode: KiranModeId) => {
    switchMode(mode);
    // After React commits + next paint (layout stable before measuring header/title positions).
    setTimeout(() => {
      requestAnimationFrame(() => {
        scrollMeetTitleBelowNav();
      });
    }, 0);
  };

  const modeGlow: Record<typeof selectedMode, { gradient: string; glowColor: string; buttonShadowColor: string }> = {
    about: {
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glowColor: '#667eea',
      buttonShadowColor: 'rgba(102, 126, 234, 0.45)',
    },
    product: {
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      glowColor: '#f093fb',
      buttonShadowColor: 'rgba(240, 147, 251, 0.45)',
    },
    fun: {
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      glowColor: '#4facfe',
      buttonShadowColor: 'rgba(79, 172, 254, 0.45)',
    },
  };

  const currentMode = modeGlow[selectedMode];

  return (
    <div 
      id="kiran-gpt-section"
      className="w-screen relative overflow-hidden -mx-6 pt-[134px] pb-[150px] lg:pt-[208px] lg:pb-[208px]"
      style={{
        background: 'linear-gradient(180deg, #0D1117 0%, #0a0e13 100%)',
      }}
    >
      {/* Ambient glow elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #667eea 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #f5576c 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative curved lines */}
      <svg 
        className="absolute top-0 right-0 w-full h-full opacity-10"
        style={{ pointerEvents: 'none' }}
      >
        <path
          d="M 0 300 Q 400 100 800 300 T 1600 300"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.1"
        />
        <path
          d="M 0 500 Q 400 300 800 500 T 1600 500"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.08"
        />
      </svg>

      {/* Main content container */}
      <div 
        className="max-w-[1536px] mx-auto px-8 lg:px-[120px] relative z-10"
      >
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT COLUMN: Text and Mode Cards */}
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            {/* Title */}
            <h2 
              ref={meetTitleRef}
              className="text-white"
              style={{
                fontSize: '60px',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Meet KiranGPT
            </h2>

            {/* Subtitle */}
            <p 
              className="text-white max-w-[500px]"
              style={{
                fontSize: '19px',
                lineHeight: '1.7',
                opacity: 0.78,
              }}
            >
              An AI assistant trained on my thinking, education, background, and how I approach building and scaling products.
            </p>
            <p 
              className="text-white max-w-[500px]"
              style={{
                fontSize: '19px',
                lineHeight: '1.7',
                opacity: 0.78,
                marginTop: '-8px',
              }}
            >
              Ask about my strategy, past work, or decision-making frameworks — or go off-script with travel, food, or something playful.
            </p>

            <ModeSelector selectedMode={selectedMode} onSelect={handleModeSelect} />

            {/* Divider for mobile */}
            <div 
              className="block lg:hidden w-full h-px mt-4"
              style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            />
          </div>

          {/* RIGHT COLUMN: Chat Interface */}
          <div className="w-full lg:w-[60%] flex items-center justify-center lg:justify-end">
            {/* Chat container with glow */}
            <div className="relative w-full max-w-[660px]">
              {/* Animated halo glow behind chat - changes with mode */}
              <div 
                className="absolute inset-0 rounded-[32px] blur-3xl transition-all duration-1000 ease-in-out animate-pulse-slow"
                style={{ 
                  background: currentMode.gradient,
                  opacity: 0.5,
                  transform: 'scale(1.08)',
                  pointerEvents: 'none',
                  animation: 'pulse-glow 3s ease-in-out infinite',
                }}
              />
              
              {/* Secondary rotating glow layer */}
              <div 
                className="absolute inset-0 rounded-[32px] blur-2xl transition-all duration-1000 ease-in-out"
                style={{ 
                  background: `radial-gradient(circle at 30% 30%, ${currentMode.glowColor}80 0%, transparent 60%)`,
                  opacity: 0.6,
                  transform: 'scale(1.05)',
                  pointerEvents: 'none',
                  animation: 'rotate-glow 8s linear infinite',
                }}
              />

              {/* Main chat container */}
              <div 
                className="relative rounded-[32px] p-8 flex flex-col overflow-hidden"
                style={{
                  background: '#111318',
                  height: 'clamp(550px, 60vh, 750px)',
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.6)',
                }}
              >
                <div className="flex-1 min-h-0 flex flex-col">
                  {messages.length <= 1 && (
                    <div className="kiran-chat-scrollbar flex-1 min-h-0 overflow-y-auto pr-1 pb-24 sm:pb-6">
                      <SuggestedQuestions
                        title={`Hi 👋\u00A0\u00A0\u00A0${modeConfig.emptyStateTitle}`}
                        hint="Or click on one of these preset questions to get started ⬇️"
                        questions={modeConfig.suggestedQuestions}
                        onSelect={(question) => void submitQuestion(question)}
                      />
                    </div>
                  )}
                  {(messages.length > 1 || isLoading) && (
                    <MessageList messages={messages} isLoading={isLoading} />
                  )}
                </div>
                {error && (
                  <p className="text-red-300 mb-4 shrink-0" style={{ fontSize: '13px' }}>
                    {error}
                  </p>
                )}
                <div className="shrink-0">
                  <ChatInput
                    inputValue={inputValue}
                    placeholder={modeConfig.placeholder}
                    buttonGradient={currentMode.gradient}
                    buttonShadowColor={currentMode.buttonShadowColor}
                    disabled={isLoading}
                    onInputChange={setInputValue}
                    onSubmit={() => void submitQuestion()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
}
