import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaArchive,
  FaCloudDownloadAlt,
  FaCompress,
  FaPencilAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../../utils/axiosInstance";

const DashboardCoverLetter = () => {
  const [data, setData] = useState([]);
  const [ismove, setIsMove] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/getcoverletter", {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const { template } = data;

  console.log(template);

  const handleDelete = (id) => {
    axiosInstance
      .delete(`/api/coverletter/${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data) {
          toast.success("Cover Letter Deleted SuccessFully");
        }
      });
  };

  const handleUpdateCoverLetter = (id) => {
    navigate(`/cover-letter-editor/${id}`);
  };

  return (
    <div>
      {" "}
      <div className="w-[95%] mx-auto">
        {template ? (
          <>
            <div>
              <div className="my-4">
                <h1 className="text-5xl mt-4 font-bold">
                  Let's get you a Cover Letter
                </h1>
                <div className="w-[60%] mx-auto mt-5">
                  <p className="text-sm font-semibold">
                    There is a Cover Letter currently associated to you. You can
                    manage your Cover Letter from here.
                  </p>
                </div>
              </div>

              {/* Template */}

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                <div className="col-span-2 ">
                  <section
                    onMouseEnter={() => setIsMove(!ismove)}
                    onMouseLeave={() => setIsMove(!ismove)}
                    className=" w-[600px] h-[238px] my-4 border hover:-z-0  rounded-md mx-auto text-left relative bg-gray-50  shadow-2xl"
                  >
                    <div className="flex">
                      <div className=" bg-[#0f5b31]  text-white p-4">
                        <div className="w-full ">
                          <div className="w-full  ">
                            <p className="font-bold uppercase">skills</p>
                            <hr className="border-t-2 border-white" />
                          </div>

                          <div className="w-full  ">
                            <p className="font-bold uppercase">
                              industry expertise
                            </p>
                            <hr className="border-t-2 border-white" />

                            <div className="">
                              <div className="mt-2">
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
                              <div className="">
                                <p className="">
                                  <small>Partnerships</small>
                                </p>
                                <input
                                  type="range"
                                  className="w-full"
                                  value="90"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="  max-w-[380px] p-8 h-full">
                        <div>
                          <h3 className="text-semibold text-[#0f5b31] text-xl">
                            {template?.jobTitle}
                          </h3>

                          <div className="grid grid-cols-2 leading-none">
                            <p>
                              <small>
                                <i className="fa-solid pr-1 fa-phone"></i>{" "}
                                {template?.mobileNumber}
                              </small>
                            </p>
                          </div>

                          <div className="grid grid-cols-2 leading-none">
                            <p>
                              <small>
                                <i className="fa-solid pr-1 fa-link"></i>
                                linkedin.com/in/timothy
                              </small>
                            </p>
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
                      <div className="absolute w-[600px] h-[238px]  bg-black hover:z-10 justify-center opacity-75 flex top-0 rounded-sm left-0">
                        <button className="flex items-center space-x-2  ">
                          {" "}
                          <span className=" text-sky-600 text-xl">
                            <FaCompress />{" "}
                          </span>
                          <span className="text-white text-xl hover:text-sky-600 font-bold">
                            View Full Cover Letter{" "}
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
                        onClick={() => handleUpdateCoverLetter(template?._id)}
                        className=" text-black  text-sm font-bold  hover:text-sky-500"
                      >
                        {" "}
                        Edit Cover Letter{" "}
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
                        Delete Cover Letter{" "}
                      </button>
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="text-sky-500 ">
                        {" "}
                        <FaCloudDownloadAlt />{" "}
                      </span>
                      <button className=" text-black  text-sm font-bold  hover:text-sky-500">
                        {" "}
                        Download Cover Letter{" "}
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
                Let's get you a Cover Letter!
              </h1>
              <div className="w-[60%] mx-auto mt-5">
                <p className="text-sm font-semibold">
                  There is no Cover Letter currently associated to you. When you
                  create one it will show up here for you to manage.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/cover-letter"
                  className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
                  type="button"
                >
                  Create Your Cover Letter
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCoverLetter;
