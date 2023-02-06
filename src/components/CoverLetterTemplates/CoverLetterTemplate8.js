import React from "react";
import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

const CoverLetterTemplate8 = ({ data }) => {
  console.log("coverLetterTemplate8", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div className="py-10 px-5  ">
      <div className="bg-purple-900 p-10">
        <h1 className="md:text-3xl text-center text-xl text-white  uppercase font-semibold ">
          {data?.fullname}
        </h1>

        <p className="border-b-4 border-white border-opacity-30 w-[40%] mx-auto"></p>

        <p className="md:text-xl font-semibold text-white  text-center text-[12px]">
          {data?.jobTitle}
        </p>
        <div className="flex justify-between mt-5">
          <div className=" text-white flex items-center gap-3">
            <span>
              <FaSearchLocation />
            </span>
            <p className="md:text-[13px] text-right text-[10px]">
              {data?.address}
            </p>
          </div>
          <div className=" text-white flex items-center gap-3">
            <span>
              <FaPhoneAlt />
            </span>
            <p className="md:text-[13px] text-right text-[10px]">
              {data?.mobileNumber}
            </p>
          </div>
          <div className=" text-white flex items-center gap-3">
            <span>
              <FaMailBulk />
            </span>
            <p className="md:text-[13px] text-right text-[10px]">
              {data?.email}
            </p>
          </div>
        </div>
        {/* <p className="md:text-[13px] text-white text-right text-[10px]">
          {data?.address} | {data?.mobileNumber} | {data?.email}
        </p> */}
      </div>

      <div className="">
        <div className="flex  flex-col items-start">
          <span className="my-5">Date: {currentDate}</span>

          <p className="font-semibold">{data?.hiringManagerName}</p>
          <p>{data?.companyName}</p>
          <p>{data?.companyAddress}</p>
        </div>
        <div className=" ">
          <p className="my-5">Dear {data?.hiringManagerName}</p>
          <p className=" text-justify">{data?.letterDetails}</p>
          <p className="my-5"> Thank you for your time and consideration.</p>
          <p className=" text-lg capitalize mt-10">sincerly</p>
          <h2>{data?.fullname}</h2>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate8;
