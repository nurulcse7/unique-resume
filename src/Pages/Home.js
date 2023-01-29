import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import Slider from "../components/Slider/Slider";
import Faq from "../components/FAQ/Faq";
import HeroSection from "../components/HeroSection";
import MeetOurTeam from "../components/MeetOurTeam/MeetOurTeam";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Slider />
      <HowToWork />
      <CallToAction />
      <Features />
      <Faq></Faq>
      <MeetOurTeam />
    </div>
  );
};

export default Home;
