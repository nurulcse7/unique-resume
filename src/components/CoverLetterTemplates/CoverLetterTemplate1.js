import React from "react";

const CoverLetterTemplate1 = ({ data }) => {
  console.log("coverLetterTemplate1", data);
  return (
    <div className="flex w-[800px] mx-auto my-10 ">
      <div
        className={`py-6 text-white gap-3 px-6 bg-gray-500 md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
      >
        <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
          {data?.fullname}
        </h1>
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
      </div>
      <div className="w-[80%]">
        <div className="flex gap-2 flex-col items-start p-6">
          <h1 className="font-semibold">{data?.hiringManagerName}</h1>
          <h1>{data?.companyName}</h1>
          <span>{data?.jobTitle}</span>
          <span>Dear: {data?.hiringManagerName}</span>
        </div>
        <div className="flex flex-col items-start p-6">
          <p className=" text-justify max-w-[450px]">{data?.letterDetails}</p>
          <p className="font-semibold text-lg capitalize">sincerly</p>
          <h2>{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate1;
