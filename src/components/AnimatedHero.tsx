import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <div className="w-full">
      <div className="container mx-auto">
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
            <motion.button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base overflow-hidden"
              style={{
                background: '#ffffff',
                color: '#111827',
                border: '1.5px solid #e5e7eb',
                cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 6px 28px rgba(0,0,0,0.13)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Animated dark fill on hover */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ background: '#111827', originX: 0 }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-semibold tracking-tight">
                See my work
              </span>
              <motion.span
                className="relative z-10 flex items-center"
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <ArrowRight size={18} strokeWidth={2.5} className="transition-colors duration-300 group-hover:text-white" />
              </motion.span>
            </motion.button>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
