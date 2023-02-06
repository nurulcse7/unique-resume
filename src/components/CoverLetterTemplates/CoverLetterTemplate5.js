import React from "react";
import { FaMailBulk, FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

const CoverLetterTemplate5 = ({ data }) => {
  console.log("coverLetterTemplate5", data);
  return (
    <div className="my-10 mx-5 ">
      <h1 className="md:text-4xl text-start text-xl uppercase font-semibold ">
        {data?.fullname}
      </h1>
      <span className="md:text-2xl text-lg font-semibold">
        {data?.jobTitle}
      </span>
      <div className="border-2 border-yellow-400 absolute mt-5  w-5/6 rounded-sm"></div>
      <div className="border-8 border-yellow-400  mt-3 md:w-[65%] w-[70%] rounded-sm"></div>
      <div className="flex my-10 ">
        <div className="w-[80%]">
          <div className=" ">
            <h1 className="">To</h1>
            <h1 className="font-semibold">{data?.hiringManagerName}</h1>
            <h1>{data?.companyName}</h1>
            <h1>{data?.companyAddress}</h1>
          </div>
          <div className="flex flex-col items-start py-6">
            <span>Dear {data?.hiringManagerName}</span>
            <p className=" text-justify max-w-[450px]">{data?.letterDetails}</p>
            <p className=" text-justify max-w-[450px] mt-5">
              Thank you for your time and consideration.
            </p>

            <p className=" text-lg capitalize mt-10">sincerly</p>
            <h2>{data?.fullname}</h2>
          </div>
        </div>
        <div
          className={`  gap-3   md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
        >
          <div className="text-start md:m-10 mx-10">
            <p className="md:text-xl text-[12px]">Details</p>

            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl text-yellow-400">
                <FaSearchLocation />
              </p>
              <p>{data?.address}</p>
            </div>
            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl  text-yellow-400">
                <FaMailBulk />
              </p>
              <p> {data?.email}</p>
            </div>
            <div className="flex items-center my-2 gap-5">
              <p className=" text-xl  text-yellow-400">
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
