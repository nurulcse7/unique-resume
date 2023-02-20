import React, { useState } from "react";
import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  FaPencilAlt,
  FaArchive,
  FaCloudDownloadAlt,
  FaCompress,
} from "react-icons/fa";
import axiosInstance from "../../../utils/axiosInstance.js";
import { toast } from "react-hot-toast";
const DashboardResume = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [ismove, setIsMove] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/api/getresume", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    axiosInstance
      .delete(`/api/delete-resume/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data) {
          toast.success("Resume Deleted SuccessFully");
        }
      });
  };
  const handleUpdateResume = (id) => {
    navigate(`/resume-templates/${id}`);
  };
  const { template } = data;

  return (
    <div>
      {" "}
      <div className="w-[95%] mx-auto">
        {template ? (
          <>
            <div>
              <div className="my-4">
                <h1 className="text-5xl mt-4 font-bold">
                  Let's get you a Resume
                </h1>
                <div className="w-[60%] mx-auto mt-5">
                  <p className="text-sm font-semibold">
                    There is a Resume currently associated to you. You can
                    manage your Resume from here.
                  </p>
                </div>
              </div>

              {/* Template */}

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 ">
                  <section
                    onMouseEnter={() => setIsMove(!ismove)}
                    onMouseLeave={() => setIsMove(!ismove)}
                    className=" w-[600px] h-[241px] my-4 border hover:-z-0  rounded-md mx-auto text-left relative bg-gray-50  shadow-2xl"
                  >
                    <div className="flex">
                      <div className=" bg-[#0f5b31]  text-white p-4">
                        <div className="leading-none">
                          {template?.personalInformation?.map((p) => (
                            <h2 className=" leading-none uppercase text-3xl font-semibold">
                              {p.fname} <br></br>
                              {p.lname}
                            </h2>
                          ))}
                        </div>
                        <div className="w-full ">
                          <div className="w-full  ">
                            <p className="font-bold uppercase">skills</p>
                            <hr className="border-t-2 border-white" />

                            <div>
                              <div className="flex justify-between items-center">
                                <small className="">
                                  {template.skills.length < 0 ? (
                                    <>
                                      {template?.skills?.map((s, index) => (
                                        <span>
                                          <span className="text-xl font-bold px-1">
                                            •
                                          </span>
                                          {s.skill}
                                        </span>
                                      ))}
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-xl font-bold px-1">
                                        •
                                      </span>
                                      <span className="text-xl font-bold px-1">
                                        •
                                      </span>
                                    </>
                                  )}
                                </small>
                              </div>
                            </div>
                          </div>

                          <div className="w-full  ">
                            <p className="font-bold uppercase">
                              industry expertise
                            </p>
                            <hr className="border-t-2 border-white" />

                            <div className="">
                              <div className="mt-0">
                                <p className="">
                                  <small>Sales Training</small>
                                </p>
                                <input
                                  type="range"
                                  className="w-full"
                                  value="90"
                                />
                              </div>
                              <div className="">
                                <p className="">
                                  <small>Product-led Growth</small>
                                </p>
                                <input
                                  type="range"
                                  className="w-full"
                                  value="60"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="  max-w-[380px] p-8 h-full">
                        <div>
                          {template?.personalInformation?.map((p) => (
                            <h3 className="text-semibold text-[#0f5b31] text-xl">
                              {p.jobTitle}
                            </h3>
                          ))}

                          <div className="grid grid-cols-2 leading-none">
                            {template?.personalInformation?.map((p) => (
                              <p>
                                <small>
                                  <i className="fa-solid pr-1 fa-phone"></i>{" "}
                                  {p.phone && p.phone}
                                </small>
                              </p>
                            ))}

                            {template && (
                              <p>
                                <small className="flex">
                                  <i className="fa-solid pr-1 fa-at"></i>
                                  {template.user.email}
                                </small>
                              </p>
                            )}

                            <p>
                              <small>
                                <i className="fa-solid pr-1 fa-link"></i>
                                linkedin.com/in/timothy
                              </small>
                            </p>
                            {template?.personalInformation?.map((p) =>
                              p ? (
                                <p>
                                  <small>
                                    <i className="fa-solid pr-1 fa-location-dot"></i>
                                    {p.address}
                                  </small>
                                </p>
                              ) : (
                                " "
                              )
                            )}
                          </div>

                          <div className="w-full mt-3 ">
                            <p className="font-bold  uppercase">SUMMARY</p>
                            <hr className="border-t-2 border-[#0f5b31]" />

                            <div>
                              <div className="flex justify-between items-center">
                                <small className="">
                                  Data-driven business development director with
                                  10 years of experience working with Saas
                                  companies. Successfully secured high-profile
                                  strategic partnerships that lead to a 130%
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${ismove ? "  delay-[10s]  " : "hidden"}`}>
                      <div className="absolute w-[600px] h-[241px]  bg-black hover:z-10 justify-center opacity-75 flex top-0 rounded-sm left-0">
                        <button
                          onClick={() => handleUpdateResume(template?._id)}
                          className="flex items-center space-x-2  "
                        >
                          {" "}
                          <span className=" text-sky-600 text-xl">
                            <FaCompress />{" "}
                          </span>
                          <span className="text-white text-xl hover:text-sky-600 font-bold">
                            View Full Resume{" "}
                          </span>
                        </button>
                      </div>
                    </div>
                  </section>
                </div>
                {/* Template */}
                <div className="grid grid-rows-1 md:grid-rows-3 lg:grid-rows-3">
                  <div></div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sky-500 ">
                        {" "}
                        <FaPencilAlt />{" "}
                      </span>
                      <button
                        onClick={() => handleUpdateResume(template?._id)}
                        className=" text-black  text-sm font-bold  hover:text-sky-500"
                      >
                        {" "}
                        Edit Resume{" "}
                      </button>
                    </div>

                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-sky-500 ">
                        {" "}
                        <FaArchive />{" "}
                      </span>
                      <button
                        onClick={() => handleDelete(template?._id)}
                        className=" text-black  text-sm font-bold  hover:text-sky-500"
                      >
                        {" "}
                        Delete Resume{" "}
                      </button>
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-sky-500 ">
                        {" "}
                        <FaCloudDownloadAlt />{" "}
                      </span>
                      <button
                        onClick={() => handleUpdateResume(template?._id)}
                        className=" text-black  text-sm font-bold  hover:text-sky-500"
                      >
                        {" "}
                        Download Resume{" "}
                      </button>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="my-4">
              <h1 className="text-5xl mt-4 font-bold">
                Let's get you a Resume!
              </h1>
              <div className="w-[60%] mx-auto mt-5">
                <p className="text-sm font-semibold">
                  There is no Resume currently associated to you. When you
                  create one it will show up here for you to manage.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/resume-templates"
                  className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
                  type="button"
                >
                  Create Your Resume
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardResume;
