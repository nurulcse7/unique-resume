import React from "react";
import { useForm } from "react-hook-form";

const PersonalDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("cover-letter", data);
    // setPersonalInformation(data);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-semibold">Personal Details</h1>

        <div className="flex gap-5">
          {/* First Name */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">Full Name</span>
            </label>
            <input
              type="text"
              {...register("fullname", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* Job Title */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">Job Title</span>
            </label>
            <input
              type="text"
              {...register("jobTitle", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-5">
          {/* Address */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">Address</span>
            </label>
            <input
              type="text"
              {...register("address", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* email */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">E-mail</span>
            </label>
            <input
              type="text"
              {...register("userEmail", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-5">
          {/* Phone */}
          <div className="form-control mt-2 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-xs ">Phone</span>
            </label>
            <input
              type="text"
              {...register("phone", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          <div className="form-control mt-5 w-full max-w-xs"></div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
