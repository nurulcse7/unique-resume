import React from "react";

const Template7 = ({ data }) => {
  console.log("ResumeTemplate2", data);
  return (
    <section className=" text-left relative my-10">
      <div className=" w-full leading-none flex">
        <div className="">
          <h3 className="text-3xl font-bold">
            {data?.fname} {data?.lname}
          </h3>
          <h3 className="text-xl font-medium">{data?.jobTitle}</h3>
          <div className="flex gap-10">
            <div>
              <p className="my-2">
                {" "}
                <span className="font-semibold">E-mail : </span> {data?.email}
              </p>
              <p className="my-2">
                <span className="font-semibold">Phone : </span>
                {data?.mobileNumber}
              </p>
            </div>
            <div>
              <p className="my-2">
                <span className="font-semibold">Address : </span>
                {data?.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 leading-none">
        <p className="text-justify">{data?.professionalSummary}</p>
      </div>

      {/* <div className="my-3 leading-none">
        <p className="text-xl font-bold">Skills</p>
        <hr className="border-t border-black" />

        <p className="">
          {data?.skills.map((skill) => (
            <>
              <p className=" my-1">{skill.technology}</p>
            </>
          ))}
        </p>
      </div> */}

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Experience</p>
        <hr className="border-t border-black" />
        <div>
          {data?.employmentHistory.map((employee) => (
            <>
              <div className="flex mt-2 items-start">
                <div className="w-[40%]">
                  {" "}
                  <p>
                    {employee.date[0].slice(0, 4)} to{" "}
                    {employee.date[1].slice(0, 4)}
                  </p>
                </div>
                <div>
                  <p className="font-semibold ">{employee.jobTitle}</p>
                  <p className="my-3">{employee.employer}</p>
                  <p className="italic my-2 font-semibold">Description:</p>
                  <p className="">{employee.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Education</p>
        <hr className="border-t border-black" />
        <div>
          {data?.education.map((edu) => (
            <>
              <div className="flex mt-2 items-start">
                <div className="w-[40%]">
                  <p>
                    {edu?.startDate.slice(0, 4)} -{edu?.endDate.slice(0, 4)}
                  </p>
                </div>
                <div>
                  <p className=" font-semibold underline">{edu.degree}</p>
                  <p className=" my-2 ">{edu.school}</p>
                  <p className="italic my-2 font-semibold">Description:</p>
                  <p className=" mb-3 text-justify">{edu?.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="my-3 leading-none">
        <p className="text-xl font-bold">Language</p>
        <hr className="border-t border-black" />
        <div>
          <div className="leading-none mt-2">
            <div className="flex items-start  gap-5 ">
              <div className="w-[30%]">
                {data?.languages.map((language) => (
                  <>
                    <p className="my-2 text-left ">{language?.language}</p>
                  </>
                ))}
              </div>
              <div className="w-[60%]  text-left">
                {data?.languages.map((language) => (
                  <>
                    <p className="my-2  text-left"> {language?.level}</p>
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
              <p className="text-xl font-bold uppercase">Reference </p>
              <hr className="border-t border-black" />

              <div className="leading-none pt-3">
                {data?.references.map((reference) => (
                  <>
                    <div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Name</p>
                        <p className="w-[50%]">: {reference?.fullName}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Comapany</p>
                        <p className="w-[50%]">: {reference?.company}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">Phone Number </p>
                        <p className="w-[50%]">: {reference?.phone}</p>
                      </div>
                      <div className="flex text-black items-start  text-base">
                        <p className="w-[20%]">E-mail</p>
                        <p className="w-[50%]">: {reference?.email}</p>
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

export default Template7;
