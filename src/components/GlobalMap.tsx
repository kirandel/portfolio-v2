import { motion } from 'motion/react';
import { useState } from 'react';

export function GlobalMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Major cities with their canvas positions (adjusted for viewport percentages)
  const cities = [
    // North America
    { id: 'sf', name: 'San Francisco', x: 20.7, y: 38.9, region: 'north-america', tier: 'primary', color: '#00e5ff' },
    { id: 'nyc', name: 'New York', x: 34.9, y: 37.6, region: 'north-america', tier: 'primary', color: '#00d4ff' },
    { id: 'chicago', name: 'Chicago', x: 31.5, y: 37.3, region: 'north-america', tier: 'secondary', color: '#00d4ff' },
    { id: 'la', name: 'Los Angeles', x: 21.7, y: 40.9, region: 'north-america', tier: 'tertiary', color: '#00d4ff' },
    
    // South America
    { id: 'sao-paulo', name: 'São Paulo', x: 38.2, y: 56.4, region: 'south-america', tier: 'secondary', color: '#b388ff' },
    { id: 'buenos-aires', name: 'Buenos Aires', x: 35.4, y: 61.1, region: 'south-america', tier: 'tertiary', color: '#b388ff' },
    
    // Europe
    { id: 'london', name: 'London', x: 49.7, y: 32.9, region: 'europe', tier: 'primary', color: '#00d4ff' },
    { id: 'paris', name: 'Paris', x: 50.3, y: 33.8, region: 'europe', tier: 'secondary', color: '#ff9100' },
    { id: 'frankfurt', name: 'Frankfurt', x: 52.1, y: 33.0, region: 'europe', tier: 'secondary', color: '#ff9100' },
    { id: 'moscow', name: 'Moscow', x: 56.9, y: 31.1, region: 'europe', tier: 'tertiary', color: '#ff9100' },
    
    // Africa
    { id: 'cairo', name: 'Cairo', x: 54.9, y: 40.9, region: 'africa', tier: 'tertiary', color: '#ff4081' },
    { id: 'lagos', name: 'Lagos', x: 50.7, y: 47.8, region: 'africa', tier: 'tertiary', color: '#ff4081' },
    { id: 'johannesburg', name: 'Johannesburg', x: 54.9, y: 57.8, region: 'africa', tier: 'tertiary', color: '#ff4081' },
    
    // Asia
    { id: 'dubai', name: 'Dubai', x: 58.8, y: 42.7, region: 'asia', tier: 'secondary', color: '#ff9100' },
    { id: 'singapore', name: 'Singapore', x: 64.7, y: 50.0, region: 'asia', tier: 'primary', color: '#ffd740' },
    { id: 'mumbai', name: 'Mumbai', x: 60.6, y: 44.9, region: 'asia', tier: 'tertiary', color: '#ffd740' },
    { id: 'tokyo', name: 'Tokyo', x: 70.6, y: 39.8, region: 'asia', tier: 'primary', color: '#00e5ff' },
    { id: 'hong-kong', name: 'Hong Kong', x: 66.3, y: 44.2, region: 'asia', tier: 'secondary', color: '#ffd740' },
    { id: 'beijing', name: 'Beijing', x: 66.0, y: 37.8, region: 'asia', tier: 'tertiary', color: '#ffd740' },
    
    // Oceania
    { id: 'sydney', name: 'Sydney', x: 73.6, y: 60.0, region: 'oceania', tier: 'secondary', color: '#ffd740' },
  ];

  // Network connections
  const connections = [
    { from: 'sf', to: 'tokyo', label: '1.2M/s', color: '#00e5ff', delay: 0 },
    { from: 'nyc', to: 'london', label: '850K/s', color: '#00d4ff', delay: 0.3 },
    { from: 'london', to: 'singapore', label: '620K/s', color: '#ff9100', delay: 0.6 },
    { from: 'nyc', to: 'sao-paulo', label: '430K/s', color: '#b388ff', delay: 0.9 },
    { from: 'cairo', to: 'paris', label: '290K/s', color: '#ff4081', delay: 1.2 },
    { from: 'singapore', to: 'sydney', label: '710K/s', color: '#ffd740', delay: 1.5 },
  ];

  // Generate continental dots
  const generateContinentDots = () => {
    const dots = [];
    
    // North America - roughly 200-480 x, 260-450 y (in percentages)
    for (let i = 0; i < 180; i++) {
      const x = 14 + Math.random() * 20;
      const y = 29 + Math.random() * 21;
      dots.push({ x, y, region: 'north-america', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    // South America - tapered shape
    for (let i = 0; i < 120; i++) {
      const x = 32 + Math.random() * 8 - (i / 120) * 2;
      const y = 48 + (i / 120) * 21;
      dots.push({ x, y, region: 'south-america', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    // Europe - dense, small peninsula
    for (let i = 0; i < 150; i++) {
      const x = 48 + Math.random() * 10;
      const y = 28 + Math.random() * 10;
      dots.push({ x, y, region: 'europe', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    // Africa - large landmass
    for (let i = 0; i < 200; i++) {
      const x = 47 + Math.random() * 11;
      const y = 40 + Math.random() * 20.5;
      dots.push({ x, y, region: 'africa', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    // Asia - massive landmass
    for (let i = 0; i < 280; i++) {
      const x = 56 + Math.random() * 19;
      const y = 31 + Math.random() * 20;
      dots.push({ x, y, region: 'asia', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    // Oceania - Australia
    for (let i = 0; i < 100; i++) {
      const x = 66.7 + Math.random() * 8.3;
      const y = 57.8 + Math.random() * 4.7;
      dots.push({ x, y, region: 'oceania', size: Math.random() > 0.9 ? 2.5 : 3 });
    }
    
    return dots;
  };

  const continentDots = generateContinentDots();

  const getCityById = (id: string) => cities.find(c => c.id === id);

  // Region stats
  const regionStats: Record<string, string> = {
    'north-america': '45% TRAFFIC',
    'south-america': '12% TRAFFIC',
    'europe': '28% TRAFFIC',
    'africa': '5% TRAFFIC',
    'asia': '35% TRAFFIC',
    'oceania': '8% TRAFFIC',
  };

  return (
    <div 
      className="relative w-screen -mx-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #1a2332 0%, #0d1117 100%)',
        minHeight: '900px',
      }}
    >
      {/* Noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 h-[900px] flex items-center justify-center">
        {/* Globe container */}
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          
          {/* Atmospheric glow */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1600px] h-[1000px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(76, 142, 255, 0.05) 0%, transparent 70%)',
              filter: 'blur(120px)',
            }}
          />

          {/* SVG for dots and connections */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900">
            <defs>
              {/* Glow filters */}
              <filter id="dotGlow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Continental dots */}
            <g style={{ transform: 'perspective(1200px) rotateX(-18deg) rotateY(25deg) scale(1.1)', transformOrigin: 'center' }}>
              {continentDots.map((dot, i) => {
                const distanceFromCenter = Math.sqrt(
                  Math.pow((dot.x - 50) * 14.4, 2) + Math.pow((dot.y - 50) * 9, 2)
                );
                const maxDistance = 400;
                const baseOpacity = 0.45 - (distanceFromCenter / maxDistance) * 0.3;
                const opacity = hoveredRegion === dot.region ? 0.7 : baseOpacity;
                
                return (
                  <circle
                    key={i}
                    cx={`${dot.x}%`}
                    cy={`${dot.y}%`}
                    r={dot.size}
                    fill="#4c8eff"
                    opacity={opacity}
                    filter="url(#dotGlow)"
                    style={{
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                );
              })}
            </g>

            {/* Connection lines */}
            {connections.map((conn, i) => {
              const from = getCityById(conn.from);
              const to = getCityById(conn.to);
              if (!from || !to) return null;
              
              const fromX = from.x * 14.4;
              const fromY = from.y * 9;
              const toX = to.x * 14.4;
              const toY = to.y * 9;
              
              const midX = (fromX + toX) / 2;
              const midY = (fromY + toY) / 2 - 60;

              return (
                <g key={i}>
                  <motion.path
                    d={`M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`}
                    stroke={conn.color}
                    strokeWidth="2"
                    fill="none"
                    filter="url(#lineGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: (hoveredCity === conn.from || hoveredCity === conn.to) ? 0.9 : 0.6 
                    }}
                    transition={{ 
                      pathLength: { duration: 2, delay: conn.delay },
                      opacity: { duration: 0.3 }
                    }}
                  />
                  
                  {/* Bandwidth label */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: conn.delay + 2 }}
                  >
                    <rect
                      x={midX - 25}
                      y={midY - 55}
                      width="50"
                      height="16"
                      rx="8"
                      fill="rgba(255, 255, 255, 0.1)"
                      stroke={conn.color}
                      strokeWidth="1"
                    />
                    <text
                      x={midX}
                      y={midY - 45}
                      fill="#ffffff"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                      style={{ fontWeight: '600' }}
                    >
                      {conn.label}
                    </text>
                  </motion.g>

                  {/* Flowing data dots */}
                  {(hoveredCity === conn.from || hoveredCity === conn.to) && (
                    <motion.circle
                      r="3"
                      fill={conn.color}
                      filter="url(#dotGlow)"
                    >
                      <animateMotion
                        dur="2s"
                        repeatCount="indefinite"
                        path={`M ${fromX} ${fromY} Q ${midX} ${midY} ${toX} ${toY}`}
                      />
                    </motion.circle>
                  )}
                </g>
              );
            })}

            {/* City nodes */}
            {cities.map((city, i) => {
              const cx = city.x * 14.4;
              const cy = city.y * 9;
              const sizes = { primary: 12, secondary: 8, tertiary: 6 };
              const size = sizes[city.tier as keyof typeof sizes];
              
              return (
                <g 
                  key={city.id}
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Pulsing outer ring */}
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={size * 1.5}
                    fill={city.color}
                    opacity="0.3"
                    animate={{
                      r: [size * 1.5, size * 2.2, size * 1.5],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Main node */}
                  <motion.circle
                    cx={cx}
                    cy={cy}
                    r={size / 2}
                    fill="#ffffff"
                    stroke={city.color}
                    strokeWidth="2"
                    filter="url(#dotGlow)"
                    animate={{
                      scale: hoveredCity === city.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  />
                </g>
              );
            })}
          </svg>

          {/* City tooltips */}
          {cities.map((city) => hoveredCity === city.id && (
            <motion.div
              key={`tooltip-${city.id}`}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute pointer-events-none"
              style={{
                left: `${city.x}%`,
                top: `${city.y}%`,
                transform: 'translate(-50%, calc(-100% - 16px))',
              }}
            >
              <div
                className="px-3 py-2 rounded-lg backdrop-blur-xl border whitespace-nowrap"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>
                  {city.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Hover regions (invisible) */}
          {[
            { name: 'north-america', x: '14%', y: '29%', w: '20%', h: '21%' },
            { name: 'south-america', x: '32%', y: '48%', w: '8%', h: '21%' },
            { name: 'europe', x: '48%', y: '28%', w: '10%', h: '10%' },
            { name: 'africa', x: '47%', y: '40%', w: '11%', h: '20.5%' },
            { name: 'asia', x: '56%', y: '31%', w: '19%', h: '20%' },
            { name: 'oceania', x: '66.7%', y: '57.8%', w: '8.3%', h: '4.7%' },
          ].map((region) => (
            <div
              key={region.name}
              className="absolute"
              style={{
                left: region.x,
                top: region.y,
                width: region.w,
                height: region.h,
              }}
              onMouseEnter={() => setHoveredRegion(region.name)}
              onMouseLeave={() => setHoveredRegion(null)}
            >
              {hoveredRegion === region.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 px-4 py-2 rounded-lg backdrop-blur-xl border"
                  style={{
                    background: 'rgba(76, 142, 255, 0.2)',
                    borderColor: 'rgba(76, 142, 255, 0.4)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {region.name.toUpperCase().replace('-', ' ')} - {regionStats[region.name]}
                </motion.div>
              )}
            </div>
          ))}

          {/* Scanning line */}
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)',
            }}
            animate={{ top: ['0%', '100%'] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating particles */}
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: '#00e5ff',
                opacity: 0.2,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100, 0],
                y: [0, (Math.random() - 0.5) * 100, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Bottom stats - Stripe style */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ fontSize: '48px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              90%
            </div>
            <div style={{ fontSize: '16px', color: '#a8b5c7', lineHeight: '1.5' }}>
              of U.S. adults have bought from businesses using our platform
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div style={{ fontSize: '48px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              135+
            </div>
            <div style={{ fontSize: '16px', color: '#a8b5c7', lineHeight: '1.5' }}>
              currencies and payment methods supported
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-end"
          >
            <button
              className="px-6 py-3 rounded-xl transition-all hover:scale-105"
              style={{
                background: '#ffffff',
                color: '#000000',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              }}
            >
              Get in touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
