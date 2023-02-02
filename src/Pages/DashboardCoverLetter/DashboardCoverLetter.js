import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCoverLetter } from "../../redux/action/data";
import axiosInstance from "../../utils/axiosInstance";

const DashboardCoverLetter = () => {
  const [data, setData] = useState([]);

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

  console.log(data);

  const { template } = data;

  return (
    <div className="w-[60%]  mx-auto">
      {template ? (
        <>
          <div>
            <div className="my-4">
              <h1 className="text-5xl mt-4 font-bold">
                Let's get you a Cover letter
              </h1>
              <div className="w-[60%] mx-auto mt-5">
                <p className="text-sm font-semibold">
                  There is a Cover Letter currently associated to you. You can
                  manage your Cover Letter from here.
                </p>
              </div>
            </div>

            {/* Template */}
            <section className=" m-10 border border-black rounded-md mx-auto text-left relative bg-gray-50 h-[29.7cm] shadow-2xl">
              <div className="flex">
                <div className=" bg-[#0f5b31] h-[29.7cm]  text-white p-12">
                  <div className="leading-none">
                    {template?.personalDetails.map((p) => (
                      <h2 className=" leading-none uppercase text-3xl font-semibold">
                        {p.fname} <br></br>
                        {p.lname}
                      </h2>
                    ))}
                  </div>
                  <div className="w-full ">
                    <div className="w-full mt-10 ">
                      <p className="font-bold uppercase">skills</p>
                      <hr className="border-t-2 border-white" />

                      {/* <div>
                        <div className="flex justify-between items-center">
                          <small className="">
                            {template?.skills.map((s, index) => (
                              <span>
                                <span className="text-xl font-bold px-1">
                                  •
                                </span>
                                {s.skill}
                              </span>
                            ))}
                          </small>
                        </div>
                      </div> */}
                    </div>

                    <div className="w-full mt-4 ">
                      <p className="font-bold uppercase">industry expertise</p>
                      <hr className="border-t-2 border-white" />

                      <div className="">
                        <div className="mt-2">
                          <p className="">
                            <small>Sales Training</small>
                          </p>
                          <input type="range" className="w-full" value="90" />
                        </div>
                        <div className="">
                          <p className="">
                            <small>Product-led Growth</small>
                          </p>
                          <input type="range" className="w-full" value="60" />
                        </div>
                        <div className="">
                          <p className="">
                            <small>Partnerships</small>
                          </p>
                          <input type="range" className="w-full" value="90" />
                        </div>
                      </div>

                      <div className="w-full mt-2 ">
                        <p className="font-bold ">LANGUAGES</p>
                        <hr className="border-t-2 border-white" />

                        <div>
                          <div className="leading-none mt-2">
                            <div className="flex items-center justify-between">
                              <small>Bangla</small>
                              <small>
                                Native {""}
                                <span className="text-xl font-bold ml-1">
                                  •••••
                                </span>
                              </small>
                            </div>
                            <div className="flex items-center justify-between">
                              <small>English</small>
                              <small>
                                Fully Proficient {""}
                                <span className="text-xl font-bold ml-1">
                                  •••••
                                </span>
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full mt-2 ">
                        <p className="font-bold uppercase ">favourite quote</p>
                        <hr className="border-t-2 border-white" />

                        <div>
                          <div className="leading-none mt-2">
                            <div className="">
                              <small className="block">
                                A person who is quietiy confident makes the best
                                leader
                              </small>
                              <small>__ Fred Wilson, Union Ventures</small>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full mt-2 ">
                        <p className="font-bold uppercase ">passions</p>
                        <hr className="border-t-2 border-white" />

                        <div>
                          <div className="leading-none mt-2">
                            <div className="flex">
                              <p>
                                <small>
                                  <i className="fa-solid pr-2 fa-star"></i>
                                </small>
                              </p>
                              <div>
                                <p className="font-semibold">
                                  Developong my team into biz dev stars
                                </p>
                                <small>
                                  Not only is it very satisfying. but it also
                                  adds more business value than anything else a
                                  leader does.
                                </small>
                              </div>
                            </div>

                            <div className="flex my-2">
                              <p>
                                <small>
                                  <i className="fa-solid  pr-2 fa-heart"></i>
                                </small>
                              </p>
                              <div>
                                <p className="font-semibold">
                                  Giving back to my community
                                </p>
                                <small>
                                  With my two kids, I spend at least one day
                                  each month on cherity or volunteering in the
                                  community
                                </small>
                              </div>
                            </div>

                            <div className="flex mt-2">
                              <p>
                                <small>
                                  <i className="fa-solid pr-2 fa-horse-head"></i>
                                </small>
                              </p>
                              <div>
                                <p className="font-semibold">
                                  Horse-riding & spending time in nature
                                </p>
                                <small>
                                  Recharging durung the weekend is vital for
                                  leading a high-performing team
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="  max-w-[450px] p-8 h-full">
                  <div>
                    {template?.personalDetails.map((p) => (
                      <h3 className="text-semibold text-[#0f5b31] text-xl">
                        {p.jobTitle}
                      </h3>
                    ))}

                    <div className="grid grid-cols-2 leading-none">
                      {template?.personalDetails.map((p) => (
                        <p>
                          <small>
                            <i className="fa-solid pr-1 fa-phone"></i> {p.phone}
                          </small>
                        </p>
                      ))}

                      {template?.personalDetails.map((p) => (
                        <p>
                          <small className="flex">
                            <i className="fa-solid pr-1 fa-at"></i>
                            {p.userEmail}
                          </small>
                        </p>
                      ))}

                      <p>
                        <small>
                          <i className="fa-solid pr-1 fa-link"></i>
                          linkedin.com/in/timothy
                        </small>
                      </p>
                      {template?.personalDetails.map((p) =>
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

                    <div className="w-full mt-10 ">
                      <p className="font-bold  uppercase">SUMMARY</p>
                      <hr className="border-t-2 border-[#0f5b31]" />

                      <div>
                        <div className="flex justify-between items-center">
                          <small className="">
                            Data-driven business development director with 10
                            years of experience working with Saas companies.
                            Successfully secured high-profile strategic
                            partnerships that lead to a 130%
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="w-full mt-10 ">
                      <p className="font-bold uppercase border-b-2 border-black">
                        KEY ACHIEVEMENTS
                      </p>

                      <div className="pl-6">
                        <p className="pt-1">
                          <small className="font-bold">
                            Sales Training Expert
                          </small>
                        </p>
                        <div className="flex justify-between items-center">
                          <small className="text-gray-600">
                            Trained over 30 entry-level sales representatives
                            and underperforming sales executives, leading to a
                            110% increase in year-over-year sales
                          </small>
                        </div>

                        <p className="pt-1">
                          <small className="font-bold">Negotiation</small>
                        </p>
                        <div className="flex justify-between items-center">
                          <small className="text-gray-600">
                            Landed major business deals with market-leading
                            companies across various industries, which boosted
                            brand authority and increased revenue
                          </small>
                        </div>

                        <p className="pt-1">
                          <small className="font-bold">
                            Leadership in Times of Crisis
                          </small>
                        </p>
                        <div className="flex justify-between items-center">
                          <small className="text-gray-600">
                            During a restructuring period, formed fully
                            operational technical sales department with $3M
                            annual sales within 6 months
                          </small>
                        </div>
                      </div>
                    </div>

                    <div className="w-full ">
                      <div className=" mr-10 w-full">
                        <p className="font-bold border-b-2 border-black">
                          EXPERIENCE
                        </p>

                        <div>
                          <div className="flex justify-between items-center">
                            <p className="font-semibold mt-2">
                              Director of Business Development
                            </p>
                            <small>2016 - Ongoing</small>
                          </div>
                          <div className="flex justify-between items-center">
                            <small className="font-bold text-[#1e673f]">
                              Esycron
                            </small>
                            <small>New Jersey</small>
                          </div>

                          <div className="leading-none">
                            <p>
                              <small className="font-semibold">
                                Computer software company specializing in
                                digital mapping solutions and GPS technologies
                              </small>
                            </p>
                            <p className="ml-2 mt-2">
                              <span>•</span>
                              <small className="pl-2">
                                Secured high-profile strategic partnerships that
                                lead to
                              </small>
                            </p>
                            <p className="ml-2 mt-2">
                              <span>•</span>
                              <small className="pl-2">
                                Collaborated with product development teams and
                              </small>
                            </p>
                            <p className="ml-2 mt-2">
                              <span>•</span>
                              <small className="pl-2">
                                Negotiated and closed seven major deals with
                                internationalclients and large US­ based
                                companies with
                              </small>
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center">
                            <p className="font-semibold mt-2">
                              Sales Representative
                            </p>
                            <small>2011 - 2016</small>
                          </div>
                          <div className="flex justify-between items-center">
                            <small className="font-bold text-[#1e673f]">
                              ReloUnion
                            </small>
                            <small>New Jersey</small>
                          </div>

                          <div className="leading-none">
                            <p>
                              <small className="font-semibold">
                                A fast-moving innovative Saas company powering
                                online
                              </small>
                            </p>
                            <p className="ml-2 mt-2">
                              <span>•</span>
                              <small className="pl-2">
                                Developed and executed a customer-focused growth
                                plan,
                              </small>
                            </p>
                            <p className="ml-2 mt-2">
                              <span>•</span>
                              <small className="pl-2">
                                Boosted sales performance by hiring 18 new sales
                              </small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Template */}
          </div>
        </>
      ) : (
        <>
          <div className="my-4">
            <h1 className="text-5xl mt-4 font-bold">Let's get you a CV!</h1>
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
  );
};

export default DashboardCoverLetter;
