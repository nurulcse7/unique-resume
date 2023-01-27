import React from "react";

const Template4 = ({ data }) => {
  return data?.map((d) => (
    <section className=" m-10 border border-black rounded-md mx-auto text-left relative bg-gray-50 h-[29.7cm] shadow-2xl">
      <div className="flex">
        <div className=" bg-[#0f5b31] h-[29.7cm]  text-white p-12">
          <div className="leading-none">
            {d.personalInformation.map((p) => (
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

              <div>
                <div className="flex justify-between items-center">
                  <small className="">
                    Communication{" "}
                    {d.skills.map((s, index) => (
                      <span>
                        <span className="text-xl font-bold px-1">•</span>
                        {s.skill}
                      </span>
                    ))}
                  </small>
                </div>
              </div>
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
                        <span className="text-xl font-bold ml-1">•••••</span>
                      </small>
                    </div>
                    <div className="flex items-center justify-between">
                      <small>English</small>
                      <small>
                        Fully Proficient {""}
                        <span className="text-xl font-bold ml-1">•••••</span>
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
                        A person who is quietiy confident makes the best leader
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
                          Not only is it very satisfying. but it also adds more
                          business value than anything else a leader does.
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
                          With my two kids, I spend at least one day each month
                          on cherity or volunteering in the community
                        </small>
                      </div>
                    </div>

                    <div className="flex">
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
                          Recharging durung the weekend is vital for leading a
                          high-performing team
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
                          Recharging durung the weekend is vital for leading a
                          high-performing team
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  w-[450px] p-8 h-full">
          <div>
            <h3 className="text-semibold text-[#0f5b31] text-xl">
              Director of Business Development
            </h3>
            <div className="grid grid-cols-2 leading-none">
              <p>
                <small>
                  <i className="fa-solid pr-1 fa-phone"></i> (862) 7345-425
                </small>
              </p>
              <p>
                <small>
                  <i className="fa-solid pr-1 fa-at"></i>{" "}
                  timothy.duncan@gmail.com
                </small>
              </p>
              <p>
                <small>
                  <i className="fa-solid pr-1 fa-link"></i>
                  linkedin.com/in/timothy
                </small>
              </p>
              <p>
                <small>
                  <i className="fa-solid pr-1 fa-location-dot"></i>9
                  Paterson.New Jersey
                </small>
              </p>
            </div>

            <div className="w-full mt-10 ">
              <p className="font-bold  uppercase">SUMMARY</p>
              <hr className="border-t-2 border-[#0f5b31]" />

              <div>
                <div className="flex justify-between items-center">
                  <small className="">
                    Data-driven business development director with 10 years of
                    experience working with Saas companies. Successfully secured
                    high-profile strategic partnerships that lead to a 130%
                    increase in sales. Executed an 18-month marketing plan with
                    a $250K budget, bringing in over 40 new customers. Excellent
                    communicator and team leader. Seeking to leverage my
                    business development expertise at HyperTarget.
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
                  <small className="font-bold">Sales Training Expert</small>
                </p>
                <div className="flex justify-between items-center">
                  <small className="text-gray-600">
                    Trained over 30 entry-level sales representatives and
                    underperforming sales executives, leading to a 110% increase
                    in year-over-year sales
                  </small>
                </div>

                <p className="pt-1">
                  <small className="font-bold">Negotiation</small>
                </p>
                <div className="flex justify-between items-center">
                  <small className="text-gray-600">
                    Landed major business deals with market-leading companies
                    across various industries, which boosted brand authority and
                    increased revenue
                  </small>
                </div>

                <p className="pt-1">
                  <small className="font-bold">
                    Leadership in Times of Crisis
                  </small>
                </p>
                <div className="flex justify-between items-center">
                  <small className="text-gray-600">
                    During a restructuring period, formed fully operational
                    technical sales department with $3M annual sales within 6
                    months
                  </small>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <div className=" mr-10 w-full">
                <p className="font-bold border-b-2 border-black">EXPERIENCE</p>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold mt-2">
                      Director of Business Development
                    </p>
                    <small>2016 - Ongoing</small>
                  </div>
                  <div className="flex justify-between items-center">
                    <small className="font-bold text-[#1e673f]">Esycron</small>
                    <small>New Jersey</small>
                  </div>

                  <div className="leading-none">
                    <p>
                      <small className="font-semibold">
                        Computer software company specializing in digital
                        mapping solutions and GPS technologies
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Secured high-profile strategic partnerships that lead to
                        a 130% increase in sales by representing Esycron in
                        meetings with external parties and conferences
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Collaborated with product development teams and
                        marketing specialists to improve our pricing structure
                        and product design
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Negotiated and closed seven major deals with
                        internationalclients and large US­ based companies with
                        a total value of $1.35M
                      </small>
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold mt-2">Sales Representative</p>
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
                        A fast-moving innovative Saas company powering online
                        branded payment systems and services.
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Developed and executed a customer-focused growth plan,
                        leading to a 72% increase in annual revenue within two
                        years
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Boosted sales performance by hiring 18 new sales
                        representatives and coaching underperforming sales
                        associates
                      </small>
                    </p>
                    <p className="ml-2 mt-2">
                      <span>•</span>
                      <small className="pl-2">
                        Led an 18-mont h marketing plan with a $250K budget,
                        bringing in over 40 new customers and increasing brand
                        awareness in the payment gateway market
                      </small>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="w-[420px] mr-10 mt-2 ">
            <p className="font-bold">INDUSTRY EXPERTISE</p>
            <hr className="border-t border-black" />

            <div className="grid grid-cols-2 gap-x-4">
              <div>
                <small className="block pt-1">Agency</small>
                <input value="90" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Healthcare</small>
                <input value="69" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Traditonal print media</small>
                <input value="50" className="w-full" type="range" />
              </div>
              <div>
                <small className="block pt-1">Traditonal HR Software</small>
                <input value="80" className="w-full" type="range" />
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  ));
};

export default Template4;
