import React from "react";

const Template6 = ({ data }) => {
  console.log("Template6", data);
  return (
    <section className="w-[21cm] m-10 border border-black rounded-md mx-auto text-left relative h-[29.7cm] shadow-2xl">
      <div className="flex w-full h-full ">
        <div className="w-[8cm] rounded-l-md  bg-gray-100 h-full ">
          <div className=" px-5   text-black text-center ">
            <div>
              <div className="py-3  ">
                <p className="text-3xl font-bold uppercase">
                  {data?.fname}
                  <br /> {data?.lname}
                </p>

                <p className="mt-3 text-lg font-semibold ">{data?.jobTitle}</p>
              </div>

              <div className="py-8 text-left">
                <div className="leading-none pt-8 border-t-2 border-gray-600">
                  <p className="capitalize">
                    {" "}
                    <strong>Phone: </strong>
                    {data?.mobileNumber}
                  </p>
                </div>
                <div className="leading-none pt-3 ">
                  <p className="capitalize">
                    <strong>Email: </strong>
                    {data?.email}
                  </p>
                </div>

                {/* <div className="leading-none pt-3">
                  <p>Sreet Name </p>
                </div> */}
                <div className="leading-none pt-3">
                  <p>
                    <strong>Address: </strong>
                    {data?.address}{" "}
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-gray-600  pt-8 ">
                <div className="w-full flex items-center flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-2xl fa-linkedin-in"></i>
                    </p>
                  </div>
                  <p className="p-2">Likedin Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-3xl fa-github"></i>
                    </p>
                  </div>
                  <p className="p-2">GitHub Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-solid text-2xl fa-link"></i>
                    </p>
                  </div>
                  <p className="p-2">Portfolio Link</p>
                </div>

                <div className="w-full flex items-center pt-3 flex-col">
                  <div className="w-[50px] h-[50px] leading-none rounded-full flex justify-center items-center bg-gray-700 text-white">
                    <p>
                      <i class="fa-brands text-2xl fa-facebook-f"></i>
                    </p>
                  </div>
                  <p className="p-2">Facebook Link</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" py-4">
          <div className=" px-8 w-[13cm]   h-[22.7cm] text-gray-700 ">
            <div>
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">Profile</p>
              </div>

              <div>
                <div className="leading-none pt-3 text-justify">
                  <small className="capitalize ">
                    {data?.professionalSummary}
                  </small>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">skills </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div className="font-semibold grid grid-cols-2 gap-4 ">
                    {data?.skills.map((skill) => (
                      <>
                        <p>{skill.technology}</p>
                        {/* <p>{skill.level}</p> */}
                      </>
                    ))}
                    {/* <p>Active Listening</p>
                    <p>Communication Skills</p>
                    <p>Reading Comprehension</p>
                    <p>Critical Thinking</p>
                    <p>Time Management</p>
                    <p>Information Ordering</p>
                    <p>Reading Comprehension</p>
                    <p>Category Flexibility</p>
                    <p>Organizational Skills</p>
                    <p>Project Management</p> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">experiences </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div>
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Graphic Designer</p>
                      <p>Soft Design Studios</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2015 - 2017</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Web Designer </p>
                      <p>Web Tech TLD</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2013 - 2015</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">Lead Web Designer </p>
                      <p>Dev Cewative Solutions</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2010 - 2013 </p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae odit
                        cumque qui unde vitae officiis suscipit eum quos.
                        officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex py-2  items-center border-b-2 border-gray-300">
                <p className="text-2xl font-bold uppercase">education </p>
              </div>

              <div>
                <div className="leading-none pt-3">
                  <div>
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">University of Lorem</p>
                      <p>Certicate of Web Trainig</p>
                    </div>

                    <div className="flex items-center mt-2">
                      <p className="w-[380px]">2008 - 2010</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae.
                        Lorem ipsum dolor sit amet officiis suscipit eum quos.
                      </small>
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="flex text-black items-center font-semibold text-xl">
                      <p className="w-[200px]">University of Lorem </p>
                      <p>Bechelor of Art Director</p>
                    </div>

                    <div className="flex items-center mt-1">
                      <p className="w-[380px]">2007 - 2009</p>
                      <small className="w-full text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur isicing elit.
                        Enim nemo rerum dicta, officia obcaecati molestiae.
                        Lorem ipsum dolor sit amet
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template6;
