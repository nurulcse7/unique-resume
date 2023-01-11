import { Carousel } from "antd";
import React from "react";
import img1 from "../../../assete/slider-image/01.jpg";
import img2 from "../../../assete/slider-image/02.jpg";
import img3 from "../../../assete/slider-image/03.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel autoplay className="container w-4/6 mx-auto">
        <img src={img1} alt="" />

        <img src={img2} alt="" />

        <img src={img3} alt="" />
      </Carousel>
    </div>
  );
};

export default Slider;
