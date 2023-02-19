import React from "react";

const Template1 = ({ data }) => {
  console.log("Template1", data);
  return (
    <section className=" text-left relative">
      <div className="flex">
        <div className={`w-[30%] h-[29.7cm]   relative`}>
          <div className="lg:px-6 p-4 mt-2">
            <h3 className="lg:text-2xl text-lg uppercase ">Details</h3>
            <hr className="border-2 my-2 border-black" />
            <p className=" ">{data?.email}</p>
            <p className=" ">{data?.mobileNumber}</p>
            <p className=" ">{data?.address}</p>
          </div>

          <div className="lg:px-6 p-4">
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">Skills</h3>
              <hr className="border-2 my-2 border-black" />
              <div className="p-1">
                {data?.skills.map((skill) => (
                  <>
                    <div className=" gap-2">
                      <p className="small lg:pr-3">{skill.technology}</p>
                      <input
                        type="range"
                        className="w-full"
                        value={skill.level}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">Langause</h3>
              <hr className="border-2 my-2 border-black" />
              <div>
                <div className="leading-none mt-2">
                  <div className="flex items-center gap-5 justify-between">
                    <div className="">
                      {data?.languages.map((language) => (
                        <>
                          <p className="my-2">{language?.language}</p>
                        </>
                      ))}
                    </div>
                    <div>
                      {data?.languages.map((language) => (
                        <>
                          <p className="my-2"> {language?.level}</p>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">hobbies</h3>
              <hr className="border-2 my-2 border-black" />
              <div className="leading-none mt-2">
                <div className="">
                  <p className="block">{data?.hobbies}</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">Reference</h3>
              <hr className="border-2 my-2 border-black" />
              <div>
                <div className="leading-none mt-2">
                  <div className="flex">
                    <div>
                      <p className="font-semibold">
                        {data?.references.map((reference) => (
                          <>{reference.company}</>
                        ))}
                      </p>
                      <div>
                        {data?.references.map((reference) => (
                          <>
                            <div>
                              <p className="my-1">{reference?.fullName}</p>
                              <p className="my-1">{reference?.phone}</p>
                              <p className="my-1">{reference?.email}</p>
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
        </div>

        <div className="w-[70%]  ">
          <div className="w-full h-full">
            <div className="relative my-8 flex flex-col justify-center items-center">
              <h2
                className={`lg:text-3xl text-xl mx-12 lg:mx-0  lg:w-[80%] text-center lg:py-3 py-5 lg:border-2 border border-black uppercase font-semibold text-gray-900`}
              >
                {data?.fname} <br />
                {data?.lname}
              </h2>
              <h2 className="font-semibold absolute capitalize -bottom-3 lg:bottom-[-20px] bg-white px-3 py-1 lg:text-xl text-black">
                {data?.jobTitle}
              </h2>
            </div>

            <div className="">
              <div className="pt-4 px-6">
                <h3 className="lg:text-2xl text-lg  uppercase">SUMMARY</h3>
                <hr className=" lg:my-2 w-full  border-t-2 border-black" />
                <p className="text-justify">{data?.professionalSummary}</p>
              </div>

              <div className="pt-2 relative px-6">
                <h3 className="lg:text-2xl text-lg uppercase">EDUCATION</h3>
                <hr className=" lg:my-2 w-full  border-t-2 border-black" />
                <div>
                  {data?.education.map((edu) => (
                    <>
                      <div className="my-3">
                        <p className=" font-semibold">{edu?.degree}</p>
                        <div className="flex justify-between">
                          <p className=" ">{edu?.school}</p>
                          <p>
                            {edu?.startDate?.slice(0, 4)} -
                            {edu?.endDate?.slice(0, 4)}
                          </p>
                        </div>
                        <h3 className="font-semibold italic">Description:</h3>

                        <p className=" mb-3 text-justify">{edu?.description}</p>
                      </div>
                    </>
                  ))}
                </div>
                <h3 className="lg:text-2xl text-lg uppercase">EXPERIENCE</h3>
                <hr className=" lg:my-2 w-full  border-t-2 border-black" />
                <div>
                  {data?.employmentHistory.map((employee) => (
                    <>
                      <div>
                        <p className="font-semibold mt-2">
                          {employee?.jobTitle}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="">{employee.employer}</p>
                          <p>
                            {employee?.date[0]?.slice(0, 4)} -{" "}
                            {employee?.date[1]?.slice(0, 4)}
                          </p>
                        </div>

                        <p className="">{employee?.description}</p>
                      </div>
                    </>
                  ))}
                </div>
                <h3 className="lg:text-2xl mt-2 text-lg uppercase">
                  internship
                </h3>
                <hr className=" lg:my-2 w-full  border-t-2 border-black" />
                <div>
                  {data?.internShips.map((internShip) => (
                    <>
                      <div>
                        <p className="font-semibold mt-2">
                          {internShip?.jobTitle}
                        </p>
                        <div className="flex justify-between items-center">
                          <p className="">{internShip.employer}</p>

                          <p>
                            {internShip?.date[0]?.slice(0, 4)} -{" "}
                            {internShip?.date[1]?.slice(0, 4)}
                          </p>
                        </div>

                        <p className="">{internShip?.description}</p>
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

export default Template1;
