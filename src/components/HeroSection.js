import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../assets/hero.png";
import style from "../style";

const HeroSection = () => {
  return (
    <div>
      <section
        className={`${style.padding} pt-20 lg:pt-8  bg-gradient-to-l from-primary via-secondary to-secondary`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between lg:flex-row ">
            <div className="w-full flex-1 lg:ml-[3%] text-center lg:text-left lg:w-[50%]">
              <h1 className="text-white font-bold w-full text-2xl md:text-5xl">
                Online Resume Builder With Creative Template
              </h1>
              <p className="text-lg leading-8  text-white my-5">
                {" "}
                Use professional field-tested resume templates that follow the
                exact "resume rules" employers look for. Easy to use and done
                within minutes - try now for free!
              </p>

              <div className="  flex justify-center lg:justify-start gap-x-3">
                <Link to="/resume-Templates">
                  <button
                    type="button"
                    className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Choose Template
                  </button>
                </Link>
                <Link to="/contact">
                  <button
                    type="button"
                    className="bg-transparent md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-white "
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"

                  >
                    Contact Us
                  </button>
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

export default HeroSection;
