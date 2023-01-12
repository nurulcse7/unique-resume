import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import Slider from "../components/Slider/Slider";
import Faq from "./Home/HomeComponents/FAQ/Faq";

const Home = () => {
  return (
    <div>
      <HowToWork />
      <Slider />
      <h1 className="text-4xl text-center m-8">Credit by Rabbi Sikder</h1>
      <CallToAction />
      <Features />
      <Faq />
    </div>
  );
};

export default Home;
