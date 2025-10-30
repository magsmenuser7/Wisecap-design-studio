



import React from 'react';
import WisecapWallImagebanner from '../../assets/images/logo/works/22.png';

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
















// import React from "react";
// import WisecapWallImagebanner from "../../assets/images/logo/works/22.png";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-[#0F3255] text-white">
      
//       {/* LEFT COLUMN - TEXT */}
//       <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col justify-center items-start px-4 sm:px-4 md:px-16 lg:px-7 py-20 text-left">
//         <h1
//           className="text-white bg-clip-text text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight leading-tight mb-4"
//         >
//           Every Brand Deserves
//           <br />
//           <span className="font-light">A Design</span>
//         </h1>
//         <p className="text-white/90 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light">
//           That Speaks Louder than Words
//         </p>
//       </div>

//       {/* RIGHT COLUMN - IMAGE */}
//       <div className="w-full md:w-2/3 lg:w-3/4 h-[50vh] md:h-screen relative">
//         <img
//           src={WisecapWallImagebanner}
//           alt="Hero Banner"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         {/* Optional overlay for soft contrast */}
//         <div className="absolute inset-0 bg-black/40"></div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
//         <svg
//           className="w-6 h-6 text-white/70 animate-bounce"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default Hero;







