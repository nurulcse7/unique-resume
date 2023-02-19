import React from "react";

const Cvtemplate4 = ({ data }) => {
  return (
    <div className="my-10 px-5  ">
      <div className="">
        <div className="text-3xl uppercase text-sky-900 my-5">
          <p className="font-bold">{data?.name}</p>
        </div>
        <div className="text-lg">
          <div className="flex">
            <p className="w-[20%] font-bold text-sky-900">
              <i class="fa-solid fa-location-dot"></i> Address{" "}
            </p>{" "}
            <p className="w-[80%]">: {data?.address}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold text-sky-900">
              <i class="fa-solid fa-phone"></i> Phone{" "}
            </p>{" "}
            <p className="w-[80%]">: {data?.mobileNumber}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold text-sky-900">
              {" "}
              <i class="fa-solid fa-envelope"></i> Email{" "}
            </p>{" "}
            <p className="w-[80%]">: {data?.email}</p>
          </div>
        </div>
        <div className="top-20 right-10 absolute mr-5">
          <img width="140" height="190" src={data?.imageUrl} alt="" />
        </div>
      </div>
      <br />
      <br />

      <div className="mt-10 ">
        <p className="text-lg py-2">{data?.carrierObjective}</p>
      </div>
      {/*       Education Qualification */}
      <div>
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-user-graduate"></i> Education Qualification
        </h2>

        <div>
          {data?.education && (
            <div className="py-2">
              {data?.education.map((edu) => (
                <div className="py-2">
                  <div className="flex justify-between">
                    <p className="w-[20%] ">{edu.passingYear}</p>
                    <h2 className="text-lg w-[80%] font-bold  ">
                      <span className="w-fit ">
                        {edu.level.toLowerCase() === "hsc"
                          ? `Higher Secondary Certificate(H.S.C)`
                          : edu.level.toLowerCase() === "ssc"
                          ? `Secondary School Certificate(S.S.C)`
                          : ` ${edu.level}`}
                      </span>
                    </h2>
                  </div>

                  <div className="flex justify-between">
                    <p className="w-[20%] "></p>
                    <p className="w-[80%] text-left ">
                      <span className="font-bold">Grade</span>: {edu.grade}{" "}
                      {edu?.level?.slice(0, 1) === "H" ||
                      edu?.level?.slice(0, 1) === "S" ||
                      edu?.level?.slice(0, 1) === "J" ? (
                        <> (Out of 5.0)</>
                      ) : (
                        <> (Out of 4.0)</>
                      )}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="w-[20%] "></p>
                    <p className="w-[80%] text-left ">
                      {" "}
                      <span className="font-bold">Institution</span>:{" "}
                      {edu.board}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-diagram-project"></i> Projects
        </h2>

        <div className="text-sm ">
          {data?.projects?.map((project, index) => (
            <div className="py-2" key={index}>
              <div className="flex justify-between  ">
                <p className="w-[20%]">{project.range}</p>
                <div className=" w-[80%] ">
                  <h2 className="font-bold text-lg">{project.title}</h2>
                  <div className="">
                    <p className=" text-justify">
                      <span className="font-bold italic"> Decription :</span>{" "}
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
      <div className="mt-5">
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-person-circle-check"></i> Personal Information
        </h2>
        <div className="">
          <div className="flex justify-start ">
            <p className="w-[20%]"> Name </p>
            <p className="w-[80%] ">{data?.name}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Father's Name</p>
            <p className="w-[80%]">{data?.fathersName}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Mother's Name:</p>
            <p className="w-[80%] ">{data?.mothersName}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Date of Birth </p>
            <p className="w-[80%]">{data?.dateOfBirth}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Permanent Address </p>
            <div className="w-[80%] ">
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
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Present Address </p>
            <div className="w-[80%] ">
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
          </div>

          <div className="flex justify-start">
            <p className="w-[20%]"> Gender </p>
            <p className="w-[80%]"> {data?.sex}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Religion </p>
            <p className="w-[80%]"> {data?.religion}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Marital Status</p>
            <p className="w-[80%]"> {data?.maritalStatus}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Blood Group </p>
            <p className="w-[80%]"> {data?.blood}</p>
          </div>
          <div className="flex justify-start">
            <p className="w-[20%]"> Nationality </p>
            <p className="w-[80%]"> {data?.nationality}</p>
          </div>

          <div className="flex justify-start">
            <p className="w-[20%]"> NID </p>
            <p className="w-[80%]"> {data?.nid}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-network-wired"></i> Experience
        </h2>
        <div className="">
          {data?.experience?.map((exp, index) => (
            <div className="py-2" key={index}>
              <div className="flex justify-between  ">
                <p className="w-[20%]">{exp.range}</p>
                <div className=" w-[80%] ">
                  <h2 className="font-bold text-lg">{exp.company}</h2>
                  <p>
                    <span className="font-semibold"> Experience: </span>
                    <span>
                      {exp.years} {exp?.years === "1" ? <>Year</> : <>Years</>}
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
      <div className="mt-5 text-lg">
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-puzzle-piece"></i> Skills
        </h2>

        <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
          {data?.skills?.map((exp, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted border-gray-400"
              key={index}
            >
              <h6>
                <b>{exp.technology}</b>
              </h6>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 text-lg">
        <h2 className="text-xl font-bold text-sky-900 pt-1 pb-2 px-1">
          <i class="fa-solid fa-language"></i> Languages
        </h2>

        <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
          {data?.languageSkills?.map((lan, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted border-gray-400"
              key={index}
            >
              <h6>
                <b>{lan.language}</b>
              </h6>
            </div>
          ))}
        </div>
      </div>

      <div className="py-4 mt-5 text-lg  text-sky-900">
        <p>Best Regards</p>
        <br />
        <p className="text-xl font-bold text-sky-900 ">{data?.name}</p>
      </div>
    </div>
  );
};

export default Cvtemplate4;
