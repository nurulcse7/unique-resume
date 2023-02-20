import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

import tem1 from "../../../../assets/blog/tem1.webp";
const RightSidebar = () => {
  const socialLink = [
    {
      id: 1,
      icon: <BsFacebook />,
      to: "https://facebook.com",
    },
    {
      id: 2,
      icon: <BsTwitter />,
      to: "https://twitter.com",
    },
    {
      id: 3,
      icon: <BsInstagram />,
      to: "https://instagram.com",
    },
  ];

  return (
    <div className="sticky top-[90px] ">
      <div className="w-[85%] mx-auto pt-6 pb-3 mb-3 px-1 bg-[#111c4c] rounded-lg ">
        <img
          className="w-[90%] mx-auto h-[250px] text-center "
          src={tem1}
          alt=""
        />
        <div>
          <h1 className="text-white font-bold text-3xl my-2">
            Create Your Resume Within 10 minutes
          </h1>
          <p className="font-semibold text-gray-300 my-1">
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for.
          </p>
        </div>

        <div className="pt-2 border-t-2">
          <Link
            to="/resume-templates"
            type="button"
            className="text-xl font-medium text-white  "
          >
            Create Your Resume
          </Link>
        </div>
      </div>

      <div className="w-[85%] my-1 mx-auto">
        <h1 className="text-xl text-gray-600">Share this Blog </h1>
      </div>
      <ul className="flex justify-center gap-x-6 mt-2 w-[85%] mx-auto">
        {socialLink.map((s) => (
          <a
            key={s.id}
            href={s.to}
            target="_blank"
            rel="noreferrer"
            className="text-[#111c4c] text-3xl"
          >
            {s.icon}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
