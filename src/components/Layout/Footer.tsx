import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import wisecapbg from '../../assets/images/logo/banners/wisecap-bg.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative bg-black"
      style={{
        backgroundImage: `url(${wisecapbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-black">Wisecap</h3>
            <p className="text-black text-lg leading-relaxed mb-6 max-w-md">
             Every project we take on is a personal journey. We collaborate only with brands that resonate with our values, because meaningful design starts with shared vision and trust. For us, it’s not just work it’s passion, infused into every pixel, shade, and shape.
            </p>
            {/* <div className="flex space-x-4">
              <a href="mailto:hello@wisecap.studio" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Mail size={20} />
              </a>
              <a href="tel:+91" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Phone size={20} />
              </a>
              <a href="https://linkedin.com/company/wisecap" className="text-gray-300 hover:text-wc-warm-gold transition-colors duration-180">
                <Linkedin size={20} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-3 ">
              <li><a href="/about" className="text-black hover:text-[#00abbd] transition-colors duration-180">About</a></li>
              <li><a href="/works" className="text-black hover:text-[#00abbd] transition-colors duration-180">Works</a></li>
              <li><a href="/services" className="text-black hover:text-[#00abbd] transition-colors duration-180">Services</a></li>
              <li><a href="/careers" className="text-black hover:text-[#00abbd] transition-colors duration-180">Careers</a></li>
              <li><a href="/contact" className="text-black hover:text-[#00abbd] transition-colors duration-180">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Additional Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-black hover:text-[#00abbd] transition-colors duration-180">Logo Designs</a></li>
              <li><a href="#" className="text-black hover:text-[#00abbd] transition-colors duration-180">Brochure Designs</a></li>
              <li><a href="#" className="text-black hover:text-[#00abbd] transition-colors duration-180">Flyer Designs</a></li>
              <li><a href="#" className="text-black hover:text-[#00abbd] transition-colors duration-180">Packaging Designs</a></li>              <li><a href="#" className="text-black hover:text-white transition-colors duration-180">Wedding cards Designs</a></li>
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