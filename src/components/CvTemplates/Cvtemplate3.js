import React from "react";

const Cvtemplate3 = ({ data }) => {
  console.log("cvTemplate3", data);
  return (
    <div>
      <div className="py-10 px-5 ">
        <h2 className="text-4xl underline text-center font-bold mb-5">
          CURRICULUM VITAE
        </h2>
        <div className="text-lg">
          <div className="flex">
            <p className="w-[10%] font-bold">Name </p>
            <p className="w-[90%] font-bold">: {data?.name}</p>
          </div>
          <div className="flex">
            <p className="w-[10%] font-bold">Address </p>{" "}
            <p className="w-[90%]">: {data?.address}</p>
          </div>
          <div className="flex">
            <p className="w-[10%] font-bold">Tel </p>{" "}
            <p className="w-[90%]">: {data?.mobileNumber}</p>
          </div>
          <div className="flex">
            <p className="w-[10%] font-bold">Email </p>{" "}
            <p className="w-[90%]">: {data?.email}</p>
          </div>
        </div>

        <p className="my-5 border-b border-4 border-gray-900"></p>
      </div>
    </div>
  );
};

export default Cvtemplate3;
