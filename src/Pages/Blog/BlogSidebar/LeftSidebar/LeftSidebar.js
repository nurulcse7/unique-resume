import React from "react";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  const SideBarItems = [
    {
      name: " How to write a resume",
      path: "/blog",
      id: 1,
    },
    {
      name: " Resume Formats",
      path: "/blog/resume-formats",
      id: 2,
    },
    {
      name: "Chronological resume",
      path: "/blog/choronical-resume",
      id: 3,
    },
    {
      name: "Functional resume",
      path: "/blog/functional-resume",
      id: 4,
    },
    {
      name: " Resume Elements",
      path: "/blog/resume-elements",
      id: 5,
    },
  ];

  return (
    <div className="">
      <div className="sticky top-[90px] ">
        <div className="w-full md:w-[90%] lg:w-[85%] mx-auto pt-6 pb-3 mb-3 px-5 bg-[#f3f4f6] rounded-lg ">
          <div>
            <h1 className=" font-bold text-left text-xl border-b-2 my-2">
              Fundamentals{" "}
            </h1>
          </div>

          <ul className="text-left ">
            {SideBarItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="py-1 px-1 text-lg font-semibold hover:bg-white rounded focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400 "
                >
                  {" "}
                  <Link to={`${item.path}`}> {item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
