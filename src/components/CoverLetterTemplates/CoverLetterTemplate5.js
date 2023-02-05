import React from "react";
import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

const CoverLetterTemplate5 = ({ data }) => {
  console.log("coverLetterTemplate5", data);
  return (
    <div className="w-[800px]">
      <h1 className="md:text-4xl text-start text-xl uppercase font-semibold ">
        {data?.fullname}
      </h1>
      <span className="md:text-2xl text-lg font-semibold">
        {data?.jobTitle}
      </span>
      <div className="border-2 border-yellow-400 absolute mt-5  w-5/6 rounded-sm"></div>
      <div className="border-8 border-yellow-400  mt-3  w-3/6 rounded-sm"></div>
      <div className="flex my-10 ">
        <div className="w-[70%]">
          <div className=" ">
            <h1 className="">To</h1>
            <h1 className="font-semibold">{data?.hiringManagerName}</h1>
            <h1>{data?.companyName}</h1>
          </div>
          <div className="flex flex-col items-start py-6">
            <span>Dear {data?.hiringManagerName}</span>
            <p className=" text-justify max-w-[450px]">{data?.letterDetails}</p>

            <p className=" text-lg capitalize mt-10">sincerly</p>
            <h2>{data?.fullname}</h2>
          </div>
        </div>
        <div
          className={`  gap-3   md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
        >
          <div className="text-start ">
            <p className="md:text-xl text-[12px]">Details</p>

            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl">
                <FaSearchLocation />
              </p>
              <p>{data?.address}</p>
            </div>
            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl">
                <FaMailBulk />
              </p>
              <p> {data?.email}</p>
            </div>
            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl">
                <FaPhoneAlt />
              </p>
              <p> {data?.mobileNumber}</p>
            </div>
            {/* <p className="md:text-[13px] text-[10px]">
              <FaPhoneAlt />
              {data?.mobileNumber}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate5;
