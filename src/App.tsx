import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AnimatedHero } from './components/AnimatedHero';
import { BentoGrid } from './components/BentoGrid';
import { KiranGPT } from './components/KiranGPT';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Button } from './components/ui/flow-hover-button';
import { DitheringShader } from './components/ui/dithering-shader';
import { Download, Mail } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Combined scroll detection for navbar transformation and dark section overlap
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Check if navbar physically overlaps the dark KiranGPT section
      const darkSection = document.getElementById('kiran-gpt-section');
      if (!darkSection) return;
      
      const rect = darkSection.getBoundingClientRect();
      // Navbar bottom edge is approximately 72px from top (12px padding + ~48px navbar + 12px padding when scrolled)
      const navbarBottom = 72;
      
      // Dark mode when: dark section top is above navbar bottom AND dark section bottom is below navbar bottom
      const isOverDark = rect.top <= navbarBottom && rect.bottom >= navbarBottom;
      setIsDarkSection(isOverDark);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active section detection
  useEffect(() => {
    const sectionIds = ['home', 'experience', 'kiran-gpt', 'education', 'download-cv', 'contact'];
    const sectionToLabel: Record<string, string> = {
      'home': 'Home',
      'experience': 'Experience',
      'kiran-gpt': 'KiranGPT',
      'education': 'Education',
      'download-cv': 'Resume',
      'contact': 'Contact',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (sectionToLabel[id]) {
              setActiveSection(sectionToLabel[id]);
            }
          }
        });
      },
      {
        rootMargin: '-10% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  

  return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center overflow-x-hidden">
      {/* Header - Scroll-responsive navbar */}
      <header 
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out"
        style={{
          padding: isScrolled ? '12px 24px' : '0',
        }}
      >
        <div 
          className="transition-all duration-300 ease-in-out mx-auto flex items-center justify-between"
          style={{
            maxWidth: isScrolled || isDarkSection ? '900px' : '100%',
            padding: isScrolled || isDarkSection ? '12px 24px' : '16px 24px',
            borderRadius: isScrolled || isDarkSection ? '100px' : '0',
            backgroundColor: isDarkSection
              ? 'rgba(35, 35, 35, 0.8)'
              : isScrolled ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.55)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: isScrolled || isDarkSection
              ? '0 4px 24px rgba(0, 0, 0, 0.18), 0 1px 2px rgba(0, 0, 0, 0.08)' 
              : 'none',
            borderBottom: isScrolled || isDarkSection ? 'none' : '1px solid rgba(0, 0, 0, 0.06)',
          }}
        >
          {/* Logo - Left */}
          <div 
            className="flex-shrink-0 transition-all duration-300"
            style={{ 
              fontSize: isScrolled ? '20px' : '22px', 
              fontWeight: '600',
              color: isDarkSection ? '#ffffff' : '#1a1a1a',
            }}
          >
            Kiran.
          </div>
          
          {/* Navigation - Center (hidden on mobile) */}
          <nav 
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center transition-all duration-300"
            style={{ gap: isScrolled ? '8px' : '12px' }}
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'Experience', href: '#experience' },
              { label: 'KiranGPT', href: '#kiran-gpt' },
              { label: 'Education', href: '#education' },
              { label: 'Resume', href: '#download-cv', nowrap: true },
            ].map((item) => {
              const isActive = activeSection === item.label;
              const handleClick = (e: React.MouseEvent) => {
                if (item.label === 'Home') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              };
              return (
                <a 
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className="relative transition-colors duration-300 rounded-full"
                  style={{ 
                    fontSize: isScrolled ? '14px' : '15px',
                    fontWeight: isActive ? '600' : '500',
                    whiteSpace: 'nowrap',
                    color: isActive 
                      ? (isDarkSection ? '#ffffff' : '#1a1a1a')
                      : (isDarkSection ? 'rgba(255,255,255,0.6)' : '#6b7280'),
                    padding: isScrolled ? '6px 14px' : '8px 16px',
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-tubelight"
                      className="absolute inset-0 rounded-full -z-10"
                      style={{
                        backgroundColor: isDarkSection 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(0, 0, 0, 0.05)',
                      }}
                      initial={false}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    >
                      {/* Tubelight glow pill */}
                      <div 
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full"
                        style={{
                          backgroundColor: isDarkSection ? '#ffffff' : '#1a1a1a',
                        }}
                      />
                    </motion.div>
                  )}
                </a>
              );
            })}
          </nav>
          
          {/* CTA - Right */}
          <Button 
            onClick={() => setIsContactModalOpen(true)}
            className="flex-shrink-0 !px-6 !py-3 !text-sm !border-none !bg-black !text-white transition-all duration-300 cursor-pointer"
            style={{
              padding: isScrolled || isDarkSection ? '8px 20px' : '10px 24px',
              borderRadius: '100px',
              background: isDarkSection ? 'transparent' : '#1a1a1a',
              color: '#ffffff',
              border: isDarkSection ? '1.5px solid rgba(255,255,255,0.6)' : 'none',
              fontSize: isScrolled || isDarkSection ? '14px' : '15px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
          >
            {"Let's talk"}
          </Button>
        </div>
      </header>

      {/* Animated Hero Intro */}
      <div id="home" className="w-full">
        <AnimatedHero onContactClick={() => setIsContactModalOpen(true)} />
      </div>


      {/* Bento Grid */}
      <div id="experience">
        <BentoGrid />
      </div>

      {/* Kiran-GPT */}
      <div id="kiran-gpt">
        <KiranGPT />
      </div>

      {/* Education + CTA — shared continuous background */}
      <div
        style={{
          background: 'linear-gradient(180deg, #FAFBFC 0%, #F8FAFC 50%, #FFFFFF 100%)',
          position: 'relative',
        }}
      >
        {/* Shared grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.03,
          }}
        />
        {/* Shared radial accents */}
        <div className="absolute top-[10%] left-[5%] w-96 h-96 opacity-[0.06] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] right-[5%] w-96 h-96 opacity-[0.05] blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }} />

        <div id="education" className="relative z-10">
          <Education />
        </div>

        {/* CTA Module */}
        <div id="download-cv" className="relative z-10 w-full flex items-center justify-center py-12 md:py-16 px-4 md:px-6 pb-16 md:pb-40">
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden flex flex-col items-center justify-center text-center"
            style={{
              padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px)',
              boxShadow: '0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.35)',
            }}
          >
            {/* Wave shader background — fills the entire box */}
            <DitheringShader
              shape="wave"
              type="8x8"
              colorBack="#0a0a12"
              colorFront="#1e3a5f"
              pxSize={3}
              speed={0.5}
            />

            <div className="relative z-10 flex flex-col items-center gap-6 md:gap-8">
              <h2
                style={{
                  fontSize: 'clamp(28px, 5vw, 44px)',
                  fontWeight: '700',
                  color: '#ffffff',
                  lineHeight: '1.12',
                  letterSpacing: '-0.03em',
                  maxWidth: '560px',
                }}
              >
                {"Let's build something amazing together."}
              </h2>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center justify-center">
                <Button 
                  icon={<Mail size={18} strokeWidth={2.5} />}
                  onClick={() => setIsContactModalOpen(true)}
                >
                  {"Let's talk"}
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
      </div>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
