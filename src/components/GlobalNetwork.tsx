import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function GlobalNetwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Parallax transforms
  const bgX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const bgY = useTransform(mouseY, [-500, 500], [-10, 10]);
  const globeX = useTransform(mouseX, [-500, 500], [-20, 20]);
  const globeY = useTransform(mouseY, [-500, 500], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.2) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Major cities with coordinates
  const cities = [
    { id: 'nyc', name: 'New York', x: 30, y: 42, region: 'north-america', color: '#00d4ff' },
    { id: 'london', name: 'London', x: 50, y: 38, region: 'europe', color: '#00d4ff' },
    { id: 'tokyo', name: 'Tokyo', x: 78, y: 44, region: 'asia', color: '#ff7b00' },
    { id: 'singapore', name: 'Singapore', x: 72, y: 55, region: 'asia', color: '#b77bff' },
    { id: 'sydney', name: 'Sydney', x: 82, y: 75, region: 'oceania', color: '#ff7b00' },
    { id: 'sf', name: 'San Francisco', x: 18, y: 41, region: 'north-america', color: '#00d4ff' },
    { id: 'dubai', name: 'Dubai', x: 60, y: 50, region: 'asia', color: '#b77bff' },
    { id: 'sao-paulo', name: 'São Paulo', x: 35, y: 68, region: 'south-america', color: '#ff7b00' },
  ];

  // Connection lines between cities
  const connections = [
    { from: 'nyc', to: 'london', color: '#00d4ff', primary: true },
    { from: 'london', to: 'tokyo', color: '#00d4ff', primary: true },
    { from: 'tokyo', to: 'sydney', color: '#ff7b00', primary: false },
    { from: 'sydney', to: 'sf', color: '#ff7b00', primary: false },
    { from: 'sf', to: 'nyc', color: '#00d4ff', primary: true },
    { from: 'singapore', to: 'tokyo', color: '#b77bff', primary: false },
    { from: 'dubai', to: 'london', color: '#b77bff', primary: false },
  ];

  // Generate globe dots
  const generateGlobeDots = () => {
    const dots = [];
    const spacing = 12;
    
    for (let lat = -80; lat <= 80; lat += spacing) {
      const radius = Math.cos((lat * Math.PI) / 180);
      const circumference = radius * 100;
      const numDots = Math.max(3, Math.floor(circumference / spacing));
      
      for (let i = 0; i < numDots; i++) {
        const lng = (360 / numDots) * i;
        const x = 50 + radius * 40 * Math.sin((lng * Math.PI) / 180);
        const y = 50 + (lat / 180) * 40;
        
        // Calculate opacity based on distance from center
        const distFromCenter = Math.sqrt(Math.pow(x - 50, 2) + Math.pow(y - 50, 2));
        const maxDist = 40;
        const opacity = Math.max(0.15, 0.5 - (distFromCenter / maxDist) * 0.35);
        
        // Determine region
        let region = 'other';
        if (x >= 15 && x <= 35 && y >= 30 && y <= 50) region = 'north-america';
        else if (x >= 25 && x <= 40 && y >= 55 && y <= 75) region = 'south-america';
        else if (x >= 45 && x <= 58 && y >= 30 && y <= 50) region = 'europe';
        else if (x >= 48 && x <= 65 && y >= 45 && y <= 70) region = 'africa';
        else if (x >= 60 && x <= 82 && y >= 30 && y <= 60) region = 'asia';
        else if (x >= 78 && x <= 88 && y >= 65 && y <= 80) region = 'oceania';
        
        dots.push({ x, y, opacity, lng, lat, region });
      }
    }
    
    return dots;
  };

  const globeDots = generateGlobeDots();

  // Generate floating particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
  }));

  // Get city positions
  const getCityPosition = (cityId: string) => {
    return cities.find(c => c.id === cityId);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen -mx-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #1a2844 0%, #0a0f1b 100%)',
        minHeight: '900px',
      }}
    >
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Background grid */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03]"
        style={{ 
          x: bgX,
          y: bgY,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating particles background */}
      <motion.div style={{ x: bgX, y: bgY }}>
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: '#00d4ff',
              opacity: 0.4,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-8 py-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'rgba(0, 212, 255, 0.1)',
              border: '1px solid rgba(0, 212, 255, 0.3)',
            }}
          >
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
            <span style={{ 
              fontSize: '12px', 
              fontWeight: '700', 
              color: '#00d4ff',
              letterSpacing: '0.1em',
              fontFamily: 'monospace',
            }}>
              GLOBAL NETWORK
            </span>
          </div>

          <h2 
            className="mb-4"
            style={{
              fontSize: 'clamp(40px, 5vw, 56px)',
              fontWeight: '700',
              color: '#FFFFFF',
              letterSpacing: '-0.025em',
            }}
          >
            Connected Worldwide
          </h2>

          <p 
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Building products that connect people across continents and cultures
          </p>
        </motion.div>

        {/* Globe Container */}
        <div className="relative" style={{ height: '600px' }}>
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#00d4ff] opacity-50" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#00d4ff] opacity-50" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#00d4ff] opacity-50" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#00d4ff] opacity-50" />

          {/* Globe SVG */}
          <motion.div
            style={{ x: globeX, y: globeY }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={{ maxWidth: '700px', maxHeight: '700px' }}
            >
              <defs>
                {/* Atmospheric glow */}
                <radialGradient id="atmosphereGlow">
                  <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.15" />
                  <stop offset="70%" stopColor="#4a9eff" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#4a9eff" stopOpacity="0" />
                </radialGradient>

                {/* Line glow filters */}
                <filter id="lineGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Atmospheric glow */}
              <ellipse cx="50" cy="50" rx="48" ry="48" fill="url(#atmosphereGlow)" />

              {/* Globe dots */}
              <g style={{ transform: `rotateY(${rotation}deg)`, transformOrigin: 'center' }}>
                {globeDots.map((dot, i) => (
                  <motion.circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r="0.4"
                    fill="#4a9eff"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredRegion === dot.region ? 0.8 : dot.opacity,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </g>

              {/* Connection lines */}
              {connections.map((conn, i) => {
                const from = getCityPosition(conn.from);
                const to = getCityPosition(conn.to);
                if (!from || !to) return null;

                const midX = (from.x + to.x) / 2;
                const midY = (from.y + to.y) / 2 - 8;

                return (
                  <g key={i}>
                    <motion.path
                      d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                      stroke={conn.color}
                      strokeWidth={conn.primary ? "0.3" : "0.2"}
                      fill="none"
                      filter="url(#lineGlow)"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: hoveredCity === conn.from || hoveredCity === conn.to ? 0.9 : 0.5,
                      }}
                      transition={{ 
                        pathLength: { duration: 2, delay: i * 0.3 },
                        opacity: { duration: 0.3 }
                      }}
                    />

                    {/* Animated data transfer dots */}
                    {(hoveredCity === conn.from || hoveredCity === conn.to) && (
                      <motion.circle
                        r="0.8"
                        fill={conn.color}
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <animateMotion
                          dur="2s"
                          repeatCount="indefinite"
                          path={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                        />
                      </motion.circle>
                    )}
                  </g>
                );
              })}

              {/* City nodes */}
              {cities.map((city, i) => (
                <g
                  key={city.id}
                  onMouseEnter={() => setHoveredCity(city.id)}
                  onMouseLeave={() => setHoveredCity(null)}
                  style={{ cursor: 'pointer' }}
                >
                  {/* Pulse animation */}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r="2"
                    fill={city.color}
                    opacity="0.3"
                    animate={{
                      r: [2, 4, 2],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />

                  {/* Outer ring */}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r="1.2"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="0.25"
                    animate={{
                      r: hoveredCity === city.id ? 1.5 : 1.2,
                      strokeWidth: hoveredCity === city.id ? 0.3 : 0.25,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Inner dot */}
                  <motion.circle
                    cx={city.x}
                    cy={city.y}
                    r="0.8"
                    fill={city.color}
                    animate={{
                      r: hoveredCity === city.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      filter: `drop-shadow(0 0 4px ${city.color})`,
                    }}
                  />
                </g>
              ))}
            </svg>

            {/* City tooltips */}
            {cities.map((city) => hoveredCity === city.id && (
              <motion.div
                key={`tooltip-${city.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute"
                style={{
                  left: `${city.x}%`,
                  top: `${city.y}%`,
                  transform: 'translate(-50%, -120%)',
                  pointerEvents: 'none',
                }}
              >
                <div
                  className="px-4 py-3 rounded-lg backdrop-blur-xl border"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)`,
                  }}
                >
                  <div style={{ 
                    fontSize: '14px', 
                    fontWeight: '700', 
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}>
                    {city.name}
                  </div>
                  <div style={{ 
                    fontSize: '11px', 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontFamily: 'monospace',
                  }}>
                    Active Node
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scan line effect */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
            }}
            animate={{
              top: ['0%', '100%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { value: '135+', label: 'COUNTRIES' },
            { value: '99.99%', label: 'UPTIME' },
            { value: 'REAL-TIME', label: 'DATA' },
            { value: '24/7', label: 'GLOBAL' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl backdrop-blur-sm"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#00d4ff',
                  marginBottom: '8px',
                  fontFamily: 'monospace',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.5)',
                  letterSpacing: '0.1em',
                  fontFamily: 'monospace',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
