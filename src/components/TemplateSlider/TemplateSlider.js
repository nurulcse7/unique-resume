import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const sliderText = [
  {
    title: "Slider",
  },
  {
    title: "Slider",
  },
  {
    title: "Slider",
  },
  {
    title: "Slider",
  },
];
const TemplateSlider = () => {
  return (
    <div>
      <Carousel autoplay>
        <h1>slider1</h1>
        <h1>slider1</h1>
        <h1>slider1</h1>
        <h1>slider1</h1>
      </Carousel>
    </div>
  );
};

export default TemplateSlider;
