import React from "react";

const Template1 = ({ resumeData, themes }) => {
  return (
    <section className="w-[21cm] text-left relative bg-white h-[29.7cm] shadow-2xl">
      <div
        className={`absolute bg-[${themes}] top-[9.7cm] right-0 w-2  rounded-tl-full h-[20cm]`}
      ></div>
      <div className="flex">
        <div className={`w-[600px] h-[29.7cm] bg-gray-100 relative`}>
          <div
            className={`w-[60px] text-white flex flex-col text-2xl items-center bottom-0 h-[500px] bg-[${themes}] absolute top-0 left-0 justify-end`}
          >
            <div className="flex items-center p-2 ">
              <i className="fa-solid fa-envelope "></i>
            </div>
            <div className="flex items-center p-2 ">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="flex items-center p-2 ">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="flex items-center p-2 ">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="flex items-center p-2  ">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="flex items-center p-2 pb-6 ">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[50px]">
            <div className=" w-[180px] h-[180px] object-cover object-center ">
              <img
                alt=""
                className=" w-full h-full rounded-full ring-2 ring-offset-2 ring-white ring-offset-white"
              />
            </div>
          </div>

          <div className="px-12">
            <div className=" m-1 ">
              <p className="text-lg mx-4 pt-5 ">example@gmail.com</p>
            </div>
            <div className=" m-1 ">
              <p className="text-lg mx-4 pt-2 ">+880 17123432823</p>
            </div>
            <div className=" m-1 ">
              <p className="text-lg mx-4  pt-2 ">GitHub Profile</p>
            </div>
            <div className=" m-1 ">
              <p className="text-lg mx-4  pt-2 ">Linkedin Profile</p>
            </div>
            <div className=" m-1 ">
              <p className="text-lg mx-4  pt-2 ">Portfolio Link</p>
            </div>
            <div className=" m-1 ">
              <p className="text-lg mx-4  pt-3 ">Rangpur, Bangladesh</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mt-2">
              <h3 className="text-2xl uppercase ">Skills</h3>
              <div className="p-1">
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"HTML"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[80%]`}
                    >
                      {" "}
                      80%
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"CSS"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]`}
                    >
                      {" "}
                      60%
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"JavaScript"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[88%]`}
                    >
                      {" "}
                      88%
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"ReactJS"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[70%]`}
                    >
                      {" "}
                      70%
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"NodeJs"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[60%]`}
                    >
                      {" "}
                      60%
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"MongoDB"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[90%]`}
                    >
                      {" "}
                      90%
                    </div>
                  </div>
                </div>
              </div>
              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="text-2xl uppercase ">Education</h3>
              <div className="p-1">
                {resumeData.education.map((degree, i) => (
                  <div key={i} className="flex mt-1 ">
                    <p className="font-bold">{i + 1}.</p>
                    <div className="text-lg ml-3">
                      <p className="font-semibold">
                        {degree.name}
                        <p className="font-light">{degree.duration}</p>
                        <p className="font-light italic ">{degree.address}</p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="text-2xl uppercase ">Langause</h3>
              <div className="p-1">
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"Bangla"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[96%]`}
                    >
                      {" "}
                      96%
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"Engliah"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[70%]`}
                    >
                      {" "}
                      70%
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <div className="flex items-center">
                  <p className="font-bold pr-3 w-[130px]">{"Hindi"}</p>
                  <div class="w-full bg-gray-200 rounded-full ">
                    <div
                      class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[56%]`}
                    >
                      {" "}
                      56%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-red-">
          <div className="w-full h-full">
            <div className="relative my-8 flex flex-col justify-center items-center">
              <h2
                className={`text-3xl  w-[400px] text-center py-3 pb-4 border-2 border-black uppercase font-semibold text-gray-900`}
              >
                {resumeData.fullname}
              </h2>

              <h2 className="font-semibold absolute bottom-[-20px] bg-white px-3 py-1 text-2xl text-black">
                {resumeData.designation}
              </h2>
            </div>
            <div className="">
              <div className="pt-4 px-6">
                <h3 className="text-2xl uppercase">Profile</h3>
                <hr className=" my-2 w-[100px] border-t-2 border-black" />
                <p>{resumeData.profile}</p>
              </div>

              <div className="pt-2 px-6">
                <h3 className="text-2xl uppercase">project</h3>
                <hr className=" my-2 w-[100px] border-t-2 border-black" />
                {resumeData.projects.map((project, i) => (
                  <div className="flex mt-1">
                    <p className="font-bold mr-2">{i + 1}.</p>
                    <div>
                      <p className="font-semibold">{project.name} </p>
                      <p>
                        {" "}
                        <span>
                          <i class="fa-solid fa-calendar-days text-small"></i>
                        </span>{" "}
                        Duration: {project.duration}
                      </p>
                      <p>
                        <i class="fa-solid fa-diagram-project"></i> Feature:
                      </p>
                      {project.features.map((feature) => (
                        <div className="ml-6 flex items-center">
                          <span className="mr-4">
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
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </span>
                          <p className="">{feature.name}</p>
                        </div>
                      ))}

                      <p className="">
                        {" "}
                        <span>
                          <i class="fa-solid fa-earth-americas"></i>
                        </span>{" "}
                        Live Link |{" "}
                        <span>
                          <i class="fa-brands fa-github"></i>
                        </span>{" "}
                        Clint Side Link |{" "}
                        <span>
                          <i class="fa-brands fa-github"></i>
                        </span>{" "}
                        Server Side Link
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 w-full text-center">
        <button className="w-[100px] py-3 m-2 font-bold rounded-md bg-blue-600  text-white">
          Prient
        </button>
        <button className="w-[100px] py-3 m-2 font-bold rounded-md bg-red-600  text-white">
          Download
        </button>
      </div>
    </section>
  );
};

export default Template1;
