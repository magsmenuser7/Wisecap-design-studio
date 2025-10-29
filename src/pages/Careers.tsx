import React from 'react';
import { jobs } from '../data/content';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import careerbanner2 from '../assets/images/logo/banners/career-banner-2.jpg';
import bbbb from '../assets/images/logo/banners/bbbb.png';


const Careers: React.FC = () => {
  return (
    <>
      {/* ============================== */}
      {/* HERO SECTION WITH OVERLAY */}
      {/* ============================== */}
<section
  className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[100vh] bg-center bg-cover bg-no-repeat overflow-hidden px-4 sm:px-6 md:px-10"
  style={{ backgroundImage: `url(${bbbb})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]"></div>

  {/* Text Content */}
  <div className="relative z-10 text-center max-w-3xl mx-auto">
    <h1
      className="text-white font-semibold leading-snug md:leading-tight mb-4 sm:mb-6 
                 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl tracking-wide"
    >
      Join our creative team and grow with purpose.
    </h1>
  </div>
</section>


      {/* ============================== */}
      {/* WHY WORK WITH US SECTION */}
      {/* ============================== */}
      <section className="py-24 bg-wc-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-wc-primary-deep mb-6">
            Why Work With Us
          </h2>
          <p className="text-lg text-wc-charcoal max-w-3xl mx-auto mb-12">
            We believe in collaboration, creativity, and continuous growth. At Wisecap, your ideas matter —
            and your work leaves a lasting impact.
          </p>

          {/* 3-column layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Creative Freedom',
                desc: 'We encourage original thinking and give you the space to create without limits.',
              },
              {
                title: 'Growth-Oriented',
                desc: 'Learn, explore, and evolve in a supportive environment that values innovation.',
              },
              {
                title: 'Team Spirit',
                desc: 'Work with talented individuals who bring passion and purpose to every project.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-serif font-semibold text-wc-primary-deep mb-4">
                  {item.title}
                </h3>
                <p className="text-wc-charcoal text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* OPEN ROLES SECTION */}
      {/* ============================== */}
      <section id="roles" className="py-24 bg-gradient-to-b from-[#F9F8F6] to-[#ECE9E4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-wc-primary-deep text-center mb-16">
            We Are Hiring
          </h2>

          <div className="grid grid-cols-1 gap-10">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition duration-300 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                {/* LEFT */}
                <div className="flex-1 min-w-0 mb-6 md:mb-0 md:mr-8">
                  <div className="flex items-center mb-3 flex-wrap gap-2">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-wc-primary-deep">
                      {job.title}
                    </h3>
                    <span className="text-sm font-semibold text-wc-primary-deep bg-[#F9EBD3] px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center text-wc-slate text-base font-medium mb-3">
                    <MapPin size={18} className="mr-2 text-wc-warm-gold" />
                    <span className="text-wc-charcoal">{job.location}</span>
                  </div>

                  <p className="text-wc-charcoal mb-4 text-base line-clamp-2">
                    {job.shortBlurb || job.responsibilities[0]}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skillsRequired.slice(0, 4).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-medium text-wc-primary-deep bg-wc-paper border border-wc-primary-teal/30 px-3 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <Link
                  to={`/contact?applyFor=${encodeURIComponent(job.title)}`}
                  className="bg-gradient-to-r from-wc-primary-deep to-wc-primary-teal text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition w-full md:w-auto text-center shadow-md"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CULTURE SECTION */}
      {/* ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-wc-primary-deep mb-6">
            Our Culture
          </h2>
          <p className="text-lg text-wc-charcoal max-w-3xl mx-auto mb-12">
            At Wisecap, we celebrate curiosity, empathy, and creativity. We foster a culture that blends
            innovation with purpose — because great ideas thrive in inspired environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {['Collaboration', 'Innovation', 'Balance'].map((value, i) => (
              <div
                key={i}
                className="p-8 bg-wc-paper rounded-3xl border border-gray-200 hover:border-wc-primary-teal transition"
              >
                <h3 className="text-2xl font-serif text-wc-primary-deep font-semibold mb-3">{value}</h3>
                <p className="text-wc-charcoal text-base">
                  We value {value.toLowerCase()} as a foundation for lasting impact and professional growth.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CTA SECTION */}
      {/* ============================== */}
      <section className="py-24 bg-gradient-to-r from-wc-primary-teal to-wc-primary-deep text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
            Ready to Build the Future with Us?
          </h2>
          <p className="text-lg mb-10">
            Explore opportunities that match your passion. Let’s grow and innovate together.
          </p>
          <Link
            to="/contact"
            className="bg-white text-wc-primary-deep px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Careers;
