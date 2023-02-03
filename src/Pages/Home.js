import React from "react";
import CallToAction from "../components/CallToAction/CallToAction";
import Features from "../components/Features/Features";
import HowToWork from "../components/HowToWork/HowToWork";
import Slider from "../components/Slider/Slider";
import Faq from "../components/FAQ/Faq";
import HeroSection from "../components/HeroSection";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Slider />
      <HowToWork />
      <CallToAction />
      <Features />
      <Faq></Faq>
      <MessengerCustomerChat
        pageId='109422248585811'
        appId='1552485545263244'
        //   htmlRef="<REF_STRING>"
      />
    </div>
  );
};

export default Home;
