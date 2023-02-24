import React from "react";
import hero1 from "./../../../assets/bannerHero.png";
import style from "../../../style";
import { Link } from "react-router-dom";
const BlogBanner = () => {
  return (
    <div>
      <section
        className={`${style.padding} pt-20 lg:pt-20 lg:pb-20  bg-gradient-to-l from-[#2a65a3] via-[#0d1743] to-[#1c2965]`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row ">
            <div className="w-full flex-1 lg:ml-[3%] text-center lg:text-left lg:w-[50%]">
              <h1 className="text-white font-bold w-full text-2xl md:text-5xl">
                Get started now & Make your job-winning resume
              </h1>
              <p className="text-lg leading-8  text-white my-5">
                A complete guide with step by step expert tips. Writing your
                job-winning resume has never been this easy!
              </p>

              <div className="  flex justify-center lg:justify-start gap-x-3">
                <Link
                  to="/resume-templates"
                  type="button"
                  className="bg-[#2a65a3] md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-[#2a65a3] hover:border-transparent"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Choose Template
                </Link>
                <Link
                  to="/contact"
                  type="button"
                  className="inline-block px-5 py-3 border-[1px] border-white text-white font-medium text-sm leading-snug uppercase rounded-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className=" flex-1">
              <div>
                <img className="w-[95%] h-auto " src={hero1} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogBanner;
