import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "light" | "dark";
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Let's talk", variant = "light", className = "", ...props }, ref) => {
  const isDark = variant === "dark";
  return (
    <button
      ref={ref}
      className={`group relative inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 overflow-hidden ${className}`}
      style={{
        border: isDark ? 'none' : '1px solid #e5e7eb',
        background: isDark ? '#1a1a1a' : '#ffffff',
        color: isDark ? '#ffffff' : '#111827',
        cursor: 'pointer',
      }}
      {...props}
    >
      {/* Dot indicator (light variant only) */}
      {!isDark && (
        <span
          className="inline-block rounded-full transition-all duration-300 group-hover:opacity-0"
          style={{
            width: '8px',
            height: '8px',
            background: '#111827',
            flexShrink: 0,
          }}
        ></span>
      )}

      {/* Default text */}
      <span className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-x-2">
        {text}
      </span>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2"
        style={{
          background: isDark ? '#333333' : '#1a1a1a',
          color: '#ffffff',
        }}
      >
        <span className="font-semibold">{text}</span>
        <ArrowRight size={18} strokeWidth={2.5} />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
