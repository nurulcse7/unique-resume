import { Form, Space } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const EmploymentHistory = ({ employmentHistory, setEmploymentHistory }) => {
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
    <div>
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-3xl font-semibold">Employment History</h1>
          <div className="form-control mt-5 w-full ">
            <p className="label text-gray-400 mb-3 text-base ">
              Whow your relevant experience.
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-xl ">
              {employmentHistory?.jobTitle ? (
                <>{employmentHistory?.jobTitle}</>
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
                  <span className="label text-gray-400  text-lg ">City</span>
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
                        {employmentHistory?.jobTitle1 ? (
                          <>{employmentHistory?.jobTitle1}</>
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
      </form>
    </div>
  );
};

export default EmploymentHistory;
