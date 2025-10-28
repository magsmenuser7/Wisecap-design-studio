import React from 'react';

const Hero: React.FC = () => {
  return (
    // 1. Full-screen section with the background gradient from the image
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden 
                        bg-gradient-to-r from-[#333333] via-[#4A4A4A] to-white/0 sm:overflow-hidden">

      {/* 3. Main Content - Centered Text and CTA */}
      <div className="relative max-w-7xl font-Epilogue font-abold sm:px-6 z-10 flex-grow flex items-center pt-24 pb-20">
        
        <div className="max-w-4xl">
          
          {/* Primary Headline */}

          <h1
  className="text-transparent bg-clip-text
             bg-gradient-to-r from-[#ddbf74] via-[#00FFF6] to-[#5D42FF]
             text-7xl sm:text-2xl md:text-9xl leading-none tracking-tight mb-5 font-Epilogue font-extralight"
>
  Every Brand Deserves
  <br />
  <span className="font-Epilogue font-extralight">A Design </span>
</h1>
<p className='text-white font-extralight  sm:text-2xl md:text-3xl lg:text-4xl'>That Speaks Louder than Words</p>
        
        </div>
      </div>
      
      {/* 4. Scroll Indicator - Bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
         <svg className="w-5 h-5 text-white/70 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
      </div>
    </section>
  );
};

export default Hero;




