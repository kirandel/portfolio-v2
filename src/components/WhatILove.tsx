import { Brain, Globe2, Layers, BookOpen, Rocket } from 'lucide-react'

export function WhatILove() {
  const interests = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: "Exploring cutting-edge models and building intelligent systems that transform how we work and create.",
      icon: Brain,
      stat: '15+ AI Projects',
    },
    {
      id: 'travel',
      title: 'Global Exploration',
      description: "Discovering new perspectives through immersive travel experiences across diverse cultures and cities.",
      icon: Globe2,
      stat: '30+ Countries',
    },
    {
      id: 'design',
      title: 'Product Design',
      description: "Crafting intuitive, aesthetic experiences where form and function create meaningful user impact.",
      icon: Layers,
      stat: 'Design-First Mindset',
    },
    {
      id: 'research',
      title: 'Deep Research',
      description: "Diving into product strategy, behavioral psychology, market dynamics, and emerging technologies.",
      icon: BookOpen,
      stat: 'Continuous Learning',
    },
    {
      id: 'building',
      title: 'Zero to One',
      description: "Turning ambitious ideas into tangible products through rapid iteration and strategic execution.",
      icon: Rocket,
      stat: '10+ Products Launched',
    },
  ];

  return (
    <div 
      className="relative w-screen -mx-6"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        paddingTop: '140px',
        paddingBottom: '140px',
      }}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Main content container */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-gray-700" style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.05em' }}>
              WHAT DRIVES ME
            </span>
          </div>
          
          <h2 
            className="mb-6"
            style={{
              fontSize: '72px',
              fontWeight: '700',
              color: '#0F172A',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
            }}
          >
            What Drives Me
          </h2>
          
          <p 
            className="max-w-[680px] mx-auto"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#64748B',
              lineHeight: '1.4',
              letterSpacing: '-0.01em',
            }}
          >
            My work is shaped by diverse passions and relentless curiosity. Here's what fuels my approach to building exceptional products.
          </p>
        </div>

        {/* Interests Grid - Professional Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            
            return (
              <div
                key={interest.id}
                className="group relative bg-white rounded-2xl border border-gray-200 p-8 transition-all duration-300 hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1"
                style={{
                  minHeight: index >= 3 ? '340px' : '360px',
                }}
              >
                {/* Gradient accent line on hover */}
                <div 
                  className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(90deg, #6366F1 0%, #8B5CF6 100%)',
                  }}
                />

                {/* Icon Container */}
                <div 
                  className="mb-6 inline-flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
                  }}
                >
                  <Icon 
                    className="transition-colors duration-300 group-hover:text-indigo-600"
                    style={{ 
                      width: '28px', 
                      height: '28px',
                      color: '#475569',
                      strokeWidth: 2,
                    }} 
                  />
                </div>

                {/* Title */}
                <h3 
                  className="mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#0F172A',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {interest.title}
                </h3>

                {/* Description */}
                <p 
                  className="mb-6"
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#64748B',
                  }}
                >
                  {interest.description}
                </p>

                {/* Stat Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span 
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#475569',
                    }}
                  >
                    {interest.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
            padding: '48px 64px',
          }}
        >
          {/* Subtle glow effect */}
          <div 
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-3xl"
            style={{
              background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
            }}
          />
          
          <div className="relative z-10 text-center">
            <p 
              className="mb-6"
              style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: '1.5',
              }}
            >
              Let's build something exceptional together.
            </p>
            
            {/* CTA Button */}
            <a 
              href="mailto:your.email@example.com"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Button content */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Let's connect
              </span>
              
              {/* Arrow icon with animation */}
              <svg 
                className="relative z-10 w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
