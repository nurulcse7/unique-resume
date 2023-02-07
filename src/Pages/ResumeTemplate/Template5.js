import React from "react";
import { FaFacebook, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Template5 = ({ data }) => {
  return (
    <div className="py-10 px-5 h=[21.5cm]">
      <section className="  lg:m-10 border border-black rounded-md mx-auto text-left  bg-gray-50  shadow-2xl">
        <div>
          <div className="grid grid-cols-2">
            <img
              className="rounded-full w-4/6"
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="py-3 mx-5  ">
              <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
                {data?.fname} {data?.lname}
              </h1>

              <p className="mt-3 text-lg font-semibold ">{data?.jobTitle}</p>
            </div>
          </div>
        </div>
        {/* ---------------------------------------- */}
        <div className="flex">
          <div className=" lg:pl-8 pl-2 px-4 pb-4 bg-gray-700 rounded-r-2xl  text-white ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center   bg-white text-gray-700">
                  <p>
                    <i className="fa-solid  p-1 fa-address-book"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  contact
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <p>Address: </p>
                  <small className="capitalize">{data.address}</small>
                </div>

                <div className="leading-none pt-3">
                  <p>Mobile: </p>
                  <small className="capitalize">{data.mobileNumber}</small>
                </div>

                <div className="leading-none pt-3">
                  <p>Email: </p>
                  <small className="">{data.email}</small>
                </div>
              </div>
              <div className="mt-2">
                <div className="leading-none pt-3">
                  <p>Social: </p>
                </div>
                <div className="w-full flex items-center  ">
                  <p className="text-xl">
                    <FaGithub />
                  </p>
                  <a
                    rel="noreferrer"
                    href="https://github.com/Mostafizur"
                    className="p-2"
                  >
                    GitHub Link
                  </a>
                </div>
                <div className="w-full flex items-center ">
                  <p className="text-xl">
                    <FaLink />
                  </p>
                  <a
                    rel="noreferrer"
                    href="https://mostafizur-rahman-d2b32.web.app/"
                    className="p-2"
                  >
                    Portfolio Link
                  </a>
                </div>
                <div className="w-full flex items-center  ">
                  <p className="text-xl">
                    <FaFacebook />
                  </p>
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/mostafizur.proo/"
                    className="p-2"
                  >
                    Facebook Link
                  </a>
                </div>
                <div className="w-full flex items-center ">
                  <p className="text-xl">
                    <FaLinkedin />
                  </p>

                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/mostafizur-pro/"
                    className="p-2"
                  >
                    LikedIn Link
                  </a>
                </div>
              </div>

              {/* <div>
                <div className="leading-none pt-3">
                  <p>{data.label}: </p>
                  <a href={data.link} target="_">
                    <small className="">{data.link}</small>
                  </a>
                </div>
              </div> */}
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-white text-gray-700">
                  <p>
                    <i className="fa-solid p-1 fa-diagram-project"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  skills
                </p>
              </div>

              <div>
                {/* {data?.skills?.map((skill, i) => (
                  <div key={i} className="leading-none pt-3">
                    <small className="capitalize">{skill.Skill}</small>
                  </div>
                ))} */}
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-white text-gray-700">
                  <p>
                    <i className="fa-solid p-1 fa-file-pen"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  reference
                </p>
              </div>

              <div>
                {/* {data?.references?.map((reff, i) => (
                  <div key={i} className="leading-none pt-3">
                    <p className="font-semibold capitalize">{reff?.name}</p>
                    <p>
                      <small className="">{reff?.company}</small>
                    </p>
                    <p>
                      <small className="">{reff?.phone}</small>
                    </p>
                    <p>
                      <small className="">{reff?.email}</small>
                    </p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
          <div className=" lg:px-8 lg:w-[13cm] px-4  w-[60%]  lg:h-[22.7cm] text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-address-book"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  about me
                </p>
              </div>

              <div>
                <div className=" pt-3">
                  <p className=" ">{data?.professionalSummary}</p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-briefcase"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg  lg:ml-4 ml-2 font-bold uppercase">
                  experiences{" "}
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {data?.employmentHistory.map((employ) => (
                    <>
                      <div>
                        <div className="flex text-black items-start  text-base">
                          <p className="w-[50%]">{employ?.jobTitle}</p>
                          <p className="w-[50%]">{employ?.employer}</p>
                        </div>

                        <div className="flex items-center mt-2">
                          <p className="w-[50%]">
                            {employ?.date[0].slice(0, 4)} -
                            {employ?.date[1].slice(0, 4)}
                          </p>
                          <p className="w-[50%] mb-3 text-justify">
                            {employ?.description.slice(0, 100) + "..."}
                          </p>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-graduation-cap"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  education{" "}
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {data?.education >= 0 ? (
                    <></>
                  ) : (
                    <>
                      {data?.education.map((edu) => (
                        <>
                          <div>
                            <div className="flex text-black items-start  text-base">
                              <p className="w-[50%]">{edu?.school}</p>
                              <p className="w-[50%]">{edu?.degree}</p>
                            </div>

                            <div className="flex items-center mt-2">
                              <p className="w-[50%]">
                                {edu?.date[0].slice(0, 4)} -
                                {edu?.date[1].slice(0, 4)}
                              </p>
                              <p className="w-[50%] mb-3 text-justify">
                                {edu?.description.slice(0, 100) + "..."}
                              </p>
                            </div>
                          </div>
                        </>
                      ))}
                    </>
                  )}
                  {/* {data?.educationHistory?.map((edu, i) => (
                    <div key={i} className="mt-1 capitalize">
                      <div className="flex text-black items-center font-semibold lg:text-xl">
                        <p className="lg:w-[200px] w-[100px]">{edu?.school}</p>
                        <p>{edu?.degree}</p>
                      </div>

                      <div className="flex items-center mt-2">
                        <p className="lg:w-[380px] w-[130px]">
                          {edu?.startDate} - {edu?.endDate}
                        </p>
                        <small className="w-full text-gray-500">
                          {edu?.discription}
                        </small>
                      </div>
                    </div>
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template5;
