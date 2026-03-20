export function WhatILove() {
  return (
    <div 
      className="relative w-screen -mx-6"
      style={{
        background: '#F5F5F7',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Main content container */}
      <div className="max-w-[680px] mx-auto px-6 text-center">
        <p
          style={{
            fontSize: '17px',
            fontWeight: '400',
            color: '#86868b',
            marginBottom: '8px',
          }}
        >
          Let's connect.
        </p>
        <h2 
          style={{
            fontSize: '48px',
            fontWeight: '600',
            color: '#1d1d1f',
            lineHeight: '1.08',
            letterSpacing: '-0.003em',
            marginBottom: '24px',
          }}
        >
          Ready to build something exceptional together?
        </h2>
        
        {/* CTA Button - Apple style */}
        <a 
          href="mailto:contact@kirandelneuville.com"
          className="inline-flex items-center gap-2 transition-all duration-200 hover:opacity-70"
          style={{
            fontSize: '21px',
            fontWeight: '400',
            color: '#0066cc',
          }}
        >
          Get in touch
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
}
