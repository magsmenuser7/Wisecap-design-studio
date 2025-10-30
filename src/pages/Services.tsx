import React from 'react';
import { services } from '../data/content';
import AnimatedText from '../components/UI/AnimatedText';
import featuredimage1 from '../assets/images/logo/ragainfra/Button-Badge-Mockup1.jpg'
import featuredimage2 from '../assets/images/logo/indilocal/indilocal-logo-two.jpg'
import featuredimage3 from '../assets/images/logo/works/image1.jpg'
import featuredimage4 from '../assets/images/logo/works/image2.jpg'
import featuredimage5 from '../assets/images/logo/works/image3.jpg'
import featuredimage6 from '../assets/images/logo/works/image4.jpg'
import featuredimage7 from '../assets/images/logo/works/image5.jpg'
import featuredimage8 from '../assets/images/logo/works/image6.jpg'
import featuredimage9 from '../assets/images/logo/works/image7.jpg'
import featuredimage10 from '../assets/images/logo/works/image8.png'
import featuredimage11 from '../assets/images/logo/works/image9.png'
import featuredimage12 from '../assets/images/logo/works/image10.jpg'
import servicbrand from '../assets/images/logo/servicces/service-brand.png'
import servicesbrandtwo from '../assets/images/logo/servicces/servicesbrandtwo.png'
import servicebrandthree from '../assets/images/logo/servicces/service-brand-three1.png'
import servicesbrandfour from '../assets/images/logo/servicces/services-brand-four.png'
import servicebrandfive from '../assets/images/logo/servicces/servicebrandfive.jpg'
import servicebrandsix from '../assets/images/logo/servicces/service-brand-six.png'
 

// Import your images
import image1 from '../assets/images/logo/10-x-8-copy.jpg';
import image2 from '../assets/images/logo/Free_Book_Mockup_4 (3).jpg';
import bannerservices from '../assets/images/logo/banners/banner-services.jpg';

const uniqueAspectRatios = ['16/9', '5/4', '2/1', '4/3', '3/2', '1/1'];

const dummyServices = services.map((service, index) => ({
  ...service,
  imageUrl:
    index === 0
      ? featuredimage2
      : index === 1
      ? servicbrand
      : index === 2
      ? servicebrandsix
      : index === 3
      ? servicebrandthree
      : index === 4
      ? servicesbrandfour
      : servicebrandfive,
  imageAspectRatio: uniqueAspectRatios[index] || '4/3',
  title: service.name || 'Blissful Sanctuary Beckons',
  description:
    service.longDescription ||
    'Appropriately brand diverse schemas with orthogonal ion luxury relax hotel benchmark functionalities for 24/365 metrics.',
}));

const featuredServices = dummyServices.slice(0, 6);

const Services: React.FC = () => {
  const pageBgColor = '#F2F0E7';
  const serviceBlockColor = '#224267';

  return (
    <div className="min-h-screen bg-[#F2F0E7]">
      {/* ========================== */}
      {/* HERO SECTION WITH OVERLAY */}
      {/* ========================== */}
<section
  className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[100vh] bg-center bg-cover bg-no-repeat overflow-hidden px-4 sm:px-6 md:px-10"
  style={{ backgroundImage: `url(${bannerservices})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Text Content */}
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    <h1
      className="text-white leading-snug md:leading-tight mb-4 sm:mb-6 
                 text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wide font-Epilogue font-extralight"
    >
      Designing strategies that build brands and lasting perceptions.
    </h1>

    {/* <p
      className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
    >
      Every design we craft is guided by purpose — blending creativity, research, and strategy to build timeless brands that resonate deeply.
    </p> */}
  </div>
</section>


      {/* ========================== */}
      {/* HEADER SECTION */}
      {/* ========================== */}
      <section className="text-center py-10 px-4">
        <AnimatedText
          text=""
          className="text-4xl md:text-6xl font-bold text-[#1E2A47] mb-6"
        />
        <AnimatedText
          text=""
          className="text-xl text-[#7B8163] max-w-2xl mx-auto leading-relaxed"
          delay={200}
        />
      </section>

      {/* ========================== */}
      {/* SERVICES SECTIONS */}
      {/* ========================== */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-20 md:space-y-28 pb-20">
        {featuredServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              className={`flex flex-col md:flex-row items-stretch gap-0 md:gap-0 ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* IMAGE COLUMN */}
              <div className="w-full md:w-10/12">
                <div className="h-full overflow-hidden shadow-lg">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT COLUMN */}
              <div
                className="w-full md:w-5/12 flex flex-col justify-between p-8"
                style={{ backgroundColor: serviceBlockColor }}
              >
                <div className='my-auto'>
                  <h2 className="text-3xl font-Epilogue font-extralight text-white mb-6">
                    {service.title}
                  </h2>
                  <div className="w-16 border-t border-gray-400 mb-6"></div> 
                  <p className="text-white text-opacity-80  font-Epilogue font-extralight text-xl"> {/* leading-relaxed */}
                    {service.shortDescription}
                  </p>
                </div>
                {/* <div className="mt-8 self-start">
                  <a
                    href={`/services/${service.id}`}
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-white transition-all duration-300 hover:bg-white group"
                  >
                    <svg
                      className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div> */}
              </div>
            </section>
          );
        })}
      </section>

      {/* ========================== */}
      {/* CTA SECTION */}
      {/* ========================== */}
      <section className="bg-[#1E2A47] rounded-none p-12 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-6">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Let’s discuss your project requirements and create something
          extraordinary together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#D8A66A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#C09559] transition-all duration-200 hover:scale-105"
        >
          Work with us
        </a>
      </section>
    </div>
  );
};

