import React from "react";
import { Form, Input, Button, message } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm, Notify } from "notiflix";
function SkillsEducation() {
  return (
    <div>
      <h5>
        <b>Education</b>
      </h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="grid md:grid-cols-4 md:gap-6" key={key}>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "level"]}
                      rules={[{ required: true, message: "Missing level" }]}
                    >
                      <Input placeholder="level eg. S.S.C" />
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "group"]}
                      rules={[{ required: true, message: "Missing group" }]}
                    >
                      <Input placeholder="group eg. Science" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "grade"]}
                      rules={[{ required: true, message: "Missing grade" }]}
                    >
                      <Input placeholder="Grade eg. 5.00" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      rules={[
                        { required: true, message: "Missing institution" },
                      ]}
                    >
                      <Input placeholder="Institution" />
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "board"]}
                      rules={[{ required: true, message: "Missing board" }]}
                    >
                      <Input placeholder="Board eg. Dhaka" />
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "passingYear"]}
                      rules={[
                        { required: true, message: "Missing passing Year" },
                      ]}
                    >
                      <Input placeholder="Passing Year eg. 2015" />
                    </Form.Item>
                  </div>
                  <div className="-mt-5 py-5 md:py-0 md:mt-0 ">
                    <MinusCircleOutlined
                      className="-mt-5 md:-mt-1 text-red-500 text-2xl"
                      onClick={() =>
                        Confirm.show(
                          "Please Confirm!",
                          "Do you agree Remove this field",
                          "Yes",
                          "No",
                          () => {
                            remove(name);
                          },
                          () => {
                            message.warning("cancel remove");
                          },
                          {
                            width: "320px",
                            borderRadius: "8px",
                            titleColor: "#fb923c",
                            okButtonBackground: "#fb923c",
                            cssAnimationStyle: "zoom",
                          }
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>
        <b>Skills</b>
      </h5>
      <hr />
      <Form.List name="skills">
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
                      name={[name, "technology"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Technology" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <MinusCircleOutlined
                      className="-mt-1 text-red-500 text-2xl"
                      onClick={() =>
                        Confirm.show(
                          "Please Confirm!",
                          "Do you agree Remove this field",
                          "Yes",
                          "No",
                          () => {
                            remove(name);
                          },
                          () => {
                            Notify.info("cancel remove");
                          },
                          {
                            width: "320px",
                            borderRadius: "8px",
                            titleColor: "#fb923c",
                            okButtonBackground: "#fb923c",
                            cssAnimationStyle: "zoom",
                          }
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            <Form.Item>
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
}

export default SkillsEducation;
