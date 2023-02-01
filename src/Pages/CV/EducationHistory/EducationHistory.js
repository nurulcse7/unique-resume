import { Form, Space } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const EducationHistory = ({ educationHistory, setEducationHistory }) => {
  const [count, setCount] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setEducationHistory(data);
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-xl font-semibold">Education</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-gray-400 mb-3 text-xs ">
              A varied education on your resume sums up the value that your
              learnings and background will bring to job.
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {educationHistory?.schoolTitle ? (
                <>{educationHistory?.schoolTitle}</>
              ) : (
                <>(Not specified)</>
              )}
            </summary>

            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">School</span>
                </label>
                <input
                  type="text"
                  {...register("schoolTitle", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Degree</span>
                </label>
                <input
                  type="text"
                  {...register("schoolDegree", {})}
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
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">City</span>
                </label>
                <input
                  type="text"
                  {...register("schoolCity", {})}
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
                {...register("schoolDescription", {})}
                className="w-4/5 px-4 block py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
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
                      <summary className="font-semibold text-lg w-full  justify-between">
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
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
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
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
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
                      <div className="form-control mt-2 w-full max-w-xs">
                        <label className="label">
                          {" "}
                          <span className="label text-gray-400   text-xs ">
                            Description
                          </span>
                        </label>
                        <textarea
                          {...register("schoolDescription", {})}
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
                      Add One more education
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

export default EducationHistory;
