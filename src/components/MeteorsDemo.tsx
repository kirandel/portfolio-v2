import React from "react";
import { Meteors } from "./Meteors";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { Download } from "lucide-react";
import { Button } from "./ui/flow-hover-button";

interface MeteorsDemoProps {
  onContactClick?: () => void;
}

export function MeteorsDemo({ onContactClick }: MeteorsDemoProps) {
  return (
    <div
      className="relative w-screen -mx-6 overflow-hidden py-28 px-6"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, #0F172A 30%, #1E293B 100%)',
      }}
    >
      {/* Meteors across the full section */}
      <Meteors number={30} />

      {/* Subtle center glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #6366F1 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto gap-8">
        <h2
          style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#ffffff',
            lineHeight: '1.15',
            letterSpacing: '-0.025em',
          }}
        >
          Let's build something exceptional together.
        </h2>
        <div className="flex flex-row gap-3">
          <Button
            onClick={onContactClick}
          >
            Let's talk
          </Button>
          <Button
            icon={<Download size={18} strokeWidth={2.5} />}
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            Download resume
          </Button>
        </div>
      </div>
    </div>
  );
}

