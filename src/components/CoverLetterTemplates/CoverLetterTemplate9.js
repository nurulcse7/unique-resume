import React from "react";

const CoverLetterTemplate9 = ({ data }) => {
  console.log("coverLetterTemplate9", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div className="py-10 px-5  ">
      <div>
        <h1 className="md:text-3xl w-1/4 text-sky-400 text-left text-xl uppercase  ">
          {data?.fullname}
        </h1>
        <div className="border-2  border-sky-400 absolute  w-2/5 rounded-sm"></div>
        {/* <p className="md:text-xl  text-left text-[12px]">{data?.jobTitle}</p> */}
        <p className="md:text-[13px] mt-2 text-left text-[10px]">
          {data?.mobileNumber} | {data?.address} | {data?.email}
        </p>
      </div>

      <div className="">
        <div className="flex  flex-col items-start">
          <span className="mt-5 mb-2">Date: {currentDate}</span>

          <h1 className="font-semibold">{data?.hiringManagerName}</h1>
          <h1>{data?.companyName}</h1>
          <h1>{data?.companyAddress}</h1>
        </div>
        <div className=" ">
          <p className="my-5">Dear {data?.hiringManagerName}</p>
          <p className=" text-justify">{data?.letterDetails}</p>
          <p className=" text-lg capitalize mt-10">Best & Regards</p>
          <h2 className="text-lg my-5 text-sky-400">{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate9;
