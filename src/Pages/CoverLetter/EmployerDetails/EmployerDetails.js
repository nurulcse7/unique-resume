import React from "react";
import { useForm } from "react-hook-form";

const EmployerDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("cover-letter", data);
    // setPersonalInformation(data);
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <h1 className="text-xl mt-5 font-semibold">Employer Details</h1>

        <div className="flex gap-5">
          {/* Compnay Name */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">
                Company Name
              </span>
            </label>
            <input
              type="text"
              {...register("companyName", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* Job Title */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">
                Hiring Manager Name
              </span>
            </label>
            <input
              type="text"
              {...register("hiringManagerName", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployerDetails;
