import React from 'react';
import AnimatedText from '../UI/AnimatedText';

const WisecapProcess: React.FC = () => {
  const processSteps = [
    {
      title: "Discover",
      description: "Sketches of notes, sticky grids.",
      details: "We map your brand landscape, sketch possibilities, and understand the strategic foundation.",
      sketchElements: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="10" y="15" width="25" height="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="var(--wc-warm-gold)" opacity="0.3" strokeDasharray="2,1" />
          <rect x="45" y="25" width="25" height="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="var(--wc-primary-teal)" opacity="0.3" strokeDasharray="2,1" />
          <rect x="25" y="45" width="30" height="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="var(--wc-slate)" opacity="0.3" strokeDasharray="2,1" />
          <path d="M15 10 L20 5 M50 20 L55 15 M40 40 L45 35" stroke="var(--wc-charcoal)" strokeWidth="1" opacity="0.6" />
        </svg>
      ),
      finalIcon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="10" y="15" width="25" height="15" fill="var(--wc-warm-gold)" rx="2" />
          <rect x="45" y="25" width="25" height="15" fill="var(--wc-primary-teal)" rx="2" />
          <rect x="25" y="45" width="30" height="15" fill="var(--wc-primary-deep)" rx="2" />
          <circle cx="18" cy="8" r="2" fill="var(--wc-charcoal)" />
          <circle cx="53" cy="18" r="2" fill="var(--wc-charcoal)" />
          <circle cx="43" cy="38" r="2" fill="var(--wc-charcoal)" />
        </svg>
      )
    },
    {
      title: "Define",
      description: "Typography, palettes, and systems.",
      details: "Strategic choices crystallize into typography hierarchies, color systems, and brand architecture.",
      sketchElements: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <text x="10" y="25" fontSize="8" fill="var(--wc-charcoal)" opacity="0.6" fontFamily="serif">Aa</text>
          <text x="30" y="25" fontSize="12" fill="var(--wc-charcoal)" opacity="0.6" fontFamily="serif">Bb</text>
          <text x="50" y="25" fontSize="16" fill="var(--wc-charcoal)" opacity="0.6" fontFamily="serif">Cc</text>
          <circle cx="15" cy="40" r="6" stroke="var(--wc-primary-teal)" strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <circle cx="35" cy="40" r="6" stroke="var(--wc-warm-gold)" strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <circle cx="55" cy="40" r="6" stroke="var(--wc-primary-deep)" strokeWidth="1" fill="none" strokeDasharray="1,1" />
          <rect x="10" y="55" width="60" height="2" fill="var(--wc-charcoal)" opacity="0.3" />
          <rect x="10" y="60" width="45" height="2" fill="var(--wc-charcoal)" opacity="0.3" />
          <rect x="10" y="65" width="55" height="2" fill="var(--wc-charcoal)" opacity="0.3" />
        </svg>
      ),
      finalIcon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <text x="10" y="25" fontSize="8" fill="var(--wc-primary-deep)" fontFamily="serif" fontWeight="600">Aa</text>
          <text x="30" y="25" fontSize="12" fill="var(--wc-primary-deep)" fontFamily="serif" fontWeight="600">Bb</text>
          <text x="50" y="25" fontSize="16" fill="var(--wc-primary-deep)" fontFamily="serif" fontWeight="600">Cc</text>
          <circle cx="15" cy="40" r="6" fill="var(--wc-primary-teal)" />
          <circle cx="35" cy="40" r="6" fill="var(--wc-warm-gold)" />
          <circle cx="55" cy="40" r="6" fill="var(--wc-primary-deep)" />
          <rect x="10" y="55" width="60" height="3" fill="var(--wc-primary-deep)" rx="1" />
          <rect x="10" y="61" width="45" height="2" fill="var(--wc-charcoal)" rx="1" />
          <rect x="10" y="66" width="55" height="2" fill="var(--wc-charcoal)" rx="1" />
        </svg>
      )
    },
    {
      title: "Design",
      description: "Logo construction lines, dielines, layouts.",
      details: "Technical precision meets creative vision as concepts become tangible design systems.",
      sketchElements: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="30" r="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="none" strokeDasharray="2,2" opacity="0.6" />
          <path d="M25 30 L55 30 M40 15 L40 45" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.4" strokeDasharray="1,1" />
          <path d="M30 20 L50 40 M50 20 L30 40" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.4" strokeDasharray="1,1" />
          <rect x="20" y="55" width="40" height="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="none" strokeDasharray="2,1" />
          <path d="M25 50 L35 45 M45 50 L55 45" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.4" />
        </svg>
      ),
      finalIcon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="30" r="12" fill="var(--wc-primary-teal)" />
          <path d="M25 15 L40 30 L55 15" fill="var(--wc-warm-gold)" />
          <rect x="25" y="55" width="30" height="12" fill="var(--wc-primary-deep)" rx="2" />
          <rect x="30" y="58" width="20" height="2" fill="white" rx="1" />
          <rect x="30" y="62" width="15" height="2" fill="white" rx="1" />
        </svg>
      )
    },
    {
      title: "Deliver",
      description: "Mockups on print, packaging, digital screens.",
      details: "Complete asset delivery across all touchpoints, from business cards to billboards.",
      sketchElements: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="15" y="15" width="15" height="20" stroke="var(--wc-charcoal)" strokeWidth="1" fill="none" strokeDasharray="2,1" />
          <rect x="35" y="20" width="25" height="15" stroke="var(--wc-charcoal)" strokeWidth="1" fill="none" strokeDasharray="2,1" />
          <rect x="20" y="45" width="35" height="25" stroke="var(--wc-charcoal)" strokeWidth="1" fill="none" strokeDasharray="2,1" />
          <circle cx="23" cy="25" r="3" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.6" />
          <circle cx="47" cy="27" r="4" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.6" />
          <path d="M25 55 L50 55 M25 60 L45 60" stroke="var(--wc-charcoal)" strokeWidth="0.5" opacity="0.4" />
        </svg>
      ),
      finalIcon: (
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <rect x="15" y="15" width="15" height="20" fill="white" stroke="var(--wc-slate)" strokeWidth="1" />
          <circle cx="23" cy="20" r="2" fill="var(--wc-primary-teal)" />
          <rect x="35" y="20" width="25" height="15" fill="var(--wc-warm-gold)" rx="1" />
          <rect x="20" y="45" width="35" height="25" fill="var(--wc-primary-deep)" rx="2" />
          <rect x="25" y="52" width="15" height="2" fill="white" rx="1" />
          <rect x="25" y="56" width="20" height="2" fill="white" rx="1" />
          <rect x="25" y="60" width="12" height="2" fill="white" rx="1" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-wc-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-extralight">
        <div className="text-center mb-20">
          <AnimatedText
            text="The Wisecap Process"
            className="text-5xl md:text-6xl  text-wc-primary-deep mb-8 md:font-extrathin"
          />
          <AnimatedText
            text="Craft Flow From Sketch to System"
            className="text-xl text-wc-warm-gold tracking-[0.1em] md:font-extrathin"
            delay={200}
          />
        </div>

        {/* Storyboard-style process flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative opacity-0 storyboard-panel group"
              style={{ animationDelay: `${index * 200 + 400}ms` }}
            >
              {/* Storyboard frame border */}
              <div className="relative bg-white p-8 rounded-2xl shadow-soft border-2 border-wc-charcoal/10 hover:border-wc-primary-teal/20 transition-all duration-300">
                
                {/* Icon container with sketch-to-final transition */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Sketch version (visible by default) */}
                  <div className="absolute inset-0 sketch-element opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                    {step.sketchElements}
                  </div>
                  
                  {/* Final version (appears on hover) */}
                  <div className="absolute inset-0 final-element opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {step.finalIcon}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-wc-primary-deep mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-wc-primary-teal font-medium mb-4 text-center text-sm italic">
                  {step.description}
                </p>
                
                <p className="text-wc-charcoal leading-relaxed text-center text-sm">
                  {step.details}
                </p>
                
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-wc-warm-gold rounded-full flex items-center justify-center">
                  <span className="text-wc-primary-deep font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
                
                {/* Connection arrow */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg width="32" height="20" viewBox="0 0 32 20" className="opacity-30">
                      <path 
                        d="M0 10 L24 10 M20 6 L24 10 L20 14" 
                        stroke="var(--wc-primary-deep)" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default WisecapProcess;