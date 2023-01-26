import React from "react";
import { useForm } from "react-hook-form";

const Hobbies = ({ setHobbies }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setHobbies(data);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        {" "}
        <section id="hobbiesDetails" className="hidden">
          <h1 className="text-3xl font-semibold">Hobbies</h1>
          <div className="form-control mt-5 w-full ">
            <p className="label text-gray-400 mb-3 text-base ">
              What do you like?
            </p>
          </div>
          <textarea
            {...register("hobbies", {})}
            className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
          />
        </section>
      </form>
    </div>
  );
};

export default Hobbies;
