import React from "react";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import AnimatedShaderBackground from "./ui/animated-shader-background";

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
          background: '#0F172A',
          padding: '64px 48px',
        }}
      >
        {/* Animated shader background — fills the box */}
        <AnimatedShaderBackground />

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
          <InteractiveHoverButton 
            text="Let's talk"
            onClick={onContactClick}
            className="mt-6"
            style={{
              background: '#ffffff',
              color: '#0F172A',
              fontSize: '16px',
              fontWeight: '600',
              border: '2px solid #ffffff',
            }}
          />
        </div>
      </div>
    </div>
  );
}

