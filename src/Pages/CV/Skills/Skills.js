import React from "react";
import { useForm } from "react-hook-form";

const Skills = ({ skills, setSkills }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setSkills(data);
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-xl font-semibold">Skills</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-gray-400 mb-3 text-xs ">
              Choose 5 of the most important skills to show your talents! Make
              sure they match the keywords of the job listing if applying via an
              online system.
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {skills?.skill ? <>{skills?.skill}</> : <>(Not specified)</>}
              <p className="text-gray-400">
                {skills?.labelLink ? <>{skills?.labelLink}</> : <></>}
              </p>
            </summary>

            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  <span className="label text-gray-400  text-xs ">Skill</span>
                </label>
                <input
                  type="text"
                  {...register("skill", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  <span className="label text-gray-400  text-xs ">
                    Level - Expert
                  </span>
                </label>
                <input
                  type="text"
                  {...register("labelLink", {})}
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

export default Skills;
