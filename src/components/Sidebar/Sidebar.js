import React from "react";
import {
  FaRegAddressCard,
  FaThLarge,
  FaRegFilePdf,
  FaRegFileImage,
  FaSignOutAlt,
  FaUsers,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../redux/action/user";
const Sidebar = () => {
  const { user } = useSelector((state) => state.user);

  console.log(user.role);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <div className="">
      <aside className="   border-r py-4 px-3 ">
        <div>
          <div className=" text-center">
            <img
              src={`${
                user?.imgUrl
                  ? `${user.imgUrl}`
                  : "https://source.unsplash.com/40x40/?portrait?1"
              }`}
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              {user?.name && user.name}
            </h5>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <Link
                to="/dashboard"
                className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400"
                // onMouseLeave={() => setIsActive(false)}
              >
                <span>
                  {" "}
                  <FaThLarge />{" "}
                </span>
                <span className="-mr-1 font-medium">My Account</span>
              </Link>
            </li>

            {user.role === "pro" && (
              <li>
                <Link
                  to="/dashboard/all-user"
                  className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400"
                >
                  <span>
                    {" "}
                    <FaUsers />{" "}
                  </span>
                  <span className="group-hover:text-gray-700">All Users</span>
                </Link>
              </li>
            )}

            <li>
              <Link
                to="/dashboard/resume"
                className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400"
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
                to="/dashboard/cv"
                className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400"
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
                to="/dashboard/coverletter"
                className="px-4 py-3 flex items-center  space-x-4 rounded-xl text-black focus:text-white focus:bg-gradient-to-r  focus:from-sky-600 focus:to-cyan-400"
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
          <button
            onClick={logOut}
            className="px-4 py-3  flex items-center space-x-4 rounded-md text-gray-600 group"
          >
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
