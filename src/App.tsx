import { useState, useEffect } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { BentoGrid } from './components/BentoGrid';
import { KiranGPT } from './components/KiranGPT';
import { Education } from './components/Education';
import { WhatILove } from './components/WhatILove';
import { Footer } from './components/Footer';

export default function App() {
  // Hero carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(null);
  
  // Hero images for carousel (8 images)
  const heroImages = [
    'https://images.unsplash.com/photo-1624901344246-8759f305fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyNDI3NTh8MA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1519662978799-2f05096d3636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYzMjkyODMwfDA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYzMjMyMDI0fDA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzMyMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1673885831398-9581891a3155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbHxlbnwxfHx8fDE3NjMyNjAxNTB8MA&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1708004228425-85703b49692e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MzI0MDI5MXww&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1541661538396-53ba2d051eed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MzMyMjgxN3ww&ixlib=rb-4.1.0&q=80&w=1200',
    'https://images.unsplash.com/photo-1624901344246-8759f305fef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyNDI3NTh8MA&ixlib=rb-4.1.0&q=80&w=1200',
  ];
  
  const messages = [
    "Hi 👋 — i'm Kiran",
    "It's nice to meet you!",
    "Welcome to my interactive resume",
    "Click here to get started →"
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
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header - Apple-style frosted glass */}
      <header 
        className="fixed top-0 left-0 right-0 z-[100]"
        style={{
          backdropFilter: 'saturate(180%) blur(20px)',
          WebkitBackdropFilter: 'saturate(180%) blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.72)',
          borderBottom: '0.5px solid rgba(0, 0, 0, 0.08)',
        }}
      >
        <div className="max-w-[980px] mx-auto px-6 h-12 flex items-center justify-between">
          {/* Logo - Left */}
          <div 
            className="flex-shrink-0" 
            style={{ 
              fontSize: '21px', 
              fontWeight: '600',
              color: '#1d1d1f',
              letterSpacing: '-0.01em',
            }}
          >
            Kiran.
          </div>
          
          {/* Navigation - Center */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-7">
            {['Home', 'Experience', 'Education', 'Kiran-GPT', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="transition-opacity hover:opacity-70"
                style={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#1d1d1f',
                  letterSpacing: '0',
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          
          {/* CTA - Right */}
          <a 
            href="#download-cv" 
            className="flex-shrink-0 transition-all hover:opacity-80"
            style={{
              fontSize: '12px',
              fontWeight: '400',
              color: '#0066cc',
            }}
          >
            Download CV
          </a>
        </div>
      </header>

      {/* SECTION 1: Hero Carousel */}
      <div className="relative w-screen min-h-screen bg-white flex flex-col items-center justify-center pt-24 overflow-hidden">
        {/* Carousel Container - 1700px wide */}
        <div className="relative w-[1700px] h-[600px] flex items-center justify-center mb-8">
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
                  className="absolute transition-all duration-700 ease-out rounded-2xl overflow-hidden"
                  style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `translateX(${translateX}px) scale(${isHovered ? 1.05 : scale})`,
                    opacity,
                    zIndex,
                    boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.15)' : '0 8px 24px rgba(0, 0, 0, 0.08)',
                  }}
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Carousel image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              );
            })}
          </div>
          
          {/* Text Box Overlay */}
          <div 
            className="absolute z-[60] bg-white/95 rounded-3xl p-10"
            style={{ 
              width: '680px', 
              minHeight: '200px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          >
            <div>
              <h1 
                style={{ 
                  fontSize: '64px', 
                  lineHeight: '1.07', 
                  fontWeight: '600',
                  letterSpacing: '-0.005em',
                  color: '#1d1d1f',
                }}
              >
                {displayedText}<span className="animate-pulse" style={{ color: '#86868b' }}>|</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description Text - Apple style */}
        <div className="relative z-10 text-center max-w-[680px] px-6 mb-6">
          <p 
            style={{ 
              fontSize: '21px', 
              lineHeight: '1.381',
              fontWeight: '400',
              color: '#1d1d1f',
            }}
          >
            I'm a product manager specializing in uncovering high-TAM opportunities, validating new concepts quickly, and scaling zero-to-one initiatives into durable business lines.
          </p>
        </div>

        {/* CTA Link - Apple style */}
        <div className="relative z-10 mb-16">
          <a 
            href="#experience"
            className="inline-flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{
              fontSize: '21px',
              fontWeight: '400',
              color: '#0066cc',
            }}
          >
            See my work
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bento Grid */}
      <BentoGrid />

      {/* Kiran-GPT */}
      <KiranGPT />

      {/* Education */}
      <Education />

      {/* What I Love */}
      <WhatILove />

      {/* Footer */}
      <Footer />
    </div>
  );
}
