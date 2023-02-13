import React from "react";

const CvTemplate1 = ({ data }) => {
  console.log("cvTemplate1", data);
  return (
    <div className="py-10 px-5 ">
      <div className="flex justify-between">
        <h1 className="md:text-4xl text-xl uppercase">{data?.name}</h1>
        <div className="text-gray-500 text-right">
          <p className="md:text-lg text-sm">{data?.email}</p>
          <p>{data?.address}</p>
          <p>{data?.mobileNumber}</p>
          {/* {data?.websites.map((w, i) => (
            <p>{w.Link}</p>
          ))} */}
        </div>
      </div>
      <div>
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Objective
          </h3>
          <p className="text-sm pt-4 pb-3">{data?.carrierObjective}</p>
        </div>

        <div className="mt-2">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Eductaion
          </h3>

          <div className="">
            {data?.education?.map((edu, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{edu.level}</b>
                </h6>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Institution </p>
                  <p className="w-[80%]">: {edu.institution}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Department </p>
                  <p className="w-[80%]">: {edu.group}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Year </p>
                  <p className="w-[80%]">: {edu.passingYear}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Result </p>
                  <p className="w-[80%]">: {edu.grade} (Out of 5.0)</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Experience
          </h3>
          <div className="">
            {data?.experience?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.level}</b>
                </h6>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Company </p>
                  <p className="w-[80%]">: {exp.company}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Experience </p>
                  <p className="w-[80%]">
                    : {exp.years} {exp?.years == "1" ? <>Year</> : <>Years</>}
                  </p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Year </p>
                  <p className="w-[80%]">: {exp.range}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Address </p>
                  <p className="w-[80%]">: {exp.place} </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="text-sm">
            {data?.experience?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.years}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Place: </span>
                  <p>{exp.place}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Duration: </span>
                  <p>{exp.range}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>

        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Projects
          </h3>

          <div className="text-sm ">
            {data?.projects?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.range}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Title: </span>
                  <p>{exp.description}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Link: </span>
                  <a href={exp.link}>{exp.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Personal Information
          </h3>
          <div>
            {/* <div className="flex justify-start gap-2">
              <p className="w-[20%]">Institution </p>
              <p className="w-[80%]">: {edu.institution}</p>
            </div> */}

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
              <p className="w-[20%]"> Marital Status</p>
              <p className="w-[80%]">: {data?.maritalStatus}</p>
            </div>
            <div className="flex justify-start gap-2">
              <p className="w-[20%]"> Gender </p>
              <p className="w-[80%]">: {data?.sex}</p>
            </div>
            <div className="flex justify-start gap-2">
              <p className="w-[20%]"> Religion </p>
              <p className="w-[80%]">: {data?.religion}</p>
            </div>
            <div className="flex justify-start gap-2">
              <p className="w-[20%]"> Nationality </p>
              <p className="w-[80%]">: {data?.nationality}</p>
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

        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Skills
          </h3>

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
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Languages
          </h3>

          <div className="text-sm flex flex-col items-start justify-start gap-3  flex-wrap">
            {data?.languageSkills?.map((lan, index) => (
              <div className="" key={index}>
                <h6>{lan.language}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvTemplate1;
