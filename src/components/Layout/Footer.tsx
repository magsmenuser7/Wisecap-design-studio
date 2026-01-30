import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import wisecapbg from '../../assets/images/logo/banners/wisecap-bg.jpg';
import { Link } from "react-router-dom";


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      // style={{
      //   backgroundImage: `url(${wisecapbg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-black">Wisecap</h3>
            <p className="text-black text-lg leading-relaxed mb-6 max-w-md">
            At Wisecap, our design approach is rooted in clarity, intent, and precision, helping brands communicate with focus and confidence. We believe good design is strategic, not decorative every color, typeface, and layout is thoughtfully chosen to build trust, strengthen recall, and create long-term brand value.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@wisecap.studio" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Mail size={20} />
              </a>
              <a href="tel:+91 7386092369" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Phone size={20} />
              </a>
              <a href="https://linkedin.com/company/wisecap" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
<div>
  <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
  <ul className="space-y-3">
    <li>
      <Link
        to="/about"
        className="text-black hover:text-[#00abbd] transition-colors duration-180"
      >
        About
      </Link>
    </li>
    <li>
      <Link
        to="/works"
        className="text-black hover:text-[#00abbd] transition-colors duration-180"
      >
        Works
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="text-black hover:text-[#00abbd] transition-colors duration-180"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        to="/careers"
        className="text-black hover:text-[#00abbd] transition-colors duration-180"
      >
        Careers
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-black hover:text-[#00abbd] transition-colors duration-180">Contact</Link>
    </li>
  </ul>
</div>


          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Additional Links</h4>
            <ul className="space-y-3">
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Logo Designs</a></li>
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Brochure Designs</a></li>
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Flyer Designs</a></li>
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Packaging Designs</a></li>             
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Wedding cards Designs</a></li>
              <li><a href="/privacy" className="text-black hover:text-[#00abbd] transition-colors duration-180">Privacy Policy</a></li>
              <li><a href="/terms" className="text-black hover:text-[#00abbd] transition-colors duration-180">Terms And Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-black text-sm">
            © {currentYear} Wisecap Design Studio. 
          </p>
          <p className="text-black text-sm mt-4 md:mt-0">
           All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;