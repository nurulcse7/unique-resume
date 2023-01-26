import React from "react";
import { useForm } from "react-hook-form";

const InternShips = ({ internShips, setInternShips }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setInternShips(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section id="internshipsDetails" className="hidden">
          <h1 className="text-3xl font-semibold">Internships</h1>
          <div className="form-control mt-5 w-full ">
            <p className="label text-gray-400 mb-3 text-base "></p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-xl ">
              {internShips?.internshipsTitle ? (
                <>{internShips?.internshipsTitle}</>
              ) : (
                <>(Not specified)</>
              )}
            </summary>

            <div className="flex gap-10">
              {/* Job Title */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">
                    Job Title
                  </span>
                </label>
                <input
                  type="text"
                  {...register("internshipsTitle", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">Company</span>
                </label>
                <input
                  type="text"
                  {...register("internshipsCompany", {})}
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
                    {...register("internshipsStart", {})}
                    className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />
                  <input
                    type="date"
                    {...register("internshipsEnd", {})}
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
                  {...register("internshipsCity", {})}
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
                {...register("internshipsDescription", {})}
                className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
          </details>
        </section>
      </form>
    </div>
  );
};

export default InternShips;
