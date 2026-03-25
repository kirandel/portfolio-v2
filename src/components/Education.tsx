import { Brain, Globe2, Globe, Layers, Code, BookOpen, Rocket, GraduationCap, Award, Lightbulb, Package, BarChart3, Shield, Briefcase, Search, TrendingUp, Network, Star } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { useRef } from 'react';

export function Education() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const degrees = [
    {
      id: 'masters',
      level: 'Master\'s Degree',
      field: 'Global Studies (Focus: International Business, Innovation & Product Design)',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      year: '2017 - 2018',
      gpa: '3.85 / 4.0',
      color: '#6366F1',
      highlights: [
        {
          icon: Package,
          title: 'Thesis: Global Cybersecurity & Emerging Governance Gaps',
          description: 'Authored a 40-page thesis on global cybersecurity, analyzing state-sponsored attacks, system vulnerabilities, and incentive structures with a focus on how emerging technologies outpace existing governance frameworks—a challenge increasingly relevant to AI safety and regulation.',
        },
        {
          icon: BarChart3,
          title: 'Graduate Student Instructor & Curriculum Design',
          description: 'Served as a Graduate Student Instructor at UC Berkeley, independently designing curriculum, writing and delivering lectures, and leading ~150 students through complex, multidisciplinary coursework focused on international business, political economy and diplomacy.',
        },
        {
          icon: Shield,
          title: 'Systems Analysis & Infrastructure Forecasting',
          description: 'Conducted advanced systems analysis and forecasting with the Energy & Resources Group, applying statistical modeling to large-scale infrastructure and manufacturing problems.',
        },
        {
          icon: Briefcase,
          title: 'Product Design & Full-Cycle Shipping',
          description: 'Designed and shipped both physical and digital products through the Jacobs Institute for Design Innovation, working end-to-end from concept through prototyping, iteration, and production under real-world constraints.',
        },
      ],
    },
    {
      id: 'undergraduate',
      level: 'Bachelor\'s Degree',
      field: 'Political Economy (Focus: Resource Management & Global Systems)',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      year: '2015 - 2017',
      gpa: '3.9 / 4.0',
      color: '#8B5CF6',
      highlights: [
        {
          icon: Search,
          title: 'Thesis: Freshwater Crisis & Systems Failure',
          description: 'Led a two-year thesis on Bali\'s freshwater crisis, conducting on-the-ground research, multilingual stakeholder interviews, and quantitative analysis to diagnose how misaligned incentives drive large-scale system failure.',
        },
        {
          icon: TrendingUp,
          title: 'International Political Economy & Development',
          description: 'Studied international political economy and global development, analyzing how governments design economic systems, policy frameworks, and growth strategies to drive GDP expansion and shape national competitiveness.',
        },
        {
          icon: Network,
          title: 'Computer Science Foundations',
          description: 'Completed elective computer science course series, including coursework in algorithm design, object-oriented programming, data structures and data models, building a strong foundation in how software systems are designed and operate.',
        },
        {
          icon: Star,
          title: 'Product & Business Strategy',
          description: 'Developed product and business acumen through coursework in marketing and strategy, learning how to design, position, and bring products to market through effective go-to-market and growth frameworks.',
        },
      ],
    },
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative w-screen -mx-6 overflow-hidden"
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
      >
        <div style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)', width: '100%', height: '100%' }} />
      </motion.div>
      <motion.div 
        style={{ y: useTransform(y, (val) => -val), opacity }}
        className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
      >
        <div style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)', width: '100%', height: '100%' }} />
      </motion.div>

      {/* Main content container */}
      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-5"
          >
            <GraduationCap className="w-4 h-4 text-indigo-600" />
            <span className="text-gray-700" style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.05em' }}>
              UC BERKELEY
            </span>
          </motion.div>
          
          <h2 
            className="mb-4"
            style={{
              fontSize: '72px',
              fontWeight: '700',
              color: '#0F172A',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
            }}
          >
            Education
          </h2>
          
          <p 
            className="max-w-[650px] mx-auto"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#64748B',
              lineHeight: '1.4',
              letterSpacing: '-0.01em',
            }}
          >
            Across both degrees, my academic work centered on system design, behavioral economics, and data-driven decision making — foundations that continue to shape how I build scalable, trustworthy products.
          </p>
        </motion.div>

        {/* Degrees */}
        <div className="space-y-8">
          {degrees.map((degree, degreeIndex) => (
            <DegreeCard key={degree.id} degree={degree} index={degreeIndex} />
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          {/* Section Title */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                How my experience shapes how I build products
              </h3>
            </motion.div>
          </div>

          {/* 6 Cards — horizontal scroll */}
          <div 
            className="flex gap-5 overflow-x-auto pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                number: '01',
                title: 'Product Design',
                description: 'Through work at the Jacobs Institute and in GIS-based modeling, I learned to design products as complete systems, not just interfaces. I built and tested physical and digital products end to end, while also modeling how they would perform in real-world environments.',
                takeaway: 'I focus on designing products and systems that are intuitive at the surface but grounded in real-world user behavior and customer needs.',
                icon: Layers,
              },
              {
                number: '02',
                title: 'Computer Science',
                description: 'I completed an elective computer science track including the full CS61 series, focusing on object-oriented programming, data structures, and system fundamentals to understand how software is actually built and operates at scale.',
                takeaway: 'This gives me a baseline of fundamental engineering concepts, allowing me to work closely with engineers, reason about architecture and tradeoffs, and contribute to technically complex products.',
                icon: Code,
              },
              {
                number: '03',
                title: 'AI, Security & Governance',
                description: 'In my graduate research, I studied global cybersecurity systems, analyzing state-sponsored attacks, system vulnerabilities, and incentive structures behind them. The work focused on how fast-moving technologies create gaps in regulation, coordination, and accountability.',
                takeaway: 'I understand how powerful technologies scale globally, where risks emerge, and how product decisions intersect with safety, policy, and governance.',
                icon: Shield,
              },
              {
                number: '04',
                title: 'Research & Interviewing',
                description: 'Through multi-year research projects, including my undergraduate thesis on Bali\'s freshwater crisis, I learned how to break down complex problems by going directly to the source — field research, multilingual interviews, and combining qualitative insight with quantitative analysis.',
                takeaway: 'This shows up in my product work as a strong bias toward understanding users deeply, identifying root causes, and validating problems before jumping to solutions.',
                icon: Search,
              },
              {
                number: '05',
                title: 'Evening MBA Program',
                description: 'Through UC Berkeley Haas\' Evening MBA program, I built a strong foundation across marketing, financial accounting, corporate finance, strategy, and operations — learning how businesses make decisions, how markets behave, and how to evaluate tradeoffs between growth, profitability, and risk.',
                takeaway: 'I think about products not just as user experiences, but as economic systems. Pricing, positioning, and go-to-market strategy are part of the product itself.',
                icon: TrendingUp,
              },
              {
                number: '06',
                title: 'International Experience',
                description: 'I grew up across Laos, Cambodia, Thailand, and Indonesia, and later worked with international NGOs in former conflict zones. These experiences required navigating different cultural norms, languages, and political environments while working with diverse stakeholders.',
                takeaway: 'I understand how to build and scale systems that work across geographies, regulatory environments, user behaviors, and socio-cultural norms.',
                icon: Globe,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              const accentColor = '#6366F1';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.08 }}
                  className="group flex-shrink-0"
                  style={{ width: '340px' }}
                >
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-full p-7 rounded-2xl bg-white border border-gray-100 flex flex-col relative overflow-hidden"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: accentColor }}
                    />

                    {/* Number & Icon Row */}
                    <div className="flex items-center justify-between mb-5">
                      <span
                        style={{
                          fontSize: '48px',
                          fontWeight: '800',
                          color: '#F1F5F9',
                          lineHeight: '1',
                          letterSpacing: '-0.04em',
                        }}
                      >
                        {item.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: `${accentColor}12` }}
                      >
                        <Icon style={{ width: '20px', height: '20px', strokeWidth: 2, color: accentColor }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h4
                      className="mb-4"
                      style={{
                        fontSize: '17px',
                        fontWeight: '700',
                        color: '#0F172A',
                        lineHeight: '1.35',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="mb-4"
                      style={{ fontSize: '14px', lineHeight: '1.65', color: '#64748B' }}
                    >
                      {item.description}
                    </p>

                    {/* Takeaway */}
                    <p
                      style={{ fontSize: '14px', lineHeight: '1.65', color: '#64748B' }}
                    >
                      {item.takeaway}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DegreeCard({ degree, index }: { degree: any; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative"
    >
      <motion.div 
        whileHover={{ scale: 1.01, y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Top gradient accent */}
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1"
          style={{
            background: `linear-gradient(90deg, ${degree.color} 0%, ${degree.color}dd 100%)`,
          }}
        />

        <div className="p-8">
          {/* Degree Header - More Compact */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-1"
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: degree.color,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {degree.level}
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-2"
                style={{
                  fontSize: '26px',
                  fontWeight: '700',
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                }}
              >
                {degree.field}
              </motion.h3>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-1"
                style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#334155',
                }}
              >
                {degree.institution}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: '#64748B',
                }}
              >
                {degree.location}
              </motion.div>
            </div>
            
            <div className="flex flex-col gap-2 items-end">
            </div>
          </div>

          {/* Highlights Grid - More Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {degree.highlights.map((highlight: any, idx: number) => {
              const Icon = highlight.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  whileHover={{ x: 3 }}
                  className="flex gap-3 group"
                >
                  {/* Icon */}
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                      rotate: 2,
                      background: 'linear-gradient(135deg, #E0E7FF 0%, #DDD6FE 100%)',
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
                    }}
                  >
                    <Icon 
                      className="text-indigo-600"
                      style={{ 
                        width: '18px', 
                        height: '18px',
                        strokeWidth: 2.5,
                      }} 
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 
                      className="mb-1"
                      style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: '#0F172A',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {highlight.title}
                    </h4>
                    <p 
                      style={{
                        fontSize: '13px',
                        lineHeight: '1.5',
                        color: '#64748B',
                      }}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
