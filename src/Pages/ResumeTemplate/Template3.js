import React from "react";

const Template3 = ({ data }) => {
  return data?.map((d, i) => (
    <section
      key={i}
      className=" m-10 border border-black rounded-md mx-auto text-left relative bg-white  shadow-2xl p-8"
    >
      <div className="leading-none flex justify-between">
        <div>
          {d?.personalInformation?.map((info, i) => (
            <h2 className="md:text-3xl uppercase text-xl font-bold">
              {info?.fname} {info?.lname}
            </h2>
          ))}

          {d?.personalInformation?.map((info, i) => (
            <p key={i} className="font-semibold md:text-sm text-[10px] mb-1">
              {info?.jobTitle}
            </p>
          ))}

          {d?.personalInformation?.map((info, i) => (
            <small>
              <span className="md:text-sm text-[10px]">
                <i className="fa-solid fa-at"></i>
              </span>{" "}
              {info?.email}
            </small>
          ))}

          {d?.websiteAndSocialLinks?.map((link, i) => (
            <small className="mx-2 md:text-sm text-[10px]">
              <span>
                <i className="fa-solid fa-link"></i>
              </span>{" "}
              <a target="_" href={link?.link}>
                {link?.label}
              </a>
            </small>
          ))}

          {d?.personalInformation?.map((info, i) => (
            <small key={i}>
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>{" "}
              {info?.city}, {info?.country}
            </small>
          ))}
        </div>
      </div>

      <div className=" my-4 flex justify-between">
        <div className=" ">
          <div className="mr-10 ">
            <p className="font-bold">EXPERIENCE</p>
            <hr className="border-t border-black" />

            {d?.employmentHistory?.map((experience, i) => (
              <div key={i}>
                <p className="font-semibold capitalize mt-2">
                  {experience?.jobTitle}
                </p>
                <div className="flex justify-between items-center">
                  <small className="font-bold capitalize">
                    {experience?.employer}
                  </small>
                  <div>
                    <small>
                      {" "}
                      <span className="">
                        <i className="fa-solid fa-calendar-days"></i>
                      </span>{" "}
                      {experience?.startDate} - {experience?.endDate}
                    </small>
                    <small className="uppercase">
                      <span className="ml-2">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>{" "}
                      {experience?.city}
                    </small>
                  </div>
                </div>

                <div className="leading-none">
                  <p>
                    <small>{experience?.discription}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className=" mr-10 mt-2 ">
            <p className="font-bold">EDUCATION</p>
            <hr className="border-t border-black" />
            {d?.educationHistory?.map((education, i) => (
              <div key={i} className="leading-none">
                <p className="font-semibold mt-2">{education?.school}</p>
                <div className="flex justify-between items-center">
                  <small className="font-senibold">{education?.degree} </small>
                  <div>
                    <small>
                      {" "}
                      <span className="">
                        <i className="fa-solid fa-calendar-days"></i>
                      </span>{" "}
                      {education?.startDate} - {education?.endDate}
                    </small>
                  </div>
                </div>
                <p className="mt-1">
                  <small>{education?.discription}</small>
                </p>
              </div>
            ))}
          </div>

          <div className=" mr-10 mt-2 ">
            <p className="font-bold">INDUSTRY EXPERTISE</p>
            <hr className="border-t border-black" />

            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <small className="block pt-1">Agency</small>
                <input value="90" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Healthcare</small>
                <input value="69" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Traditonal print media</small>
                <input value="50" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Traditonal HR Software</small>
                <input value="80" className="w-full" type="range" />
              </div>
            </div>
          </div>
        </div>

        <div className=" ">
          <div className="w-full ">
            <p className="font-bold ">SUMMARY</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
                {d?.professionalSummary?.map((summ, i) => (
                  <p>
                    <small>{summ}</small>
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-2 ">
            <p className="font-bold ">ACHI EVEMENTS </p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
                <p>
                  <small className="font-bold">
                    Negotiation & Communication
                  </small>
                </p>
                <p>
                  <small>
                    Facilitated partnerships with top 8 US sports accessories
                    chains within 1year
                  </small>
                </p>
              </div>

              <div className="leading-none mt-2">
                <p>
                  <small className="font-bold">
                    Restructured a 20-person marketing department
                  </small>
                </p>
                <p>
                  <small>
                    Thus, eliminating high turnover and achieving top-industry
                    NPS within 6 months
                  </small>
                </p>
              </div>
              <div className="leading-none mt-2">
                <p>
                  <small className="font-bold">
                    40% Reduction of Churn Rate
                  </small>
                </p>
                <p>
                  <small>Across all company products</small>
                </p>
              </div>

              <div className="leading-none mt-2">
                <p>
                  <small className="font-bold">
                    Restructured a 20-person marketing department
                  </small>
                </p>
                <p>
                  <small>
                    Thus, eliminating high turnover and achieving top-industry
                    NPS within 6 months
                  </small>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-2 ">
            <p className="font-bold ">SKILLS</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2 grid grid-cols-3 gap-3 text-center">
                {d?.skills?.map((skill, i) => (
                  <small className="p-1 border-b border-black">
                    {skill?.Skill}
                  </small>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-2 ">
            <p className="font-bold ">LANGUAGES</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
                {d?.languages?.map((lang, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <small>{lang?.language}</small>
                    <small>
                      Native {""}
                      <span className="text-xl font-bold ml-1">•••••</span>
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full mt-2 ">
            <p className="font-bold ">PASSIONS</p>
            <hr className="border-t border-black" />

            <div>
              <div className="leading-none mt-2">
                <div className="flex items-center mt-2 ">
                  <small className="  bg-gray-200 rounded-full">
                    <i className=" p-1  fa-solid fa-bell"></i>
                  </small>
                  <small className="font-semibold ml-2">
                    Data-driven marketing
                  </small>
                </div>
                <div className="flex items-center mt-2 ">
                  <small className="  bg-gray-200 rounded-full">
                    <i class="fa-solid p-1 fa-rocket"></i>
                  </small>
                  <small className="font-semibold ml-2">
                    Bold ideas & amitious projects
                  </small>
                </div>
                <div className="flex items-center mt-2 ">
                  <small className="  bg-gray-200 rounded-full">
                    <i className=" p-1  fa-solid fa-bell"></i>
                  </small>
                  <small className="font-semibold ml-2">
                    Data-driven marketing
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Template3;
