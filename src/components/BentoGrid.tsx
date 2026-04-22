import { useState } from 'react';

export function BentoGrid() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <div 
      className="w-full px-8"
      style={{ paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Responsive Container with Auto Layout behavior */}
      <div className="max-w-[1536px] mx-auto">
        {/* Section Title */}
        <div className="relative" style={{ marginBottom: '120px' }}>
          <h1 
            className="text-center text-gray-900 mb-4"
            style={{ 
              fontSize: '72px', 
              lineHeight: '1.05',
              fontWeight: '700',
              letterSpacing: '-0.03em'
            }}
          >
            Things I've shipped
          </h1>
          <p 
            className="text-center text-gray-700 mb-3"
            style={{
              fontSize: '24px',
              lineHeight: '1.4',
              fontWeight: '500',
              letterSpacing: '-0.01em'
            }}
          >
            A selection of products I've brought to life
          </p>
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
                { label: 'From idea' },
                { label: 'launch' },
                { label: 'impact' },
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
                    <span style={{ color: '#6b7280', fontSize: '13px', padding: '0 2px' }}>→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Add keyframe animations */}
        <style>{`
          @keyframes gradientShift {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}</style>
        
        {/* 3-column grid for desktop, 2-column for tablet, 1-column for mobile */}
        <div 
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ 
            gridAutoRows: 'minmax(200px, auto)',
          }}
        >
          {/* ========== BOX 1: Co-Host Network ========== */}
          <div 
            data-box="1"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #E8456A 0%, #C03080 100%)',
              boxShadow: hoveredTile === 1 
                ? '0px 12px 48px rgba(232, 69, 106, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '400px',
              transform: hoveredTile === 1 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(1)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 1 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 2: True North Posters ========== */}
          <div 
            data-box="2"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #CF3470 0%, #A02885 100%)',
              boxShadow: hoveredTile === 2 
                ? '0px 12px 48px rgba(207, 52, 112, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '400px',
              transform: hoveredTile === 2 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(2)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 2 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 3: Co-Host Network (Financial) - TALL ========== */}
          <div 
            data-box="3"
            className="rounded-3xl p-6 lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #8B2FA0 0%, #6B2FD4 100%)',
              boxShadow: hoveredTile === 3 
                ? '0px 12px 48px rgba(139, 47, 160, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '650px',
              transform: hoveredTile === 3 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(3)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 3 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 4: Australia Launch ========== */}
          <div 
            data-box="4"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #B52E8A 0%, #8B2FA0 100%)',
              boxShadow: hoveredTile === 4 
                ? '0px 12px 48px rgba(181, 46, 138, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '400px',
              transform: hoveredTile === 4 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(4)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 4 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 5: Turo Shop - TALL ========== */}
          <div 
            data-box="5"
            className="rounded-3xl p-6 flex flex-col lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #7A2DB8 0%, #5A25E0 100%)',
              boxShadow: hoveredTile === 5 
                ? '0px 12px 48px rgba(122, 45, 184, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '560px',
              transform: hoveredTile === 5 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(5)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 5 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 6: Co-Host Network (AI) - TALL ========== */}
          <div 
            data-box="6"
            className="rounded-3xl p-6 flex flex-col lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #5A25E0 0%, #3A18F0 100%)',
              boxShadow: hoveredTile === 6 
                ? '0px 12px 48px rgba(90, 37, 224, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '650px',
              transform: hoveredTile === 6 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(6)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 6 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 7: Pricing & Discount Platform ========== */}
          <div 
            data-box="7"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #6B2FD4 0%, #4A20EC 100%)',
              boxShadow: hoveredTile === 7 
                ? '0px 12px 48px rgba(107, 47, 212, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '420px',
              transform: hoveredTile === 7 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(7)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 7 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 7 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 7 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 8: "Which car should I buy next?" ========== */}
          <div 
            data-box="8"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #4A20EC 0%, #2D14F5 100%)',
              boxShadow: hoveredTile === 8 
                ? '0px 12px 48px rgba(74, 32, 236, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '420px',
              transform: hoveredTile === 8 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(8)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 8 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 8 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 8 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 9: TandemChat.ai ========== */}
          <div 
            data-box="9"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #3A18F0 0%, #2410D8 100%)',
              boxShadow: hoveredTile === 9 
                ? '0px 12px 48px rgba(58, 24, 240, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '420px',
              transform: hoveredTile === 9 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(9)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 9 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 9 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 9 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>
          {/* ========== BOX 10: Trust & Safety Systems ========== */}
          <div
            data-box="10"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #2D14F5 0%, #1A0EC5 100%)',
              boxShadow: hoveredTile === 10
                ? '0px 12px 48px rgba(45, 20, 245, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)'
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '420px',
              transform: hoveredTile === 10 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(10)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 10 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>

          {/* ========== BOX 11: Host Growth & Acquisition - WIDE ========== */}
          <div
            data-box="11"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out lg:col-span-2"
            style={{
              background: 'linear-gradient(135deg, #1A0EC5 0%, #0D08A0 100%)',
              boxShadow: hoveredTile === 11
                ? '0px 12px 48px rgba(26, 14, 197, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)'
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '420px',
              transform: hoveredTile === 11 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(11)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Co-Host Network
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Created and scaled the Co-Host Network, an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[126px] md:top-[102px] left-0 right-0 bottom-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 11 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/vehicle-manager-mockup.png" 
                alt="Vehicle Manager App Interface"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 11 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 11 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo scaled, a growing segment of vehicle owners wanted to participate in the marketplace without taking on the operational complexity of hosting, while professional operators were constrained by access to reliable supply. This created a structural gap in the marketplace and a clear opportunity to introduce a managed model that could unlock new supply, improve utilization, and enable operators to scale more efficiently.
                <br /><br />
                I led the creation of the Co-Host Network from zero to one, defining the product strategy, business model, and initial roadmap. In late 2024, ahead of broader adoption of AI-driven product development, I leveraged AI-assisted workflows to design and build the initial product and matching system without dedicated engineering resources. This enabled rapid iteration across onboarding, vehicle-to-manager matching, analytics, and acquisition funnels, accelerating time to market while maintaining product quality. I ran tightly scoped pilots in Los Angeles and Denver, owning experiment design, supply recruitment, and performance measurement to validate product-market fit.
                <br /><br />
                Following early traction, I secured executive alignment and led the transition from pilot to scaled product. I managed a team of five and partnered cross-functionally with Legal, Insurance, Operations, and CX to define policies, risk frameworks, and operational systems required to integrate the model into Turo&apos;s core marketplace. I also established the playbook for expansion, enabling rollout across new markets and geographies.
                <br /><br />
                Today, the Co-Host Network is a core supply driver generating $15 million in annual revenue and is on track to reach $50-100 million, demonstrating the ability to apply emerging technologies to accelerate zero-to-one product development and scale it into a durable global business line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
