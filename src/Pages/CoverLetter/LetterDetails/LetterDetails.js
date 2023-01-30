import React from "react";
import { useForm } from "react-hook-form";

const LetterDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setProfessionalSummary(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-xl mt-5 font-semibold">Letter Details</h1>
          <div className="form-control mt-2 w-full max-w-3xl">
            <p className="label text-xs text-gray-400 mb-3 text-base ">
              3–4 paragraphs explaining why you're the perfect candidate for a
              specific job
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

export default LetterDetails;
