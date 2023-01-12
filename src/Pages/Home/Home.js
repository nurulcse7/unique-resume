import React from "react";
import Faq from "./HomeComponents/FAQ/Faq";
import HeroSection from "./HomeComponents/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      {/* faq section Added*/}
      <Faq />
    </div>
  );
};

export default Home;
