import React from "react";

const Template1 = ({ data }) => {
  // console.log(data);
  return (
    <section className=" text-left relative bg-white shadow-2xl">
      <div className="flex">
        <div className={`lg:w-[600px] lg:h-[29.7cm] bg-gray-100 relative`}>
          <div
            className={`w-[10%] lg:w-[50px] text-black flex flex-col lg:text-2xl items-center bottom-0 lg:h-[500px] h-[34.5%]  absolute top-5 left-0 justify-start`}
          >
            <div className="flex items-center py-1 text-[18px] lg:p-2 ">
              <i className="fa-solid fa-envelope "></i>
            </div>
            <div className="flex items-center py-1 text-[18px] lg:p-2 ">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="flex items-center py-1 text-[18px] lg:p-2 ">
              <i className="fa-brands fa-github"></i>
            </div>
            <div className="flex items-center py-1 text-[18px] lg:p-2 ">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="flex items-center py-1 text-[18px] lg:p-2  ">
              <i className="fa-solid fa-earth-americas"></i>
            </div>
            <div className="flex items-center py-1 text-[18px] lg:p-2 lg:pb-6 pb-2 ">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </div>
          </div>

          <div className="lg:px-10 pt-6 lg:pt-0 lg:p-1">
            <div className=" mt-1  lg:m-1 lg:mt-0 mx-2 ">
              <p className="lg:text-lg mx-4 lg:pt-5 ">{data?.email}</p>
            </div>
            <div className=" mt-  lg:m-1 lg:mt-0 mx-2 ">
              <p className="lg:text-lg mx-4 lg:pt-2 ">{data?.mobileNumber}</p>
            </div>

            {data?.websites?.map((link) => (
              <div className=" lg:m-1 lg:mt-0 mx-2 lg:pt-2">
                <a className="lg:text-lg mx-4 capitalize " href={link?.Link}>
                  {link?.label} Profile
                </a>
              </div>
            ))}

            <div className="  lg:m-1 lg:mt-0 mx-2  ">
              <p className="lg:text-lg mx-4  lg:pt-3 ">
                {data?.city}, {data?.country}
              </p>
            </div>
          </div>

          <div className="lg:p-6 p-4">
            <div className="mt-2">
              <h3 className="lg:text-2xl text-lg uppercase ">Skills</h3>
              <div className="p-1">
                {data?.skills?.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <p className="font-bold small lg:pr-3 w-[130px]">
                      {skill?.technology}
                    </p>
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div
                        class={`bg-black text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${skill?.level}%]`}
                      >
                        {skill?.level}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="lg:text-2xl text-lg uppercase ">Education</h3>
              <div className="p-1">
                {data?.education?.map((education, i) => (
                  <div key={i} className="flex mt-1 ">
                    <p className="font-bold">{i + 1}.</p>
                    <div className="lg:text-lg ml-3">
                      <p className="font-semibold capitalize">
                        {education?.degree}
                        <p className="font-light">
                          {education?.startDate} - {education?.endDate}
                        </p>
                        <p className="font-light italic ">
                          {education?.school} - <span>{education?.city}</span>
                        </p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className="border-2 my-2 border-black" />
            </div>

            <div className="mt-4">
              <h3 className="lg:text-2xl text-lg uppercase ">languages</h3>
              {data?.languages?.map((lang, i) => (
                <div className="p-1">
                  <div key={i} className="flex items-center">
                    <p className="font-bold capitalize pr-3 w-[130px]">
                      {lang?.language}
                    </p>
                    <div class="w-full bg-gray-200 rounded-full ">
                      <div
                        class={`bg-black text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full`}
                      >
                        {lang?.level}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-full  bg-white">
          <div className="w-full h-full">
            <div className="relative my-8 flex flex-col justify-center items-center">
              <h2
                className={`lg:text-3xl text-xl w-[200px] mx-12 lg:mx-0  lg:w-[80%] text-center lg:py-3 pb-4 lg:border-2 border border-black uppercase font-semibold text-gray-900`}
              >
                {data?.fname} {data?.lname}
              </h2>
              <h2 className="font-semibold absolute capitalize -bottom-3 lg:bottom-[-20px] bg-white px-3 py-1 lg:text-2xl text-black">
                {data?.jobTitle}
              </h2>
            </div>

            <div className="">
              <div className="pt-4 px-6">
                <h3 className="lg:text-2xl text-lg uppercase">Profile</h3>
                <hr className=" lg:my-2 w-[70px] lg:w-[100px] border-t-2 border-black" />
                <p>{data?.professionalSummary}</p>
              </div>

              <div className="pt-2 relative px-6">
                <h3 className="lg:text-2xl text-lg uppercase">project</h3>
                <hr className=" lg:my-2 w-[70px] lg:w-[100px] border-t-2 border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template1;
