import { Brain, Globe2, Globe, Layers, Code, BookOpen, Rocket, GraduationCap, Award, Lightbulb, Package, BarChart3, Shield, Briefcase, Search, TrendingUp, Network, Star } from 'lucide-react';
import { useRef } from 'react';

export function Education() {
  const sectionRef = useRef(null);

  const degrees = [
    {
      id: 'masters',
      level: 'Master\'s Degree',
      field: 'Global Studies (Focus: International Business, Innovation & Product Design)',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      year: '2017 - 2018',
      gpa: '3.85 / 4.0',
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
        paddingTop: '104px',
        paddingBottom: '80px',
      }}
    >
      {/* Main content container */}
      <div className="max-w-[1300px] mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-5">
            <GraduationCap className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600" style={{ fontSize: '14px', fontWeight: '500', letterSpacing: '0.05em' }}>
              UC BERKELEY
            </span>
          </div>

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
        </div>

        {/* Degrees */}
        <div className="space-y-8">
          {degrees.map((degree, degreeIndex) => (
            <DegreeCard key={degree.id} degree={degree} index={degreeIndex} />
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20">

          {/* Sub-heading */}
          <div className="relative mb-12">
            <h2
              className="text-center text-gray-900 mb-3"
              style={{
                fontSize: '48px',
                lineHeight: '1.1',
                fontWeight: '700',
                letterSpacing: '-0.03em',
              }}
            >
              What my education taught me
            </h2>
            <div className="flex items-center justify-center mt-4">
              <div
                className="inline-flex items-center rounded-full"
                style={{
                  background: '#111827',
                  padding: '6px 8px',
                  gap: '4px',
                }}
              >
                {[
                  { label: 'Research' },
                  { label: 'Analysis' },
                  { label: 'Systems' },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center gap-1">
                    <span
                      className="rounded-full px-4 py-1.5 text-sm font-medium"
                      style={{
                        background: '#374151',
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {step.label}
                    </span>
                    {i < 2 && (
                      <span style={{ color: '#6b7280', fontSize: '13px', padding: '0 2px' }}>+</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 6 Cards — horizontal scroll */}
          <div className="relative">
            {/* Left fade */}
            <div 
              className="absolute left-0 top-0 bottom-4 w-8 md:w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to right, #f9fafb, transparent)' }}
            />
            {/* Right fade */}
            <div 
              className="absolute right-0 top-0 bottom-4 w-8 md:w-16 z-10 pointer-events-none"
              style={{ background: 'linear-gradient(to left, #f9fafb, transparent)' }}
            />
            <div
              className="flex gap-5 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
            {[
              {
                number: '01',
                title: 'Product Design',
                description: 'Through work at the Jacobs Institute for Design Innovation and in GIS-based modeling, I learned to design products as complete systems, not just interfaces. I built and tested physical and digital products end to end, while also modeling how they would perform in real-world environments.',
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
              return (
                <div
                  key={idx}
                  className="group flex-shrink-0"
                  style={{ width: '340px' }}
                >
                  <div
                    className="h-full p-7 rounded-2xl bg-white border border-gray-200 flex flex-col relative overflow-hidden"
                    style={{
                      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Number Row */}
                    <div className="mb-5">
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
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DegreeCard({ degree, index }: { degree: any; index: number }) {
  return (
    <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="p-8">
        {/* Degree Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div
              className="mb-1"
              style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#6B7280',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              {degree.level}
            </div>
            <h3
              className="mb-2"
              style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0F172A',
                letterSpacing: '-0.02em',
              }}
            >
              {degree.field}
            </h3>
            <div
              className="mb-1"
              style={{
                fontSize: '17px',
                fontWeight: '600',
                color: '#334155',
              }}
            >
              {degree.institution}
            </div>
            <div
              style={{
                fontSize: '14px',
                fontWeight: '400',
                color: '#64748B',
              }}
            >
              {degree.location}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {degree.highlights.map((highlight: any, idx: number) => {
            const Icon = highlight.icon;
            return (
              <div key={idx} className="flex gap-3">
                {/* Icon */}
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: '#F1F5F9' }}
                >
                  <Icon
                    style={{
                      width: '18px',
                      height: '18px',
                      strokeWidth: 2.5,
                      color: '#6B7280',
                    }}
                  />
                </div>

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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
