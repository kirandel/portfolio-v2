import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/flow-hover-button";

interface AnimatedHeroProps {
  onContactClick?: () => void;
}

function AnimatedHero({ onContactClick }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Product manager", "Coffee lover", "(Terrible) surfer", "Planner of all my group trips"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div
      className="relative"
      style={{
        background: '#f3f4f6',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
      }}
    >
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(229, 231, 235, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 231, 235, 0.15) 0%, transparent 50%)' }}></div>
      <div className="max-w-5xl mx-auto relative z-10 px-6">
        <div className="flex gap-6 pt-28 pb-20 md:py-40 items-center justify-center flex-col">

          {/* Heading */}
          <div className="flex gap-4 flex-col w-full items-center">
            <h1
              className="max-w-5xl tracking-tighter text-center w-full"
              style={{ fontWeight: 400, lineHeight: 1.1, fontSize: 'clamp(30px, 6vw, 72px)' }}
            >
              <div style={{ color: '#111827', marginBottom: '10px' }}>Hi 👋 I&apos;m Kiran</div>
              <span
                className="relative flex justify-center overflow-visible text-center"
                style={{ minHeight: 'clamp(80px, 9vw, 90px)' }}
              >
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute px-2 text-center w-full"
                    style={{ fontWeight: 700, color: '#111827', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: 1.15 }}
                    initial={{ opacity: 0, y: 100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p
              className="leading-relaxed tracking-tight text-center max-w-xl mx-auto"
              style={{ color: '#6b7280', lineHeight: '1.7', fontSize: 'clamp(14px, 2.2vw, 17px)' }}
            >
              Product manager with 8+ years building high-scale platforms at the intersection of user experience, data, and marketplace dynamics. I specialize in turning ambiguous problems into scalable, revenue-driving solutions.
            </p>
            <p
              className="leading-relaxed tracking-tight text-center max-w-xl mx-auto"
              style={{ color: '#6b7280', lineHeight: '1.7', fontSize: 'clamp(14px, 2.2vw, 17px)' }}
            >
              UC Berkeley grad. Grew up across Laos, Cambodia, Thailand, and Indonesia — and have been the default trip planner in every group I&apos;ve ever been in 🗺️
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <Button
              icon={<ArrowRight size={18} strokeWidth={2.5} />}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              See my work
            </Button>
            <Button
              icon={<Download size={18} strokeWidth={2.5} />}
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="w-full sm:w-auto"
            >
              Download resume
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
