import React from "react";

const Template5 = ({ data }) => {
  const userData = [
    {
      courses: [
        {
          course: "react a to z",
          institution: "PH",
          startDate: "02/22",
          endDate: "02/22",
        },
      ],
      educationHistory: [
        {
          school: "web developer",
          degree: "programming hreo",
          startDate: "Jan/2015",
          endDate: "Dec/28",
          city: "dhaka",
          discription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .",
        },
        {
          school: "web developer",
          degree: "programming hreo",
          startDate: "Jan/2015",
          endDate: "Dec/2018",
          city: "dhaka",
          discription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .",
        },
      ],
      email: "rr@gmail.com",
      employmentHistory: [
        {
          jobTitle: "junior web developer",
          employer: "programming hreo",
          startDate: "02/22",
          endDate: "02/22",
          city: "dhaka",
          discription: [
            "Implemented new website features including conditional logic, data filters and pricing models",
            "Increased revenue through upsells and cross-selling",
            "Performed statistical analyses for reports and projects relating to potentially sensitive information loss, and clients",
            "Organized and maintained data for all employees, including employee data, contact information and skills",
            "Supervised the assistance of 3 new employees",
          ],
        },

        {
          jobTitle: "junior web developer",
          employer: "programming hreo",
          startDate: "02/22",
          endDate: "02/22",
          city: "dhaka",
          discription: [
            "Implemented new website features including conditional logic, data filters and pricing models",
            "Increased revenue through upsells and cross-selling",
            "Performed statistical analyses for reports and projects relating to potentially sensitive information loss, and clients",
            "Organized and maintained data for all employees, including employee data, contact information and skills",
            "Supervised the assistance of 3 new employees",
          ],
        },
        {
          jobTitle: "junior web developer",
          employer: "programming hreo",
          startDate: "02/22",
          endDate: "02/22",
          city: "dhaka",
          discription: [
            "Implemented new website features including conditional logic, data filters and pricing models",
            "Increased revenue through upsells and cross-selling",
            "Performed statistical analyses for reports and projects relating to potentially sensitive information loss, and clients",
            "Organized and maintained data for all employees, including employee data, contact information and skills",
            "Supervised the assistance of 3 new employees",
          ],
        },
      ],
      hobbies: [],
      internShips: [
        {
          jobTitle: "web developer",
          employer: "PH",
          startDate: "02/22",
          endDate: "02/22",
          city: "dhaka",
          discription: "lorem 50 words",
        },
      ],
      languages: [
        {
          language: "Bangla",
          level: 99,
        },
        {
          language: "english",
          level: 70,
        },
        {
          language: "Hindi",
          level: 70,
        },
      ],
      personalInformation: [
        {
          jobTitle: "web j gtgtghtdeveloper",
          photoUrl: "http://abc.com",
          fname: "Shohag",
          lname: "Roy",
          email: "rr@gmail.com",
          userEmail: "gola.com",
          phone: "012455445",
          country: "bangladesh",
          city: "Rangpur",
          postalCode: "5403",
          address: "barisal,bangladesh",
          drivingLicense: "5787878",
          nationality: "bangladeshi",
          placeOfBirth: "barisal",
          dateOfBirth: "01/02/2002",
        },
      ],
      professionalSummary: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      ],
      references: [
        {
          name: "jhankar",
          company: "PH",
          phone: "0215245",
          email: "abc@example.com",
        },
        {
          name: "jhankar",
          company: "PH",
          phone: "0215245",
          email: "abc@example.com",
        },
      ],
      skills: [
        {
          Skill: "React JS",
          level: 90,
        },
        {
          Skill: "HTML",
          level: 80,
        },
        {
          Skill: "CSS",
          level: 60,
        },
        {
          Skill: "JavaScript",
          level: 70,
        },
        {
          Skill: "NodeJS",
          level: 90,
        },
        {
          Skill: "MongoDB",
          level: 70,
        },
        {
          Skill: "JavaScript",
          level: 70,
        },
        {
          Skill: "NodeJS",
          level: 90,
        },
        {
          Skill: "MongoDB",
          level: 70,
        },
      ],
      websiteAndSocialLinks: [
        {
          label: "github",
          link: "https://github.com",
        },
        {
          label: "Linkedin",
          link: "https://github.com",
        },
        {
          label: "Portfolio",
          link: "https://github.com",
        },
      ],
    },
  ];
  return data?.map((d, i) => (
    <section
      key={i}
      className="lg:w-[21cm] w-[100vw]  lg:m-10 border border-black rounded-md mx-auto text-left relative bg-gray-50 lg:h-[29.7cm] shadow-2xl"
    >
      <div className="flex">
        <div className="lg:w-[8cm] w-[40%]  lg:h-[29.7cm]">
          <div className="p-6 flex justify-center items-center lg:h-[7cm]">
            <img
              className="rounded-full w-[70px] h-[70px] lg:w-[200px] lg:h-[200px]"
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>

          <div className=" lg:pl-8 pl-2 px-4 pb-4 bg-gray-700 rounded-r-2xl h-100  lg:h-[22.7cm] text-white ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center   bg-white text-gray-700">
                  <p>
                    <i className="fa-solid  p-1 fa-address-book"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  contact
                </p>
              </div>
              {d?.personalInformation?.map((info, i) => (
                <div key={i}>
                  <div className="leading-none pt-3">
                    <p>Address: </p>
                    <small className="capitalize">
                      {info.city}, {info.country}
                    </small>
                  </div>

                  <div className="leading-none pt-3">
                    <p>Mobile: </p>
                    <small className="capitalize">{info.phone}</small>
                  </div>

                  <div className="leading-none pt-3">
                    <p>Email: </p>
                    <small className="">{info.email}</small>
                  </div>
                </div>
              ))}

              {d?.websiteAndSocialLinks?.map((link, i) => (
                <div key={i}>
                  <div className="leading-none pt-3">
                    <p>{link.label}: </p>
                    <a href={link.link} target="_">
                      <small className="">{link.link}</small>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-white text-gray-700">
                  <p>
                    <i className="fa-solid p-1 fa-diagram-project"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  skills
                </p>
              </div>

              <div>
                {d?.skills?.map((skill, i) => (
                  <div key={i} className="leading-none pt-3">
                    <small className="capitalize">{skill.Skill}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-white text-gray-700">
                  <p>
                    <i className="fa-solid p-1 fa-file-pen"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  refference
                </p>
              </div>

              <div>
                {d?.references?.map((reff, i) => (
                  <div key={i} className="leading-none pt-3">
                    <p className="font-semibold capitalize">{reff?.name}</p>
                    <p>
                      <small className="">{reff?.company}</small>
                    </p>
                    <p>
                      <small className="">{reff?.phone}</small>
                    </p>
                    <p>
                      <small className="">{reff?.email}</small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="lg:w-[13cm] w-[60%] h-[115px] lg:px-10 lg:h-[7cm]  flex items-center  justify-center ">
            {d?.personalInformation?.map((info, i) => (
              <div key={i} className=" text-center ">
                <h2 className="lg:text-4xl text-2xl uppercase font-bold leading-none">
                  {info?.fname} {info?.lname}
                </h2>
                <p className="text-xl font-bold leading-none">
                  <small> {info?.jobTitle}</small>
                </p>
              </div>
            ))}
          </div>

          <div className=" lg:px-8 lg:w-[13cm] px-4  w-[60%]  lg:h-[22.7cm] text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-address-book"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  about me
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {d?.professionalSummary?.map((summ, i) => (
                    <small key={i} className="capitalize">
                      {summ}
                    </small>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-briefcase"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg  lg:ml-4 ml-2 font-bold uppercase">
                  experiences{" "}
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {d?.employmentHistory?.map((experiences, i) => (
                    <div key={i}>
                      <div className="flex text-black items-center font-semibold lg:text-xl">
                        <p className="lg:w-[200px] w-[100px] capitalize">
                          {experiences?.jobTitle}
                        </p>
                        <p className="capitalize">{experiences?.employer}</p>
                      </div>

                      <div className="flex items-center mt-1">
                        <p className="lg:w-[380px] w-[300px] ">
                          {experiences?.startDate} - {experiences?.endDate}
                        </p>
                        <div className="">
                          {experiences?.discription
                            .slice(0, 2)
                            ?.map((des, i) => (
                              <p key={i}>
                                <small key={des} className="text-gray-500">
                                  {des}
                                </small>
                              </p>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <div className="lg:w-[30px] lg:h-[30px] rounded-full flex justify-center items-center bg-gray-700 text-white">
                  <p>
                    <i className="fa-solid p-1 fa-graduation-cap"></i>
                  </p>
                </div>
                <p className="lg:text-2xl text-lg lg:ml-4 ml-2 font-bold uppercase">
                  education{" "}
                </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  {d?.educationHistory?.map((edu, i) => (
                    <div key={i} className="mt-1 capitalize">
                      <div className="flex text-black items-center font-semibold lg:text-xl">
                        <p className="lg:w-[200px] w-[100px]">{edu?.school}</p>
                        <p>{edu?.degree}</p>
                      </div>

                      <div className="flex items-center mt-2">
                        <p className="lg:w-[380px] w-[130px]">
                          {edu?.startDate} - {edu?.endDate}
                        </p>
                        <small className="w-full text-gray-500">
                          {edu?.discription}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Template5;
