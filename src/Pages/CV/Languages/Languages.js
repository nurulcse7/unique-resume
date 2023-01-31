import React from "react";
import { useForm } from "react-hook-form";

const Languages = ({ languages, setLanguages }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setLanguages(data);
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section id="laguageDetails" className="hidden">
          <h1 className="text-xl font-semibold">Langulage</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-gray-400 mb-3 text-xs "></p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {languages?.languageName ? (
                <>{languages?.languageName}</>
              ) : (
                <>(Not specified)</>
              )}
              <p className="text-gray-400">
                {languages?.languageLevel ? (
                  <>{languages?.languageLevel}</>
                ) : (
                  <></>
                )}
              </p>
            </summary>

            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
                    Langualge
                  </span>
                </label>
                <input
                  type="text"
                  {...register("languageName", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Level</span>
                </label>
                <select
                  {...register("languageLevel", {
                    required: "Must be selected user",
                  })}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                >
                  <option hidden selected>
                    Select level
                  </option>
                  <option>Native speaker</option>
                  <option>Highly proficient</option>
                  <option>Very good command</option>
                </select>
              </div>
            </div>
            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
                    Langualge
                  </span>
                </label>
                <input
                  type="text"
                  {...register("languageName1", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Level</span>
                </label>
                <select
                  {...register("languageLevel1", {
                    required: "Must be selected user",
                  })}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                >
                  <option hidden selected>
                    Select level
                  </option>
                  <option>Native speaker</option>
                  <option>Highly proficient</option>
                  <option>Very good command</option>
                </select>
              </div>
            </div>
          </details>
        </section>
      </form>
    </div>
  );
};

export default Languages;
