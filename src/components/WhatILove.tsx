export function WhatILove() {
  return (
    <div 
      className="relative w-screen -mx-6"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main content container */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Bottom CTA Section */}
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            padding: '48px 64px',
          }}
        >
          {/* Subtle glow effect */}
          <div 
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
            style={{
              background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
            }}
          />
          
          <div className="relative z-10 text-center">
            <p 
              className="mb-6"
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: '1.5',
              }}
            >
              {"Let's build something exceptional together."}
            </p>
            
            {/* CTA Button */}
            <a 
              href="mailto:hello@kirandelneuville.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span>{"Let's talk"}</span>
              
              {/* Arrow */}
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
