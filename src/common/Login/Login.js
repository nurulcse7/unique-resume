<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/hero1.png";
import resume from "../../assets/resume.png";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const userLoginHandelar = (e) => {
    e.preventdefault();
  };
  return (
    <section className="h-screen w-full text-left bg-gray-100  flex justify-center items-center">
      <div className=" bg-[#7889B9] md:border-2 border-black shadow-xl rounded-3xl grid grid-cols-2">
        <div className="px-6 py-4 hidden md:block">
          //!logo
          <a href="/" className="flex items-center">
            <img src={logo} className="mr-3 h-14 sm:h-12" alt="Flowbite Logo" />
            <button data-text="Awesome" className="button">
              <span className="actual-text">&nbsp;UniqueResume&nbsp;</span>
              <span className="hover-text" aria-hidden="true">
                &nbsp;UniqueResume&nbsp;
              </span>
            </button>
          </a>
          <div className="h-full w-full flex justify-center items-center">
            <img src={resume} alt="Resume" className="w-full md:w-[450px]" />
          </div>
        </div>
        <div>
          <div className="flex w-[100vw] md:w-[500px]  justify-center items-center">
            <div className="w-full bg-white flex-col rounded-3xl md:rounded-r-3xl md:rounded-l-none justify-center items-center ">
              <div className="w-full">
                {/* <img src={logo1} alt="Logo.." /> */}
                <h2 className="text-2xl py-3 px-6 hidden md:block font-semibold">
                  Welcome Back!
                  <br />
                  <br />
                </h2>
                <div className="md:hidden bg-[#7889B9] px-6 py-4 rounded-t-3xl">
                  <a href="/" className="flex items-center">
                    <img
                      src={logo}
                      className="mr-3 h-14 sm:h-12"
                      alt="Flowbite Logo"
                    />
                    {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            3DotIt
                        </span> */}
                    <button data-text="Awesome" className="button">
                      <span className="actual-text">
                        &nbsp;UniqueResume&nbsp;
                      </span>
                      <span className="hover-text" aria-hidden="true">
                        &nbsp;UniqueResume&nbsp;
                      </span>
                    </button>
                  </a>
                </div>
              </div>
              <form
                onSubmit={(e) => userLoginHandelar(e)}
                className="w-full pt-7 px-6"
              >
                <div className="space-y-1 my-3 text-sm">
                  <label for="username" className="block dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />
                </div>
                <div className="relative space-y-1 text-sm my-2">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type={viewPassword ? "text" : "password"}
                    placeholder="******"
                    className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />

                  <label className="label">
                    <span className="label-text">Forgot Password ?</span>
                  </label>
                  <div
                    onClick={() => setViewPassword(!viewPassword)}
                    className="absolute cursor-pointer duration-300 text-gray-400 hover:text-gray-700 text-xl right-3 top-8"
                  >
                    {viewPassword ? (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </span>
                    ) : (
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className={`input bg-primary/60 hover:bg-primary duration-300 font-semibold text-white py-3 rounded-md w-full `}
                  >
                    Login
                  </button>
                </div>
                <div>
                  <p className="label-text text-center mt-2">
                    New to resume.com?
                    <Link
                      to="../signup"
                      className="text-[#00B4D8] pl-2 font-bold"
                    >
                      Create new account
                    </Link>
                  </p>
                </div>
              </form>
              <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
              </div>
              <div className="px-7">
                <button className="btn hover:bg-[#0077B6] mb-10 border-[#00B4D8] text-[#00B4D8] hover:text-white duration-300 border p-3 rounded-md w-full">
                  CONTINUE WITH GOOGLE
                </button>
=======
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/hero1.png";
import resume from "../../assets/resume.png";
import Loader from "../../components/Loader/Loader";
import { login } from "../../redux/action/user";

const Login = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const { iaAuthenticated, loading } = useSelector((state) => state.user);
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(userInfo));
  };
  useEffect(() => {
    iaAuthenticated && navigate("/");
  }, [iaAuthenticated, navigate]);

  return (
    <section className=" py-[20%] md:py-[10%]  w-full text-left bg-gray-100  flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className=" bg-[#7889B9] md:border-2 border-black shadow-xl rounded-3xl grid grid-cols-2">
          <div className="px-6 py-4 hidden md:block">
            <a href="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-14 sm:h-12"
                alt="Flowbite Logo"
              />
              <button data-text="Awesome" className="button">
                <span className="actual-text">&nbsp;UniqueResume&nbsp;</span>
                <span className="hover-text" aria-hidden="true">
                  &nbsp;UniqueResume&nbsp;
                </span>
              </button>
            </a>
            <div className="h-full w-full flex justify-center items-center">
              <img src={resume} alt="Resume" className="w-full md:w-[450px]" />
            </div>
          </div>
          <div>
            <div className="flex w-[100vw] md:w-[500px]  justify-center items-center">
              <div className="w-full bg-white flex-col rounded-3xl md:rounded-r-3xl md:rounded-l-none justify-center items-center ">
                <div className="w-full">
                  <h2 className="text-2xl py-3 px-6 hidden md:block font-semibold">
                    Welcome Back!
                    <br />
                    <br />
                  </h2>
                  <div className="md:hidden bg-[#7889B9] px-6 py-4 rounded-t-3xl">
                    <a href="/" className="flex items-center">
                      <img
                        src={logo}
                        className="mr-3 h-14 sm:h-12"
                        alt="Unique Resume Logo"
                      />
                      <button data-text="Awesome" className="button">
                        <span className="actual-text">
                          &nbsp;UniqueResume&nbsp;
                        </span>
                        <span className="hover-text" aria-hidden="true">
                          &nbsp;UniqueResume&nbsp;
                        </span>
                      </button>
                    </a>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="w-full pt-7 px-6">
                  <div className="space-y-1 my-3 text-sm">
                    <label
                      htmlFor="username"
                      className="block dark:text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                  <div className="relative space-y-1 text-sm my-2">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type={viewPassword ? "text" : "password"}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, password: e.target.value })
                      }
                      placeholder="******"
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />

                    <div
                      onClick={() => setViewPassword(!viewPassword)}
                      className="absolute cursor-pointer duration-300 text-gray-400 hover:text-gray-700 text-xl right-3 top-8"
                    >
                      {viewPassword ? (
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-sm">
                    <Link to="/forgot-password">Forgotten Password?</Link>
                  </span>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className={`input bg-primary/60 hover:bg-primary duration-300 font-semibold text-white py-3 rounded-md w-full `}
                    >
                      Login
                    </button>
                  </div>
                  <div>
                    <p className="label-text text-center mt-2">
                      New to resume.com?
                      <Link
                        to="/register"
                        className="text-[#00B4D8] pl-2 font-bold"
                      >
                        Create new account
                      </Link>
                    </p>
                  </div>
                </form>
                <div className="flex items-center w-full my-4">
                  <hr className="w-full dark:text-gray-400" />
                  <p className="px-3 dark:text-gray-400">OR</p>
                  <hr className="w-full dark:text-gray-400" />
                </div>
                <div className="px-7">
                  <button className="btn hover:bg-[#0077B6] mb-10 border-[#00B4D8] text-[#00B4D8] hover:text-white duration-300 border p-3 rounded-md w-full">
                    CONTINUE WITH GOOGLE
                  </button>
                </div>
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      )}
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
    </section>
  );
};

export default Login;
