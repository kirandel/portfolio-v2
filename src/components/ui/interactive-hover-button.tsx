import React from "react";
import { ArrowRight } from "lucide-react";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`group relative cursor-pointer overflow-hidden rounded-full border-2 border-white bg-transparent p-2 text-center font-semibold ${className}`}
      style={{ minWidth: '140px' }}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0" style={{ color: '#ffffff' }}>
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100" style={{ color: '#0F172A' }}>
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]" style={{ backgroundColor: '#ffffff' }}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
