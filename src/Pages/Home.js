import React from 'react';
import CallToAction from '../components/CallToAction/CallToAction';
import Features from '../components/Features/Features';
import HowToWork from '../components/HowToWork/HowToWork';
import Slider from '../components/Slider/Slider';
import Faq from '../components/FAQ/Faq';
import HeroSection from '../components/HeroSection';
import useTitle from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <div>
      <HeroSection />
      <Slider />
      <HowToWork />
      <CallToAction />
      <Features />
      <Faq></Faq>
    </div>
  );
};

export default Home;
