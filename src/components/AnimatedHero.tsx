import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "./ui/flow-hover-button";

interface AnimatedHeroProps {
  onContactClick?: () => void;
}

function AnimatedHero({ onContactClick }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Product manager",
      <span key="coffee">Coffee<span className="md:hidden"><br /></span><span className="hidden md:inline">&nbsp;</span>lover</span>,
      <span key="surfer">(Terrible)<span className="md:hidden"><br /></span><span className="hidden md:inline">&nbsp;</span>surfer</span>,
      "Planner of all my group trips"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-screen -mx-6 relative" style={{ background: '#f3f4f6' }}>
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(229, 231, 235, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(229, 231, 235, 0.15) 0%, transparent 50%)' }}></div>
      <div className="container mx-auto relative z-10">
        <div className="flex gap-8 items-center justify-center flex-col px-[22px] md:px-0 pt-28 pb-20 sm:pt-32 md:pt-32 lg:pt-40 lg:pb-40">

          {/* Heading */}
          <div className="flex gap-4 flex-col">
            <h1
              className="text-5xl md:text-6xl xl:text-7xl max-w-5xl w-full mx-auto tracking-tighter text-center px-1 sm:px-2"
              style={{ fontWeight: 400, lineHeight: 1.1 }}
            >
              <div className="mb-[28px] md:mb-[16px]" style={{ color: '#111827' }}>Hi 👋 Nice to meet you!&nbsp;&nbsp;&nbsp;I'm Kiran..</div>
              <span className="relative flex justify-center overflow-hidden text-center min-h-[160px] md:min-h-[140px] lg:min-h-[96px] xl:min-h-[88px] w-full max-w-5xl mx-auto mb-[12px] md:mb-0 px-2 sm:px-4 md:px-6">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute left-1/2 top-0 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 whitespace-normal text-center xl:whitespace-nowrap xl:px-0"
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
              className="text-base md:text-lg leading-relaxed tracking-tight text-center max-w-2xl mx-auto -mt-[44px] md:mt-0"
              style={{ color: '#6b7280', lineHeight: '1.65' }}
            >
              I'm a product manager with experience building complex, high-scale products at the intersection of user experience, data, and marketplace dynamics.
              <br />
              <span style={{ display: 'block', height: '0.5em' }} />
              With 7+ years in tech across product, marketing, strategic growth and user acquisition, I specialize in turning ambiguous problems into scalable, revenue-driving solutions.
              <br />
              <span style={{ display: 'block', height: '0.5em' }} />
              Outside of work, I build and ship products, including a multiplayer collaborative AI travel planning app (
              <a
                href="https://tandemchat.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6658c9] underline underline-offset-[3px] decoration-[#593CFB]/28 transition-colors duration-200 hover:text-[#593CFB] hover:decoration-[#593CFB]/55"
              >
                tandemchat.ai
              </a>
              ) and a design-focused travel map art e-commerce business (
              <a
                href="https://truenorthposters.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#6658c9] underline underline-offset-[3px] decoration-[#593CFB]/28 transition-colors duration-200 hover:text-[#593CFB] hover:decoration-[#593CFB]/55"
              >
                truenorthposters.com
              </a>
              ).
              <br />
              <span style={{ display: 'block', height: '0.5em' }} />
              I studied at UC Berkeley and grew up across Laos, Cambodia, Thailand, and Indonesia — and have been the default trip planner in every group I've ever been in 🗺️
            </p>
          </div>

          {/* CTA */}
          <div className="flex w-full max-w-lg flex-col items-center gap-3 sm:max-w-none">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
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
            <Button
              icon={<Sparkles size={18} strokeWidth={2.5} />}
              className="w-full sm:w-auto"
              onClick={() => document.getElementById('kiran-gpt')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Try KiranGPT
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}

export { AnimatedHero };
