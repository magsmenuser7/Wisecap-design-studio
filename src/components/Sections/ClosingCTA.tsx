import React from 'react';
import AnimatedText from '../UI/AnimatedText';
import indilocallogotwo from '../../assets/images/logo/indilocal/indilocal-logo-two.jpg'
import pouchbag from '../../assets/images/logo/indilocal/2-Pouch-Bag-023.jpg'

const ClosingCTA: React.FC = () => {
  return (
    <section
  className="relative py-20 bg-wc-primary-deep bg-center bg-cover bg-no-repeat sm:overflow-hidden overflow-hidden"
  style={{ backgroundImage: `url(${pouchbag})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Wisecap logo reveal */}
<div className="mb-12">
  <svg 
    className="w-24 h-24 mx-auto mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" 
    viewBox="0 0 100 100" 
    fill="none"
  >
    {/* Logo construction lines (sketch version) */}
    <path 
      d="M20 80 L50 20 L80 80 Z" 
      stroke="var(--wc-warm-gold)" 
      strokeWidth="3"   // increased from 1 → 3
      fill="none"
      strokeDasharray="200"
      strokeDashoffset="200"
      className="animate-stroke-draw"
      style={{ filter: "drop-shadow(0 0 5px rgba(216,165,32,0.8))" }}
    />
    <circle 
      cx="50" 
      cy="50" 
      r="25" 
      stroke="var(--wc-primary-teal)" 
      strokeWidth="3"   // increased from 1 → 3
      fill="none"
      strokeDasharray="157"
      strokeDashoffset="157"
      className="animate-stroke-draw"
      style={{
        animationDelay: '0.5s',
        filter: "drop-shadow(0 0 5px rgba(8,166,168,0.8))"
      }}
    />
    {/* Final polished mark */}
    <path 
      d="M20 80 L50 20 L80 80 Z" 
      fill="var(--wc-warm-gold)" 
      className="opacity-0 animate-fade-in"
      style={{
        animationDelay: '2s',
        filter: "drop-shadow(0 0 8px rgba(216,165,32,0.9))"
      }}
    />
  </svg>
</div>


        <AnimatedText
          text="We don't just design."
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-4 md:font-extralight mb-4"
        />
        
        <AnimatedText
          text="We build perception."
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-white mb-4 md:font-extralight mb-12"
          delay={200}
        />

        <AnimatedText
          text="Every line is an investment. Every detail is a decision."
          className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
          delay={400}
        />

        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a
            href="/contact"
            className="inline-block bg-wc-warm-gold text-wc-primary-deep px-12 py-5 rounded-full text-xl font-semibold hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
          >
            Let's Craft Together
          </a>
        </div>

        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
          <p className="text-white text-sm">
            Ready to invest in perception? We're ready to craft it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;