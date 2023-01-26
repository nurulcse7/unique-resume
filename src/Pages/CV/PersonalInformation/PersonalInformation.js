import { Upload } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";

const PersonalInformation = ({ setPersonalInformation }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setPersonalInformation(data);
  };

  //   image
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
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

  const handleCollopse = () => {
    document.getElementById("demo").style.display = "none";
    document.getElementById("demo1").style.display = "block";
    document.getElementById("demo-hide").style.display = "block";
  };
  const handleCollopseHide = () => {
    document.getElementById("demo-hide").style.display = "none";
    document.getElementById("demo1").style.display = "none";
    document.getElementById("demo").style.display = "block";
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-semibold">Personal Details</h1>
        <div className="flex justify-items-stretch">
          {/* Job Title */}
          <div className="form-control pt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">Job Title</span>
            </label>
            <input
              type="text"
              {...register("jobTitle", {
                //   required: "Your title is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          <div className="ml-16">
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              maxCount={1}
            >
              {fileList.length < 1 && "+ Upload"}
            </Upload>
          </div>
        </div>
        <div className="flex gap-10">
          {/* First Name */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">First Name</span>
            </label>
            <input
              type="text"
              {...register("fname", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* Last Name */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">Last Name</span>
            </label>
            <input
              type="text"
              {...register("lname", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-10">
          {/* email */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">E-mail</span>
            </label>
            <input
              type="text"
              {...register("userEmail", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* Phone */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">Phone</span>
            </label>
            <input
              type="text"
              {...register("phone", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex gap-10">
          {/* Country */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">Country</span>
            </label>
            <input
              type="text"
              {...register("country", {
                //   required: "Your name is required",
              })}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
          {/* City */}
          <div className="form-control mt-5 w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label text-gray-400  text-lg ">City</span>
            </label>
            <input
              type="text"
              {...register("city", {})}
              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
            />
          </div>
        </div>
        <section id="demo1" className="hidden">
          <div className="flex gap-10">
            {/* address */}
            <div className="form-control mt-5 w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label text-gray-400  text-lg ">Address</span>
              </label>
              <input
                type="text"
                {...register("address", {})}
                className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
            {/* postal code */}
            <div className="form-control mt-5 w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label text-gray-400  text-lg ">
                  Postal Code
                </span>
              </label>
              <input
                type="text"
                {...register("postalCode", {})}
                className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-10">
            {/* Nationality */}
            <div className="form-control mt-5 w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label text-gray-400  text-lg ">
                  Nationality
                </span>
              </label>
              <input
                type="text"
                {...register("nationality", {
                  //   required: "Your name is required",
                })}
                className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
            {/* Date of Birth */}
            <div className="form-control mt-5 w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label text-gray-400  text-lg ">
                  Date of Birth
                </span>
              </label>
              <input
                type="text"
                {...register("dateOfBirth", {})}
                className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
              />
            </div>
          </div>
          <div id="demo-hide">
            <div
              onClick={() => handleCollopseHide()}
              className="text-blue-400 hover:text-blue-900 hover:font-semibold text-lg my-5"
            >
              Hide additional details <DownOutlined />
            </div>
          </div>
        </section>
        {/* Edit Additional details */}
        <div id="demo">
          <div
            onClick={() => handleCollopse()}
            className="text-blue-400 hover:text-blue-900 hover:font-semibold text-lg my-5"
          >
            Edit additional details <DownOutlined />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformation;
