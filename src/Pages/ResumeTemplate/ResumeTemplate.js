import React, { useState } from "react";
import rightBG from "../../assets/Resume/Recume-review.png";
import leftBG from "../../assets/Resume/Artboard-1-copy-2-1-1024x1024.webp";
import banarBG from "../../assets/Resume/banar-bg.png";
import { Link } from "react-router-dom";

const ResumeTemplate = () => {
  const [hover, setHover] = useState(0);
  const [viewResume, setViewResume] = useState("");
  // thats resume template fake data, i will work use this data
  const resumeTemplateData = [
    {
      id: 1,
      type: "free",
      image: "https://i.ibb.co/RYRb4Mz/15.png",
    },

    {
      id: 2,
      type: "free",
      image: "https://i.ibb.co/Wgxv60G/13.png",
    },
    {
      id: 3,
      type: "free",
      image: "https://i.ibb.co/mbhYnrJ/14.png",
    },
    {
      id: 4,
      type: "premium",
      image: "https://i.ibb.co/47MKFqL/1.png",
    },
    {
      id: 5,
      type: "premium",
      image: "https://i.ibb.co/1fShcwn/2.png",
    },
    {
      id: 6,
      type: "premium",
      image: "https://i.ibb.co/KGJ6y3j/3.png",
    },
    {
      id: 7,
      type: "free",
      image: "https://i.ibb.co/Jnx4MYP/4.png",
    },
    {
      id: 8,
      type: "premium",
      image: "https://i.ibb.co/6D2tCz8/5.png",
    },
    {
      id: 9,
      type: "premium",
      image: "https://i.ibb.co/47fTyrV/7.png",
    },
    {
      id: 10,
      type: "free",
      image: "https://i.ibb.co/TqJ1psX/8.png",
    },
    {
      id: 11,
      type: "premium",
      image: "https://i.ibb.co/cQpw7W0/9.png",
    },
    {
      id: 12,
      type: "free",
      image: "https://i.ibb.co/vhhz7yT/10.png",
    },
    {
      id: 13,
      type: "premium",
      image: "https://i.ibb.co/cQpw7W0/9.png",
    },
    {
      id: 14,
      type: "premium",
      image: "https://i.ibb.co/6YSjnjs/12.png",
    },

    {
      id: 15,
      type: "free",
      image: "https://i.ibb.co/mc1hwdh/6.png",
    },
  ];

  return (
    <section className="bg-[#08A4E9] relative  pt-[10vh] xl:pt-[5vh] md:pt-[5vh] sm:pt-6vh ">
      <div
        className=""
        style={{
          backgroundImage: `url(${banarBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
          backgroundColor: "white",
        }}
      >
        <div className="lg:max-w-[1024px] xl:max-w-[1440px] text-left mx-auto relative">
          <div className="p-10">
            <p className="md:text-5xl text-2xl font-bold text-[#030660]">
              Resume Templates
            </p>
            <p className="font-semibold">
              /Freshers & experienced Both people can create resumes.
            </p>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 mx-3 ">
            <div className={`flex justify-between items-center `}>
              <img className="w-1/2" src={leftBG} alt="" />
            </div>
            <div className={`flex justify-end items-center`}>
              <img className="w-1/2" src={rightBG} alt="" />
            </div>
          </div>

          <div className="">
            <div className="absolute lg:bottom-[-280px] rounded-2xl  shadow-xl md:h-[300px]   bg-white/80 w-full">
              <div className="flex lg:grid grid-cols-2 h-full">
                <div className="w-full h-full px-10 lg:p-10">
                  <h2 className="text-xl md:text-4xl font-bold">Resumes</h2>
                  <div className="text-md lg:text-xl font-semibold text-white pt-2 pb-10 grid grid-cols-1 md:grid-cols-3 gap-2  ">
                    <button className="bg-blue-800 py-2 md:w-[130px] xl:w-[200px] rounded-lg shadow-lg">
                      Fresher
                    </button>

                    <button className="bg-blue-800 py-2 md:w-[130px] xl:w-[200px] rounded-lg  shadow-lg">
                      Mid Level
                    </button>
                    <button className="bg-blue-800 py-2 md:w-[130px] xl:w-[200px] rounded-lg shadow-lg">
                      Experience
                    </button>
                  </div>
                  <div className="hidden md:block">
                    <h3 className="text-2xl font-semibold">
                      Pick from 10+ free Resume Templates
                    </h3>
                    <div>
                      <p>
                        Pick one of our free resume templates, fill it out, and
                        land that dream job!
                      </p>
                      <p>
                        Create and download your professional resume in less
                        than 5 minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex  items-center ">
                  <div className="relative">
                    <div className=" top-0 ">
                      <img
                        className="w-[350px] -mt-12 p-1"
                        src="https://www.pngmart.com/files/7/Secretary-PNG-File.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className=" hidden lg:block lg:p-6 lg:text-xl text-md  font-semibold w-full">
                    <p className="text-center">
                      Choosing the Best & <br />
                      <span className="md:text-4xl text-2xl font-bold">
                        Create now!
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:hidden block pb-3 px-3">
                <h3 className="text-2xl font-semibold">
                  Pick from 10+ free Resume Templates
                </h3>
                <div>
                  <p>
                    Pick one of our free resume templates, fill it out, and land
                    that dream job!
                  </p>
                  <p>
                    Create and download your professional resume in less than 5
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1024px] xl:max-w-[1440px] mt-[-280px] sm:mt-[-380px] md:mt-[-130px] lg:mt-[-50px] xl:mt-0 mx-auto ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
          {resumeTemplateData.map((template) => (
            <div key={template.id} className="m-2">
              {/* <div className="m-1 flex justify-center ">
                <button className="  py-1 px-4 bg-white rounded-md flex items-center  shadow-xl">
                  <span className="text-white bg-blue-400 p-1 text-center rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </span>
                  <span className="ml-1 text-xl capitalize font-semibold">
                    {template.type}!
                  </span>
                </button>
              </div> */}
              <div className="cursor-pointer shadow-xl relative  overflow-hidden">
                <div className="absolute top-0 z-20 right-0 m-2 bg-[#030660] rounded-full text-white">
                  <button
                    onClick={() => setViewResume(template.image)}
                    className="h-10 z-50 w-10 flex justify-center items-center text-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>

                <img
                  onMouseOver={() => setHover(template.id)}
                  onMouseOut={() => setHover(0)}
                  className="rounded-lg"
                  src={template.image}
                  alt=""
                />
                <div
                  onMouseOver={() => setHover(template.id)}
                  onMouseOut={() => setHover(0)}
                  className={`absolute ${
                    hover === template.id ? "left-0" : "left-[-100%]"
                  } duration-500 top-0  w-full h-full bg-black/50 rounded-lg`}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <Link
                      to={`../create-resume/${template.id}`}
                      onClick={() => console.log(template.id)}
                      className="font-bold text-white text-2xl py-2 border-2 border-white px-6 rounded-xl bg-black"
                    >
                      Create Resume
                    </Link>
                  </div>
                </div>

                <div
                  onMouseOver={() => setHover(template.id)}
                  onMouseOut={() => setHover(0)}
                  className={` ${
                    hover === template.id ? "hidden" : "absolute"
                  } duration-500 top-0  w-full h-full  rounded-lg`}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    {template.type === "free" ? (
                      <img
                        className="w-1/2"
                        src="https://pngimg.com/d/free_PNG90763.png"
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-1/2"
                        src="https://d28wu8o6itv89t.cloudfront.net/images/achatpremiumnomdedomainepointp-1539465350573.png"
                        alt=""
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {viewResume && (
        <div className="z-50 fixed  top-0 left-0 h-screen bg-black/75 w-full md:h-[29.7cm] ">
          <div className="h-full w-full flex justify-center items-center md:items-start ">
            <div className="md:mt-[100px]">
              <div className=" relative">
                <div className=" text-red-600 absolute -right-28 top-0 rounded-full font-bold bg-white">
                  <button
                    onClick={() => setViewResume("")}
                    className="hidden md:block  py-2 px-4  text-center  text-3xl"
                  >
                    Close
                  </button>
                </div>
              </div>
              <img className="md:h-[22cm] " src={viewResume} alt="" />
              <div className="md:hidden block w-full my-3 ">
                <button
                  onClick={() => setViewResume("")}
                  className=" bg-white text-red-600 rounded-lg border-2 border-red-600  py-2 px-4  text-center  text-3xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResumeTemplate;
