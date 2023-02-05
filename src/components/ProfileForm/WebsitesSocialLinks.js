import { Button, Form, Input, message, Select } from "antd";
import { Confirm } from "notiflix";
import React from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
const WebsitesSocialLinks = () => {
  return (
    <div>
      <h5 className="text-start text-xl py-3">
        <b>Websites & Social Links</b>
      </h5>
      <hr />
      <Form.List name="websites">
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
                      name={[name, "label"]}
                      label="Label"
                    >
                      <Input placeholder="Label" className="py-3 text-lg" />
                    </Form.Item>
                  </div>
                  <div className=" w-full flex gap-1">
                    <Form.Item
                      {...restField}
                      name={[name, "Link"]}
                      className="flex-1"
                      label="Link"
                    >
                      <Input placeholder="Link" className="py-3 text-lg" />
                    </Form.Item>
                    <div className="flex items-center justify-start">
                      <DeleteOutlined
                        className="mt-1 text-red-500 text-2xl"
                        onClick={() =>
                          Confirm.show(
                            "Please Confirm!",
                            "Do you agree Remove this field",
                            "Yes",
                            "No",
                            () => {
                              remove(name);
                              message.success(" removed");
                            },
                            () => {
                              message.warning("cancel remove");
                            },
                            {
                              width: "320px",
                              borderRadius: "8px",
                              titleColor: "#03045e",
                              okButtonBackground: "#03045e",
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

            <Form.Item className="w-1/3">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add one more link
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5 className="text-start text-xl py-3">
        <b>Languages</b>
      </h5>
      <Form.List name="languages">
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
                      name={[name, "language"]}
                      label="Language"
                    >
                      <Input
                        placeholder="ex: bangla"
                        className="py-3 text-lg"
                      />
                    </Form.Item>
                  </div>
                  <div className=" w-full flex gap-1">
                    <Form.Item
                      {...restField}
                      name={[name, "level"]}
                      label="Level"
                      className="flex-1 py-3"
                      rules={[{ required: true, message: "Missing Level" }]}
                    >
                      <Select
                        defaultValue="Select level"
                        options={[
                          {
                            value: "Select level",
                            label: "Select level",
                            disabled: true,
                          },
                          {
                            value: "Native speaker",
                            label: "Native speaker",
                          },
                          {
                            value: "Highly proficient",
                            label: "Highly proficient",
                          },
                          {
                            value: "Very good command",
                            label: "Very good command",
                          },
                        ]}
                      />
                    </Form.Item>
                    <div className="flex items-center justify-start">
                      <DeleteOutlined
                        className="mt-1 text-red-500 text-2xl"
                        onClick={() =>
                          Confirm.show(
                            "Please Confirm!",
                            "Do you agree Remove this field",
                            "Yes",
                            "No",
                            () => {
                              remove(name);
                              message.success(" removed");
                            },
                            () => {
                              message.warning("cancel remove");
                            },
                            {
                              width: "320px",
                              borderRadius: "8px",
                              titleColor: "#03045e",
                              okButtonBackground: "#03045e",
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

            <Form.Item className="w-1/2">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add one more language
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default WebsitesSocialLinks;
