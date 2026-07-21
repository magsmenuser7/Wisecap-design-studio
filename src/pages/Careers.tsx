import React, { useState } from 'react';
import { jobs } from '../data/content';
import { MapPin, X } from 'lucide-react';
import aboutwisecap from '../assets/images/logo/banners/about-wisecap.jpg';

const Careers: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const openApplicationModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
    setSelectedJob('');
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="relative flex items-center justify-center min-h-[40vh] bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${aboutwisecap})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-extralight text-center">
          Join our creative team and grow with purpose.
        </h1>
      </section>

      {/* ================= WHY WORK WITH US ================= */}
      <section className="py-24 bg-wc-paper">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extralight text-wc-primary-deep mb-6">
            Why Work With Us
          </h2>
          <p className="text-xl text-wc-charcoal max-w-2xl mx-auto mb-12">
            We believe in collaboration, creativity, and continuous growth. At Wisecap, your ideas matter and your work leaves a lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              ['Creative Freedom', 'We encourage original thinking and give you the space to create without limits.'],
              ['Growth-Oriented', 'Learn, explore, and evolve in a supportive environment that values innovation.'],
              ['Team Spirit', 'Work with talented individuals who bring passion and purpose to every project.'],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="p-8 bg-white border border-gray-100 shadow-md"
              >
                <h3 className="text-2xl font-extralight text-wc-primary-deep mb-4">
                  {title}
                </h3>
                <p className="text-wc-charcoal">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN ROLES ================= */}
      <section className="py-14 bg-gradient-to-b from-[#F9F8F6] to-[#ECE9E4]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-extralight text-wc-primary-deep text-center mb-16">
            We Are Hiring
          </h2>

          <div className="space-y-10">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 border border-gray-200 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div className="flex-1 mb-6 md:mb-0">
                  <h3 className="text-3xl font-extralight text-wc-primary-deep mb-2">
                    {job.title}
                  </h3>

                  <div className="flex items-center text-wc-charcoal mb-3">
                    <MapPin size={18} className="mr-2 text-wc-warm-gold" />
                    {job.location}
                  </div>

                  <p className="text-wc-charcoal mb-4 line-clamp-2">
                    {job.responsibilities[0]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skillsRequired.slice(0, 4).map((skill, i) => (
                      <span
                        key={i}
                        className="text-sm bg-wc-paper border px-3 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openApplicationModal(job.title)}
                  className="bg-gradient-to-r from-wc-primary-deep to-wc-primary-teal text-white px-8 py-3 font-semibold w-full md:w-auto"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLY MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative bg-white w-full max-w-2xl p-8 shadow-2xl">
            {/* Close */}
            <button
              onClick={closeApplicationModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <h2 className="text-3xl font-light mb-2">
              Apply for <span className="font-medium">{selectedJob}</span>
            </h2>
            <p className="text-gray-500 mb-8">
              We're excited to learn more about you and your experience.
            </p>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="border px-4 py-3" placeholder="Full Name *" />
                <input className="border px-4 py-3" placeholder="Email Address *" />
                <input className="border px-4 py-3" placeholder="Phone Number *" />
                <select className="border px-4 py-3">
                  <option>Select experience</option>
                  <option>Fresher</option>
                  <option>1–3 Years</option>
                  <option>3–5 Years</option>
                  <option>5+ Years</option>
                </select>
              </div>

              <input
                className="border px-4 py-3 w-full"
                placeholder="Portfolio / LinkedIn URL *"
              />

              <div className="border-2 border-dashed p-6 text-center">
                <label className="cursor-pointer">
                  <span className="block mb-2 text-gray-600">
                    Upload your resume
                  </span>
                  <input type="file" hidden />
                  <span className="inline-block bg-wc-primary-deep text-white px-6 py-2">
                    Choose File
                  </span>
                  <p className="text-sm text-gray-400 mt-2">
                    PDF, DOC, or DOCX (max 5MB)
                  </p>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-wc-primary-deep text-white py-3 font-semibold"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={closeApplicationModal}
                  className="border px-6 py-3"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Careers;




// import React from 'react';
// import { jobs } from '../data/content';
// import { MapPin } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import careerbanner2 from '../assets/images/logo/banners/career-banner-2.jpg';
// import bbbb from '../assets/images/logo/banners/bbbb.png';
// import aboutwisecap from '../assets/images/logo/banners/about-wisecap.jpg';
// import { X } from "lucide-react";

// const Careers: React.FC = () => {
//   return (
//     <>
     
// <section
//   className="relative flex items-center justify-center min-h-[40vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[40vh] bg-center bg-cover bg-no-repeat overflow-hidden px-4 sm:px-6 md:px-10"
//   style={{ backgroundImage: `url(${aboutwisecap})` }}
// >
 
//   <div className="absolute inset-0 bg-black/30"></div>

 
//   <div className="relative z-10 text-center max-w-4xl mx-auto">
//     <h1
//       className="text-white leading-snug md:leading-tight mb-4 sm:mb-6 
//                  text-lg xs:text-xl sm:text-4xl md:text-5xl lg:text-5xl tracking-wide font-Epilogue font-extralight"
//     >
//       Join our creative team and grow with purpose.
//     </h1>
//   </div>
// </section>


    
//       <section className="py-24 bg-wc-paper">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl  font-Epilogue font-extralight text-wc-primary-deep mb-6">
//             Why Work With Us
//           </h2>
//           <p className="text-xl font-extralight text-wc-charcoal max-w-2xl mx-auto mb-12">
//             We believe in collaboration, creativity, and continuous growth. At Wisecap, your ideas matter
//             and your work leaves a lasting impact.
//           </p>

          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {[
//               {
//                 title: 'Creative Freedom',
//                 desc: 'We encourage original thinking and give you the space to create without limits.',
//               },
//               {
//                 title: 'Growth-Oriented',
//                 desc: 'Learn, explore, and evolve in a supportive environment that values innovation.',
//               },
//               {
//                 title: 'Team Spirit',
//                 desc: 'Work with talented individuals who bring passion and purpose to every project.',
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-white  shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//               >
//                 <h3 className="text-2xl font-Epilogue font-extralight text-wc-primary-deep mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-wc-charcoal text-base font-Epilogue font-extralight">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <section id="roles" className="py-24 bg-gradient-to-b from-[#F9F8F6] to-[#ECE9E4]">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-Epilogue font-extralight text-wc-primary-deep text-center mb-16">
//             We Are Hiring
//           </h2>

//           <div className="grid grid-cols-1 gap-10">
//             {jobs.map((job, index) => (
//               <div
//                 key={job.id}
//                 className="bg-white p-8  border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center"
//               >
          
//                 <div className="flex-1 min-w-0 mb-6 md:mb-0 md:mr-8">
//                   <div className="flex items-center mb-3 flex-wrap gap-2">
//                     <h3 className="text-2xl sm:text-3xl font-Epilogue font-extralight text-wc-primary-deep">
//                       {job.title}
//                     </h3>
//                     <span className="text-sm  font-extrathin text-wc-primary-deep bg-[#F9EBD3] px-3 py-1 rounded-full">
//                       {job.type}
//                     </span>
//                   </div>

//                   <div className="flex items-center text-wc-slate text-base font-medium mb-3">
//                     <MapPin size={18} className="mr-2 text-wc-warm-gold" />
//                     <span className="text-wc-charcoal">{job.location}</span>
//                   </div>

//                   <p className="text-wc-charcoal mb-4 text-base line-clamp-2">
//                     {job.responsibilities[0]}
//                   </p>

//                   <div className="flex flex-wrap gap-2">
//                     {job.skillsRequired.slice(0, 4).map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="text-sm font-medium text-wc-primary-deep bg-wc-paper border border-wc-primary-teal/30 px-3 py-1 rounded-lg"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

               
//                 <button
//                   onClick={() => openApplicationModal(job.title)}
//                   className="bg-gradient-to-r from-wc-primary-deep to-wc-primary-teal text-white px-8 py-3  font-semibold hover:opacity-90 transition w-full md:w-auto text-center shadow-md"
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//       <section className="py-24 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-Epilogue font-extralight text-wc-primary-deep mb-6">
//             Our Culture
//           </h2>
//           <p className="text-xl text-wc-charcoal max-w-3xl mx-auto mb-12 font-Epilogue font-extralight">
//             At Wisecap, we celebrate curiosity, empathy, and creativity. We foster a culture that blends
//             innovation with purpose — because great ideas thrive in inspired environments.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//             {['Collaboration', 'Innovation', 'Balance'].map((value, i) => (
//               <div
//                 key={i}
//                 className="p-8 bg-wc-paper  border border-gray-200 hover:border-wc-primary-teal transition"
//               >
//                 <h3 className="text-2xl font-serif text-wc-primary-deep font-semibold mb-3">{value}</h3>
//                 <p className="text-wc-charcoal text-base">
//                   We value {value.toLowerCase()} as a foundation for lasting impact and professional growth.
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      
//     </>
//   );
// };

// export default Careers;
{/* ============================== */}
      {/* CTA SECTION */}
      {/* ============================== */}

      {/* <section className="py-24 bg-gradient-to-r from-wc-primary-teal to-wc-primary-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-Epilogue font-extralight mb-6">
            Ready to Build the Future with Us?
          </h2>
          <p className="text-xl mb-10">
            Explore opportunities that match your passion. Let’s grow and innovate together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-wc-primary-deep px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}