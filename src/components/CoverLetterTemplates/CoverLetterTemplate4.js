import React from "react";

const CoverLetterTemplate4 = ({ data }) => {
  console.log("coverLetterTemplate4", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div className="py-10 px-5  ">
      <div className="flex justify-between">
        <div>
          <h1 className="md:text-3xl  text-xl uppercase font-semibold ">
            {data?.fullname}
          </h1>
          <p className="md:text-xl font-semibold  text-[12px]">
            {data?.jobTitle}
          </p>
        </div>
        <div>
          <p className="md:text-[13px] text-right text-[10px]">
            {data?.address}
          </p>
          <p className="md:text-[13px] text-right text-[10px]">
            {data?.mobileNumber}
          </p>
          <p className="md:text-[13px] text-right text-[10px]">{data?.email}</p>
        </div>
      </div>
      <div className="border-2 border-gray-400  mt-5  w-full rounded-sm"></div>

      <div className="">
        <div className="flex gap-2 flex-col items-start py-6">
          <span className="my-5">Date: {currentDate}</span>
          <span>To</span>
          <h1 className="font-semibold">{data?.hiringManagerName}</h1>
          <h1>{data?.companyName}</h1>
          <h1>{data?.companyAddress}</h1>
        </div>
        <div className=" py-6">
          <span>Dear {data?.hiringManagerName}</span>
          <p className=" text-justify">{data?.letterDetails}</p>
          <p className=" text-lg capitalize mt-10">Kind regards</p>
          <h2 className="font-serif mt-10">{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate4;
