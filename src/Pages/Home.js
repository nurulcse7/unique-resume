import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";

const Home = () => {
  return (
    <div>
    
      <HowToWork />
      <h1 className="text-4xl text-center m-8">Credit by Rabbi Sikder</h1>
      <CallToAction />
      <Features />
    </div>
  );
};

export default Home;
