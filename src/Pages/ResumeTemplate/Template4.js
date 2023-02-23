import React from "react";

const Template4 = ({ data }) => {
  return (
    <section className=" text-left relative my-5">
      <div className="flex">
        <div className=" bg-[#0f5b31] h-full w-[40%] text-white p-12">
          <div className="leading-none">
            <h2 className=" leading-none uppercase text-2xl font-semibold">
              {data?.fname}
              {data?.lname}
            </h2>
            <p className="text-base">{data?.jobTitle}</p>
          </div>
          <div className="w-full mt-10 ">
            <p className="font-bold uppercase">Details</p>
            <hr className="border-t-2 border-white" />

            <div>
              <div className=" pt-2">
                <p className="font-bold">Address: </p>
                <p className="capitalize">{data?.address}</p>
              </div>

              <div className=" pt-2">
                <p className="font-bold">Mobile: </p>
                <p className="capitalize">{data?.mobileNumber}</p>
              </div>

              <div className="pt-2">
                <p className="font-bold"> Email: </p>
                <p className="">{data?.email}</p>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full mt-5 ">
              <p className="font-bold uppercase">skills</p>
              <hr className="border-t-2 border-white" />

              <div>
                <div className="flex justify-between items-center">
                  <p className="">
                    <span>
                      {data?.skills.map((skill) => (
                        <>
                          <div className=" gap-2">
                            <p>{skill.technology}</p>
                            <input
                              type="range"
                              className="w-full"
                              value={skill.level}
                            />
                          </div>
                        </>
                      ))}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-5 ">
              <div className="w-full  ">
                <p className="font-bold ">LANGUAGES</p>
                <hr className="border-t-2 border-white" />

                <div>
                  <div className="leading-none ">
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

              <div className="w-full mt-5 ">
                <p className="font-bold uppercase ">Hobbies</p>
                <hr className="border-t-2 border-white" />

                <div className="leading-none mt-2">
                  <div className="">
                    <p className="block">{data?.hobbies}</p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-5 ">
                <p className="font-bold uppercase ">Reference</p>
                <hr className="border-t-2 border-white" />

                <div>
                  <div className="leading-none mt-2">
                    <div className="flex">
                      <p>
                        <small>
                          <i className="fa-solid pr-2 fa-star"></i>
                        </small>
                      </p>
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
                                <p className="my-1">{reference.fullName}</p>
                                <p className="my-1">{reference.phone}</p>
                                <p className="my-1">{reference.email}</p>
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
        </div>

        <div className="  max-w-[70%] p-8 h-full">
          <div>
            <div className="w-full mt-10 ">
              <p className="font-bold  uppercase">SUMMARY</p>
              <hr className="border-t-2 border-[#0f5b31]" />

              <div className="text-justify">{data?.professionalSummary}</div>
            </div>

            <div className="w-full  ">
              <div className=" my-5 w-full">
                <p className="font-bold border-b-2 border-black">EXPERIENCE</p>

                <div>
                  {data?.employmentHistory.map((employee) => (
                    <>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold mt-2">
                          {employee.jobTitle}
                        </p>
                        <p>
                          {employee?.startDate?.slice(0, 7)} - {""}
                          {employee?.endDate?.slice(0, 7)}

                        </p>
                      </div>

                      <p className="">{employee.employer}</p>
                      <p className="">{employee.description}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full  ">
              <div className=" my-5 w-full">
                <p className="font-bold uppercase border-b-2 border-black">
                  InternShip
                </p>

                <div>
                  {data?.internShips.map((internShips) => (
                    <>
                      <div className="flex justify-between items-center">
                        <p className="font-semibold mt-2">
                          {internShips.jobTitle}
                        </p>
                        <p>
                          {internShips?.startDate.slice(0, 7)} -{" "}
                          {internShips?.endDate?.slice(0, 7)}
                        </p>

                      </div>

                      <p className="">{internShips.employer}</p>
                      <p className="">{internShips.description}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full my-5 ">
              <p className="font-bold uppercase border-b-2 border-black">
                Education
              </p>

              <div>
                {data?.education.map((edu) => (
                  <>
                    <div className="my-3">
                      <p className=" font-semibold">{edu.degree}</p>
                      <div className="flex justify-between">
                        <p className=" ">{edu.school}</p>
                        <p>
                          {edu?.startDate?.slice(0, 7)} - {""}
                          {edu?.endDate?.slice(0, 7)}
                        </p>
                      </div>
                      <h3 className="font-semibold italic">Description:</h3>

                      <p className=" mb-3 text-justify">{edu?.description}</p>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template4;
