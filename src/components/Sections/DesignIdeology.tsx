import React from 'react';
import AnimatedText from '../UI/AnimatedText';
import aboutimageone from '../../assets/images/logo/indilocal/indilocal-logo-two.jpg';
import aboutimagetwo from '../../assets/images/logo/banners/about-sketch.gif';
import aboutimagethree from '../../assets/images/logo/banners/about-sketch.jpg';
import worksimage1 from '../../assets/images/logo/works/7986367+.jpg';
import A3NEcopy from '../../assets/images/logo/banners/A3-NEW-copy.gif'
import aboutcraftingsketch from '../../assets/images/logo/banners/38.png'
import SpellC from '../../assets/images/logo/banners/Spell-C.jpg'
 
const DesignIdeology: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-200 sm:overflow-hidden overflow-hidden">
      {/* First Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-justify">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN — IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={SpellC}
              alt="Design process illustration"
              className="rounded shadow-md w-full max-w-md md:max-w-lg object-cover"
            />
          </div>

          {/* RIGHT COLUMN — CONTENT */}
          <div className="text-center md:text-left">
            <div className="mb-8">
              <AnimatedText
                text="Crafting Design"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrathin text-wc-primary-deep mb-4 md:font-extralight"
              />
            </div>

            <div className="space-y-6">
              <AnimatedText
                text="A designer’s desk filled with raw sketches, pencils, and brand drafts where every great idea begins."
                className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light"
                delay={400}
              />

              <AnimatedText
                text="A creative workspace blending analog sketches with digital tools symbolizing the bridge between imagination and execution."
                className="text-base sm:text-lg md:text-xl text-wc-charcoal leading-relaxed md:font-light"
                delay={600}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN — CONTENT */}
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="mb-8">
              <AnimatedText
                text="Digital Design"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrathin text-wc-primary-deep mb-4 md:font-extralight"
              />
            </div>

            <div className="space-y-6">
              <AnimatedText
                text="Where pixels meet purpose transforming ideas into visually striking, user centered digital experiences that inspire connection."
                className="text-base sm:text-lg md:text-xl font-serif text-wc-charcoal leading-relaxed md:font-light"
                delay={400}
              />

              <AnimatedText
                text="From intuitive interfaces to immersive visuals, every digital design we craft blends creativity, strategy, and technology in perfect harmony."
                className="text-base sm:text-lg md:text-xl font-serif text-wc-charcoal leading-relaxed md:font-light"
                delay={600}
              />
            </div>
          </div>


          {/* RIGHT COLUMN — IMAGE */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <img
              src={aboutimagetwo}
              alt="Design process illustration"
              className="rounded shadow-md w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignIdeology;
