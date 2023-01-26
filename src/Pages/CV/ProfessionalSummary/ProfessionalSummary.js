import React from "react";
import { useForm } from "react-hook-form";

const ProfessionalSummary = ({ setProfessionalSummary }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setProfessionalSummary(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-3xl font-semibold">Professional Summary</h1>
          <div className="form-control mt-5 w-full max-w-3xl">
            <p className="label text-gray-400 mb-3 text-base ">
              Write 2-4 short & energetic sentences to interest the reader!
              Mention your role, experience & most importantly - your biggest
              achievements, best qualities and skills.
            </p>

            <textarea
              {...register("summary", {})}
              className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </section>
      </form>
    </div>
  );
};

export default ProfessionalSummary;
