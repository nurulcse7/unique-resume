import React from "react";

const Template1 = ({ data }) => {
  const themes = "#132579";

  const resumeData = null;

  // console.log(data);
  return data.map((d, i) => (
    <section key={i} className=" text-left relative bg-white shadow-2xl">
      <div className="flex">
        <div className={`lg:w-[600px] lg:h-[29.7cm] bg-gray-100 relative`}>
          <div
            className={`absolute bg-[${themes}] bottom-0  right-0 lg:w-2 w-1  rounded-tl-full h-[200px] `}
          ></div>
          <div
            className={`w-[10%] lg:w-[50px] text-white flex flex-col lg:text-2xl items-center bottom-0 lg:h-[500px] h-[34.5%] bg-[${themes}] absolute top-0 left-0 justify-end`}
          >
            <div className="flex items-center py-1 lg:p-2 ">
              <i className="fa-solid fa-envelope "></i>
            </div>
            <div className="flex items-center py-1 lg:p-2 ">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="flex items-center py-1 lg:p-2 ">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="flex items-center py-1 lg:p-2 ">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="flex items-center py-1 lg:p-2  ">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="flex items-center py-1 lg:p-2 lg:pb-6 pb-2 ">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </div>
          </div>
          <div className="w-full flex justify-center mt-[50px]">
            <div className=" lg:w-[180px] lg:h-[180px] object-cover object-center w-[100px] h-[100px] ">
              <img
                src=""
                alt=""
                className=" w-full h-full rounded-full ring-2 ring-offset-2 ring-white ring-offset-white"
              />
            </div>
          </div>

          <div className="lg:px-10 pt-6 lg:pt-0 lg:p-1">
            <div className=" mt-1  lg:m-1 lg:mt-0 mx-2 ">
              {d?.personalInformation?.map((info) => (
                <p className="lg:text-lg mx-4 lg:pt-5 ">{info?.email}</p>
              ))}
            </div>
            <div className=" mt-  lg:m-1 lg:mt-0 mx-2 ">
              {d?.personalInformation?.map((info) => (
                <p className="lg:text-lg mx-4 lg:pt-2 ">{info?.phone}</p>
              ))}
            </div>

            {d?.websiteAndSocialLinks?.map((link) => (
              <div className=" lg:m-1 lg:mt-0 mx-2 lg:pt-2">
                <a className="lg:text-lg mx-4 capitalize " href={link?.link}>
                  {link?.label} Profile
                </a>
              </div>
            ))}

            <div className="  lg:m-1 lg:mt-0 mx-2  ">
              {d?.personalInformation?.map((info) => (
                <p className="lg:text-lg mx-4  lg:pt-3 ">
                  {info?.city}, {info?.country}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:p-6 p-4">
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">Skills</h3>
              <div className="p-1">
                {d?.skills?.map((skill) => (
                  <div key={skill?.Skill} className="flex items-center">
                    <p className="font-bold small lg:pr-3 w-[130px]">
                      {skill?.Skill}
                    </p>
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div
                        class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${skill?.level}%]`}
                      >
                        {" "}
                        {skill?.level}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="lg:text-2xl text-lg uppercase ">Education</h3>
              <div className="p-1">
                {d?.educationHistory?.map((education, i) => (
                  <div key={i} className="flex mt-1 ">
                    <p className="font-bold">{i + 1}.</p>
                    <div className="lg:text-lg ml-3">
                      <p className="font-semibold capitalize">
                        {education?.degree}
                        <p className="font-light">
                          {education?.startDate} - {education?.endDate}
                        </p>
                        <p className="font-light italic ">
                          {education?.school} - <span>{education?.city}</span>
                        </p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="lg:text-2xl text-lg uppercase ">Langause</h3>
              {d?.languages?.map((lang) => (
                <div className="p-1">
                  <div key={lang?.language} className="flex items-center">
                    <p className="font-bold capitalize pr-3 w-[130px]">
                      {lang?.language}
                    </p>
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div
                        class={`bg-[${themes}] text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${lang?.level}%]`}
                      >
                        {" "}
                        {lang?.level}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-full  bg-white">
          <div className="w-full h-full">
            {d?.personalInformation?.map((info) => (
              <div className="relative my-8 flex flex-col justify-center items-center">
                <h2
                  className={`lg:text-3xl text-xl w-[200px] mx-12 lg:mx-0  lg:w-[80%] text-center lg:py-3 pb-4 lg:border-2 border border-black uppercase font-semibold text-gray-900`}
                >
                  {info?.fname} {info?.lname}
                </h2>
                <h2 className="font-semibold absolute capitalize -bottom-3 lg:bottom-[-20px] bg-white px-3 py-1 lg:text-2xl text-black">
                  {info?.jobTitle}
                </h2>
              </div>
            ))}

            <div className="">
              <div className="pt-4 px-6">
                <h3 className="lg:text-2xl text-lg uppercase">Profile</h3>
                <hr className=" lg:my-2 w-[70px] lg:w-[100px] border-t-2 border-black" />
                <p>{d?.professionalSummary[0]}</p>
              </div>

              <div className="pt-2 relative px-6">
                <h3 className="lg:text-2xl text-lg uppercase">project</h3>
                <hr className=" lg:my-2 w-[70px] lg:w-[100px] border-t-2 border-black" />
                {resumeData?.projects.map((project, i) => (
                  <div className="flex mt-1">
                    <p className="font-bold mr-2">{i + 1}.</p>
                    <div>
                      <p className="font-semibold">{project?.name} </p>
                      <p>
                        {" "}
                        <span>
                          <i class="fa-solid fa-calendar-days text-small"></i>
                        </span>{" "}
                        Duration: {project?.duration}
                      </p>
                      <p>
                        <i class="fa-solid fa-diagram-project"></i> Feature:
                      </p>
                      {project?.features?.map((feature) => (
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
                          <p className="">{feature?.name}</p>
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
    </section>
  ));
};

export default Template1;
