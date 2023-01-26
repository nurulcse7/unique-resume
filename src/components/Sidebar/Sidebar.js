import Link from "antd/es/typography/Link";
import React from "react";
import {
  FaRegAddressCard,
  FaThLarge,
  FaRegFilePdf,
  FaRegFileImage,
  FaSignOutAlt,
} from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="">
      <aside className="   border-r py-4 px-3 ">
        <div>
          <div className=" text-center">
            <img
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              Cynthia J. Watts
            </h5>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link
                href="/dashboard"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
              >
                <span>
                  {" "}
                  <FaThLarge />{" "}
                </span>
                <span className="-mr-1 font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/resume"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span>
                  {" "}
                  <FaRegAddressCard />{" "}
                </span>
                <span className="group-hover:text-gray-700">Resume</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/cv"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span>
                  {" "}
                  <FaRegFileImage />{" "}
                </span>
                <span className="group-hover:text-gray-700">CV Templates</span>
              </Link>
            </li>

            <li>
              <Link
                href="/dashboard/coverletter"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span>
                  <FaRegFilePdf />
                </span>

                <span className="group-hover:text-gray-700">Cover Letter</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t">
          <button className="px-4 py-3  flex items-center space-x-4 rounded-md text-gray-600 group">
            <span>
              <FaSignOutAlt />
            </span>
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
