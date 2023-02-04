import React from "react";
import { Form, Input, Button, message } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm } from "notiflix";
function SkillsEducation() {
  return (
    <div>
      <h5 className="text-start text-xl">
        <b>Education</b>
      </h5>

      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div>
                  <h1 className="text-start capitalize text-[16px]">
                    education Details
                  </h1>
                  <div className="flex">
                    <div className="flex-1">
                      <div
                        className="grid md:grid-cols-2
                gap-2 justify-start"
                        key={key}
                      >
                        <div className="">
                          <Form.Item {...restField} name={[name, "level"]}>
                            <Input
                              className="py-3"
                              placeholder="level eg. S.S.C"
                            />
                          </Form.Item>
                        </div>
                        <div className="">
                          <Form.Item {...restField} name={[name, "group"]}>
                            <Input
                              className="py-3"
                              placeholder="group eg. Science"
                            />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item {...restField} name={[name, "grade"]}>
                            <Input
                              placeholder="Grade eg. 5.00"
                              className="py-3"
                            />
                          </Form.Item>
                        </div>

                        <div className="">
                          <Form.Item
                            {...restField}
                            name={[name, "institution"]}
                          >
                            <Input className="py-3" placeholder="Institution" />
                          </Form.Item>
                        </div>
                        <div className="">
                          <Form.Item {...restField} name={[name, "board"]}>
                            <Input
                              className="py-3"
                              placeholder="Board eg. Dhaka"
                            />
                          </Form.Item>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex-1">
                            <Form.Item
                              {...restField}
                              name={[name, "passingYear"]}
                            >
                              <Input
                                className="py-3"
                                placeholder="Passing Year eg. 2015"
                              />
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex  justify-center items-center ">
                      <DeleteOutlined
                        className="-mt-5 md:-mt-1 text-red-500 text-2xl"
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
                              message.success("cancel remove");
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

            <Form.Item className="w-1/3">
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
      <h5 className="text-start text-xl">
        <b>Skills</b>
      </h5>

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
                    <Form.Item {...restField} name={[name, "technology"]}>
                      <Input className="py-3" placeholder="Technology" />
                    </Form.Item>
                  </div>

                  <div className="text-start">
                    <DeleteOutlined
                      className="mt-1  text-red-500 text-2xl"
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
                            message.success("cancel remove");
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

            <Form.Item className="w-1/3">
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
