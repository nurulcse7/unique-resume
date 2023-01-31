import { Form, Space } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const EmploymentHistory = ({ employmentHistory, setEmploymentHistory }) => {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setEmploymentHistory(data);
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="mt-5">
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-xl font-semibold">Employment History</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-xs text-gray-400 mb-3">
              Whow your relevant experience.
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {employmentHistory?.jobTitle ? (
                <>{employmentHistory?.jobTitle}</>
              ) : (
                <>(Not specified)</>
              )}
            </summary>

            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
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
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
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
            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">
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
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">City</span>
                </label>
                <input
                  type="text"
                  {...register("jobCity", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
            </div>
            <div className="form-control mt-2 w-full max-w-xs ">
              <label className="label">
                {" "}
                <span className="label text-gray-400  text-xs ">
                  Description
                </span>
              </label>
              <textarea
                {...register("jobDescription", {})}
                className="w-4/5 px-4 py-3 block border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
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
                      <summary className="font-semibold text-xl w-full  justify-between">
                        {/* {employmentHistory?.jobTitle ? (
                          <>{employmentHistory?.jobTitle}</>
                        ) : (
                          <>(Not specified)</>
                        )} */}
                        <h1 className="inline">Please Add</h1>
                        <p className="ml-96  inline-block">
                          <MinusCircleOutlined
                            className="ml-96 "
                            onClick={() => remove(name)}
                          />
                        </p>
                      </summary>

                      <div className="flex gap-5">
                        {/* Job Title */}
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
                              Job Title
                            </span>
                          </label>
                          <input
                            type="text"
                            {...register(`jobTitle${count}`, {})}
                            className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                          />
                        </div>
                        {/*  Employer */}{" "}
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
                              Company Name
                            </span>
                          </label>
                          <input
                            type="text"
                            {...register(`jobCompany${count}`, {})}
                            className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="flex gap-5">
                        {/* Job Title */}
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
                              Start & End Date
                            </span>
                          </label>
                          <div className="flex gap-3">
                            <input
                              type="date"
                              {...register(`jobStart${count}`, {})}
                              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                            />
                            <input
                              type="date"
                              {...register(`jobEnd${count}`, {})}
                              className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                            />
                          </div>
                        </div>

                        {/*  Employer */}
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
                              City
                            </span>
                          </label>
                          <input
                            type="text"
                            {...register(`jobCity${count}`, {})}
                            className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="form-control mt-2 w-full max-w-xs">
                        <label className="label">
                          {" "}
                          <span className="label text-gray-400   text-xs ">
                            Description
                          </span>
                        </label>
                        <textarea
                          {...register(`jobDescription${count}`, {})}
                          className="w-4/5 px-4 block py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                        />
                      </div>
                    </details>
                  </Space>
                ))}
                <Form.Item>
                  <div
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                    className="text-blue-400 hover:text-blue-900 hover:font-semibold text-lg my-5 flex justify-start items-center gap-3"
                  >
                    <PlusCircleOutlined />{" "}
                    <div onClick={() => setCount(count + 1)}>
                      {" "}
                      Add One more employment
                    </div>
                  </div>
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </form>
    </div>
  );
};

export default EmploymentHistory;
