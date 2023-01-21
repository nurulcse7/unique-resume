import React, { useState } from "react";
import Template1 from "./Template1";

const CreateRessume = () => {
  const [themes, setThemes] = useState("#253847");
  const [resume, setResume] = useState(1);

  const resumeData = {
    fullname: "shohag roy",
    designation: "MERN Stack Developer",
    picture:
      "https://cache.desktopnexus.com/thumbseg/2487/2487414-bigthumbnail.jpg",
    profile:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed error dicta quaerat, dolores quod aperiam placeat sequi possimus aliquid ad est ducimus non, unde culpa reprehenderit sunt ea laudantium.",
    contact: {
      phone: "0123456789",
      email: "example@gmail.com",
      gitHub: "GitHub Profile",
      Linkedin: "LinkeDin Profile",
      portfolio: "Portfolio Profile",
    },
    address: "city, state, country",
    trainings: [
      {
        name: "Complete Web Development Course with Jhankar Mahbub",
      },
      {
        name: "Complete Web Development Course with Jhankar Mahbub",
      },
    ],
    experiences: [
      {
        position: "Web Developer",
        duration: "09/2015 to 05/2022",
        location: "Luna Web Design, New York",
        details: [
          "Cooperate with to create clean interfaces and simple, intuitive interactions and experiences.",
          "Develop project concepts and maintain optimal workflow.",
          "Work with senior developer to manage large, complex design projects for corporate clients.",
          "Complete detailed programming and development task for front end public and intermal erbsite as well as challenging back-end sercer code.",
          "Caryy out quality assurance tests to discover errors and optimixe usability.",
        ],
      },
    ],
    education: [
      {
        name: "Master's in MBA",
        duration: "JAN 2015 - DEC 2018",
        address: "University of New York - USA",
      },
      {
        name: "Bachelor's in BBA",
        duration: "JAN 2015 - DEC 2018",
        address: "University of New York - USA",
      },
    ],
    langauses: [
      { name: "Bangla (Native)" },
      { name: "English (Fluent)" },
      { name: "Hindi (Fluent)" },
    ],
    hobbies: [],
    interests: [],
    skills: [
      "ReactJS",
      "NodeJS",
      "JavaScript",
      "HTML-5",
      "CSS-3",
      "Bootstrap",
      "Tailwind",
      "MondoDB",
      "GitHub",
      "Express",
      "Firebase",
    ],
    projects: [
      {
        name: "Ghoori Learning– Online Course Platform.",
        duration: "10 days",
        features: [
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        liveLink: "www.google.com",
        gitHub: {
          client: "www.google.com",
          server: "www.google.com",
        },
        Technology: ["react", "tailwind", "JavaScript", "Firebase", "mongodb"],
      },
      {
        name: "Ghoori Learning– Online Course Platform.",
        duration: "10 days",
        features: [
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        liveLink: "www.google.com",
        gitHub: {
          client: "www.google.com",
          server: "www.google.com",
        },
        Technology: ["react", "tailwind", "JavaScript", "Firebase", "mongodb"],
      },
      {
        name: "Ghoori Learning– Online Course Platform.",
        duration: "10 days",
        features: [
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
          {
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          },
        ],
        liveLink: "www.google.com",
        gitHub: {
          client: "www.google.com",
          server: "www.google.com",
        },
        Technology: ["react", "tailwind", "JavaScript", "Firebase", "mongodb"],
      },
    ],
  };

  console.log(themes);
  return (
    <section className=" text-left pt-[10vh] xl:pt-[6vh] md:pt-[5vh] sm:pt-[6vh] ">
      <div className="lg:max-w-[1024px]  xl:max-w-[1440px] bg-red h-full mx-auto  ">
        <div className="flex w-full h-full">
          <div className="md:w-[400px] lg:w-[500px] xl:w-[600px] bg-gray-100 h-full ">
            <h3 className="text-3xl w-full p-3 text-white bg-blue-400 font-bold ">
              My Resume
            </h3>
            <div className="text-left p-3 ">
              <p className="text-xl py-2 font-semibold">
                Personal Information:
              </p>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Full Name Hare"
                  className="p-2 bg-white border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Designation"
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Personal Email"
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Phone Number"
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Type Your Home Address"
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your GitHub Profile Link"
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Linkedin Profile Link                  "
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Type Your Portfolio Link
                  "
                  className="p-2 bg-white my-1 border-b-2 border-black w-full focus:outline-none "
                />
              </div>
              <div>
                <textarea
                  name=""
                  placeholder="Type Your Profile Details. Max - 80 Character"
                  id=""
                  cols="30"
                  rows="3 "
                  className="border-2 border-black p-2 rounded-md w-full"
                ></textarea>
              </div>
            </div>

            <div className="text-left p-3 ">
              <p className="text-xl py-2 font-semibold">Skills Information:</p>
              <small className="text-red-600">You must add 6 skills</small>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Add Your Skills"
                  className="
                  p-2 bg-white border border-black w-full focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="%"
                  className="p-2 bg-white border ml-2 w-[100px] border-black focus:outline-none"
                />
                <button className="py-3 px-6 rounded-md font-bold text-white bg-green-600 ml-2">
                  Add
                </button>
              </div>
            </div>

            <div className="text-left p-3 ">
              <p className="text-xl py-2 font-semibold">
                Education Information:
              </p>
              <small className="text-red-600">
                You must add 2 Education Details
              </small>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Course Name"
                  className="
                  p-2 bg-white border m-1 border-black w-full focus:outline-none"
                />

                <div className="flex items-center">
                  <p>From</p>
                  <input
                    className="w-[50%] border mx-2 p-1   border-black rounded-md"
                    type="date"
                  />
                  <p>To</p>
                  <input
                    className="w-[50%] border mx-2 p-1   border-black rounded-md"
                    type="date"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="p-2 bg-white border m-1 w-full border-black focus:outline-none"
                />
                <button className="py-3 w-full rounded-md font-bold text-white bg-green-600">
                  Add
                </button>
              </div>
            </div>

            <div className="text-left p-3 ">
              <p className="text-xl py-2 font-semibold">
                Langause Information:
              </p>
              {/* <small className="text-red-600"></small> */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Add Your Langause"
                  className="
                  p-2 bg-white border border-black w-full focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="%"
                  className="p-2 bg-white border ml-2 w-[100px] border-black focus:outline-none"
                />
                <button className="py-3 px-6 rounded-md font-bold text-white bg-green-600 ml-2">
                  Add
                </button>
              </div>
            </div>

            <div className="text-left p-3 ">
              <p className="text-xl py-2 font-semibold">Project Information:</p>
              <small className="text-red-600">
                You must add 3 Project Details
              </small>
              <div className="flex flex-col">
                <input
                  type="text"
                  placeholder="Project Name"
                  className="
                  p-2 bg-white border m-1 border-black w-full focus:outline-none"
                />

                <input
                  type="text"
                  placeholder="Duration - Day"
                  className="p-2 bg-white border m-1 w-full border-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Feature - 1"
                  className="p-2 bg-white border m-1 w-full border-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Feature - 2"
                  className="p-2 bg-white border m-1 w-full border-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Feature - 3"
                  className="p-2 bg-white border m-1 w-full border-black focus:outline-none"
                />

                <button className="py-3 w-full rounded-md font-bold text-white bg-green-600">
                  Add
                </button>
              </div>
            </div>
          </div>

          <div className="w-full border-l-2 text-center  border-black">
            <div>
              <p className="text-xl font-semibold">Choose Themes Color</p>
              <div className=" flex justify-center items-center">
                <button
                  onClick={() => setThemes("#253847")}
                  className="w-8 m-1 h-8 bg-[#253847] rounded-full"
                ></button>

                <button
                  onClick={() => setThemes("#FF4301")}
                  className="w-8 m-1 h-8 bg-[#FF4301] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#7D0633")}
                  className="w-8 m-1 h-8 bg-[#7D0633] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#FFB100")}
                  className="w-8 m-1 h-8 bg-[#FFB100] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#083AA9")}
                  className="w-8 m-1 h-8 bg-[#083AA9] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#3AB0FF")}
                  className="w-8 m-1 h-8 bg-[#3AB0FF] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#A760FF")}
                  className="w-8 m-1 h-8 bg-[#A760FF] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#8E0505")}
                  className="w-8 m-1 h-8 bg-[#8E0505] rounded-full"
                ></button>
                <button
                  onClick={() => setThemes("#31112C")}
                  className="w-8 m-1 h-8 bg-[#31112C] rounded-full"
                ></button>

                <input
                  onChange={(e) => setThemes(`bg-[${e.target.value}]`)}
                  //   onSubmit={(e) => console.log(e.target.value)}
                  type="color"
                  defaultValue={themes}
                />
              </div>

              <div className="w-full h-full flex justify-center items-center p-12 ">
                <div className="border shadow-2xl">
                  <Template1 resumeData={resumeData} themes={themes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateRessume;
