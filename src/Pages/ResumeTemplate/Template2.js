import React from "react";

const Template2 = ({ data }) => {
  console.log("ResumeTemplate2", data);
  return (
    <section className="lg:w-[21cm] w-[100vw] lg:m-10 border border-black rounded-md mx-auto text-left relative bg-white lg:h-[29.7cm] shadow-2xl lg:p-6 p-3">
      <div className=" w-full leading-none flex">
        <div className="w-[20px] bg-black"></div>
        <div className="ml-4">
          <h3 className="text-3xl font-bold">
            {data?.fname} {data?.lname}
          </h3>
          <h3 className="text-xl font-medium">{data?.jobTitle}</h3>
          <p>{data?.email}</p>
          <p>{data?.mobileNumber}</p>
          <p>{data?.address}</p>
        </div>
      </div>

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Summary</p>

        <p className="text-justify">{data?.professionalSummary}</p>
      </div>
      <hr className="border-t border-black" />

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Skills</p>

        <p>
          {data?.skills.map((skill) => (
            <>
              <p className=" my-1">{skill.technology}</p>
            </>
          ))}
        </p>
      </div>
      <hr className="border-t border-black" />

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Experience</p>
        <div>
          {data?.employmentHistory.map((employee) => (
            <>
              <div className="flex justify-between items-center">
                <p className="font-semibold mt-2">{employee.jobTitle}</p>
                <p>
                  {employee.date[0].slice(0, 4)} to{" "}
                  {employee.date[1].slice(0, 4)}
                </p>
              </div>

              <p className="my-3">{employee.employer}</p>
              <small className="italic font-semibold">Description:</small>
              <p className="">{employee.description}</p>
            </>
          ))}
        </div>
      </div>

      <hr className="border-t border-black" />
      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Education</p>
        <div>
          {data?.education.map((edu) => (
            <>
              <div className="my-3">
                <p className=" font-semibold underline">{edu.degree}</p>
                <div className="flex justify-between">
                  <p className=" my-2 ">{edu.school}</p>
                  <p>
                    {edu?.startDate.slice(0, 4)} -{edu?.endDate.slice(0, 4)}
                  </p>
                </div>
                <h3 className="font-semibold italic">Description:</h3>

                <p className=" mb-3 text-justify">{edu?.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <hr className="border-t border-black" />
      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Language</p>
        <div>
          <div className="leading-none mt-2">
            <div className="flex items-center gap-5 ">
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

      <div>
        {data?.references >= 0 ? (
          <></>
        ) : (
          <>
            <div>
              <hr className="border-t border-black" />

              <p className="text-xl font-bold uppercase">Reference </p>

              <div className="leading-none pt-3">
                {data?.references.map((reference) => (
                  <>
                    <div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Name :</p>
                        <p className="w-[20%]">{reference?.fullName}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Comapany :</p>
                        <p className="w-[20%]">{reference?.company}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Phone Number :</p>
                        <p className="w-[20%]">{reference?.phone}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">E-mail :</p>
                        <p className="w-[20%]">{reference?.email}</p>
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
    </section>
  );
};

export default Template2;
