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
    <div className="w-full relative" style={{ background: 'linear-gradient(135deg, rgba(249, 250, 251, 0.5) 0%, rgba(243, 244, 246, 0.3) 100%)' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(229, 231, 235, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 231, 235, 0.15) 0%, transparent 50%)' }}></div>
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">

          {/* Heading */}
          <div className="flex gap-4 flex-col">
            <h1
              className="text-5xl md:text-7xl max-w-5xl tracking-tighter text-center"
              style={{ fontWeight: 400, lineHeight: 1.1 }}
            >
              <div style={{ color: '#111827', marginBottom: '16px' }}>Hi 👋 Nice to meet you! I'm Kiran..</div>
              <span className="relative flex justify-center overflow-hidden text-center" style={{ height: '80px' }}>
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute"
                    style={{ fontWeight: 700, color: '#111827', whiteSpace: 'nowrap' }}
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
              className="text-base md:text-lg leading-relaxed tracking-tight text-center max-w-2xl mx-auto"
              style={{ color: '#6b7280', lineHeight: '1.65' }}
            >
              I'm a product manager with experience in complex, high-scale platforms that operate at the intersection of user experience, data, and marketplace dynamics.
              <br />
              <br />
              I studied at UC Berkeley, grew up across Laos, Cambodia, Thailand, and Indonesia, and have been the default trip planner in every group I've ever been in 🗺️
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-row gap-3">
            <Button
              icon={<ArrowRight size={18} strokeWidth={2.5} />}
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See my work
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
    </div>
  );
}

export { AnimatedHero };
