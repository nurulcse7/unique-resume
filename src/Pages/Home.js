import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import Faq from "./Home/HomeComponents/FAQ/Faq";
import HeroSection from "./Home/HomeComponents/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowToWork />

      <CallToAction />
      <Features />
      <Faq></Faq>
    </div>
  );
};

export default Home;
