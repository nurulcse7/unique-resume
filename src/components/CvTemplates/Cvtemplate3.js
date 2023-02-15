import React from "react";

const Cvtemplate3 = ({ data }) => {
  console.log("cvTemplate3", data);
  return (
    <div>
      <div className="">
        <h2 className="text-4xl underline text-center font-bold mb-5">
          CURRICULUM VITAE
        </h2>
        <div className="text-lg">
          <div className="flex">
            <p className="w-[20%] font-bold">Name </p>
            <p className="w-[80%] font-bold">: {data?.name}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Address </p>{" "}
            <p className="w-[80%]">: {data?.address}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Tel </p>{" "}
            <p className="w-[80%]">: {data?.mobileNumber}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Email </p>{" "}
            <p className="w-[80%]">: {data?.email}</p>
          </div>
        </div>

        {/* <p className=" border-b border-4 border-gray-300"></p> */}
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold uppercase border-b-4 border-gray-300 pt-1 pb-2 px-1">
          personal Data
        </h2>
        <div className="text-lg">
          <div className="flex">
            <p className="w-[20%] font-bold">Nationality </p>
            <p className="w-[80%] font-bold">: {data?.nationality}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Sex </p>{" "}
            <p className="w-[80%]">: {data?.sex}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Marital Status </p>{" "}
            <p className="w-[80%]">: {data?.maritalStatus}</p>
          </div>
          <div className="flex">
            <p className="w-[20%] font-bold">Date of Birth </p>{" "}
            <p className="w-[80%]">: {data?.dateOfBirth}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold uppercase border-b-4 border-gray-300 pt-1 pb-2 px-1">
          Education
        </h2>
        <div>
          {data?.education && (
            <div className="py-2">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="w-[20%] border-2 border-black">
                      Course Name
                    </th>
                    <th className="w-[20%] border-2 border-black">
                      Institute Name
                    </th>
                    <th className="w-[15%] border-2 border-black">Board</th>
                    <th className="w-[15%] border-2 border-black">Group</th>
                    <th className="w-[15%] border-2 border-black">
                      Passing Year
                    </th>
                    <th className="w-[15%] border-2 border-black">
                      Achienvement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.education.map((edu) => (
                    <>
                      <tr>
                        <td className="w-[20%] border-2 border-black p-3">
                          {edu.level}
                        </td>
                        <td className="w-[20%] border-2 border-black p-3">
                          {edu.institution}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.board}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.group}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.passingYear}
                        </td>
                        <td className="w-[15%] border-2 border-black p-3">
                          {edu.grade}{" "}
                          {edu.level.slice(0, 1) === "H" ||
                          edu.level.slice(0, 1) === "S" ||
                          edu.level.slice(0, 1) === "J" ? (
                            <> (Out of 5.0)</>
                          ) : (
                            <> (Out of 4.0)</>
                          )}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold uppercase border-b-4 border-gray-300 pt-1 pb-2 px-1">
          Additional Training
        </h2>
      </div>
    </div>
  );
};

export default Cvtemplate3;
