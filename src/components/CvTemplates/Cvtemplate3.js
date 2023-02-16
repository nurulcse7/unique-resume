import React from "react";

const Cvtemplate3 = ({ data }) => {
  console.log("cvTemplate3", data);
  return (
    <div className="py-10 px-5  ">
      <div className="">
        <h2 className="text-4xl underline text-center font-bold mb-5">
          CURRICULUM VITAE
        </h2>
        <div className="text-lg">
          <div className="flex">
            <p className="w-[20%] font-bold">Name </p>
            <p className="w-[80%] font-bold">: {data?.name}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Address </p>{" "}
            <p className="w-[80%]">: {data?.address}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Tel </p>{" "}
            <p className="w-[80%]">: {data?.mobileNumber}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Email </p>{" "}
            <p className="w-[80%]">: {data?.email}</p>
          </div>
        </div>
        <div className="top-20 right-10 absolute mr-5">
          <img width="140" height="190" src={data?.imageUrl} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          personal Data
        </h2>
        <div className="text-lg mt-2">
          <div className="flex">
            <p className="w-[20%] font-bold">Nationality </p>
            <p className="w-[80%] ">: {data?.nationality}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Sex </p>{" "}
            <p className="w-[80%]">: {data?.sex}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Marital Status </p>{" "}
            <p className="w-[80%]">: {data?.maritalStatus}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Date of Birth </p>{" "}
            <p className="w-[80%]">: {data?.dateOfBirth}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Education
        </h2>
        <div className="text-lg">
          {data?.education && (
            <div className="py-2">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-[20%] border-2 border-black">
                      Course Name
                    </th>
                    <th className="w-[20%] border-2 border-black">
                      Institute Name
                    </th>
                    <th className="w-[15%] border-2 border-black">Board</th>
                    <th className="w-[15%] border-2 border-black">Group</th>
                    <th className="w-[15%] border-2 border-black">
                      Passing Year
                    </th>
                    <th className="w-[15%] border-2 border-black">
                      Achienvement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.education.map((edu) => (
                    <>
                      <tr>
                        <td className="w-[20%] border-2 border-black p-3">
                          {edu.level}
                        </td>
                        <td className="w-[20%] border-2 border-black p-3">
                          {edu.institution}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.board}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.group}
                        </td>
                        <td className="w-[15%] text-center border-2 border-black p-3">
                          {edu.passingYear}
                        </td>
                        <td className="w-[15%] text-center border-2 border-black p-3">
                          {edu.grade}.0
                          <br />{" "}
                          {edu.level.slice(0, 1) === "H" ||
                          edu.level.slice(0, 1) === "S" ||
                          edu.level.slice(0, 1) === "J" ? (
                            <> (Out of 5.0)</>
                          ) : (
                            <> (Out of 4.0)</>
                          )}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Projects
        </h2>

        <div className="text-sm ">
          {data?.projects?.map((project, index) => (
            <div className="py-2" key={index}>
              <div className="flex justify-between items-center ">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p>{project.range}</p>
              </div>

              <div className="">
                <p className="italic">Decription : </p>
                <h3 className="inline-block text-justify">
                  {project.description.split("•")}
                </h3>
              </div>

              <a
                rel="noreferrer"
                href={project.link}
                className="underline text-blue-600 font-semibold"
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Experience
        </h2>
        <div className="text-lg">
          {data?.experience?.map((exp, index) => (
            <div className="py-2" key={index}>
              <h6>
                <b>{exp.level}</b>
              </h6>
              <div className="flex justify-start gap-2">
                <p className="w-[20%] font-bold">Company </p>
                <p className="w-[80%]">: {exp.company}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[20%] font-bold">Experience </p>
                <p className="w-[80%]">
                  : {exp.years} {exp?.years === "1" ? <>Year</> : <>Years</>}
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[20%] font-bold">Year </p>
                <p className="w-[80%]">: {exp.range}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[20%] font-bold">Address </p>
                <p className="w-[80%]">: {exp.place} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 text-lg">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Skills
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
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Personal Skills
        </h2>

        <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
          {data?.personalSkills?.map((exp, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted border-gray-400"
              key={index}
            >
              <h6>
                <b>{exp.personalSkill}</b>
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 text-lg">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Languages
        </h2>

        <div className="text-sm flex flex-col items-start justify-start gap-3  flex-wrap">
          {data?.languageSkills?.map((lan, index) => (
            <div className="" key={index}>
              <h6>{lan.language}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 ">
        <h2 className="text-xl font-bold uppercase border-b-2 border-gray-300 pt-1 px-1">
          Personal Information
        </h2>
        <div className="text-lg">
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Name </p>
            <p className="w-[80%]">: {data?.name}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Father's Name</p>
            <p className="w-[80%]">: {data?.fathersName}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Mother's Name:</p>
            <p className="w-[80%]">: {data?.mothersName}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Date of Birth </p>
            <p className="w-[80%]">: {data?.dateOfBirth}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Permanent Address </p>
            <div className="w-[80%] ">
              {data?.permanentAdd.map((permanent) => (
                <>
                  <div>
                    <div className="flex gap-2">
                      <p>: Village : {permanent.village},</p>
                      <p>Post Office : {permanent.post}</p>
                    </div>
                    <div className="flex gap-2">
                      <p> Police Station : {permanent.ps},</p>
                      <p>District : {permanent.district}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Present Address </p>
            <div className="w-[80%] ">
              {data?.presentAdd.map((present) => (
                <>
                  <div>
                    <div className="flex gap-2">
                      <p>: Village : {present.village},</p>
                      <p>Post Office : {present.post}</p>
                    </div>
                    <div className="flex gap-2">
                      <p> Police Station : {present.ps},</p>
                      <p>District : {present.district}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Religion </p>
            <p className="w-[80%]">: {data?.religion}</p>
          </div>

          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Blood Group </p>
            <p className="w-[80%]">: {data?.blood}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> NID </p>
            <p className="w-[80%]">: {data?.nid}</p>
          </div>
        </div>
      </div>
      <div className="py-4 text-lg">
        <p>Best Regards</p>
        <br />
        <p>({data?.name})</p>
        <p>Date..............................</p>
      </div>
    </div>
  );
};

export default Cvtemplate3;
