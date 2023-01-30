import React from "react";
import hero1 from "../../../../assets/hero.png";
import style from "../../../../style";
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
                <button
                  type="button"
                  className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Choose Template
                </button>
                <button
                  type="button"
                  className="inline-block px-5 py-3 border-[1px] border-white text-white font-medium text-sm leading-snug uppercase rounded-md hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Contact Us
                </button>
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
