import React from "react";

const Template2 = ({ data }) => {
  console.log("ResumeTemplate2", data);
  return data?.map((d) => (
    <section className="lg:w-[21cm] w-[100vw] lg:m-10 border border-black rounded-md mx-auto text-left relative bg-white lg:h-[29.7cm] shadow-2xl lg:p-6 p-3">
      <div className=" w-full leading-none flex">
        <div className="w-[20px] bg-black"></div>
        {d?.personalInformation?.map((info, i) => (
          <div key={i} className="ml-4">
            <>
              <h3 className="text-3xl font-bold">
                {info?.fname} {info?.lname}
              </h3>
              <p>
                <small>{info?.email}</small> <br />
                <small>{info?.phone}</small> <br />
                <small>
                  {info?.city}, {info?.country}
                </small>
              </p>
            </>
          </div>
        ))}
      </div>

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Summary</p>
        {d?.professionalSummary?.map((summary, i) => (
          <small key={i}>{summary}</small>
        ))}
      </div>
      <hr className="border-t border-black" />

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Skills</p>
        {d?.skills?.map((skill, i) => (
          <small key={i}>
            {skill?.Skill}, {}{" "}
          </small>
        ))}
      </div>
      <hr className="border-t border-black" />

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Experience</p>
        {d?.employmentHistory?.map((experience, i) => (
          <div>
            <p className="py-2 capitalize font-semibold">
              {experience?.jobTitle}
            </p>
            <small className="capitalize">
              {experience?.employer}• {experience?.city},{" "}
              {experience?.startDate} - {experience?.endDate}
            </small>

            <div className="my-2 leading-none flex flex-col">
              {experience?.discription?.map((dis, i) => (
                <small key={i}>
                  <span className="text-xl font-bold">•</span> {dis}
                </small>
              ))}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-t border-black" />
      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Education</p>
        {d?.educationHistory?.map((education, i) => (
          <div key={i} className="mt-2 capitalize">
            <p className="py-2 font-semibold ">{education?.school}</p>
            <small className="">
              {education?.degree} • {education?.city}
            </small>
            <p>
              <small className="py-2">
                {education?.startDate} - {education?.endDate}
              </small>
            </p>
          </div>
        ))}
      </div>
    </section>
  ));
};

export default Template2;
