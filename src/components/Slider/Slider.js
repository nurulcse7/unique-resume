import React from "react";
import { Carousel } from "antd";
import img1 from "../../assets/slider/animate1.png";
import img2 from "../../assets/slider/animate2.png";
import img3 from "../../assets/slider/animate3.png";

const Slider = () => {
  return (
    <div className="hidden lg:block">
      <Carousel autoplay>
        <div className="container  mx-auto">
          <section className="mb-5">
            <div className="flex flex-wrap">
              <div className="grow-0  basis-auto w-full lg:w-5/12  lg:mb-0">
                <div className="flex ">
                  <img
                    src={img1}
                    className="w-full rounded-lg  z-10 ml-11"
                    alt=""
                  />
                </div>
              </div>

              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="h-full rounded-lg p-6 lg:pl-12  flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                      Beautiful ready-to-use CV templates
                    </h2>
                    <p className="text-sm md:text-base mb-4">
                      Win over employers and recruiters by using one of our 18
                      elegant, professionally-designed resume templates.
                      Download to word or PDF.
                    </p>

                    <button
                      type="button"
                      className="inline-block px-5 py-3 border-[1px]  hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Select Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container  mx-auto">
          <section className="mb-5  ">
            <div className="flex flex-wrap">
              <div className="grow-0  basis-auto w-full lg:w-5/12 lg:mb-0">
                <div className="flex ">
                  <img
                    src={img2}
                    className="w-full rounded-lg  z-10 ml-11"
                    alt=""
                  />
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="h-full rounded-lg p-6 lg:pl-12  flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                      Try our professional Resume builder now!
                    </h2>
                    <p className="text-sm md:text-base mb-4">
                      Save time with our easy 3-step resume builder. No more
                      writer’s block or formatting difficulties in Word. Rapidly
                      make a perfect resume employers love. Download to word or
                      PDF.
                    </p>

                    <button
                      type="button"
                      className="inline-block px-5 py-3 border-[1px] hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Select Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container  mx-auto">
          <section className="mb-5  ">
            <div className="flex flex-wrap">
              <div className="grow-0  basis-auto w-full lg:w-5/12 lg:mb-0">
                <div className="flex ">
                  <img
                    src={img3}
                    className="w-full rounded-lg  z-10 ml-11"
                    alt=""
                  />
                </div>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                <div className="h-full rounded-lg p-6 lg:pl-12  flex items-center text-center lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                      Free cover letter templates
                    </h2>
                    <p className="text-sm md:text-base mb-4">
                      Stand out and get hired faster with our collection of free
                      professional cover letter templates expertly-designed to
                      land you the perfect position. Download to word or PDF.
                    </p>

                    <button
                      type="button"
                      className="inline-block px-5 py-3 border-[1px] hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Select Template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
