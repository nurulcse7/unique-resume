import React from "react";
import { useForm } from "react-hook-form";

const EducationHistory = ({ educationHistory, setEducationHistory }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setEducationHistory(data);
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-3xl font-semibold">Education</h1>
          <div className="form-control mt-5 w-full ">
            <p className="label text-gray-400 mb-3 text-base ">
              A varied education on your resume sums up the value that your
              learnings and background will bring to job.
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-xl ">
              {educationHistory?.schoolTitle ? (
                <>{educationHistory?.schoolTitle}</>
              ) : (
                <>(Not specified)</>
              )}
            </summary>

            <div className="flex gap-10">
              {/* Job Title */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">School</span>
                </label>
                <input
                  type="text"
                  {...register("schoolTitle", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">Degree</span>
                </label>
                <input
                  type="text"
                  {...register("schoolDegree", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-10">
              {/* Job Title */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">
                    Start & End Date
                  </span>
                </label>
                <div className="flex gap-3">
                  <input
                    type="date"
                    {...register("schoolStart", {})}
                    className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />
                  <input
                    type="date"
                    {...register("schoolEnd", {})}
                    className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />
                </div>
              </div>

              {/*  Employer */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">City</span>
                </label>
                <input
                  type="text"
                  {...register("schoolCity", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
            <div className="form-control mt-5 w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label text-gray-400   text-lg ">
                  Description
                </span>
              </label>
              <textarea
                {...register("schoolDescription", {})}
                className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
          </details>
        </section>
      </form>
    </div>
  );
};

export default EducationHistory;
