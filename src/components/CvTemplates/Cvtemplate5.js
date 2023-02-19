import React from "react";
import { FaFacebook, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Cvtemplate5 = ({ data }) => {
  return (
    <div className="py-10 px-5 ">
      <div className="flex justify-between">
        <div className="w-[50%]">
          <h1 className="md:text-4xl font-bold text-xl uppercase text-sky-700">
            {data?.name}
          </h1>
          <p className="text-sm pt-4 pb-3">{data?.carrierObjective}</p>
        </div>
        <div className="text-gray-500 text-right w-[50%]">
          <div className="">
            {data?.email}
            <span className="ml-5 md:text-lg text-sm text-sky-700">
              <i class="fa-solid fa-envelope"></i>{" "}
            </span>
          </div>
          <div>
            {data?.mobileNumber}
            <span className="ml-5 md:text-lg text-sm text-sky-700">
              <i class="fa-solid fa-phone"></i>
            </span>
          </div>
          <div>
            {data?.address}{" "}
            <span className="ml-5 md:text-lg text-sm text-sky-700">
              <i class="fa-solid fa-location-dot"></i>{" "}
            </span>
          </div>
          <div className="flex justify-end ">
            {data?.websites.map((website) => (
              <>
                {website?.label === "LinkedIn" ? (
                  <>
                    {website.Link}
                    <span className="ml-5 md:text-lg text-sm text-sky-700">
                      {" "}
                      <i class="fa-brands fa-linkedin"></i>
                    </span>
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="my-5">
          <h3 className="text-xl text-center uppercase py-2 my-3 font-bold border-y-2 text-sky-700 border-sky-700">
            Skills
          </h3>

          <div className="text-sm flex justify-between flex-row flex-wrap mb-10">
            {data?.skills?.map((exp, index) => (
              <div
                className="p-2 mt-2 text-white rounded border border-dotted border-sky-700 bg-sky-700"
                key={index}
              >
                <h6>
                  <b>{exp.technology}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
            Eductaion
          </h3>

          <div className="">
            {data?.education?.map((edu, index) => (
              <div className="py-2" key={index}>
                <h6 className="text-sky-600">
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
                  <p className="w-[20%]">Passing Year </p>
                  <p className="w-[80%]">: {edu.passingYear}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <p className="w-[20%]">Result </p>
                  <p className="w-[80%]">
                    : {edu.grade}
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
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
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
                    : {exp.years} {exp?.years === "1" ? <>Year</> : <>Years</>}
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
        </div>

        <div className="mt-5">
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
            Projects
          </h3>

          <div className="text-sm ">
            {data?.projects?.map((project, index) => (
              <div className="py-2" key={index}>
                <div className="flex justify-between items-center ">
                  <h3 className="text-lg font-semibold text-sky-600">
                    {project.title}
                  </h3>
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

        <div className="mt-5">
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
            Personal Information
          </h3>
          <div>
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
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
            Personal Skills
          </h3>

          <div className="text-sm ">
            {data?.personalSkills?.map((exp, index) => (
              <div
                className="p-2 mt-2 w-2/6 text-white rounded border border-dotted border-sky-700 bg-sky-700"
                key={index}
              >
                <h6>
                  <b>{exp.personalSkill}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl text-center uppercase py-2 font-bold border-y-2 text-sky-700 border-sky-700">
            Languages
          </h3>

          <div className="text-sm ">
            {data?.languageSkills?.map((lan, index) => (
              <div
                className="p-2 mt-2 w-2/6 text-white rounded border border-dotted border-sky-700 bg-sky-700"
                key={index}
              >
                <h6>
                  <b>{lan.language}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className=" capitalize my-10 text-xl text-sky-700">Sincerly</p>

          <h2 className="text-lg overline text-sky-700 font-bold">
            {data?.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cvtemplate5;
