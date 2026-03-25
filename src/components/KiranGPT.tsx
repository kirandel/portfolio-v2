import { useState } from 'react';
import { Send } from 'lucide-react';

type Mode = 'recruiter' | 'product' | 'fun';

export function KiranGPT() {
  const [selectedMode, setSelectedMode] = useState<Mode>('product');
  const [inputValue, setInputValue] = useState('');

  const modes = [
    {
      id: 'recruiter' as Mode,
      title: 'About Me',
      subtitle: 'Background, education, and the path that shaped how I build product',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      glowColor: '#667eea',
    },
    {
      id: 'product' as Mode,
      title: 'Product Mode',
      subtitle: 'How I design, build, and scale products from 0 to 1 and beyond',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      glowColor: '#f093fb',
    },
    {
      id: 'fun' as Mode,
      title: 'Fun Mode',
      subtitle: 'Travel, food, random thoughts — or see how good AI jokes are',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      glowColor: '#4facfe',
    },
  ];

  const currentMode = modes.find(m => m.id === selectedMode) || modes[1];

  const sampleMessages = [
    {
      type: 'assistant',
      text: "Hi! I'm Kiran-GPT, an AI assistant trained on Kiran's product thinking, career history, and philosophy. How can I help you today?",
    },
    {
      type: 'user',
      text: 'Tell me about your approach to building products.',
    },
    {
      type: 'assistant',
      text: "I specialize in uncovering high-TAM opportunities and validating new concepts quickly. My approach blends deep technical understanding with design thinking, always focusing on scaling zero-to-one initiatives into durable business lines.",
    },
  ];

  return (
    <div 
      id="kiran-gpt-section"
      className="w-screen relative overflow-hidden -mx-6"
      style={{
        background: 'linear-gradient(180deg, #0D1117 0%, #0a0e13 100%)',
        paddingTop: '120px',
        paddingBottom: '120px',
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
              An AI assistant trained on my product thinking, my education, my background and real-world experience, and how I approach building and scaling products.
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
              Ask about strategy, past work, or decision-making frameworks — or go off-script and ask about travel, food, or even tell it to crack a joke!
            </p>

            {/* Mode Cards */}
            <div className="flex flex-col gap-3 mt-4">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  className="w-full rounded-2xl p-5 transition-all duration-300 cursor-pointer relative overflow-hidden text-left"
                  style={{
                    background: selectedMode === mode.id ? mode.gradient : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: selectedMode === mode.id 
                      ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(255, 255, 255, 0.1)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.2)',
                    transform: selectedMode === mode.id ? 'translateY(-2px)' : 'translateY(0)',
                    border: selectedMode === mode.id ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div className="relative z-10">
                    <p 
                      className="text-white mb-1"
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                      }}
                    >
                      {mode.title}
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontSize: '14px',
                        opacity: 0.7,
                        lineHeight: '1.4',
                      }}
                    >
                      {mode.subtitle}
                    </p>
                  </div>
                  
                  {/* Glow effect when selected */}
                  {selectedMode === mode.id && (
                    <div 
                      className="absolute inset-0 opacity-50 blur-xl"
                      style={{ background: mode.gradient }}
                    />
                  )}
                </button>
              ))}
            </div>

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
                className="relative rounded-[32px] p-8 flex flex-col"
                style={{
                  background: '#111318',
                  minHeight: 'clamp(550px, 60vh, 750px)',
                  boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.6)',
                }}
              >
                {/* Chat transcript area */}
                <div className="flex-1 overflow-y-auto space-y-4 mb-6 pr-2">
                  {sampleMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className="rounded-3xl px-5 py-4 max-w-[80%]"
                        style={{
                          background: message.type === 'assistant'
                            ? 'linear-gradient(135deg, #151922 0%, #1A2030 100%)'
                            : 'linear-gradient(135deg, #2E2947 0%, #3a3154 100%)',
                        }}
                      >
                        <p 
                          className="text-white"
                          style={{
                            fontSize: '15px',
                            lineHeight: '1.6',
                            opacity: 0.95,
                          }}
                        >
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat input area */}
                <div 
                  className="rounded-3xl p-4 flex items-center gap-3"
                  style={{
                    background: '#0F1115',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <input
                    type="text"
                    placeholder="Ask Kiran-GPT anything…"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none"
                    style={{
                      fontSize: '16px',
                      opacity: inputValue ? 1 : 0.6,
                    }}
                  />
                  <button
                    className="rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      boxShadow: '0 4px 16px rgba(102, 126, 234, 0.4)',
                    }}
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
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
