import React from "react";
import { Meteors } from "./Meteors";
import { ArrowRight } from "lucide-react";

interface MeteorsDemoProps {
  onContactClick?: () => void;
}

export function MeteorsDemo({ onContactClick }: MeteorsDemoProps) {
  return (
    <div
      className="relative w-screen -mx-6 flex items-center justify-center overflow-hidden"
      style={{ padding: '100px 24px' }}
    >
      {/* Full-width dark background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        }}
      />

      {/* Meteors cover the full background */}
      <Meteors number={30} className="absolute inset-0" />

      {/* Subtle center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #6366F1 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center" style={{ maxWidth: '600px' }}>
        <h2
          style={{
            fontSize: '44px',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.15',
            letterSpacing: '-0.025em',
            marginBottom: '20px',
          }}
        >
          Let's build something exceptional together.
        </h2>
        <p
          style={{
            fontSize: '17px',
            color: 'rgba(255,255,255,0.5)',
            lineHeight: '1.65',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}
        >
          If you're working on a hard problem and want a product partner who can go deep — I'd love to hear from you.
        </p>
        <button
          onClick={onContactClick}
          className="group flex items-center gap-2 transition-all duration-300 hover:gap-3"
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
  );
}

