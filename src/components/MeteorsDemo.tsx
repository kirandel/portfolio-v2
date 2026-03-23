import React from "react";
import { Meteors } from "./Meteors";
import { ArrowRight } from "lucide-react";

interface MeteorsDemoProps {
  onContactClick?: () => void;
}

export function MeteorsDemo({ onContactClick }: MeteorsDemoProps) {
  return (
    <div className="flex items-center justify-center py-24 px-6">
      {/* Contained box */}
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          padding: '64px 48px',
        }}
      >
        {/* Meteors inside box */}
        <Meteors number={30} />

        {/* Subtle center glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, #6366F1 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2
            style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#ffffff',
              lineHeight: '1.15',
              letterSpacing: '-0.025em',
              marginBottom: '16px',
            }}
          >
            Let's build something exceptional together.
          </h2>
          <button
            onClick={onContactClick}
            className="group flex items-center gap-2 transition-all duration-300 hover:gap-3 mt-6"
            style={{
              background: '#ffffff',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: '600',
              padding: '14px 28px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
            }}
          >
            Let's talk
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

