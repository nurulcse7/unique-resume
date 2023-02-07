import { Button, Form, Input, message } from "antd";
import React from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm, Notify } from "notiflix";

const Address = ({ onFinish }) => {
  return (
    <div>
      <h5 className="text-start">
        <b>Present Address</b>
      </h5>
      <hr />
      <Form.List name="presentAdd">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div>
                  <h4 className="text-start"> Address Details</h4>
                  <div className="flex">
                    <div className="flex-1">
                      <div className="grid md:grid-cols-2  gap-3" key={key}>
                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "village"]}
                            rules={[{ message: "Missing Village" }]}
                          >
                            <Input className="py-3" placeholder="Village " />
                          </Form.Item>
                        </div>
                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "post"]}
                            rules={[{ message: "Missing Post" }]}
                          >
                            <Input className="py-3" placeholder="Post" />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "ps"]}
                            rules={[{ message: "Missing P.S" }]}
                          >
                            <Input className="py-3" placeholder="P.S" />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "district"]}
                            rules={[{ message: "Missing district" }]}
                          >
                            <Input className="py-3" placeholder="District" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-5 py-5 md:py-0 md:mt-0 flex items-center ml-5 ">
                      <DeleteOutlined
                        className="-mt-1 text-red-500 text-2xl"
                        onClick={() =>
                          Confirm.show(
                            "Please Confirm!",
                            "Do you agree Remove this field",
                            "Yes",
                            "No",
                            () => {
                              remove(name);

                              message.success("items remove");
                            },
                            () => {
                              message.warning("cancel remove");
                            },
                            {
                              width: "320px",
                              borderRadius: "8px",
                              titleColor: "#132579",
                              okButtonBackground: "#132579",
                              cssAnimationStyle: "zoom",
                            }
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Form.Item className=" md:w-1/3 w-full">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add more (if needed)
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5 className="text-start">
        <b>Permanent Address</b>
      </h5>
      <hr />
      <Form.List name="permanentAdd">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div>
                  <h4 className="text-start"> Address Details</h4>
                  <div className="flex">
                    <div className="flex-1">
                      <div className="grid md:grid-cols-2 md:gap-3" key={key}>
                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "village"]}
                            rules={[{ message: "Missing Village" }]}
                          >
                            <Input className="py-3" placeholder="Village" />
                          </Form.Item>
                        </div>
                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "post"]}
                            rules={[{ message: "Missing Post" }]}
                          >
                            <Input className="py-3" placeholder="Post" />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "ps"]}
                            rules={[{ message: "Missing P.S" }]}
                          >
                            <Input className="py-3" placeholder="P.S" />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "district"]}
                            rules={[{ message: "Missing district" }]}
                          >
                            <Input className="py-3" placeholder="District" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                    <div className="-mt-5 py-5 md:py-0 md:mt-0 flex items-center ml-5 ">
                      <DeleteOutlined
                        className="-mt-1 text-red-500 text-2xl"
                        onClick={() =>
                          Confirm.show(
                            "Please Confirm!",
                            "Do you agree Remove this field",
                            "Yes",
                            "No",
                            () => {
                              remove(name);
                              message.success("items remove");
                            },
                            () => {
                              message.warning("cancel remove");
                            },
                            {
                              width: "320px",
                              borderRadius: "8px",
                              titleColor: "#132579",
                              okButtonBackground: "#132579",
                              cssAnimationStyle: "zoom",
                            }
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Form.Item className="md:w-1/3 w-full">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add more (if needed)
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5 className="text-start">
        <b>Language Skills</b>
      </h5>
      <hr />
      <Form.List name="languageSkills">
        {(fields, { add, remove }) => (
          <>
            <div className="w-full">
              {fields.map(({ key, name, ...restField }) => (
                <div>
                  <div
                    className="md:grid md:grid-cols-2 gap-2 flex justify-between md:gap-6"
                    key={key}
                  >
                    <div className=" w-full ">
                      <Form.Item
                        {...restField}
                        name={[name, "language"]}
                        rules={[{ message: "Missing language" }]}
                      >
                        <Input className="py-3" placeholder="Language" />
                      </Form.Item>
                    </div>

                    <div className=" flex items-center ml-5 ">
                      <DeleteOutlined
                        className="-mt-1 text-red-500 text-2xl"
                        onClick={() =>
                          Confirm.show(
                            "Please Confirm!",
                            "Do you agree Remove this field",
                            "Yes",
                            "No",
                            () => {
                              remove(name);
                              message.success("items remove");
                            },
                            () => {
                              message.warning("cancel remove");
                            },
                            {
                              width: "320px",
                              borderRadius: "8px",
                              titleColor: "#132579",
                              okButtonBackground: "#132579",
                              cssAnimationStyle: "zoom",
                            }
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Form.Item className="md:w-1/3 w-full">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5 className="text-start">
        <b>Personal Skills</b>
      </h5>
      <hr />
      <Form.List name="personalSkills">
        {(fields, { add, remove }) => (
          <>
            <div className="w-full">
              {fields.map(({ key, name, ...restField }) => (
                <div
                  className="md:grid md:grid-cols-2 gap-2 flex justify-between md:gap-6"
                  key={key}
                >
                  <div className=" w-full">
                    <Form.Item
                      {...restField}
                      name={[name, "personalSkill"]}
                      rules={[
                        {
                          required: true,
                          message: "Missing personal skill",
                        },
                      ]}
                    >
                      <Input className="py-3" placeholder="Personal Skill" />
                    </Form.Item>
                  </div>

                  <div className="flex items-center ml-5">
                    <DeleteOutlined
                      className="-mt-1 text-red-500 text-2xl"
                      onClick={() =>
                        Confirm.show(
                          "Please Confirm!",
                          "Do you agree Remove this field",
                          "Yes",
                          "No",
                          () => {
                            remove(name);
                            message.success("items remove");
                          },
                          () => {
                            message.warning("cancel remove");
                          },
                          {
                            width: "320px",
                            borderRadius: "8px",
                            titleColor: "#132579",
                            okButtonBackground: "#132579",
                            cssAnimationStyle: "zoom",
                          }
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Item className="md:w-1/3 w-full">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default Address;
