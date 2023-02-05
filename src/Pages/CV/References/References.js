import React from "react";
import { useForm } from "react-hook-form";

const References = ({ references, setReferences }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setReferences(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section id="referenceDetails" className="hidden">
          <h1 className="text-xl font-semibold">References</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-gray-400 mb-3 text-xs "></p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {references?.referenceTitle ? (
                <>{references?.referenceTitle}</>
              ) : (
                <>(Not specified)</>
              )}
              <p className="text-gray-400">
                {references?.labelLink ? <>{references?.labelLink}</> : <></>}
              </p>
            </summary>

            <div className="flex  gap-5">
              {/* References */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
                    References Full Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("referenceTitle", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Company */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Company</span>
                </label>
                <input
                  type="text"
                  {...register("referenceCompany", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex  gap-5">
              {/*  Phone */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Phone</span>
                </label>
                <input
                  type="text"
                  {...register("referencePhone", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Email */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Email</span>
                </label>
                <input
                  type="text"
                  {...register("referenceEmail", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
          </details>
        </section>
      </form>
    </div>
  );
};

export default References;
