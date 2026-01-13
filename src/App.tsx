import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Layout
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// Pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import WorkDetails from "./pages/WorkDetails";
import NewsletterViewer from "./pages/NewsletterViewer";

function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/Wisecap-design-studio" : "/"}>
      <LayoutWrapper />
    </Router>
  );
}

function LayoutWrapper() {
  const location = useLocation();

  // Detect base path (important for Vite dev mode)
  const base = import.meta.env.DEV ? "/Wisecap-design-studio" : "";

  // Get actual path without base
  const path = location.pathname.replace(base, "");

  // Hide Header & Footer ONLY on `/portfolio`
  const hideLayout = path === "/portfolio";

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {!hideLayout && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/works/:slug" element={<WorkDetails />} />

          {/* PDF Viewer Route */}
          <Route path="/:slug" element={<NewsletterViewer />} />
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;









// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';

// // Pages
// import Home from './pages/Home';
// import Works from './pages/Works';
// import Services from './pages/Services';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Insights from './pages/Insights';
// import Careers from './pages/Careers';
// import WorkDetails from './pages/WorkDetails';
// import NewsletterViewer from './pages/NewsletterViewer';

// function App() {
//   return (
//     <Router basename={import.meta.env.DEV ? "/Wisecap-design-studio" : "/"}>
//       {/* basename={import.meta.env.DEV ? "/Wisecap-design-studio" : "/"} */}
//       <div className="min-h-screen bg-white overflow-x-hidden">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/works" element={<Works />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/insights" element={<Insights />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/works/:slug" element={<WorkDetails />} />
//             <Route path="/:slug" element={<NewsletterViewer />} />
            
//           </Routes>
            
//         </main>
//         <Footer />
//       </div>
      
//     </Router>
    
//   );
// }

// export default App;