export default Services;












// import React from 'react';
// import { services } from '../data/content';
// import AnimatedText from '../components/UI/AnimatedText';

// // Import your images
// import image1 from '../assets/images/logo/10-x-8-copy.jpg';
// import image2 from '../assets/images/logo/Free_Book_Mockup_4 (3).jpg';
// import bannerservices from '../assets/images/logo/banners/banner-services.jpeg'



// const uniqueAspectRatios = ['16/9', '5/4', '2/1', '4/3'];

// const dummyServices = services.map((service, index) => ({
//   ...service,
//   imageUrl:
//     index === 0
//       ? image1
//       : index === 1
//       ? image2
//       : index === 2
//       ? image1
//       : image2,
//   imageAspectRatio: uniqueAspectRatios[index] || '4/3',
//   title: service.name || 'Blissful Sanctuary Beckons',
//   description:
//     service.longDescription ||
//     'Appropriately brand diverse schemas with orthogonal ion luxury relax hotel benchmark hotel booking for functionalities with 24/365 metrics cosmos nature for place products through metrics proves.',
// }));

// const featuredServices = dummyServices.slice(0, 4);

// const Services: React.FC = () => {
//   const pageBgColor = '#F2F0E7';
//   const serviceBlockColor = '#506757';

//   return (
//     <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: pageBgColor }}>
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <AnimatedText
//             text="How we help"
//             className="text-4xl md:text-6xl font-serif font-bold text-[#1E2A47] mb-6"
//           />
//           <AnimatedText
//             text="Strategic design services that build lasting perception."
//             className="text-xl text-[#7B8163] max-w-2xl mx-auto leading-relaxed"
//             delay={200}
//           />
//         </div>

//         {/* Each Service as a Separate Section */}
//         <div className="space-y-20 md:space-y-28">
//           {featuredServices.map((service, index) => {
//             const isEven = index % 2 === 0; // alternate layout
//             const isImageFirst = isEven;

//             return (
//               <section
//                 key={service.id}
//                 className="flex flex-col md:flex-row items-stretch gap-8 md:gap-5"
//               >
//                 {/* Left / Right Column Logic */}
//                 {isImageFirst ? (
//                   <>
//                     {/* Column 1: Image */}
//                     <div className="w-full md:w-9/12 h-full">
//                       <div className="h-full rounded-lg overflow-hidden shadow-md">
//                         <img
//                           src={service.imageUrl}
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>

//                     {/* Column 2: Text */}
//                     <div
//                       className="w-full h-[100vh] md:w-5/12 h-full p-8 rounded-lg flex flex-col justify-between"
//                       style={{ backgroundColor: serviceBlockColor }}
//                     >
//                       <div>
//                         <h2 className="text-3xl font-serif font-bold text-white mb-6">
//                           {service.title}
//                         </h2>
//                         <div className="w-16 border-t border-gray-400 mb-6"></div>
//                         <p className="text-white text-opacity-80 leading-relaxed">
//                           {service.description}
//                         </p>
//                       </div>
//                       <div className="mt-8 self-start">
//                         <a
//                           href={`/services/${service.id}`}
//                           className="w-14 h-14 rounded-full flex items-center justify-center border border-white transition-colors duration-300 hover:bg-white group"
//                         >
//                           <svg
//                             className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M9 5l7 7-7 7"
//                             ></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     {/* Column 1: Text */}
//                     <div
//                       className="w-full md:w-5/12 h-[93vh] p-8 rounded-lg flex flex-col justify-between order-2 md:order-1"
//                       style={{ backgroundColor: serviceBlockColor }}
//                     >
//                       <div>
//                         <h2 className="text-3xl font-serif font-bold text-white mb-6">
//                           {service.title}
//                         </h2>
//                         <div className="w-16 border-t border-gray-400 mb-6"></div>
//                         <p className="text-white text-opacity-80 leading-relaxed">
//                           {service.description}
//                         </p>
//                       </div>
//                       <div className="mt-8 self-start">
//                         <a
//                           href={`/services/${service.id}`}
//                           className="w-14 h-14 rounded-full flex items-center justify-center border border-white transition-colors duration-300 hover:bg-white group"
//                         >
//                           <svg
//                             className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth="2"
//                               d="M9 5l7 7-7 7"
//                             ></path>
//                           </svg>
//                         </a>
//                       </div>
//                     </div>

//                     {/* Column 2: Image */}
//                     <div className="w-full md:w-9/12 h-full order-1 md:order-2">
//                       <div className="h-full rounded-lg overflow-hidden shadow-md">
//                         <img
//                           src={service.imageUrl}
//                           alt={service.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </section>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <div className="bg-[#1E2A47] rounded-lg p-12 text-center mt-20">
//           <h2 className="text-3xl font-serif font-bold text-white mb-6">
//             Ready to get started?
//           </h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Let's discuss your project requirements and create something amazing together.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-[#D8A66A] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#C09559] transition-all duration-180 hover:scale-105"
//           >
//             Work with us
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;




