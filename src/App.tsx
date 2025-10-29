import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

// Pages
import Home from './pages/Home';
import Works from './pages/Works';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import Careers from './pages/Careers';
import WorkDetails from './pages/WorkDetails';

function App() {
  return (
    <Router basename={import.meta.env.DEV ? "/Wisecap-design-studio" : "/"}>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Header />
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
