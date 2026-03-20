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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="text-gray-900 flex-shrink-0" style={{ fontSize: '22px', fontWeight: '600' }}>Kiran.</div>
          
          {/* Navigation - Center */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">Education</a>
            <a href="#kiran-gpt" className="text-gray-600 hover:text-gray-900 transition-colors">Kiran-GPT</a>
            <a href="#download-cv" className="text-gray-600 hover:text-gray-900 transition-colors">Download CV</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </nav>
          
          {/* Fun Mode - Right */}
          <a 
            href="#fun-mode" 
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md flex-shrink-0"
          >
            Fun Mode
          </a>
        </div>
      </header>

      {/* SECTION 1: Hero Carousel */}
      <div className="relative w-screen -mx-6 min-h-screen bg-white flex flex-col items-center justify-center pt-32 overflow-hidden">
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
            className="absolute z-[60] bg-white rounded-3xl shadow-2xl p-10"
            style={{ width: '700px', minHeight: '220px' }}
          >
            <div>
              <h1 
                className="text-black" 
                style={{ 
                  fontSize: '72px', 
                  lineHeight: '1.05', 
                  fontWeight: '700',
                  letterSpacing: '-0.03em'
                }}
              >
                {displayedText}<span className="animate-pulse">|</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="relative z-10 text-center max-w-4xl px-4 mb-4">
          <p 
            className="text-gray-900" 
            style={{ 
              fontSize: '24px', 
              lineHeight: '1.4',
              fontWeight: '500',
              letterSpacing: '-0.01em'
            }}
          >
            I'm a product manager in a complex two-sided marketplace, blending deep technical, design, marketing, and operational expertise. I specialize in uncovering high-TAM opportunities, validating new concepts quickly, and scaling zero-to-one initiatives into durable business lines.
          </p>
        </div>

        {/* CTA Link */}
        <div className="relative z-10 mb-16">
          <a 
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
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
