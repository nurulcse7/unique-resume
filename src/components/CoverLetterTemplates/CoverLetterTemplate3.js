import React from "react";

const CoverLetterTemplate3 = ({ data }) => {
  console.log("coverLetterTemplate3", data);
  return (
    <div className="py-10 px-5">
      <h1 className="md:text-3xl text-start text-xl uppercase font-semibold ">
        {data?.fullname}
      </h1>
      <span className="md:text-xl text-lg font-semibold">{data?.jobTitle}</span>

      <div className="flex my-10 ">
        <div className="border-2 border-yellow-400 absolute  w-5/6 rounded-sm"></div>
        <div
          className={`py-6  gap-3   md:w-[30%] w-[30%] flex flex-col justify-start items-start `}
        >
          <div className="text-start">
            <p className="md:text-[15px] text-[12px]">To</p>
            <h1 className="font-semibold">{data?.hiringManagerName}</h1>
            <p>{data?.companyName}</p>
            <p>{data?.companyAddress}</p>
          </div>
          <div className="text-start mt-10">
            <p className="md:text-[15px] text-[12px]">From</p>
            <h1 className="font-semibold">{data?.fullname}</h1>
            <h1>{data?.jobTitle}</h1>
            <p className="md:text-[13px] text-[10px]">{data?.address}</p>

            <p className="md:text-[13px] text-[10px]">{data?.email}</p>
            <p className="md:text-[13px] text-[10px]">{data?.mobileNumber}</p>
          </div>
        </div>
        <div className="border-2 border-yellow-400 absolute md:left-[35%] lg:left-[30%] xl:left-[28%] left-[37%] h-2/3 rounded-sm"></div>
        <div className="w-[80%]">
          <div className="flex flex-col items-start p-6">
            <span>Dear {data?.hiringManagerName}</span>
            <p className=" text-justify max-w-[450px]">{data?.letterDetails}</p>

            <p className=" text-lg capitalize mt-10">sincerly</p>
            <h2>{data?.fullname}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTemplate3;
