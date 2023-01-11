import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";

const Home = () => {
  return (
    <div>
      <HowToWork />
      <CallToAction />
      <Features />
    </div>
  );
};

export default Home;
