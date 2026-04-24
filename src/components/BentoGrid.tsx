import { useState } from 'react';

export function BentoGrid() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <div 
      className="w-full px-8"
      style={{ paddingTop: '120px', paddingBottom: '140px' }}
    >
      {/* Responsive Container with Auto Layout behavior */}
      <div className="max-w-[1200px] mx-auto">
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
                    className="rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap"
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
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ 
            gridAutoRows: 'minmax(200px, auto)',
          }}
        >
          {/* ========== BOX 1: Co-Host Network ========== */}
          <div 
            data-box="1"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #E8456A 0%, #C03080 100%)',
              boxShadow: hoveredTile === 1 
                ? '0px 12px 48px rgba(232, 69, 106, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
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
                Created and scaled an AI-powered vehicle manager to vehicle owner matching platform
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 1 ? 'opacity-0' : 'opacity-100'}`}
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
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #CF3470 0%, #A02885 100%)',
              boxShadow: hoveredTile === 2 
                ? '0px 12px 48px rgba(207, 52, 112, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 2 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(2)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
Australia Launch
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Launched and scaled a new country marketplace to segment leader in 6 months
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 2 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-2-australia.png" 
                alt="Australia Market Expansion"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Launching Turo in Australia required adapting a complex two sided marketplace to a new regulatory, insurance, and cultural environment while rapidly building enough supply to support a credible consumer launch. The core challenge was balancing speed with trust and compliance, ensuring the platform could operate reliably in a new market without fragmenting the global product or introducing long term risk.
                <br /><br />
                I led on the ground efforts to stand up the host side marketplace and localize critical product flows to meet local legal and operational requirements. To accelerate supply acquisition, I designed and launched a set of interactive incentive programs within a two week window, using rapid experimentation and direct host feedback to drive adoption. I partnered closely with Legal, Insurance, Operations, and CX to align on policy, ensure compliance, and deliver a seamless end to end experience.
                <br /><br />
                I made deliberate tradeoffs to prioritize supply quality and reliability over raw volume, aligning incentives with long term marketplace health. Within six months, Turo became the market leader in Australia, establishing a durable supply advantage and a scalable playbook for future market expansion.
              </p>
            </div>
          </div>

          {/* ========== BOX 3: Co-Host Network (Financial) - TALL ========== */}
          <div 
            data-box="3"
            className="rounded-3xl p-6 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #8B2FA0 0%, #6B2FD4 100%)',
              boxShadow: hoveredTile === 3 
                ? '0px 12px 48px rgba(139, 47, 160, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 3 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(3)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
Revenue Sharing
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Built financial infrastructure to bring off-platform payments into core product ecosystem
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 3 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-3-revenue-sharing.png" 
                alt="Turo Revenue Sharing Dashboard"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                I led the creation and launch of a net new product that enabled individuals to invest in a Turo business by placing their vehicles with hosts who operated them on their behalf. This introduced a new user identity within the marketplace, investors, and effectively financialized the Turo business model. Prior to this, financial flows between hosts and investors were handled off platform through Venmo, Zelle, and Cash App, creating significant risk, lack of transparency, and no system of record for how revenue was generated or distributed.
                <br /><br />
                I defined and built a new payment architecture that formalized how earnings, fees, and payouts flowed between multiple parties. This included designing the underlying financial logic, creating clear attribution of revenue, and ensuring compliance with platform policies. I partnered closely with engineering, data, finance, and operations to translate complex transaction structures into a system that was accurate, scalable, and easy to understand.
                <br /><br />
                The system is on track to process over 50 million dollars this year, establishing a trusted financial foundation for a new category of users and enabling scalable growth of multi vehicle businesses across the marketplace.
              </p>
            </div>
          </div>

          {/* ========== BOX 4: Australia Launch ========== */}
          <div 
            data-box="4"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #B52E8A 0%, #8B2FA0 100%)',
              boxShadow: hoveredTile === 4 
                ? '0px 12px 48px rgba(181, 46, 138, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 4 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(4)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
Carculator
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Built ML-powered investment product to improve host ROI and marketplace supply
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 4 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-4-investment-engine.png" 
                alt="Vehicle Investment Engine"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As the marketplace matured, hosts faced a critical and recurring decision with limited guidance: which vehicles to acquire to maximize returns. This lack of decision support led to inefficient capital allocation, inconsistent host performance, and supply growth that was misaligned with underlying demand patterns, ultimately impacting marketplace efficiency and profitability.
                <br /><br />
                I independently designed and built a machine learning powered vehicle purchasing recommendation engine, teaching myself the required ML techniques and implementing the full pipeline from scratch. I trained ranking models using LightGBM on millions of historical data points, incorporating features such as demand elasticity, pricing dynamics, utilization curves, seasonality, and depreciation. I developed the feature engineering pipeline, implemented group based ranking optimization, and validated model performance against observed marketplace outcomes. I then translated the model into a host facing product experience that allowed users to input constraints such as market, budget, and risk tolerance to receive tailored recommendations.
                <br /><br />
                The result was a scalable decision system that improved host ROI, aligned supply growth with demand, and increased overall marketplace efficiency, built from the ground up to turn complex data into practical, actionable guidance for hosts.
              </p>
            </div>
          </div>

          {/* ========== BOX 5: Turo Shop - TALL ========== */}
          <div 
            data-box="5"
            className="rounded-3xl p-6 flex flex-col relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #7A2DB8 0%, #5A25E0 100%)',
              boxShadow: hoveredTile === 5 
                ? '0px 12px 48px rgba(122, 45, 184, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 5 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(5)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                True North Posters
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Launched 0→1 personalized map art DTC business and scaled to profitability in 90 days
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 5 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-5-true-north.png" 
                alt="True North Posters"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                True North Posters began with a consumer insight I identified while studying Geographic Information Systems (GIS) at UC Berkeley: people want meaningful, personalized art connected to places that matter to them, but existing products felt generic, static, and difficult to customize in a way that felt personal.
                <br /><br />
                I built and launched the product end to end, partnering with design and manufacturing collaborators to translate the insight into a curated and differentiated product line. I designed and built a bespoke e-commerce experience, including a real-time product creation flow that allowed users to design custom map art, and ensured the site was fully responsive across desktop and mobile. In parallel, I built a nationwide distribution network to deliver orders within sub 5 day SLAs while balancing speed, cost, and quality.
                <br /><br />
                To drive adoption, I led go to market strategy across paid social, SEO, and influencer partnerships, testing creative, messaging, and targeting to identify high-performing channels. I iterated quickly based on conversion data and qualitative feedback, refining positioning to emphasize emotional resonance and giftability. The business reached profitability within 90 days, validating strong demand and demonstrating the ability to translate insight into a scalable, revenue generating product.
              </p>
            </div>
          </div>

          {/* ========== BOX 6: Co-Host Network (AI) - TALL ========== */}
          <div 
            data-box="6"
            className="rounded-3xl p-6 flex flex-col relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #5A25E0 0%, #3A18F0 100%)',
              boxShadow: hoveredTile === 6 
                ? '0px 12px 48px rgba(90, 37, 224, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 6 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(6)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                TandemChat.ai
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Launched a real-time collaborative AI app for shared planning and group decision-making
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 6 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-6-tandemchat.png" 
                alt="TandemChat.ai"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                TandemChat started from a simple, personal observation: planning trips and experiences with friends was always fragmented across group chats, docs, and notes, often driven by one person coordinating everything. As AI became more useful for planning, it remained a single player tool, disconnected from the people actually involved in the decision. This created an opportunity to rethink AI as something that participates inside shared conversations, making planning more collaborative, transparent, and engaging.
                <br /><br />
                I designed and built TandemChat end to end, defining the product vision, interaction model, and technical architecture. I built a real time system using Supabase Realtime and Postgres as the source of truth, with row level security and presence to support multi user synchronization. I implemented a streaming AI pipeline on Vercel using OpenAI APIs, assembling context dynamically from a canonical message log and supporting token level streaming, interruption, and tool calls. I built orchestration logic to manage a single active AI run per room, ensure idempotent message handling, and maintain consistent shared state across clients. I also designed privacy as a core product principle, implementing ephemeral context handling and ensuring conversations are not stored or used for model training, creating a trusted space for personal and group decision making.
                <br /><br />
                To drive adoption, I made collaboration frictionless by designing a link based sharing system that allows users to invite others into a live conversation instantly, without requiring sign up. This reduced onboarding friction and enabled natural, viral usage patterns as users brought others into the product during real planning moments. I also developed structured planning workflows using schema backed state, allowing groups to generate, refine, and version plans together in real time.
                <br /><br />
                Today, TandemChat.ai is actively used for trip planning, group coordination, and shared decision making, with early users consistently returning and inviting others into their planning process. It introduces a more social, collaborative model for AI, turning what is typically a solo experience into something that better reflects how people actually make decisions together.
              </p>
            </div>
          </div>

          {/* ========== BOX 7: Turo Shop ========== */}
          <div 
            data-box="7"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #6B2FD4 0%, #4A20EC 100%)',
              boxShadow: hoveredTile === 7 
                ? '0px 12px 48px rgba(107, 47, 212, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 7 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(7)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Turo Shop
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Built end-to-end e-commerce experience, from discovery through checkout and fulfillment
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 7 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-7-turo-shop.png" 
                alt="Turo Shop"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 7 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 7 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                As Turo&apos;s brand matured, I identified an opportunity to extend the customer relationship beyond the trip itself by launching a branded commerce experience that could deepen affinity, strengthen storytelling, and unlock incremental revenue. The challenge was to build a product that felt like a natural extension of the Turo experience while maintaining high standards for design, usability, and operational scalability.
                <br /><br />
                I led the product from zero to one, defining the vision, architecture, and end to end experience for Turo Shop. I designed and built a responsive shopping flow optimized for desktop and mobile, tested pricing and merchandising strategies, and used heatmap and behavioral analysis to improve discovery and checkout conversion. In parallel, I built the underlying systems for inventory, fulfillment, and content management, ensuring the product could scale without creating operational overhead or fragmenting the user experience.
                <br /><br />
                Once launched, the Turo Shop was a polished, consumer grade commerce product that strengthened Turo&apos;s brand, expanded the customer journey beyond trips, and generated incremental revenue. It established a new owned surface for customer engagement and created a repeatable playbook for future e-commerce initiatives.
              </p>
            </div>
          </div>

          {/* ========== BOX 8: Vehicle Swaps ========== */}
          <div 
            data-box="8"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #4A20EC 0%, #2D14F5 100%)',
              boxShadow: hoveredTile === 8 
                ? '0px 12px 48px rgba(74, 32, 236, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 8 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(8)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Vehicle Swaps
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Turned a 30-minute user CS call into a 30-second product experience
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 8 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-8-vehicle-swaps.png" 
                alt="Vehicle Swaps"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 8 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 8 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Vehicle swaps were one of Turo&apos;s highest-friction operational workflows and a meaningful source of customer stress, support cost, and trip risk. When a booked vehicle became unavailable, hosts and guests had to rely on lengthy support calls to identify alternatives, validate eligibility, confirm pricing, and secure consent under time pressure. I identified this as a strategic reliability problem, not just a support issue, because it sat at the intersection of customer trust, marketplace efficiency, and operational scale.
                <br /><br />
                I led the end-to-end strategy, product definition, and launch of Turo&apos;s in-app vehicle swaps platform, converting a manual 30-minute workflow into a fast, self-serve experience. The product matched eligible replacement vehicles, enforced pricing and policy guardrails, and guided both parties through a clear, consent-based flow designed for high-stress moments. I partnered closely with engineering, design, operations, policy, and data teams to define the decision framework, prioritize safe defaults, and ensure the system performed reliably across real marketplace conditions.
                <br /><br />
                The result was a step change in operational efficiency and customer experience. The launch materially reduced support burden, improved trip completion and reliability, and delivered millions in annual savings, while establishing a scalable platform for future automation and marketplace resilience.
              </p>
            </div>
          </div>

          {/* ========== BOX 9: TandemChat.ai ========== */}
          <div 
            data-box="9"
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out min-h-[696px] md:min-h-[600px]"
            style={{
              background: 'linear-gradient(135deg, #3A18F0 0%, #2410D8 100%)',
              boxShadow: hoveredTile === 9 
                ? '0px 12px 48px rgba(58, 24, 240, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '600px',
              transform: hoveredTile === 9 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(9)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Pricing Management
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Built a discount management tool balancing host control with marketplace health
              </p>
            </div>

            {/* Phone mockup image - fades out on hover */}
            <div 
              className={`absolute top-[114px] md:top-[90px] left-0 right-0 bottom-0 pb-[64px] md:pb-0 overflow-hidden transition-all duration-500 z-10 ${hoveredTile === 9 ? 'opacity-0' : 'opacity-100'}`}
            >
              <img 
                src="/images/box-9-pricing.png" 
                alt="Pricing and Discount Platform"
                className="w-full h-auto object-cover object-top drop-shadow-2xl"
              />
            </div>

            <div className={`absolute inset-0 bg-black/40 transition-all duration-500 ${hoveredTile === 9 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div>

            <div className={`absolute top-[156px] md:top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${hoveredTile === 9 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <p className="text-white text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Pricing is one of the most critical and sensitive levers in a two sided marketplace. Hosts needed more control to grow revenue, but existing tools were limited and lacked clarity, often leading to inconsistent pricing, poor guest comparison experiences, and increased exposure to high risk trips that negatively impacted marketplace profitability.
                <br /><br />
                I led the strategy and development of a comprehensive pricing and discount management platform that enabled hosts to set, test, and optimize pricing with confidence. I defined the product vision and partnered closely with Data Science and Engineering to design a system that balanced host flexibility with structured guardrails. The platform introduced multiple discount types and pricing controls, while modeling downstream impacts across conversion, utilization, trip risk, revenue, and partial contribution profit to ensure local optimizations improved overall unit economics. I drove experimentation to optimize for both host earnings and guest experience, ensuring pricing remained competitive and easy to compare across vehicles.
                <br /><br />
                The product was a scalable system that generated millions in incremental revenue, improved guest trust through clearer comparison shopping, and reduced exposure to high risk trips. It strengthened overall marketplace health and profitability while establishing pricing as a strategic, system level product surface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
