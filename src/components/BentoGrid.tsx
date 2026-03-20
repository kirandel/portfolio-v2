import { ImageWithFallback } from './figma/ImageWithFallback';
import referenceImage from 'figma:asset/85f553b1c8ed687d2b906fa790a3504010129184.png';
import { useState } from 'react';

export function BentoGrid() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);

  return (
    <div 
      className="w-full"
      style={{ 
        paddingTop: '100px', 
        paddingBottom: '100px',
        background: '#F5F5F7',
      }}
    >
      {/* Responsive Container */}
      <div className="max-w-[980px] mx-auto px-6">
        {/* Section Title - Apple style */}
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <p
            style={{
              fontSize: '17px',
              fontWeight: '400',
              color: '#86868b',
              marginBottom: '8px',
            }}
          >
            Get to know my work.
          </p>
          <h1 
            style={{ 
              fontSize: '56px', 
              lineHeight: '1.07',
              fontWeight: '600',
              letterSpacing: '-0.005em',
              color: '#1d1d1f',
            }}
          >
            Things I've Shipped.
          </h1>
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
          {/* ROW 1 - Tile 1: Bulk actions */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #D94962 0%, #9B3B8F 100%)',
              boxShadow: hoveredTile === 1 
                ? '0px 12px 48px rgba(217, 73, 98, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '250px',
              transform: hoveredTile === 1 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(1)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                In-App Vehicle Swaps
              </h3>
              <p className="text-white mb-6" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Turning a 30-minute support workflow into a 30-second product interaction
              </p>
            </div>
            
            {/* Transaction list mockup */}
            <div className={`mt-auto space-y-2 transition-all duration-500 ${hoveredTile === 1 ? 'blur-lg' : 'blur-0'}`}>
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-white text-xs mb-2" style={{ opacity: 0.6 }}>TUE, OCTOBER 8</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border-2 border-white/40"></div>
                    <span className="text-white text-sm">Publix · 4dr Plus Brewing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border-2 border-white/40 bg-blue-500"></div>
                    <span className="text-white text-sm">Taco Bell · Credit Card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded border-2 border-white/40"></div>
                    <span className="text-white text-sm">Property Payment Rent Co.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark overlay for better text legibility on hover */}
            <div 
              className={`absolute inset-0 bg-black/40 transition-all duration-500 ${
                hoveredTile === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            ></div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-36 left-6 right-6 bottom-6 transition-all duration-500 z-10 overflow-y-auto ${
                hoveredTile === 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Vehicle swaps on Turo were handled entirely through support—requiring long phone calls, high operational cost, and a stressful experience for both hosts and guests during already time-sensitive situations.
                <br /><br />
                I led the design and launch of an in-app vehicle swaps product that transformed this workflow into a fast, self-serve experience. The system intelligently matched eligible replacement vehicles, enforced pricing and policy guardrails, and guided both hosts and guests through a clear, consent-driven flow—turning a fragile, human-heavy process into a predictable product interaction. A key design goal was trust: users needed to understand why a swap was allowed and feel confident accepting it under pressure.
                <br /><br />
                I made deliberate tradeoffs to prioritize reliability and clarity over flexibility—constraining edge cases, biasing toward safe defaults, and designing the UX to reduce cognitive load at moments of stress. The product was iterated through close partnership with operations, policy, and data to ensure it worked not just in ideal cases, but at marketplace scale. The result was a dramatic reduction in support burden, improved trip reliability, and millions of dollars saved annually, while delivering a faster, calmer, and more predictable experience for customers.
              </p>
            </div>
          </div>

          {/* ROW 1 - Tile 2: Cash flow */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #C83955 0%, #8B2B6E 100%)',
              boxShadow: hoveredTile === 2 
                ? '0px 12px 48px rgba(200, 57, 85, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '250px',
              transform: hoveredTile === 2 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(2)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Cash flow
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                Mac, iPhone, and iPad
              </p>
            </div>
            
            {/* Cash flow chart */}
            <div className={`mt-auto transition-all duration-500 ${hoveredTile === 2 ? 'blur-sm' : 'blur-0'}`}>
              <div className="mb-2">
                <p className="text-white text-xs" style={{ opacity: 0.6 }}>Net income</p>
                <p className="text-white text-xs mb-1" style={{ opacity: 0.5 }}>Jan 1 – Aug 31, 2024</p>
                <p className="text-emerald-400" style={{ fontSize: '32px', fontWeight: '700' }}>
                  $15,729.06
                </p>
              </div>
              <div className="flex items-end gap-2 h-24">
                <div className="bg-emerald-500 rounded-t" style={{ width: '20%', height: '45%' }}></div>
                <div className="bg-emerald-500 rounded-t" style={{ width: '20%', height: '65%' }}></div>
                <div className="bg-emerald-500 rounded-t" style={{ width: '20%', height: '80%' }}></div>
                <div className="bg-emerald-500 rounded-t" style={{ width: '20%', height: '55%' }}></div>
                <div className="bg-emerald-500 rounded-t" style={{ width: '20%', height: '100%' }}></div>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 2 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Monitor income and expenses with real-time visualizations. Track financial health across all accounts with intuitive charts. Make informed decisions with comprehensive cash flow analytics.
              </p>
            </div>
          </div>

          {/* ROW 1 - Tile 3: Light and Dark mode (tall phone tile) */}
          <div 
            className="rounded-3xl p-6 flex flex-col lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #5E3FBF 0%, #7F2DF4 100%)',
              boxShadow: hoveredTile === 3 
                ? '0px 12px 48px rgba(94, 63, 191, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '650px',
              transform: hoveredTile === 3 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(3)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="mb-6 relative z-20">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Niche.ai iOS App
              </h3>
              <p className="text-white mb-6" style={{ opacity: 0.7, fontSize: '14px', fontWeight: '600' }}>
                Designing a clean, AI-powered travel discovery product from lived experience
              </p>
            </div>
            
            {/* Phone mockup */}
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${hoveredTile === 3 ? 'blur-lg' : 'blur-0'}`}>
              <div 
                className="bg-gray-900 rounded-[2.5rem] p-2 relative"
                style={{ 
                  width: '75%',
                  aspectRatio: '9/19',
                  maxWidth: '330px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                }}
              >
                {/* Phone screen */}
                <div className="w-full h-full bg-gray-800 rounded-[2rem] overflow-hidden flex items-center justify-center">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMjUyOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="App interface"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 rounded-b-2xl"
                  style={{ width: '35%', height: '28px' }}
                ></div>
              </div>
            </div>

            {/* Dark overlay for better text legibility on hover */}
            <div 
              className={`absolute inset-0 bg-black/40 transition-all duration-500 ${
                hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            ></div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-36 left-6 right-6 transition-all duration-500 z-10 ${
                hoveredTile === 3 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                I've always loved travel—exploring new cities, cultures, food scenes, and local neighborhoods—and over time it became clear that something was missing in the travel app ecosystem. Discovering truly great places required sifting through noisy content, paid placements, and generic lists that lacked taste, context, and trust.
                <br /><br />
                I designed and built Niche.ai end-to-end: a zero-to-one consumer iOS app that productizes large language models into a calm, opinionated travel discovery experience. The product was shaped by user research with travelers I met across the U.S., Europe, and Southeast Asia, informing how people actually discover and evaluate places while on the road. I iterated across multiple design directions and interaction models, and continuously refined the AI system—experimenting with prompts, source curation, ranking logic, and output formats—to balance trust, relevance, and clarity. On the backend, I built a scalable and secure data layer to support content ingestion, retrieval-augmented generation, and personalization.
                <br /><br />
                The product was intentionally designed for travelers who value quality and authenticity over exhaustive lists. I made deliberate tradeoffs—avoiding real-time, chat-style AI in favor of structured recommendations—to reduce cognitive load and increase trust. Early users consistently saved and returned to recommendations when planning multiple trips, signaling strong pull around clarity and taste, and a thoughtfully designed AI travel product.
              </p>
            </div>
          </div>

          {/* ROW 2 - Tile 4: Quick launcher */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #E75B8D 0%, #9B3B8F 100%)',
              boxShadow: hoveredTile === 4 
                ? '0px 12px 48px rgba(231, 91, 141, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '260px',
              transform: hoveredTile === 4 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(4)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Quick launcher
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                Mac and iPad
              </p>
            </div>
            
            {/* Search launcher UI */}
            <div className={`mt-auto transition-all duration-500 ${hoveredTile === 4 ? 'blur-sm' : 'blur-0'}`}>
              <div className="bg-white/95 rounded-xl p-4">
                <input 
                  type="text" 
                  placeholder="Search for accounts, transactions, holdings, categories, and mountings..."
                  className="w-full bg-transparent text-gray-400 text-sm border-none outline-none mb-3"
                  style={{ fontSize: '13px' }}
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      <div>
                        <p className="text-gray-900 text-sm">Lyft · Oct 18th 2022 · $12.67</p>
                        <p className="text-blue-500 text-xs">Transaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 4 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Access everything instantly with intelligent search. Jump to any account, transaction, or category in seconds. Navigate complex financial data effortlessly with keyboard shortcuts.
              </p>
            </div>
          </div>

          {/* ROW 2 - Tile 5: Fast search (Middle tall tile) */}
          <div 
            className="rounded-3xl p-6 flex flex-col lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #9B3B8F 0%, #7F2DF4 100%)',
              boxShadow: hoveredTile === 5 
                ? '0px 12px 48px rgba(155, 59, 143, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '560px',
              transform: hoveredTile === 5 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(5)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="mb-6">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Fast search
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                Mac, iPhone, and iPad
              </p>
            </div>
            
            {/* Search results */}
            <div className={`flex-1 flex flex-col justify-end transition-all duration-500 ${hoveredTile === 5 ? 'blur-sm' : 'blur-0'}`}>
              <div className="bg-white/95 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded text-xs">starbucks</div>
                  <button className="text-gray-400 text-xs">+ Filter</button>
                </div>
                <div className="space-y-3">
                  <div className="border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-900" style={{ fontSize: '13px', fontWeight: '500' }}>Starbucks · Credit Card</p>
                        <p className="text-gray-500 text-xs">FOOD & DRINK</p>
                      </div>
                      <span className="text-gray-900" style={{ fontWeight: '600' }}>$11.48</span>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-gray-900" style={{ fontSize: '13px', fontWeight: '500' }}>Starbucks · Credit Card</p>
                        <p className="text-gray-500 text-xs">FOOD & DRINK</p>
                      </div>
                      <span className="text-gray-900" style={{ fontWeight: '600' }}>$4.87</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-900" style={{ fontSize: '13px', fontWeight: '500' }}>Uber · Credit Card</p>
                      <p className="text-blue-500 text-xs">transportation</p>
                    </div>
                    <span className="text-gray-900" style={{ fontWeight: '600' }}>$18.33</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 5 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Find transactions instantly with powerful filtering. Sort by merchant, category, or amount with lightning-fast results. Advanced search capabilities make finding financial data simple and efficient.
              </p>
            </div>
          </div>

          {/* ROW 1/2 - Tile 6: Widgets (Right tall phone tile) */}
          <div 
            className="rounded-3xl p-6 flex flex-col lg:row-span-2 relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #7F2DF4 0%, #3B1AF8 100%)',
              boxShadow: hoveredTile === 6 
                ? '0px 12px 48px rgba(127, 45, 244, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '650px',
              transform: hoveredTile === 6 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(6)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div className="mb-6">
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Widgets
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                Mac, iPhone, and iPad
              </p>
            </div>
            
            {/* Phone mockup with widgets */}
            <div className={`flex-1 flex items-center justify-center transition-all duration-500 ${hoveredTile === 6 ? 'blur-sm' : 'blur-0'}`}>
              <div 
                className="bg-amber-100 rounded-[2.5rem] p-2 relative"
                style={{ 
                  width: '75%',
                  aspectRatio: '9/19',
                  maxWidth: '330px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)'
                }}
              >
                {/* Phone screen */}
                <div className="w-full h-full bg-amber-50 rounded-[2rem] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzYzMzQ1OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dashboard widgets"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 rounded-b-2xl"
                  style={{ width: '35%', height: '28px' }}
                ></div>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 6 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Customize your homescreen with intelligent widgets. View account balances, recent transactions, and spending insights at a glance. Stay informed with real-time financial updates without opening the app.
              </p>
            </div>
          </div>

          {/* ROW 3 - Tile 7: (empty cell, part of Fast search span) */}
          
          {/* ROW 3 - Tile 8: Face ID */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: '#7F2DF4',
              boxShadow: hoveredTile === 8 
                ? '0px 12px 48px rgba(127, 45, 244, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '350px',
              transform: hoveredTile === 8 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(8)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Face ID
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                iPhone and iPad
              </p>
            </div>
            
            {/* Face ID icon */}
            <div className={`flex items-center justify-center transition-all duration-500 ${hoveredTile === 8 ? 'blur-sm' : 'blur-0'}`}>
              <div 
                className="rounded-3xl flex items-center justify-center border-4"
                style={{ 
                  width: '120px', 
                  height: '120px',
                  borderColor: 'rgba(255, 255, 255, 0.3)'
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="48" height="48" rx="8" stroke="white" strokeWidth="3" opacity="0.7"/>
                  <circle cx="24" cy="26" r="3" fill="white" opacity="0.7"/>
                  <circle cx="40" cy="26" r="3" fill="white" opacity="0.7"/>
                  <path d="M20 40 Q32 46 44 40" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 8 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Secure authentication with advanced biometric technology. Unlock your financial data instantly with a glance. Enhanced privacy protection ensures your information stays safe.
              </p>
            </div>
          </div>

          {/* ROW 3 - Tile 9: Apple Card, Apple Cash, Savings */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #7F2DF4 0%, #3B1AF8 100%)',
              boxShadow: hoveredTile === 9 
                ? '0px 12px 48px rgba(127, 45, 244, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '350px',
              transform: hoveredTile === 9 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(9)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Apple Card, Apple Cash, Savings
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                iPhone
              </p>
            </div>
            
            {/* Card stack illustration */}
            <div className={`flex-1 flex items-center justify-center relative transition-all duration-500 ${hoveredTile === 9 ? 'blur-sm' : 'blur-0'}`}>
              <div className="relative" style={{ width: '80%', height: '70%' }}>
                {/* Bottom card - cyan/blue */}
                <div 
                  className="absolute rounded-2xl shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #4FC3F7 0%, #29B6F6 100%)',
                    width: '100%',
                    height: '85%',
                    bottom: '0',
                    right: '0',
                    transform: 'rotate(2deg)',
                  }}
                ></div>
                {/* Top card - gradient */}
                <div 
                  className="absolute rounded-2xl shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #FFD54F 0%, #FFA726 50%, #FF7043 100%)',
                    width: '100%',
                    height: '85%',
                    top: '0',
                    left: '0',
                    transform: 'rotate(-2deg)',
                  }}
                >
                  {/* Card chip */}
                  <div 
                    className="absolute bg-yellow-200/40 rounded"
                    style={{ 
                      width: '40px', 
                      height: '30px',
                      top: '20px',
                      left: '20px',
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 9 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Manage all your Apple financial products in one place. Track spending, send money, and grow savings effortlessly. Integrated ecosystem provides seamless financial management across devices.
              </p>
            </div>
          </div>

          {/* ROW 3 - Tile 10: Notifications */}
          <div 
            className="rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer transition-all duration-500 ease-out"
            style={{
              background: 'linear-gradient(135deg, #5B34C7 0%, #3B1AF8 100%)',
              boxShadow: hoveredTile === 10 
                ? '0px 12px 48px rgba(91, 52, 199, 0.4), 0px 4px 24px rgba(0, 0, 0, 0.25)' 
                : '0px 4px 24px rgba(0, 0, 0, 0.25)',
              minHeight: '350px',
              transform: hoveredTile === 10 ? 'scale(1.03)' : 'scale(1)',
            }}
            onMouseEnter={() => setHoveredTile(10)}
            onMouseLeave={() => setHoveredTile(null)}
          >
            <div>
              <h3 className="text-white mb-1" style={{ fontSize: '20px', fontWeight: '600' }}>
                Notifications
              </h3>
              <p className="text-white" style={{ opacity: 0.7, fontSize: '14px' }}>
                Mac, iPhone, and iPad
              </p>
            </div>
            
            {/* Notification icon */}
            <div className={`flex items-center justify-center transition-all duration-500 ${hoveredTile === 10 ? 'blur-sm' : 'blur-0'}`}>
              <div 
                className="rounded-2xl flex items-center justify-center"
                style={{ 
                  width: '120px', 
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.15)',
                }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Bell icon */}
                  <path d="M32 8 C32 8 28 8 28 12 C28 12 20 14 20 28 C20 28 18 38 12 40 L52 40 C46 38 44 28 44 28 C44 14 36 12 36 12 C36 8 32 8 32 8 Z" 
                    fill="white" opacity="0.9"/>
                  <path d="M28 44 C28 44 28 48 32 48 C36 48 36 44 36 44" 
                    stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.9"/>
                  {/* Notification badge */}
                  <circle cx="44" cy="16" r="6" fill="#FF4757"/>
                  <text x="44" y="19" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>
                </svg>
              </div>
            </div>

            {/* Hover overlay text */}
            <div 
              className={`absolute top-24 left-6 right-6 transition-all duration-500 ${
                hoveredTile === 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <p className="text-white leading-relaxed text-left" style={{ opacity: 0.95, fontSize: '13px', lineHeight: '1.6' }}>
                Stay updated with smart financial alerts. Receive timely notifications about transactions, budgets, and account activity. Customize notification preferences to keep you informed without overwhelming you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
