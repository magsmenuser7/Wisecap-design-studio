import React from 'react';
import Hero from '../components/Sections/Hero';
import DesignIdeology from '../components/Sections/DesignIdeology';
import FeaturedWork from '../components/Sections/FeaturedWork';
import WisecapProcess from '../components/Sections/WisecapProcess';
import ServicesOverview from '../components/Sections/ServicesOverview';
import DesignPartnerships from '../components/Sections/DesignPartnerships';
import StudioCulture from '../components/Sections/StudioCulture';
import ClosingCTA from '../components/Sections/ClosingCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <DesignIdeology />
      <FeaturedWork />
      <WisecapProcess />
      <ServicesOverview />
      <DesignPartnerships />
      <StudioCulture />
      <ClosingCTA />
    </>
  );
};

export default Home;