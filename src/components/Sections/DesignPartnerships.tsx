import React from 'react';
import AnimatedText from '../UI/AnimatedText';

// Define Reusable Icons as a separate component for cleanliness
const Icon = ({ children, colorClass, delay }) => (
  <div 
    className="opacity-0 transform translate-y-4 storyboard-panel transition-all duration-700 ease-out" 
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Icons are sized responsively */}
    <div className={`w-12 h-12 md:w-14 md:h-14 ${colorClass} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
      {children}
    </div>
  </div>
);

const DesignPartnerships: React.FC = () => {
  const assets = [
    { color: 'from-wc-primary-teal to-wc-primary-deep', label: 'Posters', delay: 0 },
    { color: 'from-wc-warm-gold to-wc-primary-teal', label: 'Digital', delay: 200 },
    { color: 'from-wc-primary-deep to-wc-warm-gold', label: 'Packaging', delay: 400 },
    { color: 'from-wc-slate to-wc-primary-deep', label: 'Brochures', delay: 600 },
    { color: 'from-wc-primary-teal to-wc-slate', label: 'Stationery', delay: 800 },
    { color: 'from-wc-warm-gold to-wc-primary-deep', label: 'Campaigns', delay: 1000 }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#ece1c2] sm:overflow-hidden overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Title & Core Value Proposition --- */}
        <div className="text-center mb-12 md:mb-20">
          <AnimatedText
            text="Annual Design Partnerships"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrathin text-wc-primary-deep mb-4 md:font-extralight mb-4 leading-tight"
          />
          
          <AnimatedText
            text="Brands don't need one design. They need design every day."
            className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light mt-4 mb-3"
            delay={200}
          />
          
          <AnimatedText
            text="Our annual contracts give you that — structured, consistent, and premium."
            className="text-base sm:text-lg md:text-xl  text-wc-charcoal leading-relaxed md:font-light"
            delay={400}
          />
        </div>

        {/* --- 2-Column Layout (Desktop) / 1-Column Layout (Mobile) --- 
          NOTE: order-1 (Benefits) on mobile ensures critical info is seen first.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* 1. Partnership Benefits (Order 1 on Mobile) */}
          <div className="order-1 lg:order-1">
            <h2 className="text-2xl md:text-4xl md:font-extrathin text-wc-primary-deep mb-8 md:mb-10 border-b-2 pb-2 border-wc-primary-deep/10 text-center lg:text-left">
              The Value of Partnership
            </h2>
            
            <div className="space-y-8">
              
              {/* Benefit 1: Consistency (Mobile-friendly gap and text size) */}
              <div className="flex items-start gap-3 md:gap-4">
                <Icon colorClass="bg-wc-primary-teal/20" delay={1000}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wc-primary-teal)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                </Icon>
                <div>
                  <h4 className="font-bold text-lg md:text-xl text-wc-primary-deep mb-1">Consistency</h4>
                  <p className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light">
                    A dedicated team ensures every new asset maintains your brand standards across all touchpoints, eliminating visual drift.
                  </p>
                </div>
              </div>
              
              {/* Benefit 2: Priority Access */}
              <div className="flex items-start gap-3 md:gap-4">
                <Icon colorClass="bg-wc-warm-gold/20" delay={1200}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wc-warm-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 1 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/><circle cx="12" cy="12" r="3" fill="var(--wc-warm-gold)"/></svg>
                </Icon>
                <div>
                  <h4 className="font-bold text-lg md:text-xl text-wc-primary-deep mb-1">Priority Access</h4>
                  <p className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light">
                    You skip the queue with a dedicated monthly allocation, guaranteeing faster turnaround and predictable delivery schedules.
                  </p>
                </div>
              </div>
              
              {/* Benefit 3: Strategic Growth */}
              <div className="flex items-start gap-3 md:gap-4">
                <Icon colorClass="bg-wc-primary-deep/20" delay={1400}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--wc-primary-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </Icon>
                <div>
                  <h4 className="font-bold text-lg md:text-xl text-wc-primary-deep mb-1">Strategic Growth</h4>
                  <p className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light">
                    Benefit from regular, strategic reviews to ensure your design output is always evolving with and supporting your core business goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Visual Representation: Paired Assets (Order 2 on Mobile) */}
          <div className="order-2 lg:order-2 relative pt-8 md:pt-0">
            <h3 className="text-xl font-semibold text-wc-primary-deep mb-6 text-center">The Annual Growth Engine</h3>
            
            <div className="relative max-w-lg mx-auto">
              
              {/* Paired Asset Stacks: The key change for the 2-column look on all screens */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center opacity-0 storyboard-panel" style={{ animationDelay: '600ms' }}>
                
                {assets.map((asset, index) => (
                  <div key={index} className="relative w-full max-w-[120px]">
                    {/* Main Asset Card - Layered for depth */}
                    <div 
                      className={`transform translate-y-8 opacity-0 animate-slide-in-up`}
                      style={{ animationDelay: `${700 + asset.delay}ms`, animationFillMode: 'forwards' }}
                    >
                      {/* Layers */}
                      <div className={`absolute top-1 left-1 w-full aspect-[3/4] bg-gradient-to-br ${asset.color} rounded-lg shadow-lg opacity-40 -z-20`}></div>
                      <div className={`absolute top-0.5 left-0.5 w-full aspect-[3/4] bg-gradient-to-br ${asset.color} rounded-lg shadow-lg opacity-70 -z-10`}></div>
                      
                      {/* Top Layer (Padded for mobile content) */}
                      <div className={`w-full aspect-[3/4] bg-gradient-to-br ${asset.color} rounded-lg shadow-xl p-2 hover:scale-[1.03] transition-transform duration-300`}>
                        {/* Placeholder Content (Sized for mobile) */}
                        <div className="w-full h-1.5 bg-white/30 rounded mb-1"></div>
                        <div className="w-3/4 h-1.5 bg-white/30 rounded mb-1"></div>
                        <div className="w-1/2 h-1.5 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    
                    <p className="text-[10px] text-wc-slate text-center font-medium mt-2">
                      {asset.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Growth arrow for Brand Equity: Centered and positioned above the grid */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2000ms' }}>
                <svg width="60" height="60" viewBox="0 0 100 100" className="opacity-70">
                  <path 
                    d="M10 80 Q50 20 90 40 M80 30 L90 40 L80 50" 
                    stroke="var(--wc-warm-gold)" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeDasharray="150"
                    strokeDashoffset="150"
                    className="animate-stroke-draw"
                    style={{ animationDelay: '2000ms', animationDuration: '1.5s' }}
                  />
                </svg>
                <p className="text-xs sm:text-sm text-wc-warm-gold font-bold -mt-8 whitespace-nowrap text-center">Growing Brand Equity</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* --- Call to Action --- */}
        <div className="mt-12 md:mt-20 text-center">
          <a
            href="/contact"
            // CTA is responsive
            className="inline-block px-8 py-4 text-lg md:px-12 md:py-5 md:text-xl font-semibold bg-wc-primary-teal text-white rounded-full shadow-lg hover:bg-wc-primary-deep transition-colors duration-300 transform hover:scale-[1.03]"
          >
            Explore Partnerships
          </a>
        </div>
      </div>
    </section>
  );
};

export default DesignPartnerships;  