import React, { useState } from "react";

import { Col, Form, Progress, Row, Space, Upload } from "antd";
import { useForm } from "react-hook-form";

import "./CvTemplates.css";
import {
  ApartmentOutlined,
  AuditOutlined,
  CalendarOutlined,
  ContactsOutlined,
  CrownOutlined,
  DownOutlined,
  EnvironmentOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

// .......................................

// .......................................content-none

const CVTempletes = () => {
  const [mainData, setMainData] = useState([]);
  console.log(mainData);
  // .....................
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  // .....................

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setMainData(data);
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

  // Langualge
  const handleLanguage = () => {
    document.getElementById("laguageTitle").style.display = "none";
    document.getElementById("laguageDetails").style.display = "block";
  };
  // Hobbies
  const handleHobbies = () => {
    document.getElementById("hobbiesTitle").style.display = "none";
    document.getElementById("hobbiesDetails").style.display = "block";
  };
  // Reference
  const handleReference = () => {
    document.getElementById("referenceTitle").style.display = "none";
    document.getElementById("referenceDetails").style.display = "block";
  };
  // Internships
  const handleInternships = () => {
    document.getElementById("InternshipsTitle").style.display = "none";
    document.getElementById("internshipsDetails").style.display = "block";
  };
  return (
    <section className="">
      <Row className="px-20  w-full text-left bg-gray-100  flex justify-between items-top">
        <Col span={12} className="mb-20">
          <form className="mr-5 mt-20" onChange={handleSubmit(onSubmit)}>
            <h1 className="text-3xl font-semibold">Personal Details</h1>
            <div className="flex justify-items-stretch">
              {/* Job Title */}
              <div className="form-control pt-5 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-lg ">
                    Job Title
                  </span>
                </label>
                <input
                  type="text"
                  {...register("title", {
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
                  <span className="label text-gray-400  text-lg ">
                    First Name
                  </span>
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
                  <span className="label text-gray-400  text-lg ">
                    Last Name
                  </span>
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
                  {...register("email", {
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
                    <span className="label text-gray-400  text-lg ">
                      Address
                    </span>
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
                    {...register("postal", {})}
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
                    {...register("birth", {})}
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
            {/* Professional Summary */}
            <section>
              <h1 className="text-3xl font-semibold">Professional Summary</h1>
              <div className="form-control mt-5 w-full max-w-3xl">
                <p className="label text-gray-400 mb-3 text-base ">
                  Write 2-4 short & energetic sentences to interest the reader!
                  Mention your role, experience & most importantly - your
                  biggest achievements, best qualities and skills.
                </p>

                <textarea
                  {...register("summary", {})}
                  className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </section>
            {/* Employment History */}
            <section>
              <h1 className="text-3xl font-semibold">Employment History</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base ">
                  Whow your relevant experience.
                </p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.jobTitle ? (
                    <>{mainData?.jobTitle}</>
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
                      {...register("jobTitle", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                  {/*  Employer */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Company Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("jobCompany", {})}
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
                        {...register("jobStart", {})}
                        className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                      />
                      <input
                        type="date"
                        {...register("jobEnd", {})}
                        className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/*  Employer */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        City
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("jobCity", {})}
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
                    {...register("jobDescription", {})}
                    className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                  />
                </div>
              </details>
            </section>
            <Form
              name="dynamic_form_nest_item"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: "flex",
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                          <summary className="font-semibold text-xl w-full justify-between">
                            {mainData?.jobTitle1 ? (
                              <>{mainData?.jobTitle1}</>
                            ) : (
                              <>(Not specified)</>
                            )}
                            <MinusCircleOutlined
                              className="ml-20"
                              onClick={() => remove(name)}
                            />
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
                                {...register("jobTitle1", {})}
                                className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                              />
                            </div>
                            {/*  Employer */}
                            <div className="form-control mt-5 w-full max-w-xs">
                              <label className="label">
                                {" "}
                                <span className="label text-gray-400  text-lg ">
                                  Company Name
                                </span>
                              </label>
                              <input
                                type="text"
                                {...register("jobCompany1", {})}
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
                                  {...register("jobStart1", {})}
                                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                                />
                                <input
                                  type="date"
                                  {...register("jobEnd1", {})}
                                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                                />
                              </div>
                            </div>

                            {/*  Employer */}
                            <div className="form-control mt-5 w-full max-w-xs">
                              <label className="label">
                                {" "}
                                <span className="label text-gray-400  text-lg ">
                                  City
                                </span>
                              </label>
                              <input
                                type="text"
                                {...register("jobCity1", {})}
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
                              {...register("jobDescription1", {})}
                              className="w-4/5 px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                            />
                          </div>
                        </details>
                      </Space>
                    ))}
                    <Form.Item>
                      {/* <p
                        className="text-blue-400 hover:text-blue-900 font-bold"
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                      >
                        Add One more employment
                      </p> */}
                      <div
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        className="text-blue-400 hover:text-blue-900 hover:font-semibold text-lg my-5 flex justify-start items-center gap-3"
                      >
                        <PlusCircleOutlined /> <p>Add One more employment</p>
                      </div>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Form>
            {/* Education */}
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
                  {mainData?.schoolTitle ? (
                    <>{mainData?.schoolTitle}</>
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
                        School
                      </span>
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
                      <span className="label text-gray-400  text-lg ">
                        Degree
                      </span>
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
                      <span className="label text-gray-400  text-lg ">
                        City
                      </span>
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
            {/* Websites & Social Links */}
            <section>
              <h1 className="text-3xl font-semibold">
                Websites & Social Links
              </h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base ">
                  You can add links to websites you want hiring managers to see!
                  Perhaps It will be a link to your portfolio. LinkedIn profile,
                  or personal website
                </p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.label ? (
                    <>{mainData?.label}</>
                  ) : (
                    <>(Not specified)</>
                  )}
                  <p className="text-gray-400">
                    {mainData?.labelLink ? <>{mainData?.labelLink}</> : <></>}
                  </p>
                </summary>

                <div className="flex gap-10">
                  {/* Job Title */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Label
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("socialLabel", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                  {/*  Employer */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Link
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("socialLink", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                </div>
              </details>
            </section>
            {/* Skill */}
            <section>
              <h1 className="text-3xl font-semibold">Skills</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base ">
                  Choose 5 of the most important skills to show your talents!
                  Make sure they match the keywords of the job listing if
                  applying via an online system.
                </p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.skill ? (
                    <>{mainData?.skill}</>
                  ) : (
                    <>(Not specified)</>
                  )}
                  <p className="text-gray-400">
                    {mainData?.labelLink ? <>{mainData?.labelLink}</> : <></>}
                  </p>
                </summary>

                <div className="flex gap-10">
                  {/* Job Title */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Skill
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("skill", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                  {/*  Employer */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
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
            {/* hobbiesDetails */}
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
            {/* Langulage */}
            <section id="laguageDetails" className="hidden">
              <h1 className="text-3xl font-semibold">Langulage</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base "></p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.skill ? (
                    <>{mainData?.skill}</>
                  ) : (
                    <>(Not specified)</>
                  )}
                  <p className="text-gray-400">
                    {mainData?.labelLink ? <>{mainData?.labelLink}</> : <></>}
                  </p>
                </summary>

                <div className="flex gap-10">
                  {/* Job Title */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
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
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Level
                      </span>
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
              </details>
            </section>
            {/* References */}
            <section id="referenceDetails" className="hidden">
              <h1 className="text-3xl font-semibold">References</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base "></p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.referenceTitle ? (
                    <>{mainData?.referenceTitle}</>
                  ) : (
                    <>(Not specified)</>
                  )}
                  <p className="text-gray-400">
                    {mainData?.labelLink ? <>{mainData?.labelLink}</> : <></>}
                  </p>
                </summary>

                <div className="flex  gap-10">
                  {/* References */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
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
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Company
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("referenceCompany", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex  gap-10">
                  {/*  Phone */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Phone
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("referencePhone", {})}
                      className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                    />
                  </div>
                  {/*  Email */}
                  <div className="form-control mt-5 w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label text-gray-400  text-lg ">
                        Email
                      </span>
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
            {/* Internships */}
            <section id="internshipsDetails" className="hidden">
              <h1 className="text-3xl font-semibold">Internships</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base "></p>
              </div>
              <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
                <summary className="font-semibold text-xl ">
                  {mainData?.internshipsTitle ? (
                    <>{mainData?.internshipsTitle}</>
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
                      <span className="label text-gray-400  text-lg ">
                        Company
                      </span>
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
                      <span className="label text-gray-400  text-lg ">
                        City
                      </span>
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
            {/* add section */}
            <section>
              <h1 className="text-3xl font-semibold">Add Section</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base "></p>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <h3
                  onClick={handleLanguage}
                  id="laguageTitle"
                  className=" font-semibold "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <AuditOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Language
                  </span>
                </h3>
                <h3
                  id="InternshipsTitle"
                  onClick={handleInternships}
                  className=" font-semibold items-center "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <ApartmentOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Internships
                  </span>
                </h3>
                <h3
                  onClick={handleHobbies}
                  id="hobbiesTitle"
                  className=" font-semibold items-center "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <CrownOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Hobbies
                  </span>
                </h3>
                <h3
                  id="referenceTitle"
                  onClick={handleReference}
                  className=" font-semibold items-center "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <ContactsOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    References
                  </span>
                </h3>
              </div>
            </section>
          </form>
        </Col>
        <Col span={12}>
          <div className="book mt-20">
            <div className="page">
              <div className="subpage ">
                <div className="flex justify-between">
                  <div className="text-left">
                    <h1 className="text-2xl font-bold">
                      {mainData?.fname} {mainData?.lname}{" "}
                    </h1>
                    <p className="text-xl"> {mainData?.title}</p>
                    {mainData?.email ? (
                      <>
                        <p>Email : {mainData?.email}</p>
                      </>
                    ) : (
                      <></>
                    )}
                    {mainData?.phone ? (
                      <>
                        {" "}
                        <p>Phone : {mainData?.phone}</p>
                      </>
                    ) : (
                      <></>
                    )}
                    {mainData?.address ? (
                      <>
                        <p>
                          Address : {mainData?.address}, {mainData?.city},{" "}
                          {mainData?.country}
                        </p>
                      </>
                    ) : (
                      <></>
                    )}

                    <div className="mt-5">
                      {mainData?.socialLabel ? (
                        <>
                          <a
                            className="text-blue-400 underline "
                            href={mainData?.socialLink}
                          >
                            {" "}
                            {mainData?.socialLabel}
                          </a>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  {fileList[0]?.thumbUrl ? (
                    <>
                      {" "}
                      <div className="mr-5">
                        <img
                          width="140"
                          height="190"
                          src={fileList[0]?.thumbUrl}
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="my-5">
                  {mainData?.summary ? (
                    <>
                      <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                        CAREER OBJECTIVE
                      </h1>
                      <p className="text-sm my-2 text-justify">
                        {mainData?.summary}
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="my-5">
                  {mainData?.jobTitle ? (
                    <>
                      <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                        WORKING EXPERENCE
                      </h1>
                      <p className="text-lg  font-semibold  my-2 text-justify">
                        {mainData?.jobCompany}
                      </p>
                      <p className="text-sm my-2 text-justify">
                        {mainData?.jobTitle}
                      </p>
                      <p className="text-sm my-2 text-justify flex items-center">
                        <span className=" flex gap-2 items-center justify-start">
                          <CalendarOutlined /> {mainData?.jobStart} to{" "}
                          {mainData?.jobEnd}
                        </span>
                        <span className="ml-5 flex gap-2 items-center justify-start">
                          {" "}
                          <EnvironmentOutlined /> {mainData?.jobCity}
                        </span>
                      </p>

                      <p className="text-sm my-2 text-justify">
                        {mainData?.jobDescription}
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="my-5">
                  {mainData?.schoolTitle ? (
                    <>
                      <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                        EDUCATION
                      </h1>
                      <p className="text-lg  font-semibold  my-2 text-justify">
                        {mainData?.schoolTitle}
                      </p>
                      <p className="text-sm my-2 text-justify">
                        {mainData?.schoolDegree}
                      </p>
                      <p className="text-sm my-2 text-justify flex items-center">
                        <span className=" flex gap-2 items-center justify-start">
                          <CalendarOutlined /> {mainData?.schoolStart} to{" "}
                          {mainData?.schoolEnd}
                        </span>
                        <span className="ml-5 flex gap-2 items-center justify-start">
                          {" "}
                          <EnvironmentOutlined /> {mainData?.schoolCity}
                        </span>
                      </p>

                      <p className="text-sm my-2 text-justify">
                        {mainData?.schoolDescription}
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {/* Langualge */}
                <div className="my-5">
                  <div>
                    {mainData?.languageName ? (
                      <>
                        <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                          Language
                        </h1>
                        <div className="grid grid-cols-3 gap-4 ">
                          <p className="text-lg  font-semibold  my-2 text-justify">
                            {mainData?.languageName}
                          </p>
                          <div className="text-sm my-2 text-justify">
                            <p> {mainData?.languageLevel}</p>

                            {mainData?.languageLevel === "Native speaker" ? (
                              <>
                                <Progress percent={30} />
                              </>
                            ) : (
                              <></>
                            )}
                            {mainData?.languageLevel === "Highly proficient" ? (
                              <>
                                <Progress percent={75} />
                              </>
                            ) : (
                              <></>
                            )}
                            {mainData?.languageLevel === "Very good command" ? (
                              <>
                                <Progress percent={100} />
                              </>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                {/* Add Section */}
              </div>
            </div>
            {/* <div className="page">
              <div className="subpage">Page 2/2</div>
            </div> */}
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default CVTempletes;
