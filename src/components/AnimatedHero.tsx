import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Phone } from "lucide-react";

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

          {/* Badge */}
          <div>
            <button
              className="flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium transition-colors"
              style={{
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                cursor: 'default',
              }}
            >
              Hey there 👋
            </button>
          </div>

          {/* Heading */}
          <div className="flex gap-4 flex-col">
            <h1
              className="text-5xl md:text-7xl max-w-3xl tracking-tighter text-center"
              style={{ fontWeight: 400, lineHeight: 1.1 }}
            >
              <span style={{ color: '#111827' }}>Hi 👋 - Nice to meet you! I'm Kiran, a</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute"
                    style={{ fontWeight: 700, color: '#111827' }}
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
              I blend technical depth, product intuition, and go-to-market execution to identify the best ideas, validate new concepts quickly, and scale zero-to-one initiatives into durable business lines.
              <br />
              <br />
              I studied at UC Berkeley, grew up across Laos, Cambodia, Thailand, and Indonesia, and have been the default trip planner in every group I've ever been in 🗺️
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-row gap-3">
            <button
              onClick={onContactClick}
              className="flex items-center gap-3 rounded-lg px-6 py-3 text-base font-medium transition-all duration-200 hover:bg-gray-50"
              style={{
                background: '#ffffff',
                color: '#111827',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                fontSize: '15px',
              }}
            >
              <Phone className="w-4 h-4" />
              Let's talk
            </button>
            <a
              href="#experience"
              className="flex items-center gap-3 rounded-lg px-6 py-3 text-base font-medium transition-all duration-200"
              style={{
                background: '#111827',
                color: '#ffffff',
                fontSize: '15px',
                textDecoration: 'none',
              }}
            >
              See my work <MoveRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
