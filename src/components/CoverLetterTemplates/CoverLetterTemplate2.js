import React from "react";

const CoverLetterTemplate2 = ({ data }) => {
  console.log("coverLetterTemplate2", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div className="py-10 px-5  ">
      <h1 className="md:text-3xl text-right text-xl uppercase font-semibold ">
        {data?.fullname}
      </h1>
      <p className="md:text-[15px] font-semibold text-right text-[12px]">
        {data?.jobTitle}
      </p>
      <p className="md:text-[13px] text-right text-[10px]">
        {data?.address} | {data?.mobileNumber} | {data?.email}
      </p>

      <div className="">
        <div className="flex gap-2 flex-col items-start p-6">
          <span className="my-5">Date: {currentDate}</span>

          <h1 className="font-semibold">{data?.hiringManagerName}</h1>
          <h1>{data?.companyName}</h1>
          <h1>{data?.companyAddress}</h1>
        </div>
        <div className=" p-6">
          <span>Dear {data?.hiringManagerName}</span>
          <p className=" text-justify">{data?.letterDetails}</p>
          <p className=" text-lg capitalize mt-10">sincerly</p>
          <h2>{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate2;
