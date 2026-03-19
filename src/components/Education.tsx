import { Brain, Globe2, Layers, BookOpen, Rocket, GraduationCap, Award, Lightbulb, Package, BarChart3, Shield, Briefcase, Search, TrendingUp, Network, Star, School } from 'lucide-react';
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
      field: 'Global Studies — International Business, Innovation & Product Design',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      year: '2017 - 2018',
      gpa: '3.85 / 4.0',
      color: '#6366F1',
      highlights: [
        {
          icon: Package,
          title: 'Product Design & Full Lifecycle Ownership',
          description: 'Built products from first principles through Berkeley\'s Jacobs Institute for Design Innovation, working end-to-end across sketching, CAD, prototyping, iteration testing, and production—while coordinating teams through tight deadlines and real delivery constraints.',
        },
        {
          icon: BarChart3,
          title: 'Data, Systems & Forecasting',
          description: 'Conducted advanced analytical work with Berkeley\'s Energy & Resources Group, applying statistical modeling, efficiency forecasting, and systems analysis to large-scale energy and manufacturing problems—sharpening a data-driven approach to decision-making.',
        },
        {
          icon: Shield,
          title: 'Technology, Security & Global Systems Research',
          description: 'Authored graduate research on 21st-century cybersecurity, including a 40-page investigation into international cyber-crime and state-sponsored attacks, analyzing technical mechanisms, incentives, and downstream impacts on global trade and diplomacy.',
        },
        {
          icon: Briefcase,
          title: 'Business Acumen & Leadership',
          description: 'Completed coursework and executive seminars through Berkeley Haas (Finance, Marketing, Management), and served as a Graduate Student Instructor—lecturing ~150 students, designing new multidisciplinary curriculum, and leading large cohorts through complex, real-world projects.',
        },
      ],
    },
    {
      id: 'undergraduate',
      level: 'Bachelor\'s Degree',
      field: 'Political Economy — Resource Management & Global Systems',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      year: '2015 - 2017',
      gpa: '3.9 / 4.0',
      color: '#8B5CF6',
      highlights: [
        {
          icon: Search,
          title: 'Research-Driven Systems Analysis',
          description: 'Led a two-year undergraduate thesis (Running Out of Air) on Bali\'s freshwater crisis, conducting on-the-ground research in Indonesia, multilingual stakeholder interviews across two continents, quantitative analysis, and producing a 75-page systems-level diagnosis of infrastructure mismanagement.',
        },
        {
          icon: TrendingUp,
          title: 'Economic & Policy Foundations',
          description: 'Trained in analyzing how incentives, governance, and economic forces shape large-scale systems—developing a strong foundation in resource allocation, institutional decision-making, and market dynamics.',
        },
        {
          icon: Network,
          title: 'Cross-Disciplinary Technical Exposure',
          description: 'Completed coursework spanning cybersecurity, computer programming, web design, political science, and economic forecasting through Berkeley\'s International & Area Studies program.',
        },
        {
          icon: Star,
          title: 'Leadership & Technical Curiosity',
          description: 'Inducted into Sigma Iota Rho honors society; organized academic panels with experts across business and technology; completed aviation ground school studying aerodynamics, navigation systems, and safety-critical decision-making.',
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
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
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
          className="mt-16"
        >
          {/* Section Title */}
          <div className="max-w-[900px] mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl p-10 overflow-hidden"
              style={{
                border: '1px solid rgba(148, 163, 184, 0.15)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.08)',
              }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F5F3FF 100%)',
                    'linear-gradient(180deg, #F8FAFC 0%, #F5F3FF 50%, #EFF6FF 100%)',
                    'linear-gradient(225deg, #EFF6FF 0%, #F8FAFC 50%, #F5F3FF 100%)',
                    'linear-gradient(270deg, #F5F3FF 0%, #EFF6FF 50%, #F8FAFC 100%)',
                    'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F5F3FF 100%)',
                  ],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Animated gradient orbs */}
              <motion.div 
                animate={{ 
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-[0.15] blur-3xl"
                style={{
                  background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
                }}
              />
              <motion.div 
                animate={{ 
                  x: [0, -30, 0],
                  y: [0, 20, 0],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-[0.15] blur-3xl"
                style={{
                  background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)',
                }}
              />

              {/* Subtle dot pattern */}
              <div 
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              
              <h3 
                className="relative z-10 text-center"
                style={{
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#0F172A',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                }}
              >
                How my Berkeley education shaped me as a product manager
              </h3>
            </motion.div>
          </div>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: 'I learned to diagnose real problems before designing solutions',
                description: 'Through multi-year research projects, including my undergraduate thesis on Bali\'s freshwater crisis, I learned how to start with messy, real-world systems. That work involved field research, interviewing diverse stakeholders across languages and cultures, and combining qualitative insight with quantitative analysis.\n\nThis foundation shows up in my PM work as a bias toward deep problem definition, user research, and understanding root causes before shipping features.',
                color: '#6366F1',
                icon: Search,
              },
              { 
                title: 'I learned to design systems, not just interfaces',
                description: 'Across graduate work in product design, GIS modeling, and systems analysis, I consistently worked on problems where success depended on incentives, constraints, and second-order effects, not just UI. I spent time modeling infrastructure, forecasting system behavior, and prototyping products end to end.\n\nThat experience shaped how I think about product today: abstracting complexity into systems that scale and hold up under real-world pressure.',
                color: '#8B5CF6',
                icon: Network,
              },
              { 
                title: 'I learned to balance design, data, and business judgment',
                description: 'My time at Berkeley combined hands-on design prototyping at the Jacobs Institute, data-driven forecasting with the Energy & Resources Group, and business fundamentals through Haas coursework. I was constantly forced to weigh usability, metrics, and feasibility against each other.\n\nThat mix trained me to evaluate tradeoffs thoughtfully, an approach I now apply in product when balancing user needs, operational realities, and company outcomes.',
                color: '#A855F7',
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
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                      rotate: 2,
                    }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}15 0%, ${item.color}25 100%)`,
                    }}
                  >
                    <Icon 
                      style={{ 
                        width: '22px', 
                        height: '22px',
                        strokeWidth: 2.5,
                        color: item.color,
                      }} 
                    />
                  </motion.div>

                  {/* Title */}
                  <h4 
                    className="mb-4"
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#0F172A',
                      lineHeight: '1.3',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p 
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#64748B',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.description}
                  </p>
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="px-3 py-1 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#475569',
                }}
              >
                {degree.year}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#92400E',
                }}
              >
                GPA: {degree.gpa}
              </motion.div>
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
