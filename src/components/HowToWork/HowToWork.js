import React from "react";
import { Link } from "react-router-dom";

const HowToWork = () => {
  return (
    <div className="">
      <div
        id="#work"
        className="dark:bg-secondary dark:text-white text-primary bg-white py-8  relative "
      >
        <div className="container z-[10] relative mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8 text-primary dark:text-white">
            <p className="ml-2 text-secondary dark:text-white uppercase tracking-loose">
              Working Process
            </p>
            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
              Working Process of Fest
            </p>
            <p className="text-sm md:text-base mb-4">
              Here’s your guide to the tech fest 2021 process. Go through all
              the steps to know the exact process of the fest.
            </p>
            <Link
              to="/home"
              className="bg-primary mx-auto cursor-pointer  text-white  rounded shadow hover:shadow-lg py-2 z-10 px-4 border border-primary hover:border-transparent"
            >
              Explore Now
            </Link>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 text-primary dark:text-white  relative z-[10]">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden p-10 h-full">
                <div className="border-2 border-yellow-555 absolute left-[50%]   h-full rounded-sm"></div>
                <div className="border-2 border-yellow-555 absolute left-[50%]   h-full rounded-sm"></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Pick a Template
                    </h4>
                    <p className="text-sm md:text-base leading-snug  text-opacity-100">
                      Don't sabotage your job search before it has even begun.
                      Choose from our ATS-friendly, hand-crafted resume
                      templates
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1  w-5/12 px-1 py-4 text-left">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Customize Your Layout
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-opacity-100">
                      Make the resume template truly your own. Customize the
                      layout based on your experience level.
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="order-1 w-5/12 px-1 py-4 text-right">
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">
                      Fill in the Blanks
                    </h4>
                    <p className="text-sm md:text-base leading-snug text-opacity-100">
                      Fill in your resume information, let our AI content
                      analyzer do its job, and see your resume changes
                      dynamically in real time.
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>

                  <div className="order-1  w-5/12 px-1 py-4">
                    <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">
                      Hit 'Download!'
                    </h4>
                    <p className="text-sm text-start md:text-base leading-snug  text-opacity-100">
                      And yes, it's free! We don't hit you with a paywall once
                      you've completed your resume in the Basic Account. If you
                      use any of our premium features, the software will let you
                      know about it.
                    </p>
                  </div>
                </div>
              </div>
              <img
                alt=""
                className="mx-auto -mt-36 md:-mt-36"
                src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
              />
            </div>
          </div>
          {/* <div className="absolute z-[0] w-[20%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[60%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
