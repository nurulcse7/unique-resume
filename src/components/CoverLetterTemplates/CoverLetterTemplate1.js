import React from "react";

const CoverLetterTemplate1 = ({ data }) => {
  console.log("coverLetterTemplate1", data);
  return (
    <div className="flex  mx-auto my-10 ">
      <div
        className={`py-6 text-white gap-3 px-5 bg-gray-500 md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
      >
        <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
          {data?.fullname}
        </h1>
        <span className="md:text-[15px] text-[12px] font-semibold">
          {data?.jobTitle}
        </span>
        <div className="text-start">
          <p className="md:text-[15px] text-[12px]">Address :</p>
          <p className="md:text-[13px] text-[10px]">{data?.address}</p>
        </div>
        <div className="flex flex-col items-start">
          <span className="md:text-[15px] text-[12px]">Email :</span>
          <span className="md:text-[13px] text-[10px]">{data?.email}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="md:text-[15px] text-[12px]">Number : </span>
          <span className="md:text-[13px] text-[10px]">
            {data?.mobileNumber}
          </span>
        </div>
      </div>
      <div className="w-[80%]">
        <div className=" p-6">
          <h1 className="font-semibold">{data?.hiringManagerName}</h1>
          <h1>{data?.companyName}</h1>
        </div>
        <div className="flex flex-col items-start p-6">
          <span>Dear: {data?.hiringManagerName}</span>
          <p className=" text-justify max-w-[450px]">{data?.letterDetails}</p>

          <p className=" text-lg capitalize mt-10">sincerly</p>
          <h2>{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate1;
