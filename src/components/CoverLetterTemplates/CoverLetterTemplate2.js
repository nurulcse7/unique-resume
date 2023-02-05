import React from "react";

const CoverLetterTemplate2 = ({ data }) => {
  console.log("coverLetterTemplate2", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div className="w-[800px] ">
      <h1 className="md:text-3xl text-right text-xl uppercase font-semibold ">
        {data?.fullname}
      </h1>
      <p className="md:text-[15px] font-semibold text-right text-[12px]">
        {data?.jobTitle}
      </p>
      <p className="md:text-[13px] text-right text-[10px]">
        {data?.address} | {data?.mobileNumber}| {data?.email}
      </p>

      <div className=" my-10 ">
        {/* <div
          className={`py-6 text-white gap-3 px-6 bg-gray-500 md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
        >
          <span className="md:text-[15px] text-[12px]">{data?.jobTitle}</span>
          <div className="text-start">
            <p className="md:text-[15px] text-[12px]">Address:</p>
            <p className="md:text-[13px] text-[10px]">{data?.address}</p>
          </div>
          <div className="flex flex-col items-start">
            <span className="md:text-[15px] text-[12px]">Email:</span>
            <span className="md:text-[13px] text-[10px]">{data?.email}</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="md:text-[15px] text-[12px]">Number</span>
            <span className="md:text-[13px] text-[10px]">
              {data?.mobileNumber}
            </span>
          </div>
        </div> */}
        <div className="">
          <div className="flex gap-2 flex-col items-start p-6">
            <span className="my-5">Date: {currentDate}</span>

            <h1 className="font-semibold">{data?.hiringManagerName}</h1>
            <h1>{data?.companyName}</h1>
          </div>
          <div className=" p-6">
            <span>Dear {data?.hiringManagerName}</span>
            <p className=" text-justify">{data?.letterDetails}</p>
            <p className="font-semibold text-lg capitalize mt-10">sincerly</p>
            <h2>{data?.fullname}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate2;
