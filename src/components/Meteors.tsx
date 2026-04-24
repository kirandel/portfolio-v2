const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
import React, { useMemo } from "react";

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = useMemo(() =>
    Array.from({ length: number }, (_, idx) => ({
      id: idx,
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      delay: (Math.random() * 6) + "s",
      duration: (Math.random() * 6 + 4) + "s",
    })),
    [number]
  );

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="animate-meteor-effect absolute h-px w-px rounded-full bg-white/30"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
          }}
        >
          {/* Tail */}
          <span
            className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-px"
            style={{
              background: "linear-gradient(to right, rgba(255,255,255,0.6), transparent)",
            }}
          />
        </span>
      ))}
    </div>
  );
};
