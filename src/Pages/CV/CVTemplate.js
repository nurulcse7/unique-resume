import { Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import cv1 from "../../assets/CV/01.png";
import cv2 from "../../assets/CV/02.jpg";
import cv3 from "../../assets/CV/03.png";
import cv4 from "../../assets/CV/04.png";

const CVTemplate = () => {
  return (
    <div className="pt-20">
      <div>
        <h1 className="text-5xl font-bold">Free CV templates</h1>
        <p className="text-lg my-2 mx-auto">
          Stand out and get hired faster with our collection of free
          professional CV Templates templates expertly-designed to land you the
          perfect position.
        </p>
        <Link to="/cv-templete">
          <button
            type="button"
            className="inline-block px-5 py-3 border-[1px]  hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Create My CV
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-10 m-20">
        <Link to="/cv-templetes">
          {" "}
          <Card
            hoverable
            //   style={{
            //     width: 240,
            //   }}
            className="w-full"
            cover={<img alt="example" src={cv1} />}
          >
            <h3 className="text-2xl font-bold uppercase">Denver Dahl</h3>
            <p>
              A Web-inspired resume template perfect for chatting up your
              achievements
            </p>
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          </Card>
        </Link>
        <Link to="/cv-templetes">
          {" "}
          <Card
            hoverable
            //   style={{
            //     width: 240,
            //   }}
            className="w-full"
            cover={<img alt="example" src={cv2} />}
          >
            <h3 className="text-2xl font-bold uppercase">Toronto</h3>
            <p>
              A Web-inspired resume template perfect for chatting up your
              achievements
            </p>
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          </Card>
        </Link>
        <Link to="/cv-templetes">
          <Card
            hoverable
            //   style={{
            //     width: 240,
            //   }}
            className="w-full"
            cover={<img alt="example" src={cv3} />}
          >
            <h3 className="text-2xl font-bold uppercase">John Smith</h3>
            <p>
              A Web-inspired resume template perfect for chatting up your
              achievements
            </p>
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          </Card>
        </Link>
        <Link to="/cv-templetes">
          <Card
            hoverable
            //   style={{
            //     width: 240,
            //   }}
            className="w-full"
            cover={<img alt="example" src={cv4} />}
          >
            <h3 className="text-2xl font-bold uppercase">Robert Williams</h3>
            <p>
              A Web-inspired resume template perfect for chatting up your
              achievements
            </p>
            {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CVTemplate;
