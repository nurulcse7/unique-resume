import React from "react";

const CoverLetterTemplate6 = ({ data }) => {
  console.log("coverLetterTemplate6", data);

  let currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <div className="border-2 border-amber-500 absolute  w-5/6 rounded-sm"></div>
      <div className="py-10 px-5  ">
        <h1 className="md:text-3xl text-left text-amber-500 text-xl uppercase font-semibold ">
          {data?.fullname}
        </h1>
        <p className="md:text-2xl font-semibold text-left text-amber-500 text-lg mb-4">
          {data?.jobTitle}
        </p>
        <div className="flex justify-center">
          <div className="mt-5 border-x-4 border-amber-500">
            <p className="md:text-[13px] mx-5 text-left text-[10px] font-semibold">
              Phone Number
            </p>
            <p className="md:text-[13px] mx-5 text-left text-[10px]">
              {data?.mobileNumber}
            </p>
          </div>
          <div className="mt-5  border-amber-500">
            <p className="md:text-[13px] mx-5 text-left text-[10px] font-semibold">
              Address
            </p>
            <p className="md:text-[13px] mx-5 text-left text-[10px]">
              {data?.address}
            </p>
          </div>
          <div className="mt-5 border-x-4 border-amber-500">
            <p className="md:text-[13px] mx-5 text-left text-[10px] font-semibold">
              Email
            </p>
            <p className="md:text-[13px] mx-5 text-left text-[10px]">
              {data?.email}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex  flex-col items-start ">
            <span className="mb-2 mt-10">Date: {currentDate}</span>

            <h1 className="font-semibold">{data?.hiringManagerName}</h1>
            <h1>{data?.companyName}</h1>
            <h1>{data?.companyAddress}</h1>
          </div>
          <div className=" py-5">
            <span>Dear {data?.hiringManagerName}</span>
            <p className=" text-justify">{data?.letterDetails}</p>

            <p className="my-5"> Thank you for your time and consideration.</p>
            <p className=" text-lg capitalize mt-10">sincerly</p>
            <p className="font-semibold text-amber-500 text-lg">
              {data?.fullname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate6;
