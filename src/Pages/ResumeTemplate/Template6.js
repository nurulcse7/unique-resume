import React from "react";
import { FaFacebook, FaGithubSquare, FaLink, FaLinkedin } from "react-icons/fa";

const Template6 = ({ data }) => {
  console.log("Template6", data);

  return (
    <section className="w-[21cm] m-10 border border-black rounded-md mx-auto text-left relative h-[29.7cm] shadow-2xl">
      <div className="flex w-full h-full ">
        <div className="w-[8cm] rounded-l-md  bg-gray-100 h-full ">
          <div className=" px-5   text-black text-center ">
            <div>
              <div className="py-3  ">
                <p className="text-3xl font-bold uppercase">
                  {data?.fname}
                  <br /> {data?.lname}
                </p>

                <p className="mt-3 text-lg font-semibold ">{data?.jobTitle}</p>
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

                {/* <div className="leading-none pt-3">
                  <p>Sreet Name </p>
                </div> */}
                <div className="leading-none pt-3">
                  <p>
                    <strong>Address: </strong>
                    {data?.address}{" "}
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-600  pt-8 ">
                <div className="w-full flex items-center ">
                  {/* <div className="w-[25px] h-[25px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-lg fa-linkedin-in"></i>
                    </p>
                  </div> */}
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
                  {/* <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-3xl fa-github"></i>
                    </p>
                  </div> */}
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
                  {/* <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-solid text-2xl fa-link"></i>
                    </p>
                  </div> */}
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
                  {/* <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-2xl fa-facebook-f"></i>
                    </p>
                  </div> */}
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
            </div>
          </div>
        </div>

        <div className=" py-4">
          <div className=" px-8 w-[13cm]   h-[22.7cm] text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">Profile</p>
              </div>

              <div>
                <div className="leading-none pt-3 text-justify">
                  <small className="capitalize ">
                    {data?.professionalSummary}
                  </small>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">skills </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div className="font-semibold grid grid-cols-2 gap-4 ">
                    {data?.skills.map((skill) => (
                      <>
                        <p>{skill.technology}</p>
                        {/* <p>{skill.level}</p> */}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">experiences </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {data.employmentHistory.map((employ) => (
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
                          <small className="w-[50%] mb-3 text-gray-500 text-justify">
                            {employ?.description.slice(0, 100) + "..."}
                          </small>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex items-center border-b-2 border-gray-300">
                <p className="text-xl font-bold uppercase">Education </p>
              </div>

              <div>
                <div className="leading-none pt-3">
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
                          <small className="w-[50%] mb-3 text-gray-500 text-justify">
                            {edu?.description.slice(0, 100) + "..."}
                          </small>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template6;
