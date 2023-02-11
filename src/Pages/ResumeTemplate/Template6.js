import { Progress } from "antd";
import React from "react";
import { FaFacebook, FaGithubSquare, FaLink, FaLinkedin } from "react-icons/fa";

const Template6 = ({ data }) => {
  console.log("Template6", data);

  return (
    <div className="py-10 px-5 h=[21.5cm]">
      <section className="m-10 border border-black rounded-md mx-auto text-left  shadow-2xl">
        <div className="flex  ">
          <div className="w-[32%] rounded-l-md  bg-gray-100 h-full ">
            <div className=" px-5   text-black text-center ">
              <div>
                <div className="py-3  ">
                  <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
                    {data?.fname}
                    <br /> {data?.lname}
                  </h1>

                  <p className="mt-3 text-lg font-semibold ">
                    {data?.jobTitle}
                  </p>
                </div>

                <div className="py-8 text-left">
                  <div className="leading-none pt-8 border-t-2 border-gray-600">
                    <p className="capitalize">
                      {" "}
                      <strong>Phone: </strong>
                      {data?.mobileNumber}
                    </p>
                  </div>
                  <div className="leading-none pt-3 ">
                    <p className="capitalize">
                      <strong>Email: </strong>
                      {data?.email}
                    </p>
                  </div>

                  <div className="leading-none pt-3">
                    <p>
                      <strong>Address: </strong>
                      {data?.address}{" "}
                    </p>
                  </div>
                </div>

                <div className="border-t-2 border-gray-600  pt-4 ">
                  <div className="w-full flex items-center ">
                    <p className="text-3xl">
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

                  <div className="w-full flex items-center pt-3 ">
                    <p className="text-3xl">
                      <FaGithubSquare />
                    </p>
                    <a
                      rel="noreferrer"
                      href="https://github.com/Mostafizur"
                      className="p-2"
                    >
                      GitHub Link
                    </a>
                  </div>

                  <div className="w-full flex items-center pt-3">
                    <p className="text-3xl">
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

                  <div className="w-full flex items-center pt-3 ">
                    <p className="text-3xl">
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
                </div>
                <div className="mt-3">
                  {/* <div className="flex py-2  items-center border-b-2 border-gray-300">
                  <p className="text-2xl font-bold uppercase">skills </p>
                </div> */}

                  <div className="border-t-2 border-gray-600 text-left pt-4">
                    <div className="leading-none ">
                      <div className=" grid grid-cols-1  ">
                        {data?.skills.map((skill) => (
                          <>
                            <div>
                              <p className="">{skill.technology}</p>
                              <Progress
                                percent={skill?.level}
                                // steps={5}
                                // strokeColor={[green[6], green[6], red[5]]}
                              />
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" py-4 w-[68%]">
            <div className=" px-8    text-gray-700 ">
              <div>
                <div className="flex py-2  items-center border-b-2 border-gray-300">
                  <p className="text-2xl font-bold uppercase">Profile</p>
                </div>

                <div>
                  <div className=" pt-3 text-justify">
                    <p className=" ">{data?.professionalSummary}</p>
                  </div>
                </div>
              </div>

              {/* Experiences */}
              <div className="mt-3">
                {data?.employmentHistory >= 0 ? (
                  <></>
                ) : (
                  <>
                    <div>
                      <div className="flex py-2  items-center border-b-2 border-gray-300">
                        <p className="text-2xl font-bold uppercase">
                          Experiences{" "}
                        </p>
                      </div>

                      <div>
                        <div className=" pt-3">
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
                  </>
                )}
              </div>

              {/* Education */}
              <div className="mt-2">
                {data?.education >= 0 ? (
                  <></>
                ) : (
                  <>
                    <div>
                      <div className="flex items-center border-b-2 border-gray-300">
                        <p className="text-xl font-bold uppercase">
                          Education{" "}
                        </p>
                      </div>
                      <div className=" pt-3">
                        {data?.education.map((edu) => (
                          <>
                            <div>
                              <div className="flex text-black items-start  text-base">
                                <p className="w-[50%]">{edu?.school}</p>
                                <p className="w-[50%]">{edu?.degree}</p>
                              </div>

                              <div className="flex items-center mt-2">
                                <p className="w-[50%]">
                                  {edu?.startDate.slice(0, 4)} -
                                  {edu?.endDate.slice(0, 4)}
                                </p>
                                <p className="w-[50%] mb-3 text-justify">
                                  {edu?.description.slice(0, 100) + "..."}
                                </p>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* References */}
                <div>
                  {data?.references >= 0 ? (
                    <></>
                  ) : (
                    <>
                      <div>
                        <div className="flex items-center border-b-2 border-gray-300">
                          <p className="text-xl font-bold uppercase">
                            Reference{" "}
                          </p>
                        </div>
                        <div className="leading-none pt-3">
                          {data?.references.map((reference) => (
                            <>
                              <div>
                                <div className="flex text-black items-start  text-base">
                                  <p className="w-[50%]">
                                    {reference?.fullName}
                                  </p>
                                  <p className="w-[50%]">
                                    {reference?.company}
                                  </p>
                                </div>
                                <div className="flex text-black items-start  text-base">
                                  <p className="w-[50%]">Phone Number :</p>
                                  <p className="w-[50%]">{reference?.phone}</p>
                                </div>
                                <div className="flex text-black items-start  text-base">
                                  <p className="w-[50%]">E-mail :</p>
                                  <p className="w-[50%]">{reference?.email}</p>
                                </div>

                                <div className="flex items-center mt-2"></div>
                              </div>
                            </>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template6;
