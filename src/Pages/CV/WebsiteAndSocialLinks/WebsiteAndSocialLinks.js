import { Form, Space } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const WebsiteAndSocialLinks = ({
  websiteAndSocialLinks,
  setWebsiteAndSocialLinks,
}) => {
  const [count, setCount] = useState(0);
  // console.log("websiteAndSocialLinks", websiteAndSocialLinks);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setWebsiteAndSocialLinks(data);
  };
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="mt-2">
      <form onChange={handleSubmit(onSubmit)}>
        <section>
          <h1 className="text-xl font-semibold">Websites & Social Links</h1>
          <div className="form-control mt-2 w-full ">
            <p className="label text-gray-400 mb-3 text-xs ">
              You can add links to websites you want hiring managers to see!
              Perhaps It will be a link to your portfolio. LinkedIn profile, or
              personal website
            </p>
          </div>
          <details className="mb-4 border p-5 text-left border-b-2 py-3 ">
            <summary className="font-semibold text-lg ">
              {websiteAndSocialLinks?.label ? (
                <>{websiteAndSocialLinks?.label}</>
              ) : (
                <>(Not specified)</>
              )}
              <p className="text-gray-400">
                {websiteAndSocialLinks?.labelLink ? (
                  <>{websiteAndSocialLinks?.labelLink}</>
                ) : (
                  <></>
                )}
              </p>
            </summary>

            <div className="flex gap-5">
              {/* Job Title */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Label</span>
                </label>
                <input
                  type="text"
                  {...register("label", {})}
                  className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                />
              </div>
              {/*  Employer */}
              <div className="form-control mt-2 w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label text-gray-400  text-xs ">Link</span>
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
                              Label
                            </span>
                          </label>
                          <input
                            type="text"
                            {...register("label", {})}
                            className="w-full px-4 py-3 border border-[#0077B6] rounded-md bg-gray-50 text-gray-800 focus:outline-none"
                          />
                        </div>
                        {/*  Employer */}
                        <div className="form-control mt-2 w-full max-w-xs">
                          <label className="label">
                            {" "}
                            <span className="label text-gray-400  text-xs ">
                              Link
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
                      Add One more link
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

export default WebsiteAndSocialLinks;
