import React from "react";
import { Form, Input, Button, message, DatePicker, Slider } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm } from "notiflix";
import TextArea from "antd/es/input/TextArea";

function SkillsEducation() {
  return (
    <div>
      <h5 className="text-start text-xl">
        <b>Education</b>
      </h5>
      <hr />
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="flex">
                  <div className="flex-1">
                    <div
                      className="grid md:grid-cols-2 grid-cols-1 md:gap-2"
                      key={key}
                    >
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "school"]}
                          rules={[{ message: "Missing school" }]}
                          label="school"
                        >
                          <Input
                            className="py-3 text-lg"
                            placeholder="school eg. xyz govt college"
                          />
                        </Form.Item>
                      </div>
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "degree"]}
                          rules={[{ message: "Missing degree" }]}
                          label="Degree"
                        >
                          <Input
                            className="py-3 text-lg"
                            placeholder="degree eg. HSC"
                          />
                        </Form.Item>
                      </div>
                      <div className=" text-start w-full flex flex-col gap-2">
                        <label>Start & End Date</label>
                        <div className="flex gap-2 ">
                          <Form.Item {...restField} name={[name, "startDate"]}>
                            <DatePicker
                              picker="month"
                              status=""
                              placeholder="Start Date"
                              style={{
                                width: "100%",
                                borderColor: "#132579",
                              }}
                            />
                          </Form.Item>
                          <Form.Item {...restField} name={[name, "endDate"]}>
                            <DatePicker
                              picker="month"
                              placeholder="End Date"
                              style={{
                                width: "100%",
                                borderColor: "#132579",
                              }}
                            />
                          </Form.Item>
                        </div>
                      </div>

                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "city"]}
                          rules={[{ message: "Missing city" }]}
                          label="City"
                        >
                          <Input placeholder="city" className="py-3 text-lg" />
                        </Form.Item>
                      </div>
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "description"]}
                          rules={[{ message: "Missing description" }]}
                          label="Description"
                        >
                          <TextArea />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 py-5 flex items-center justify-start align-middle md:py-0 md:mt-0 ">
                    <DeleteOutlined
                      className="mt-5 md:-mt-1 text-red-500 text-2xl"
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
                            titleColor: "#03045e",
                            okButtonBackground: "#03045e",
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
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <div className="text-start text-xl">
        <h5>
          <b>Skills</b>
        </h5>
      </div>
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
                      <Input
                        placeholder="Technology"
                        className="py-3 text-lg"
                      />
                    </Form.Item>
                  </div>
                  <div className=" w-full flex  gap-1">
                    <div className="w-[90%]  items-start">
                      <label className="text-start">Skill Level</label>
                      <Form.Item {...restField} name={[name, "level"]}>
                        <Slider
                          defaultValue={30}
                          label="Skill Level"
                          tooltip={{
                            open: true,
                          }}
                        />
                      </Form.Item>
                    </div>
                    <div className=" flex items-center">
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
