import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/logo/wisecap.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to close menu on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Header background should change to solid when scrolled
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Lock body scroll when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isOpen]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Works', href: '/works' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
  ];

  // Tailwind Class for the mobile menu panel transition: RIGHT SLIDE-IN
  // Background is already set to the dark color: bg-[#1E2A47]
  const panelClasses = `fixed top-0 right-0 h-full w-64 max-w-xs bg-[#1E2A47] shadow-2xl border-l border-wc-primary-deep/10 transform transition-transform duration-300 ease-in-out z-[100] p-6 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`;

  return (
    <header 
      // FIX: Apply solid dark background when scrolled, keep transparent at top.
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1E2A47]/95 shadow-xl h-23' // Solid Dark Blue (with slight transparency) when scrolled
          : 'bg-transparent h-23' // Fully transparent when at the top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center h-full">
          {/* Logo (Left Side) - Color changes based on header background state */}
          <div className="flex items-center">
            <a href="/" 
               // Logo text color changes to white when scrolled down (header is dark)
               className={`font-semibold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-[#1E2A47]'}`}
            >
              <img 
                src={logo} 
                alt="Wisecap Design Studio" 
                // We'll filter the logo to white when scrolled (if the original image is dark)
                className={`w-auto transition-all duration-300 h-10 ${isScrolled ? 'filter brightness-200' : ''}`}
              />
            </a>
           
          </div>

          {/* Hamburger button (Right Side) - Icon color changes based on header background state */}
          <div className="z-50"> 
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors duration-180 p-1" 
            >
              {/* Icon color must be white when header is dark or menu is open, dark blue when header is transparent/closed */}
              {/* Note: If the menu is open, the icon is X and should be white against the dark menu panel */}
              {isOpen ? 
                <X size={28} className="text-[#ddbf74]" /> : 
                <Menu size={28} className={`${isScrolled ? 'text-[#ddbf74]' : 'text-[#ddbf74]'}`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================= */}
      {/* SLIDE-IN NAVIGATION PANEL (Background is DARK: #1E2A47) */}
      {/* ======================================================= */}

      {/* 1. Backdrop/Overlay (Visible when open) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300"
          onClick={() => setIsOpen(false)} 
        ></div>
      )}

      {/* 2. Slide-in Navigation Panel */}
      <div className={panelClasses}>
        <div className="flex justify-end pt-2 pb-8">
          {/* Close button inside the panel (white/light for dark background) */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-orange-500 transition-colors duration-180"
          >
            <X size={28} />
          </button>
        </div>
        
        {/* Navigation Links - Colors are white/light for contrast against the dark panel background */}
        <nav className="space-y-6">
          {navigation.map((item) => (
            <a
              // key={item.name}
              href={item.href}
              className="block text-xl font-semibold text-white hover:text-orange-500 transition-colors duration-180 border-b border-gray-600 pb-2"
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
          <a
            href="/contact"
            // Keeping the primary button style
            className="mt-8 block text-center bg-wc-primary-teal text-white py-3 rounded-xl font-semibold hover:bg-wc-primary-deep transition-colors duration-300"
            onClick={handleLinkClick}
          >
            Work with us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;









// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import logo from '../../assets/images/logo/wisecap.png';

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navigation = [
//     { name: 'About', href: '/about' },
//     { name: 'Works', href: '/works' },
//     { name: 'Services', href: '/services' },
//     // { name: 'Studio', href: '/about' },
//     { name: 'Careers', href: '/careers' },
//   ];

//   return (
//     <header 
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-wc-paper/95 backdrop-blur-md border-b border-wc-primary-deep/10 h-23 shadow-sm' 
//           : 'bg-transparent h-23'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <div className="flex justify-between items-center h-full">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="/" className="text-[#1E2A47] font-semibold text-xl tracking-tight">
//               <img 
//                 src={logo} 
//                 alt="Wisecap Design Studio" 
//                 className={`w-auto transition-all duration-300 ${
//                   isScrolled ? 'h-10' : 'h-10'
//                 }`}
//               />
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="font-epilogue lg:font-extrathin hover:text-wc-primary-deep transition-colors duration-180 text-lg font-medium"
//               >
//                 {item.name}
//               </a>
//             ))}
//             <a
//               href="/contact"
//               className="font-Epilogue lg:font-extrathin font-medium"
//             >
//               Work With Us
//             </a>
//           </nav>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-wc-charcoal hover:text-wc-primary-deep transition-colors duration-180"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden absolute top-full left-0 right-0 bg-wc-paper border-b border-wc-primary-deep/10 shadow-lg">
//           <div className="px-4 py-6 space-y-4">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="block text-wc-charcoal hover:text-wc-primary-deep transition-colors duration-180 text-base font-medium"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//             <a
//               href="/contact"
//               className="block btn-primary text-center"
//               onClick={() => setIsOpen(false)}
//             >
//               Work with us
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;