import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cvTemplate } from "../../redux/action/data";

const CvTemplate1 = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cvdata);
  console.log(data);
  useEffect(() => {
    dispatch(cvTemplate());
  }, [dispatch]);
  return (
    <div className="py-10 px-5 ">
      <div className="flex justify-between">
        <h1 className="md:text-4xl text-xl uppercase">{data?.name}</h1>
        <div className="text-gray-500 text-right">
          <p className="md:text-lg text-sm">{data?.email}</p>
          <p>{data?.address}</p>
          <p>{data?.mobileNumber}</p>
          {data?.websites.map((w, i) => (
            <p>{w.Link}</p>
          ))}
        </div>
      </div>
      <div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Objective
          </h3>
          <p className="text-sm pt-4 pb-3">{data?.carrierObjective}</p>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Eductaion
          </h3>

          <div className="text-sm">
            {data?.education?.map((edu, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{edu.passingYear}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Group: </span>
                  <p>{edu.group}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Instituition: </span>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Experience
          </h3>

          <div className="text-sm">
            {data?.experience?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.years}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Place: </span>
                  <p>{exp.place}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Duration: </span>
                  <p>{exp.range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Projects
          </h3>

          <div className="text-sm ">
            {data?.projects?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.range}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Title: </span>
                  <p>{exp.description}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Link: </span>
                  <a href={exp.link}>{exp.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Personal Information
          </h3>
          <div>
            <p className="text-lg ">
              <span className="font-semibold"> Name: </span>
              <span className="font-[300px]">{data?.name}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Name of Father:</span>
              <span className="font-[300px]">{data?.fathersName}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Name of Mother:</span>
              <span className="font-[300px]">{data?.mothersName}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Date of Birth: </span>
              <span className="font-[300px]">{data?.dateOfBirth}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Address: </span>
              <span className="font-[300px]">{data?.address}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Marital Status:</span>
              <span className="font-[300px]">{data?.maritalStatus}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Gender: </span>
              <span className="font-[300px]">{data?.sex}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Religion: </span>
              <span className="font-[300px]">{data?.religion}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Nationality: </span>
              <span className="font-[300px]">{data?.nationality}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> Blood Group: </span>
              <span className="font-[300px]">{data?.blood}</span>
            </p>
            <p className="text-lg ">
              <span className="font-semibold"> NID: </span>
              <span className="font-[300px]">{data?.nid}</span>
            </p>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Skills
          </h3>

          <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
            {data?.skills?.map((exp, index) => (
              <div
                className="p-2 mt-2 rounded border border-dotted border-gray-400"
                key={index}
              >
                <h6>
                  <b>{exp.technology}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Languages
          </h3>

          <div className="text-sm flex flex-col items-start justify-start gap-3  flex-wrap">
            {data?.languageSkills?.map((lan, index) => (
              <div className="" key={index}>
                <h6>{lan.language}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
      </div>
    </div>
  );
};

export default CvTemplate1;
