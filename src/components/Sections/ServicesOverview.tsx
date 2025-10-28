

import React from "react";
import { motion } from "framer-motion";

import wisecapbg from "../../assets/images/logo/banners/wisecap-bg.jpg";
import Closeupmugmockuponthewood from "../../assets/images/logo/servicces/Close-up-mug-mockup-on-the-wood2.jpg";
import servicebrandkitsdesign from "../../assets/images/logo/servicces/service-brand-kits-design2.png";
import homeservicesbrochuredesidn from "../../assets/images/logo/servicces/home-services-brochure-desidn.png";
import homeservicepackagedesign from "../../assets/images/logo/servicces/home-service-package-design.jpg";
import homeserviceposterdesign from "../../assets/images/logo/servicces/home-service-poster-design.jpg";
import homeserviceweddingbranding from "../../assets/images/logo/servicces/home-service-wedding-branding.jpg";

const ServicesOverview = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      title: "Logo Design",
      description:
        "Your logo is the face of your brand—make it count. We design timeless, distinctive logos that stand out. Crafted to reflect your unique identity and vision. Built for startups and established brands alike.",
      image: Closeupmugmockuponthewood,
    },
    {
      title: "Brand Kits Design",
      description:
        "Consistency builds trust—your brand should reflect that. Our Brand Kits include logos, colors, fonts, and assets. We ensure a cohesive look across every platform. Build a visual identity that connects with your audience.",
      image: servicebrandkitsdesign,
    },
    {
      title: "Brochure Design",
      description:
        "We create everything from company profiles to catalogs. Clean, engaging designs that tell your story clearly. Tailored to inform, inspire, and impress your audience. Perfect for marketing, events, and client presentations.",
      image: homeservicesbrochuredesidn,
    },
    {
      title: "Package Design",
      description:
        "Your product deserves packaging that stands out. We blend creativity and strategy for maximum impact. Our designs attract attention and drive connection. Packaging that reflects your brand’s values and personality.",
      image: homeservicepackagedesign,
    },
    {
      title: "Flyer & Poster Designs",
      description:
        "Catch eyes and make an impact with designs that speak for you. Whether it's a flyer for an event, a poster for a campaign, or a promotion that needs attention — we create bold, beautiful visuals that communicate.",
      image: homeserviceposterdesign,
    },
    {
      title: "Wedding Branding",
      description:
        "We craft elegant, custom wedding branding with heart. From invites to signage, every detail is thoughtfully designed. Our cohesive visuals reflect your unique love story. Create a memorable, immersive experience.",
      image: homeserviceweddingbranding,
    },
  ];

  return (
    <section
      className="relative bg-[#eadcb9] py-20 md:py-32 overflow-hidden sm:overflow-hidden"
      style={{
        backgroundImage: `url(${wisecapbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20 md:mb-32 overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-w-md md:max-w-lg h-auto object-cover shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-wc-primary-deep mb-4 md:font-extralight mb-4 leading-tight mb-4">
                {service.title}
              </h2>
              <p className="text-sm sm:text-sm md:text-lg  text-wc-charcoal leading-relaxed max-w-xl mx-auto md:mx-0">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;


















// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Ensure all these paths are correct in your project
// import servicesrounded from "../../assets/images/logo/servicces/services-rounded.webp";
// import servicesskull from "../../assets/images/logo/servicces/services-skull.webp";
// import servicesstart from "../../assets/images/logo/servicces/services-start.webp";
// import servicesstar from "../../assets/images/logo/servicces/services-star-2.webp";
// import PlasticContainer from "../../assets/images/logo/indilocal/05-Plastic-Container-for-Dairy-Mock-Up.jpg";
// import PaperBag from "../../assets/images/logo/indilocal/11-Paper-Bag-with-shadows-Mockup.jpg";
// import wisecapbg from '../../assets/images/logo/banners/wisecap-bg.jpg'
// import Homeservicelogodesign from "../../assets/images/logo/servicces/Home-service-logo-design.png";
// import homeservicelogodesign from "../../assets/images/logo/servicces/home-service-logo-design.jpg";
// import Closeupmugmockuponthewood from "../../assets/images/logo/servicces/Close-up-mug-mockup-on-the-wood2.jpg";
// import servicebrandkitsdesign from "../../assets/images/logo/servicces/service-brand-kits-design2.png";
// import homeservicesbrochuredesidn from "../../assets/images/logo/servicces/home-services-brochure-desidn.png";
// import homeservicepackagedesign from "../../assets/images/logo/servicces/home-service-package-design.jpg";
// import homeserviceposterdesign from "../../assets/images/logo/servicces/home-service-poster-design.jpg";
// import homeserviceweddingbranding from "../../assets/images/logo/servicces/home-service-wedding-branding.jpg";




// const ServicesOverview: React.FC = () => {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 60 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const services = [
//     {
//       title: "Logo Design",
//       description:
//         "Your logo is the face of your brand—make it count. We design timeless, distinctive logos that stand out. Crafted to reflect your unique identity and vision. Built for startups and established brands alike.",
//       tags: ["UI/UX", "Web design", "Motion", "3D models"],
//       image: Closeupmugmockuponthewood,
//     },
//     {
//       title: "Brand Kits Design",

//       description:
//         "Consistency builds trust—your brand should reflect that. Our Brand Kits include logos, colors, fonts, and assets. We ensure a cohesive look across every platform. Build a visual identity that connects with your audience.",
//       tags: ["Illustration", "Branding", "Sketch", "Art direction"],
//       image: servicebrandkitsdesign,
//     },
//     {
//       title: "Brochure Design",
//       description:
//         "We create everything from company profiles to catalogs. Clean, engaging designs that tell your story clearly. Tailored to inform, inspire, and impress your audience. Perfect for marketing, events, and client presentations.",
//       tags: ["UX Research", "Prototyping", "Accessibility"],
//       image: homeservicesbrochuredesidn,
//     },
//     {
//       title: "Package Design",
//       description:
//         "Your product deserves packaging that stands out. We blend creativity and strategy for maximum impact. Our designs attract attention and drive connection. Packaging that reflects your brand’s values and personality.",
//       tags: ["Frontend", "Backend", "Responsive", "Performance"],
//       image: homeservicepackagedesign,
//     },
//     {
//       title: "Flyer & Poster Designs",
//       description:
//         "Catch eyes and make an impact with designs that speak for you. Whether it's a flyer for an event, a poster for a campaign, or a promotion that needs attention we create bold, beautiful visuals that communicate.",
//       tags: ["Animation", "After Effects", "Storytelling"],
//       image: homeserviceposterdesign,
//     },
//     {
//       title: "Wedding branding:",
//       description:
//         "We craft elegant, custom wedding branding with heart. From invites to signage, every detail is thoughtfully designed. Our cohesive visuals reflect your unique love story. Create a memorable, immersive experience.",
//       tags: ["Labeling", "Brand strategy", "Product design"],
//       image: homeserviceweddingbranding,
//     },
//    
//   ];

//   // State to track the currently active image URL
//   const [activeImage, setActiveImage] = useState(services[0].image);
//   // State to track the index of the service currently in the viewport
//   const [currentActiveIndex, setCurrentActiveIndex] = useState(0);

//   // Helper function to update the image based on the index
//   const updateActiveImage = (index: number) => {
//     // Only update the image if the index has actually changed
//     if (index !== currentActiveIndex) {
//       setActiveImage(services[index].image);
//       setCurrentActiveIndex(index);
//     }
//   };

//   return (
//      <section
//       className="bg-wc-paper py-32 bg-[#eadcb9] relative overflow-hidden sm:overflow-hidden"
//       style={{
//         backgroundImage: `url(${wisecapbg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="absolute inset-0 bg-black/40  z-0"></div>
//       <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-7">
//         {/* LEFT SIDE — Sticky Image */}
//         <div className="relative md:sticky md:top-32 h-[70vh] z-10">
//           <motion.div
//             key={activeImage}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="rounded p-14 flex justify-center items-center"
//           >
//             <img
//               src={activeImage}
//               alt="Service Illustration"
//               className="w-90 h-90 object-contain"
//             />
//           </motion.div>
//         </div>

//         {/* RIGHT SIDE — Scrollable Content */}
//         <div className="space-y-[80vh] z-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col justify-center items-center md:items-start h-[20vh] text-center md:text-left"
//               variants={fadeInUp}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: false, amount: 0.5 }} // AMOUNT: 0.5 is the key to trigger the change earlier
//               transition={{ duration: 0.8 }}
//               onViewportEnter={() => updateActiveImage(index)} // Trigger when entering (scrolling down)
//               onViewportLeave={(entry) => {
//                 // If the element is leaving the top of the viewport AND it was the last active one,
//                 // this means the user is scrolling up.
//                 if (entry.boundingClientRect.bottom < 0 && index === currentActiveIndex) {
//                   // Set to the previous service image
//                   if (index > 0) {
//                     updateActiveImage(index - 1);
//                   }
//                 }
//               }}
//             >
//               <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-wc-primary-deep mb-4 md:font-extralight mb-6">
//                 {service.title}
//               </h2>

//               {/* Tags section (kept commented out as in your original code)
//               <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
//                 {service.tags.map((tag, i) => (
//                   <span
//                     key={i}
//                     className="border border-gray-400 rounded-full px-4 py-1 text-sm text-gray-700"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div> */}

//               <p className="text-base sm:text-lg md:text-xl font-serif text-wc-charcoal leading-relaxed md:font-light leading-relaxed max-w-xl">
//                 {service.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesOverview;
