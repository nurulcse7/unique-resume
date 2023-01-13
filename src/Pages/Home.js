import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import Slider from "../components/Slider/Slider";
import Faq from "./Home/HomeComponents/FAQ/Faq";
import HeroSection from "./Home/HomeComponents/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Slider />
      <HowToWork />
      <h1 className="text-4xl text-center m-8">Credit by Rabbi Sikder</h1>
      <CallToAction />
      <Features />
      <Faq></Faq>
    </div>
  );
};

export default Home;
