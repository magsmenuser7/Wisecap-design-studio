
import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import aboutwisecap from "../assets/images/logo/banners/about-wisecap.jpg";
import bannerabout from "../assets/images/logo/banners/python-external-blog-image-1.jpg";
import founderPhoto from "../assets/images/logo/banners/sandeep.png";
import { PenTool, Layers, FileText, Package, Heart } from "lucide-react";
import aboutimage from '../assets/images/logo/banners/2.png'
import aboutimage2 from '../assets/images/logo/banners/3.png'
import aboutimage3 from '../assets/images/logo/banners/rigin.jpg'



const About = () => {



  const services = [
    {
      title: "Logo Design",
      icon: <PenTool className="w-10 h-10 text-gray-400" />,
    },
    {
      title: "Brand Kits Design",
      icon: <Layers className="w-10 h-10 text-gray-400" />,
    },
    {
      title: "Brochure Design",
      icon: <FileText className="w-10 h-10 text-gray-400" />,
    },
    {
      title: "Package Design",
      icon: <Package className="w-10 h-10 text-gray-400" />,
    },
    {
      title: "Wedding Branding",
      icon: <Heart className="w-10 h-10 text-gray-400" />,
    },
  ];

  return (
    <>
      {/* TOP HERO SECTION WITH BACKGROUND IMAGE */}
      <section
        id="about"
        className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat py-32 md:py-40 flex items-center"
        style={{
          backgroundImage: `url(${aboutimage3})`,
        }}
      >
        {/* Overlay */ }
          <div className="absolute inset-0 bg-black/50"></div>
 
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-white font-semibold leading-snug md:leading-tight mb-4 sm:mb-6 
                 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
            A quietly deliberate design studio crafting stories through sketches
            and strategy from hand drawn beginnings to digital brilliance.
          </h1>
        </div>
      </section>


      {/* WHO WE ARE SECTION */}
      <section className="w-full bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl  md:font-extrathin text-[#1E2A47] leading-tight">
              Where Creativity Meets  <br /> Craftsmanship, <br /> Rooted in Indian Heritage
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-[#222427] leading-relaxed text-lg space-y-6 text-justify">
            <p>
              At Wisecap, creativity meets craftsmanship. Born from a passion for authentic design and rooted in Indian heritage, our studio blends local soul with global standards. For us, design isn’t just about aesthetics, it’s about connection. It’s about evoking emotion, sparking thought, and creating lasting impressions.
            </p>
            <p>
              We treat every project as a personal journey. That’s why we partner only with brands that align with our values, ensuring a shared vision and genuine collaboration. This isn’t just work it’s passion, poured into every pixel, color, and curve.
            </p>
          </div>
        </div>
      </section>


      {/* ===== BANNER IMAGE SECTION ===== */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${aboutimage})` }}
      >
        {/* Maintain proportional height for all devices */}
        <div className="aspect-[16/9] sm:aspect-[3/1] md:aspect-[21/7] lg:aspect-[21/13]"></div>
      </section>


      

      {/* Founder section */}
      <section
        className="relative py-24 bg-gradient-to-b from-[#F9F8F6] to-[#ECE9E4] overflow-hidden"
      >
        {/* Decorative background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.5)_0%,_transparent_70%)] pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-0"
          >
            {/* <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1E2A47] mb-4">
            A Note from the Founder
          </h2>
          <p className="text-[#7B8163] text-lg max-w-3xl mx-auto leading-relaxed">
            Thought, craftsmanship, and connection lie at the heart of
            everything we design.
          </p> */}
          </motion.div>

          {/* Founder Card */}
          <div className="bg-white/70 backdrop-blur-md border border-[#e5e3df] rounded-3xl p-10 md:p-14 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="flex flex-col items-center lg:items-start">
                  <div className="relative w-40 h-40 mb-6">
                    <img
                      src={founderPhoto}
                      alt="Sandeep N"
                      className="w-full h-full rounded-full object-cover border-4 border-[#F6F4F1] shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#B85A3D]/20 to-transparent"></div>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#1E2A47]">
                    Sandeep N
                  </h3>
                  <p className="text-[#7B8163] mb-3">Founder & Creative Director</p>
                  <a
                    href="https://www.linkedin.com/in/itsnsandeep?trk=public-profile-badge-profile-badge-view-profile-cta&originalSubdomain=in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#B85A3D] hover:text-[#8E3E25] transition-colors duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                    Connect on LinkedIn
                  </a>
                </div>
              </motion.div>

              {/* Founder Message */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <blockquote className="text-xl text-[#222427] leading-relaxed text-justify italic border-l-4 border-[#B85A3D] pl-6 mb-6">
                  “I started Wisecap because design should do more than look
                  pretty — it should make a business clearer. We work with founders
                  who care about craft, context, and long-term perception. We are
                  selective, deliberate, and always personal.”
                </blockquote>

                <p className="text-[#333] text-lg leading-relaxed mb-4 text-justify">
                  After 8 years at global agencies including Ogilvy, I realized
                  that the best design work comes from deep understanding and
                  genuine partnership. Wisecap was born from the belief that
                  brands deserve more than cookie-cutter solutions.
                </p>

                <p className="text-[#333] text-lg leading-relaxed">
                  We combine Indian craft heritage with international design
                  thinking. Our clients become partners — their success becomes
                  our legacy.
                </p>

                {/* Optional signature line */}
                {/* <div className="mt-8 text-[#7B8163] font-medium italic">
                — Sandeep N, Founder
              </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* WHAT WE DO SECTION */}
      <section className="w-full bg-[#F6F4F1] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading */}
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-500 mb-4">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-serif md:font-extrathin text-[#1E2A47] leading-tight">
              Designing Timeless Identities That Blend Culture,<br /> Emotion, and Craft
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-[#222427] leading-relaxed text-lg space-y-6 text-justify">
            <p>
              At Wisecap, design is more than visual appeal — it’s a dialogue between creativity and meaning. We craft identities that honor Indian heritage while meeting global standards, shaping stories that speak from the heart and resonate across cultures.
            </p>
            <p>
              Every detail we create is intentional — from concept to color, from sketch to screen. We partner with brands that value authenticity, ensuring each project reflects a shared passion and leaves a lasting emotional impact.
            </p>
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="bg-[#1C1C1C] text-white py-24">
        <div className="max-w-[1900px] mx-auto px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center text-center p-12 transition-all duration-300 hover:bg-[#242424]
                ${index !== services.length - 1 ? "border-r border-gray-700" : ""}`}
              >
                <div className="flex items-center justify-center w-32 h-32 rounded-full border border-gray-600 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-sm tracking-widest font-medium text-gray-200 uppercase">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>




    
      {/* ===== BANNER IMAGE SECTION ===== */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${aboutimage2})` }}
      >
        {/* Maintain proportional height for all devices */}
        <div className="aspect-[16/9] sm:aspect-[3/1] md:aspect-[21/7] lg:aspect-[21/13]"></div>
      </section>

    </>
  );
};

export default About;















// import React from 'react';
// import { team } from '../data/content';
// import AnimatedText from '../components/UI/AnimatedText';
// import aboutwisecap from '../assets/images/logo/banners/about-wisecap.jpg'

// const About: React.FC = () => {
//   const isImageVisible = true;
//   return (

//     <div className="min-h-screen pt-24 pb-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <AnimatedText
//             text="We are Wisecap"
//             className="text-4xl md:text-6xl font-serif font-bold text-[#1E2A47] mb-6"
//           />
//           <AnimatedText
//             text="A quietly deliberate brand studio."
//             className="text-xl text-[#7B8163] max-w-2xl mx-auto leading-relaxed"
//             delay={200}
//           />
//         </div>

//         {/* Founder Note */}
//         <div className="max-w-9xl mx-auto mb-20">
//           <div className="bg-[#F6F4F1] p-8 md:p-12 rounded-lg">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//               <div className="lg:col-span-1">
//                 <img
//                   src={team[0].photo}
//                   alt={team[0].name}
//                   className="w-32 h-32 rounded-full object-cover mx-auto lg:mx-0 mb-6"
//                 />
//                 <div className="text-center lg:text-left">
//                   <h3 className="text-xl font-semibold text-[#1E2A47]">{team[0].name}</h3>
//                   <p className="text-[#7B8163] mb-4">{team[0].role}</p>
//                   <a
//                     href={team[0].linkedin}
//                     className="text-[#B85A3D] hover:text-[#A14A33] transition-colors duration-180"
//                   >
//                     Connect on LinkedIn →
//                   </a>
//                 </div>
//               </div>
              
//               <div className="lg:col-span-2">
//                 <blockquote className="text-lg text-[#222427] leading-relaxed italic mb-4">
//                   "I started Wisecap because design should do more than look pretty — it should make a business clearer. We work with founders who care about craft, context, and long-term perception. We are selective, deliberate, and always personal."
//                 </blockquote>
//                 <p className="text-[#222427] leading-relaxed mb-4">
//                   After 8 years at global agencies including Ogilvy, I realized that the best design work comes from deep understanding and genuine partnership. Wisecap was born from the belief that brands deserve more than cookie-cutter solutions.
//                 </p>
//                 <p className="text-[#222427] leading-relaxed">
//                   We combine Indian craft heritage with international design thinking. Our clients become partners. Their success becomes our legacy.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Philosophy */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <h2 className="text-3xl font-serif font-bold text-[#1E2A47] text-center mb-12">
//             Our Philosophy
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-[#B85A3D] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">01</span>
//               </div>
//               <h3 className="text-xl font-semibold text-[#1E2A47] mb-4">
//                 Narrative-led
//               </h3>
//               <p className="text-[#222427] leading-relaxed">
//                 Every brand has a story. We help you tell it through carefully crafted visual systems that resonate and differentiate.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-[#B85A3D] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">02</span>
//               </div>
//               <h3 className="text-xl font-semibold text-[#1E2A47] mb-4">
//                 Value-based pricing
//               </h3>
//               <p className="text-[#222427] leading-relaxed">
//                 We price by outcome, not hours. Our success is measured by your business results and brand perception shifts.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-[#B85A3D] rounded-full flex items-center justify-center mx-auto mb-6">
//                 <span className="text-white font-bold text-xl">03</span>
//               </div>
//               <h3 className="text-xl font-semibold text-[#1E2A47] mb-4">
//                 Restricted client list
//               </h3>
//               <p className="text-[#222427] leading-relaxed">
//                 We work with a limited number of clients to ensure quality, attention, and meaningful partnerships.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Team */}
//         <div className="max-w-4xl mx-auto mb-20">
//           <h2 className="text-3xl font-serif font-bold text-[#1E2A47] text-center mb-12">
//             Meet the Studio
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {team.map((member, index) => (
//               <div
//                 key={member.id}
//                 className="bg-[#F6F4F1] p-6 rounded-lg text-center opacity-0 animate-fade-in-up"
//                 style={{ 
//                   animationDelay: `${index * 200}ms`, 
//                   animationFillMode: 'forwards' 
//                 }}
//               >
//                 <img
//                   src={member.photo}
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-[#1E2A47] mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-[#B85A3D] font-medium mb-3">
//                   {member.role}
//                 </p>
//                 <p className="text-[#222427] leading-relaxed mb-4">
//                   {member.bioBrief}
//                 </p>
                
//                 <div className="flex flex-wrap justify-center gap-2 mb-4">
//                   {member.responsibilityTags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="px-3 py-1 bg-white text-[#7B8163] text-xs rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {member.linkedin && (
//                   <a
//                     href={member.linkedin}
//                     className="text-[#B85A3D] hover:text-[#A14A33] transition-colors duration-180 text-sm"
//                   >
//                     Connect on LinkedIn →
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Culture */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-[#1E2A47] text-white rounded-lg p-8 md:p-12 text-center">
//             <h2 className="text-3xl font-serif font-bold mb-6">
//               Studio Culture
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//               <div>
//                 <h3 className="text-lg font-semibold mb-3 text-[#D8A66A]">
//                   Selective
//                 </h3>
//                 <p className="text-gray-300">
//                   We choose our projects and partners carefully to ensure mutual success.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold mb-3 text-[#D8A66A]">
//                   Kind
//                 </h3>
//                 <p className="text-gray-300">
//                   We believe great work comes from respectful, collaborative relationships.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="text-lg font-semibold mb-3 text-[#D8A66A]">
//                   Craft-led
//                 </h3>
//                 <p className="text-gray-300">
//                   Every detail matters. We obsess over quality until it's right.
//                 </p>
//               </div>
//             </div>
            
//             <div className="mt-12">
//               <a
//                 href="/contact"
//                 className="inline-block bg-[#B85A3D] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#A14A33] transition-all duration-180 hover:scale-105"
//               >
//                 Talk to our studio
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;