import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cvTemplate } from "../../redux/action/data";

const Cvtemplate2 = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cvdata);
  useEffect(() => {
    dispatch(cvTemplate());
  }, [dispatch]);
  return (
    <div>
      <div className="py-10 px-5 text-center">
        <h2 className="text-4xl font-bold bg-blue-200 py-1">
          CURRICULUM VITAE
        </h2>
        <h3 className="text-3xl font-bold">
          of <br />
          {data?.name}
        </h3>
        <p className="mt-1 text-lg">{data?.address}</p>
        <p className="py-1 text-lg">Contact No: {data?.mobileNumber}</p>
        <p className=" text-lg">E-mail: {data?.email}</p>{" "}
        <div className="w-full h-[2px] bg-gray-500 mt-4" />
        <div className="w-full h-[2px] bg-gray-500 my-1" />
      </div>
      <div className="py-2">
        <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
          <span className="w-fit border-b-2 border-gray-500">
            Career Objective
          </span>
        </h2>
        <p className="text-base py-2">{data?.carrierObjective}</p>
      </div>

      {data?.education && (
        <div className="py-2">
          {data?.education.map((edu) => (
            <div className="py-2">
              <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
                <span className="w-fit border-b-2 border-gray-500">
                  {edu.level.toLowerCase() === "hsc"
                    ? `Higher Secondary Certificate(H.S.C):`
                    : edu.level.toLowerCase() === "ssc"
                    ? `Secondary School Certificate(S.S.C):`
                    : `Hon's in ${edu.level}:`}
                </span>
              </h2>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Group</p>
                <p className="w-[50%] text-left py-1">: {edu.group}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Passing Year</p>
                <p className="w-[50%] text-left py-1">: {edu.passingYear}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Achievement</p>
                <p className="w-[50%] text-left py-1">: {edu.grade}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Institution</p>
                <p className="w-[50%] text-left py-1">: {edu.board}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {data?.permanentAdd && (
        <div className="py-2">
          <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
            <span className="w-fit border-b-2 border-gray-500">
              Parmanent Address
            </span>
          </h2>
          {data?.permanentAdd?.map((add, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Village</p>
                <p className="w-[50%] text-left py-1">: {add.village}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Post</p>
                <p className="w-[50%] text-left py-1">: {add.post}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">P.S</p>
                <p className="w-[50%] text-left py-1">: {add.ps}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">District</p>
                <p className="w-[50%] text-left py-1">: {add.district}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {data?.presentAdd && (
        <div className="py-2">
          <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
            <span className="w-fit border-b-2 border-gray-500">
              Present Address
            </span>
          </h2>
          {data?.presentAdd?.map((add, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Village</p>
                <p className="w-[50%] text-left py-1">: {add.village}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">Post</p>
                <p className="w-[50%] text-left py-1">: {add.post}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">P.S</p>
                <p className="w-[50%] text-left py-1">: {add.ps}</p>
              </div>
              <div className="flex justify-between">
                <p className="w-[50%] py-1">District</p>
                <p className="w-[50%] text-left py-1">: {add.district}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="py-4">
        <p>Singature</p>
        <br />
        <p>({data?.name})</p>
        <p>Date..............................</p>
      </div>
    </div>
  );
};

export default Cvtemplate2;
