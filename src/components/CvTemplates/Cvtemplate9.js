import React from "react";

const Cvtemplate9 = ({ data }) => {
  console.log("cvTemplate9", data);
  return (
    <div className="my-10 px-5  ">
      <div className="text-3xl grid grid-cols-6  bg-cyan-900 uppercase text-center text-white my-5">
        <div className="font-bold col-span-5">
          <p className="pt-[8%]">{data?.name}</p>
        </div>
        <div className="col-span-1 ">
          <img width="140" height="190" src={data?.imageUrl} alt="" />
        </div>
      </div>

      <div className="text-sm">
        <div className="flex justify-between ">
          <p className="font-bold">
            <i class="fa-solid fa-location-dot" /> {data?.address}
          </p>

          <p className=" font-bold">
            <i class="fa-solid fa-phone" /> {data?.mobileNumber}
          </p>

          <p className="font-bold">
            <i class="fa-solid fa-envelope" /> {data?.email}
          </p>
        </div>
        <div>
          {/*   Present Address */}
          <div className="mt-5 ">
            <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
              Present Address
            </h2>
            {data?.presentAdd?.map((add, index) => (
              <div key={index}>
                <p>
                  {" "}
                  <span className="font-bold">Village</span>: {add.village}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Post</span>: {add.post}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">Post Office</span>: {add.ps}
                </p>
                <p>
                  {" "}
                  <span className="font-bold">District</span>: {add.district}
                </p>
              </div>
            ))}
          </div>
          {/*       Professionbal Summary */}
          <div className="mt-5 ">
            <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
              Professionbal Summary
            </h2>
            <p className="text-lg py-2 text-justify">
              {data?.carrierObjective}
            </p>
          </div>
        </div>
        {/*       Education Qualification */}
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            Education Qualification
          </h2>

          <div>
            {data?.education && (
              <div className="py-2">
                {data?.education.map((edu) => (
                  <div className="py-2">
                    <div className="">
                      <h2 className=" font-bold ">
                        <span className=" ">
                          {edu.level.toLowerCase() === "hsc"
                            ? `Higher Secondary Certificate(H.S.C)`
                            : edu.level.toLowerCase() === "ssc"
                            ? `Secondary School Certificate(S.S.C)`
                            : ` ${edu.level}`}
                        </span>
                      </h2>

                      <div className="">
                        <div className="flex justify-between">
                          <p className=" text-left ">
                            {" "}
                            <span className="font-bold">Institution</span>:{" "}
                            {edu.institution}
                          </p>
                        </div>
                        <p>
                          {" "}
                          <span className="font-bold">Passing Year</span>:{" "}
                          {edu.passingYear}
                        </p>

                        <div className="flex justify-between">
                          <p className="text-left ">
                            <span className="font-bold">Grade</span>:{" "}
                            {edu.grade}{" "}
                            {edu?.level?.slice(0, 1) === "H" ||
                            edu?.level?.slice(0, 1) === "S" ||
                            edu?.level?.slice(0, 1) === "J" ? (
                              <> (Out of 5.0)</>
                            ) : (
                              <> (Out of 4.0)</>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            Projects
          </h2>

          <div className="text-lg ">
            {data?.projects?.map((project, index) => (
              <div className="py-2" key={index}>
                <div className="  ">
                  <div>
                    <h2 className="font-bold">{project.title}</h2>
                  </div>
                  <div>
                    <p className="">
                      <span className="font-bold italic"> Create : </span>
                      {project.range}
                    </p>
                    <div className="">
                      <p className=" text-justify">
                        <span className="font-bold italic"> Decription : </span>{" "}
                        {project.description.split("•")}
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      href={project.link}
                      className=" text-blue-600 font-semibold"
                    >
                      <i class="fa-solid fa-link"></i> Live Link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            {" "}
            Personal Information
          </h2>
          <div className="">
            <div className="flex justify-start ">
              <p className="w-[30%]"> Name </p>
              <p className="w-[70%] ">{data?.name}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Father's Name</p>
              <p className="w-[70%]">{data?.fathersName}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Mother's Name:</p>
              <p className="w-[70%] ">{data?.mothersName}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Date of Birth </p>
              <p className="w-[70%]">{data?.dateOfBirth}</p>
            </div>
            {/* <div className="flex justify-start">
              <p className="w-[30%]"> Permanent Address </p>
              <div className="w-[70%] ">
                {data?.permanentAdd.map((permanent) => (
                  <>
                    <div>
                      <div className="flex">
                        <p>Village : {permanent.village},</p>
                        <p>Post Office : {permanent.post}</p>
                      </div>
                      <div className="flex">
                        <p> Police Station : {permanent.ps},</p>
                        <p>District : {permanent.district}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div> */}
            {/* <div className="flex justify-start">
              <p className="w-[30%]"> Present Address </p>
              <div className="w-[70%] ">
                {data?.presentAdd.map((present) => (
                  <>
                    <div>
                      <div className="flex">
                        <p>Village : {present.village},</p>
                        <p>Post Office : {present.post}</p>
                      </div>
                      <div className="flex">
                        <p> Police Station : {present.ps},</p>
                        <p>District : {present.district}</p>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div> */}

            <div className="flex justify-start">
              <p className="w-[30%]"> Gender </p>
              <p className="w-[70%]"> {data?.sex}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Religion </p>
              <p className="w-[70%]"> {data?.religion}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Marital Status</p>
              <p className="w-[70%]"> {data?.maritalStatus}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Blood Group </p>
              <p className="w-[70%]"> {data?.blood}</p>
            </div>
            <div className="flex justify-start">
              <p className="w-[30%]"> Nationality </p>
              <p className="w-[70%]"> {data?.nationality}</p>
            </div>

            <div className="flex justify-start">
              <p className="w-[30%]"> NID </p>
              <p className="w-[70%]"> {data?.nid}</p>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            {" "}
            Experience
          </h2>
          <div className="">
            {data?.experience?.map((exp, index) => (
              <div className="py-2" key={index}>
                <div className="f  ">
                  <div>
                    {" "}
                    <h2 className="font-bold">{exp.company}</h2>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold"> Complate Year: </span>
                      {exp.range}
                    </p>
                    <p>
                      <span className="font-semibold"> Experience: </span>
                      <span>
                        {exp.years}{" "}
                        {exp?.years === "1" ? <>Year</> : <>Years</>}
                      </span>{" "}
                    </p>
                    <p>
                      <span className="font-semibold"> Address: </span>
                      <span>{exp.place}</span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            {" "}
            Skills
          </h2>

          <div className="text-sm grid grid-cols-2  w-3/6">
            {data?.skills?.map((exp, index) => (
              <div className="  " key={index}>
                <h6>
                  <span className="text-xl">• </span>
                  <b>{exp.technology}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 ">
          <h2 className="text-xl font-bold pt-1 pb-2 px-1 bg-gray-100">
            {" "}
            Languages
          </h2>

          <div className="text-sm ">
            {data?.languageSkills?.map((lan, index) => (
              <div key={index}>
                <h6>
                  <span className="text-xl">• </span>
                  <b>{lan.language}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>

        <div className="py-4 mt-5 text-lg ">
          <p>Best Regards</p>
          <br />
          <p className="border-b-2  border-emerald-900 border-dashed w-1/4"></p>
          <p className="text-xl font-bold ">{data?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Cvtemplate9;
