import React from "react";
import Footer from "../shared/Footer/Footer";

import Faq from "./HomeComponents/FAQ/Faq";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      {/* faq section Added*/}
      <Slider />

      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
