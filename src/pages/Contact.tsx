import React from 'react';
import ContactForm from '../components/UI/ContactForm';
import AnimatedText from '../components/UI/AnimatedText';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import bannercontact from '../assets/images/logo/banners/banner-contact.jpg'; 
import SNG01 from '../assets/images/logo/banners/SNG-01.jpg'

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F4F1]">
      {/* ================================= */}
      {/* HERO SECTION WITH OVERLAY BACKGROUND */}
      {/* ================================= */}
<section
  className="relative flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[100vh] bg-center bg-cover bg-no-repeat px-4 sm:px-6 md:px-10 text-center"
  style={{ backgroundImage: `url(${SNG01})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Text Content */}
  <div className="relative z-10 max-w-3xl mx-auto">
    <AnimatedText
      text="Let's build perception"
      className="text-white font-semibold leading-snug md:leading-tight mb-4 sm:mb-6 
                 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl"
    />
    <AnimatedText
      text="Tell us about your brand. We'll show you how design can change everything."
      className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
      delay={200}
    />
  </div>
</section>


      {/* ========================== */}
      {/* CONTACT MAIN SECTION */}
      {/* ========================== */}
      <section className="pt-24 pb-20 bg-[#F6F4F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* ========================== */}
            {/* CONTACT FORM SECTION */}
            {/* ========================== */}
            <section>
              <h2 className="text-3xl font-serif font-extrathin text-[#1E2A47] mb-6">
                Start a conversation
              </h2>

              {/* Fully functional ContactForm */}
              <ContactForm />
            </section>

            {/* ========================== */}
            {/* CONTACT INFORMATION SECTION */}
            {/* ========================== */}
            <section>
              <h2 className="text-3xl font-extrathin text-[#1E2A47] mb-6">
                Get in touch
              </h2>

              <div className="space-y-6 mb-8">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#08A6A8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08A6A8] mb-1">Email</h3>
                    <a href="mailto:wisecapdesign@gmail.com" className="text-[#08A6A8] hover:underline">
                      wisecapdesign@gmail.com
                    </a>
                    <p className="text-[#7B8163] text-sm mt-1">We respond within 1 business day</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#08A6A8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08A6A8] mb-1">Phone</h3>
                    <a href="tel:+91 7386092369" className="text-[#08A6A8] hover:underline">
                      +91 7386092369
                    </a>
                    <p className="text-[#7B8163] text-sm mt-1">Monday to Friday, 10 AM - 6 PM IST</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#08A6A8] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08A6A8] mb-1">Studio</h3>
                    <p className="text-[#222427]">
                       6th Lane Brodipet
                      <br />
                     Icon Spaces 4th Floor Guntur 522002, Andhra Pradesh, India
                    </p>
                    <p className="text-[#7B8163] text-sm mt-1">By appointment only</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#08A6A8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#08A6A8] mb-1">Response Time</h3>
                    <p className="text-[#222427]">
                      New enquiries: Within 4 hours
                      <br />
                      Project discussions: Same day
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-lg font-semibold text-[#1E2A47] mb-4">
                  What happens next?
                </h3>
                <ul className="space-y-3 text-[#222427]">
                  <li className="flex items-start">
                    <span className="text-[#08A6A8] font-semibold mr-3">1.</span>
                    We review your enquiry and brand context
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08A6A8] font-semibold mr-3">2.</span>
                    Schedule a 30-minute discovery call
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08A6A8] font-semibold mr-3">3.</span>
                    Propose a strategic approach and investment
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#08A6A8] font-semibold mr-3">4.</span>
                    Begin building perception for your brand
                  </li>
                </ul>
              </div>

              {/* ========================== */}
              {/* CTA CARDS */}
              {/* ========================== */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-[#1E2A47] mb-4">
                    Need ongoing design support?
                  </h3>
                  <p className="text-[#7B8163] mb-6">
                    Explore our monthly retainer packages for consistent, strategic design.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-[#08A6A8] text-white px-6 py-3 rounded-full font-medium hover:bg-[#069093] transition-colors duration-200"
                  >
                    View packages
                  </a>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <h3 className="text-xl font-semibold text-[#1E2A47] mb-4">
                    Want to see our work?
                  </h3>
                  <p className="text-[#7B8163] mb-6">
                    Browse our portfolio to understand our approach and craft quality.
                  </p>
                  <a
                    href="/works"
                    className="inline-block bg-[#08A6A8] text-white px-6 py-3 rounded-full font-medium hover:bg-[#069093] transition-colors duration-200"
                  >
                    View Works
                  </a>
                </div>
              </div>

            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
