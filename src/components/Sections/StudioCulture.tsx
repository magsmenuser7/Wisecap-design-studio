import React from 'react';
import AnimatedText from '../UI/AnimatedText';
import { Users, Target, Heart } from 'lucide-react';

const StudioCulture: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden sm:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            text="Studio Culture"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-wc-primary-deep mb-4 md:font-extralight mb-8"
          />
          
          <AnimatedText
            text="The Human Touch"
            className="text-base sm:text-lg md:text-xl font-serif text-wc-charcoal leading-relaxed md:font-light mb-12"
            delay={200}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Culture points */}
            <div className="text-left space-y-8">
              <AnimatedText
                text="We are a boutique studio. Small, selective, founder-led."
                className="text-xl font-serif text-wc-charcoal leading-relaxed"
                delay={400}
              />
              
              <AnimatedText
                text="Every project is personal. Every detail is crafted."
                className="text-xl font-serif text-wc-charcoal leading-relaxed"
                delay={600}
              />

              <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wc-primary-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-wc-primary-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wc-primary-deep mb-1">Boutique Scale</h3>
                    <p className="text-wc-slate text-sm">Personal attention, not factory production</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wc-warm-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target size={20} className="text-wc-warm-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wc-primary-deep mb-1">Selective Process</h3>
                    <p className="text-wc-slate text-sm">We choose projects that align with our values</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wc-primary-deep/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={20} className="text-wc-primary-deep" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-wc-primary-deep mb-1">Founder-Led</h3>
                    <p className="text-wc-slate text-sm">Direct involvement in every creative decision</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Visual representation */}
            <div className="relative">
              <div className="bg-wc-paper p-8 rounded-lg">
                <div className="space-y-4">
                  {/* Simulated sketch/work process */}
                  <div className="flex items-center space-x-3 opacity-0 animate-slide-in-right" style={{ animationDelay: '1s' }}>
                    <div className="w-3 h-3 bg-wc-primary-teal rounded-full animate-pulse"></div>
                    <span className="text-sm text-wc-slate">Ideas → Lines → Systems → Brands</span>
                  </div>
                  
                  <div className="border-l-2 border-wc-warm-gold pl-4 space-y-2 opacity-0 animate-slide-in-right" style={{ animationDelay: '1.2s' }}>
                    <p className="text-sm text-wc-charcoal font-medium">Sketching concepts</p>
                    <p className="text-sm text-wc-charcoal font-medium">Refining systems</p>
                    <p className="text-sm text-wc-charcoal font-medium">Building brands</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <div className="aspect-square bg-gradient-to-br from-wc-primary-teal to-wc-primary-deep rounded opacity-0 animate-scale-in" style={{ animationDelay: '1.4s' }}></div>
                    <div className="aspect-square bg-gradient-to-br from-wc-warm-gold to-wc-primary-teal rounded opacity-0 animate-scale-in" style={{ animationDelay: '1.6s' }}></div>
                    <div className="aspect-square bg-gradient-to-br from-wc-primary-deep to-wc-slate rounded opacity-0 animate-scale-in" style={{ animationDelay: '1.8s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-16">
            <a
              href="/about"
              className="btn-outline px-8 py-4 text-lg"
            >
              Meet Our Studio
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default StudioCulture;