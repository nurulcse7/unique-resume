import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import TemplateSlider from "../components/TemplateSlider/TemplateSlider";

const Home = () => {
  return (
    <div>
      <HowToWork />
      <CallToAction />
      <Features />
      <TemplateSlider />
    </div>
  );
};

export default Home;
