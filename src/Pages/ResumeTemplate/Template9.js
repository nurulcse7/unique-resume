import { Progress } from "antd";
import React from "react";
import { FaFacebook, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Template9 = ({ data }) => {
  console.log("Template8", data);
  return (
    <section className=" text-left relative my-10 h-[29.7cm]">
      <div className="flex  ">
        <div className=" py-4 w-[68%]">
          <div className=" px-8    text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-xl font-bold uppercase">Profile</p>
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
                      <p className="text-xl font-bold uppercase">
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
                      <p className="text-xl font-bold uppercase">Education </p>
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
                                <p className="w-[50%]">{reference?.fullName}</p>
                                <p className="w-[50%]">{reference?.company}</p>
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
        <div className="w-[32%] rounded-l-md bg-gray-100  ">
          <div className=" px-5   text-black text-center ">
            <div>
              <div className="py-3  ">
                <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
                  {data?.fname}
                  <br /> {data?.lname}
                </h1>

                <p className="mt-3 text-lg font-semibold ">{data?.jobTitle}</p>
              </div>

              <div className="py-8 text-left">
                <p className="mb-2 font-semibold border-b-2 border-gray-600">
                  DETAILS
                </p>
                <div className="leading-none ">
                  <p className="capitalize">
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
              <p className="mb-2 font-semibold text-left border-b-2 border-gray-600">
                SOCAIL LINK
              </p>

              <div>
                <div className="w-full  ">
                  {data?.websites.map((website) => (
                    <>
                      {website?.label == "Facebook" ? (
                        <>
                          <div className="flex justify-start gap-5 text-left items-center">
                            {" "}
                            <a
                              rel="noreferrer"
                              href={website.Link}
                              className=" text-xl"
                            >
                              <FaFacebook />
                            </a>
                            <p>Facebook</p>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {website?.label == "GitHub" ? (
                        <>
                          <div className="flex justify-start gap-5 mt-2 text-left items-center">
                            {" "}
                            <a
                              rel="noreferrer"
                              href={website.Link}
                              className=" text-xl"
                            >
                              <FaGithub />
                            </a>
                            <p>Github</p>
                          </div>{" "}
                        </>
                      ) : (
                        <></>
                      )}
                      {website?.label == "Portfolio" ? (
                        <>
                          <div className="flex justify-start gap-5 mt-2 text-left items-center">
                            {" "}
                            <a
                              rel="noreferrer"
                              href={website.Link}
                              className=" text-xl"
                            >
                              <FaLink />
                            </a>
                            <p>Portfolio</p>
                          </div>{" "}
                        </>
                      ) : (
                        <></>
                      )}
                      {website?.label == "LinkedId" ? (
                        <>
                          <div className="flex justify-start gap-5 mt-2 text-left items-center">
                            {" "}
                            <a
                              rel="noreferrer"
                              href={website.Link}
                              className=" text-xl"
                            >
                              <FaLinkedin />
                            </a>
                            <p>LinkedIn</p>
                          </div>{" "}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <p className="mb-2 font-semibold text-left border-b-2 border-gray-600">
                  SKILLS
                </p>
                <div className=" text-left ">
                  <div className="leading-none ">
                    <div className=" grid grid-cols-1  ">
                      {data?.skills.map((skill) => (
                        <>
                          <div>
                            <p className="">{skill.technology}</p>
                            <Progress
                              percent={skill?.level}
                              steps={5}
                              //   strokeColor={[green[6], green[6], red[5]]}
                            />
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="mb-2 font-semibold  text-left border-b-2 border-gray-600">
                  HOBBIES
                </p>

                <div className="leading-none mt-2">
                  <p className="block text-left">{data?.hobbies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template9;
