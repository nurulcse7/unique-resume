import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/unique resume favicon.png";
import { signOut } from "../../redux/action/user";

const menuItems = [
  {
    name: "Resume Templetes",
    path: "/resume-templetes",
    id: 1,
  },
  {
    name: "Cv Templetes",
    path: "/cv-templetes",
    id: 2,
  },
  {
    name: "Cover letters",
    path: "/teams",
    id: 3,
  },
  {
    name: "Faq",
    path: "/faq",
    id: 4,
  },
];
const Navbar = ({ iaAuthenticated, user }) => {
  const navigate = useNavigate();
  const [isMenu, setIsMenu] = useState(false);
  const { message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    if (message === "Logged out successfully") {
      navigate("/login");
    }
  }, [message, navigate]);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div>
      <header className="fixed w-full mx-auto animate-in z-[100] mb-10">
        <nav className="bg-blue-900/60 lg:w-full backdrop-blur-sm dark:backdrop-blur-sm border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="Unique Resume Logo"
              />

              <button data-text="Awesome" className="button flex">
                <span className="actual-text text-[15px]">
                  &nbsp;UniqueResume&nbsp;
                </span>
                <span className="hover-text text-[15px]" aria-hidden="true">
                  &nbsp;UniqueResume&nbsp;
                </span>
              </button>
            </Link>

            {/* dektop menu */}
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul
                className={`flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 `}
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      to={item.path}
                      className={` block py-2 pr-4 pl-3 font-medium text-sm text-gray-200 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                      aria-current="page"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
                {iaAuthenticated ? (
                  <button
                    onClick={logOut}
                    className="border border-secondary bg-primary inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  text-white md:w-fit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Log Out
                  </button>
                ) : (
                  <>
                    <Link to="/login">
                      <button
                        className="border border-primary bg-primary inline-block px-4 py-[5px]  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  text-white md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        className="border inline-block px-4  py-[5px] border-primary_btn hover:bg-primary_btndark:hover:text-black dark:text-white text-gray-200 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  md:w-fit"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Register
                      </button>
                    </Link>
                  </>
                )}
              </ul>
            </div>
            <div className="block lg:hidden pb-2">
              <div className="relative flex justify-end items-center gap-3 sm:max-w-xl mx-auto">
                <button
                  className="text-gray-200 dark:text-white w-10 h-10 relative focus:outline-none bg-transparent"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  <div className="block w-8 absolute gap-1 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                        isMenu ? "rotate-45" : "-translate-y-1.5"
                      }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute  h-0.5 w-8 bg-current  transform transition duration-100 ease-in-out ${
                        isMenu ? "opacity-0" : ""
                      }`}
                    ></span>
                    <span
                      aria-hidden="true"
                      className={`block absolute h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${
                        isMenu ? "-rotate-45" : "translate-y-1.5"
                      }`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
            {/* Mobile Menu */}
            {isMenu && (
              <div
                className={`h-screen flex justify-between border-t-2 border-primary_btn  w-full mx-auto lg:hidden ${
                  isMenu
                    ? "slide-right"
                    : "animate-out slide-out-from-left duration-300"
                } `}
              >
                <ul
                  className={`flex flex-col justify-start items-center w-full mx-auto font-medium text-gray-200 dark:text-white`}
                >
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={`${item.path}`}
                        className={` block py-2 pr-4 pl-3 text-gray-200 bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white`}
                        aria-current="page"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    (
                    <button
                      onClick={logOut}
                      className="border border-secondary bg-primary inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  text-white md:w-fit"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Log Out
                    </button>
                    ) : (
                    <>
                      <span className="flex flex-col lg:flex-row md:w-fit w-full justify-between items-center gap-3">
                        <Link to="/auth/login">
                          <button
                            className="border border-secondary bg-primary inline-block px-6 py-2.5  font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primary_btn hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  text-white md:w-fit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Login
                          </button>
                        </Link>
                        <Link to="/register">
                          <button
                            className="border inline-block px-6 py-2.5 border-primary_btn hover:bg-primary_btn hover:text-white  dark:text-white text-gray-200 font-medium text-sm leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-primary_btn focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary_btn active:shadow-lg transition duration-150 ease-in-out  md:w-fit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Register
                          </button>
                        </Link>
                      </span>
                    </>
                    )
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
