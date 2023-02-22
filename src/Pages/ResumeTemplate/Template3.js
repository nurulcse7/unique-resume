import React from "react";

const Template3 = ({ data }) => {
  return (
    <section className=" text-left relative my-10">
      <div className="leading-none flex justify-between">
        <div>
          <h2 className="md:text-3xl uppercase text-xl font-bold">
            {data?.fname} {data?.lname}
          </h2>
          <p className="font-semibold md:text-xl text-[10px] mb-1">
            {data?.jobTitle}
          </p>
          <div>
            <p>
              <span className="md:text-sm text-[10px]">
                <i class="fa-solid fa-envelope"></i>
              </span>{" "}
              {data?.email}
            </p>
            <p>
              <span className="md:text-sm text-[10px]">
                <i class="fa-solid fa-phone"></i>
              </span>{" "}
              {data?.mobileNumber}
            </p>
            <p>
              <span className="md:text-sm text-[10px]">
                <i class="fa-solid fa-address-book"></i>
              </span>{" "}
              {data?.address}
            </p>
          </div>
        </div>
      </div>

      <div className=" my-4 flex justify-between">
        <div className=" w=[30%] mr-5">
          <div className="mb-5 ">
            <p className="font-bold">SKILL</p>
            <hr className="border-t border-black" />
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
          <div className="my-5 ">
            <p className="font-bold">LANGUAGE</p>
            <hr className="border-t border-black" />

            <div className="leading-none ">
              <div className="flex items-center gap-2 justify-between">
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

          <div className="my-5 ">
            <p className="font-bold">HOBBIES</p>
            <hr className="border-t border-black" />

            <div className="leading-none mt-2">
              <div className="">
                <div className="flex ">{data?.hobbies}</div>
              </div>
            </div>
          </div>
          <div className="my-5 ">
            <p className="font-bold">SOCIAL LINK</p>
            <hr className="border-t border-black" />

            <div className="leading-none mt-2">
              <div className="">
                <p className="block">
                  {data?.websites.map((website) => (
                    <>
                      <div className="flex mt-2">
                        <a href={website?.Link} rel="noopener">
                          {website?.label}
                        </a>
                      </div>
                    </>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-[80%]">
          <div className=" mb-5">
            <p className="font-bold ">SUMMARY</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
                <p className="text-justify">{data?.professionalSummary}</p>
              </div>
            </div>
          </div>

          <div className="w-full mb-5 ">
            <p className="font-bold ">EDUCATION</p>
            <hr className="border-t border-black" />

            <div>
              {data?.education.map((edu) => (
                <>
                  <div className="leading-none mt-2">
                    <p className="font-bold">{edu.degree}</p>
                    <div className="flex my-2 justify-between">
                      <p className=" ">{edu.school}</p>
                      <p>
                        {edu?.startDate?.slice(0, 7)} - {""}
                        {edu?.endDate?.slice(0, 7)}
                      </p>
                    </div>

                    <p className=" mb-3 text-justify">{edu?.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="w-full mb-5 ">
            <p className="font-bold ">EXPERIENCE</p>
            <hr className="border-t border-black" />

            <div>
              {data?.employmentHistory.map((employee) => (
                <>
                  <div className="leading-none mt-2">
                    <p className="font-bold">{employee.jobTitle}</p>
                    <div className="flex my-2 justify-between">
                      <p className=" ">{employee.employer}</p>
                      <p>
                        {employee?.startDate?.slice(0, 7)} - {""}
                        {employee?.endDate?.slice(0, 7)}
                      </p>
                    </div>

                    <p className=" mb-3 text-justify">
                      {employee?.description}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="w-full mb-5 ">
            <p className="font-bold ">INTERNSHIPS</p>
            <hr className="border-t border-black" />

            <div>
              {data?.internShips.map((internShip) => (
                <>
                  <div className="leading-none mt-2">
                    <p className="font-bold">{internShip.jobTitle}</p>
                    <div className="flex my-2 justify-between">
                      <p className=" ">{internShip.employer}</p>
                      <p>
                        {internShip?.startDate?.slice(0, 7)} - {""}
                        {internShip?.endDate?.slice(0, 7)}
                      </p>
                    </div>

                    <p className=" mb-3 text-justify">
                      {internShip?.description}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="w-full mb-5 ">
            <p className="font-bold ">REFERENCE</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
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
    </section>
  );
};

export default Template3;
