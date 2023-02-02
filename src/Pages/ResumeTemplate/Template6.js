import React from "react";

const Template6 = ({ data }) => {
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
          "referent'sFullName": "jhankar",
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
    <section className="w-[21cm] m-10 border border-black rounded-md mx-auto text-left relative h-[29.7cm] shadow-2xl">
      <div className="flex w-full h-full ">
        <div className="w-[8cm] rounded-l-md  bg-gray-100 h-full ">
          <div className="p-10 flex justify-center items-center">
            <img
              className="rounded-full w-[150px] h-[150px]"
              src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>

          <div className=" px-5   text-black text-center ">
            <div>
              <div className="py-3  ">
                <p className="text-3xl font-bold uppercase">
                  victoria <br /> young
                </p>

                <p className="mt-3 text-xl font-semibold uppercase">
                  market specialist
                </p>
              </div>

              <div className="py-8">
                <div className="leading-none pt-8 border-t-2 border-gray-600">
                  <p className="capitalize">868-397-9079</p>
                </div>
                <div className="leading-none pt-3 ">
                  <p className="capitalize">victoriayoung@gmail.com</p>
                </div>

                <div className="leading-none pt-3">
                  <p>Sreet Name </p>
                </div>
                <div className="leading-none pt-3">
                  <p>City, State, Zip Code </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-600  pt-8 ">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-2xl fa-linkedin-in"></i>
                    </p>
                  </div>
                  <p className="p-2">Likedin Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-3xl fa-github"></i>
                    </p>
                  </div>
                  <p className="p-2">GitHub Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-solid text-2xl fa-link"></i>
                    </p>
                  </div>
                  <p className="p-2">Portfolio Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-2xl fa-facebook-f"></i>
                    </p>
                  </div>
                  <p className="p-2">Facebook Link</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <div className=" px-8 w-[13cm]   h-[22.7cm] text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">Profile</p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <small className="capitalize">
                    my name is Jennifer Anderson. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quae reprehenderit
                    necessitatibus repellendus a, aut dolorum unde ullam nostrum
                    perferendis hic vel quos labore odio atque at, earum velit
                    tenetur quasi explicabo incidunt vero officiis maiores autem
                    consectetur. Sequi ad culpa vero commodi blanditiis at,
                    veritatis officiis iusto neque sit, esse aut aspernatur
                    explicabo. Amet, ipsam illo molestiae.
                  </small>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">skills </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div className="font-semibold grid grid-cols-2 gap-4 ">
                    <p>Active Listening</p>
                    <p>Communication Skills</p>
                    <p>Reading Comprehension</p>
                    <p>Critical Thinking</p>
                    <p>Time Management</p>
                    <p>Information Ordering</p>
                    <p>Reading Comprehension</p>
                    <p>Category Flexibility</p>
                    <p>Organizational Skills</p>
                    <p>Project Management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">experiences </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div>
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Graphic Designer</p>
                      <p>Soft Design Studios</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2015 - 2017</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Web Designer </p>
                      <p>Web Tech TLD</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2013 - 2015</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Lead Web Designer </p>
                      <p>Dev Cewative Solutions</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2010 - 2013 </p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                        officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">education </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div>
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">University of Lorem</p>
                      <p>Certicate of Web Trainig</p>
                    </div>

                    <div className="flex items-center mt-2">
                      <p className="w-[380px]">2008 - 2010</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae.
                        Lorem ipsum dolor sit amet officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">University of Lorem </p>
                      <p>Bechelor of Art Director</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2007 - 2009</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae.
                        Lorem ipsum dolor sit amet
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Template6;
