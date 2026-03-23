import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { BentoGrid } from './components/BentoGrid';
import { KiranGPT } from './components/KiranGPT';
import { Education } from './components/Education';
import { MeteorsDemo } from './components/MeteorsDemo';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

export default function App() {
  // Hero carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTldrExpanded, setIsTldrExpanded] = useState(false);
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
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is in top 30% of viewport
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  // Hero images for carousel (8 images)
  const heroImages = [
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carousel%20Image%201-Kkt9R9Ru4MFoYeAEuLv3iZk54jdGwt.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carousel%20Image%202-U9bERd3qVxrkW4L34bqOrddSyu1Szl.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carousel%20Image%203-E2QoXB1QN71DmOIwfBe4pNcRN8Y160.png',
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Carousel%20Image%204-XwdZs8NWufs8zALr9kB8Lg3RY99rYx.png',
    'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjMyNjAxNTB8MA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1708004228425-85703b49692e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyNjAxNTB8MA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzMyMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1624901344246-8759f305fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyNDI3NTh8MA&ixlib=rb-4.1.0&q=80&w=1200',
  ];
  
  const messages = [
    "Hi 👋 — I'm Kiran",
    "Nice to meet you",
    "Scroll down to see my work",
  ];

  // Auto-scroll carousel
  useEffect(() => {
    if (!isPaused && hoveredImageIndex === null) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused, hoveredImageIndex, heroImages.length]);
  
  // Typewriter effect
  useEffect(() => {
    const currentMessage = messages[currentMessageIndex];
    
    if (!isDeleting && displayedText === currentMessage) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), 500);
      return () => clearTimeout(timeout);
    }
    
    if (isDeleting && displayedText === '') {
      // Move to next message
      setIsDeleting(false);
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentMessage.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
      }
    }, isDeleting ? 30 : 80);
    
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentMessageIndex, messages]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6">
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
            padding: isScrolled || isDarkSection ? '12px 24px' : '16px 48px',
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
          
          {/* Navigation - Center */}
          <nav 
            className="absolute left-1/2 -translate-x-1/2 flex items-center transition-all duration-300"
            style={{ gap: isScrolled ? '8px' : '12px' }}
          >
            {[
              { label: 'Home', href: '#home' },
              { label: 'Experience', href: '#experience' },
              { label: 'KiranGPT', href: '#kiran-gpt' },
              { label: 'Education', href: '#education' },
              { label: 'Resume', href: '#download-cv', nowrap: true },
              { label: 'Contact', href: '#contact' },
            ].map((item) => {
              const isActive = activeSection === item.label;
              return (
                <a 
                  key={item.label}
                  href={item.href} 
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
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="flex-shrink-0 transition-all duration-300 cursor-pointer"
            style={{
              padding: isScrolled || isDarkSection ? '8px 20px' : '10px 24px',
              borderRadius: '100px',
              background: isDarkSection ? 'transparent' : '#1a1a1a',
              color: '#ffffff',
              border: isDarkSection ? '1.5px solid rgba(255,255,255,0.6)' : 'none',
              fontSize: isScrolled || isDarkSection ? '14px' : '15px',
              fontWeight: '500',
            }}
          >
            {"Let's talk"}
          </button>
        </div>
      </header>

      {/* SECTION 1: Hero Carousel */}
      <div id="home" className="relative w-screen -mx-6 min-h-screen bg-white flex flex-col items-center justify-center pt-32 overflow-hidden">
        {/* Carousel Container - 1700px wide */}
        <div className="relative w-[1700px] h-[600px] flex items-center justify-center mb-20">
          {/* Carousel Images */}
          <div className="relative flex items-center justify-center">
            {heroImages.map((image, index) => {
              // Calculate position relative to current index
              const position = (index - currentImageIndex + heroImages.length) % heroImages.length;
              
              // Determine size and visibility based on position
              let width = 0;
              let height = 0;
              let opacity = 0;
              let translateX = 0;
              let zIndex = 0;
              let scale = 1;
              
              if (position === 0) {
                // Center image (main)
                width = 440;
                height = 587;
                opacity = 1;
                translateX = 0;
                zIndex = 50;
              } else if (position === 1) {
                // Immediate right - added spacing
                width = 330;
                height = 440;
                opacity = 1;
                translateX = 410;
                zIndex = 40;
              } else if (position === heroImages.length - 1) {
                // Immediate left - added spacing
                width = 330;
                height = 440;
                opacity = 1;
                translateX = -410;
                zIndex = 40;
              } else if (position === 2) {
                // Outer right - added spacing
                width = 240;
                height = 320;
                opacity = 1;
                translateX = 740;
                zIndex = 30;
              } else if (position === heroImages.length - 2) {
                // Outer left - added spacing
                width = 240;
                height = 320;
                opacity = 1;
                translateX = -740;
                zIndex = 30;
              } else {
                // Hidden images
                opacity = 0;
                width = 240;
                height = 320;
                scale = 0.8;
              }
              
              const isHovered = hoveredImageIndex === index;
              
              return (
                <a
                  key={index}
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute transition-all duration-700 ease-out ${index >= 4 ? 'rounded-2xl overflow-hidden' : ''}`}
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `translateX(${translateX}px) scale(${isHovered ? 1.05 : scale})`,
                    opacity,
                    zIndex,
                    boxShadow: index >= 4
                      ? (isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.08)')
                      : 'none',
                    background: 'transparent',
                  }}
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className={`w-full h-full ${index >= 4 ? 'object-cover' : 'object-contain'}`}
                    style={{ background: 'transparent' }}
                  />
                </a>
              );
            })}
          </div>
          
          {/* Text Box Overlay */}
          <div 
            className="absolute z-[60] bg-white rounded-3xl shadow-2xl p-8 flex items-center"
            style={{ width: '760px', height: '110px', overflow: 'hidden' }}
          >
            <div style={{ width: '100%' }}>
              <h1 
                className="text-black"
                style={{ 
                  fontSize: '52px', 
                  lineHeight: '1.05', 
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}
              >
                {displayedText}<span className="animate-pulse">|</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description Text + TLDR — fixed height container so page does not shift */}
        <div className="relative z-10 text-center max-w-3xl px-4 mb-24" style={{ minHeight: '340px' }}>

          {/* Background container - Apple-style frosted glass */}
          <div
            className="relative rounded-2xl p-10 transition-all duration-500 overflow-hidden"
            style={{
              background: 'rgba(255, 255, 255, 0.72)',
              backdropFilter: 'saturate(180%) blur(20px)',
              WebkitBackdropFilter: 'saturate(180%) blur(20px)',
              boxShadow: '0 0 0 0.5px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.04), 0 12px 40px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Main paragraphs — blur when TLDR is active */}
            <div
              className="relative z-10 transition-all duration-500"
              style={{
                filter: isTldrExpanded ? 'blur(6px)' : 'blur(0px)',
                opacity: isTldrExpanded ? 0.2 : 1,
                userSelect: isTldrExpanded ? 'none' : 'auto',
                pointerEvents: isTldrExpanded ? 'none' : 'auto',
                marginBottom: '28px',
              }}
            >
              <p style={{ fontSize: '19px', lineHeight: '1.75', fontWeight: '500', letterSpacing: '-0.022em', marginBottom: '18px', color: '#1d1d1f' }}>
                {"I'm a product manager with experience in complex, high-scale platforms that operate at the intersection of user experience, data, and marketplace dynamics."}
              </p>
              <p style={{ fontSize: '19px', lineHeight: '1.75', fontWeight: '500', letterSpacing: '-0.022em', marginBottom: '18px', color: '#1d1d1f' }}>
                {"I blend technical depth, product intuition, and go-to-market execution to identify the best ideas, validate new concepts quickly, and scale zero-to-one initiatives into durable business lines."}
              </p>
              <p style={{ fontSize: '19px', lineHeight: '1.75', fontWeight: '500', letterSpacing: '-0.022em', color: '#1d1d1f' }}>
                {"I studied at UC Berkeley, grew up across Laos, Cambodia, Thailand, and Indonesia, and have been the default trip planner in every group I've ever been in "}&#x1F5FA;&#xFE0F;
              </p>
            </div>
          </div>

          {/* TLDR checkbox — styled as a prominent pill */}
          <button
            onClick={() => setIsTldrExpanded(!isTldrExpanded)}
            className="inline-flex items-center gap-2 transition-all duration-200"
            style={{
              background: isTldrExpanded ? '#1a1a1a' : '#f3f4f6',
              border: isTldrExpanded ? '1.5px solid #1a1a1a' : '1.5px solid #d1d5db',
              borderRadius: '100px',
              padding: '8px 16px',
              cursor: 'pointer',
            }}
          >
            <span
              className="flex items-center justify-center transition-all duration-200"
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                border: isTldrExpanded ? '2px solid white' : '2px solid #6b7280',
                backgroundColor: isTldrExpanded ? 'white' : 'transparent',
                flexShrink: 0,
              }}
            >
              {isTldrExpanded && (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span
              style={{
                fontSize: '13px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: isTldrExpanded ? 'white' : '#374151',
              }}
            >
              TLDR
            </span>
          </button>

          {/* TLDR summary — absolutely centered over the paragraph block */}
          <div
            style={{
              position: 'absolute' as const,
              top: '0',
              left: '0',
              right: '0',
              bottom: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: isTldrExpanded ? 'auto' : 'none',
              opacity: isTldrExpanded ? 1 : 0,
              transform: isTldrExpanded ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.45s ease, transform 0.45s ease',
              padding: '0 16px',
            }}
          >
            <p
              style={{
                fontSize: '26px',
                lineHeight: '1.5',
                fontWeight: '600',
                color: '#1a1a1a',
                letterSpacing: '-0.025em',
                textAlign: 'center',
              }}
            >
              {"I find the biggest opportunities, build and launch them quickly, and scale them into meaningful, lasting revenue."}
            </p>
          </div>
        </div>

      </div>

      {/* Bento Grid */}
      <div id="experience">
        <BentoGrid />
      </div>

      {/* Kiran-GPT */}
      <div id="kiran-gpt">
        <KiranGPT />
      </div>

      {/* Education */}
      <div id="education">
        <Education />
      </div>

      {/* Meteors CTA Section */}
      <div id="contact">
        <MeteorsDemo onContactClick={() => setIsContactModalOpen(true)} />
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
