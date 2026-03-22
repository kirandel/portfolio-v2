import { Brain, Globe2, Layers, BookOpen, Rocket, GraduationCap, Award, Lightbulb, Package, BarChart3, Shield, Briefcase, Search, TrendingUp, Network, Star } from 'lucide-react';
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
        background: 'linear-gradient(180deg, #FAFBFC 0%, #F8FAFC 50%, #FFFFFF 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

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
            Across both degrees, my academic work focused on understanding incentives, designing systems, and grounding decisions in research and data - principles that continue to guide my approach to building trustworthy, scalable products.
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
          {/* Section Title - Clean & Minimal */}
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="h-px w-8 bg-indigo-400" />
                <span 
                  style={{ 
                    fontSize: '13px', 
                    fontWeight: '600', 
                    color: '#6366F1',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  Reflections
                </span>
                <div className="h-px w-8 bg-indigo-400" />
              </div>
              
              <h3 
                style={{
                  fontSize: '36px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.2',
                  letterSpacing: '-0.02em',
                }}
              >
                How my Berkeley education shaped me
                <br />
                <span style={{ color: '#6366F1' }}>as a product manager</span>
              </h3>
            </motion.div>
          </div>

          {/* Three Cards - Refined Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { 
                number: '01',
                title: 'Diagnose real problems before designing solutions',
                description: 'Through multi-year research projects, including my undergraduate thesis on Bali\'s freshwater crisis, I learned how to start with messy, real-world systems. That work involved field research, interviewing diverse stakeholders across languages and cultures, and combining qualitative insight with quantitative analysis.',
                takeaway: 'This foundation shows up in my PM work as a bias toward deep problem definition, user research, and understanding root causes before shipping features.',
                color: '#6366F1',
                icon: Search,
              },
              { 
                number: '02',
                title: 'Design systems, not just interfaces',
                description: 'Across graduate work in product design, GIS modeling, and systems analysis, I consistently worked on problems where success depended on incentives, constraints, and second-order effects, not just UI. I spent time modeling infrastructure, forecasting system behavior, and prototyping products end to end.',
                takeaway: 'That experience shaped how I think about product today: abstracting complexity into systems that scale and hold up under real-world pressure.',
                color: '#8B5CF6',
                icon: Network,
              },
              { 
                number: '03',
                title: 'Balance design, data, and business judgment',
                description: 'My time at Berkeley combined hands-on design prototyping at the Jacobs Institute, data-driven forecasting with the Energy & Resources Group, and business fundamentals through Haas coursework. I was constantly forced to weigh usability, metrics, and feasibility against each other.',
                takeaway: 'That mix trained me to evaluate tradeoffs thoughtfully, an approach I now apply in product when balancing user needs, operational realities, and company outcomes.',
                color: '#10B981',
                icon: Lightbulb,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="group relative"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full p-7 rounded-2xl bg-white border border-gray-100 flex flex-col relative overflow-hidden"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Top accent line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: item.color }}
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
                        style={{
                          background: `${item.color}10`,
                        }}
                      >
                        <Icon 
                          style={{ 
                            width: '20px', 
                            height: '20px',
                            strokeWidth: 2,
                            color: item.color,
                          }} 
                        />
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
                      className="mb-4 flex-grow"
                      style={{
                        fontSize: '14px',
                        lineHeight: '1.65',
                        color: '#64748B',
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Takeaway - highlighted */}
                    <div 
                      className="pt-4 mt-auto"
                      style={{
                        borderTop: '1px solid #F1F5F9',
                      }}
                    >
                      <p 
                        style={{
                          fontSize: '13px',
                          lineHeight: '1.6',
                          color: '#475569',
                          fontWeight: '500',
                          fontStyle: 'italic',
                        }}
                      >
                        {item.takeaway}
                      </p>
                    </div>
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
