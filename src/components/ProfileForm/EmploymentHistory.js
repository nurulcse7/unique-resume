import { Button, Form, Input, message, DatePicker, ConfigProvider } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm } from "notiflix";
import React from "react";

// import locale from "antd/es/date-picker/locale/en_US";
import locale from "antd/locale/en_US";
import "dayjs/locale/es-us";
const EmploymentHistory = () => {
  return (
    <div>
      <h5 className="text-start text-xl py-3">
        <b>Employment History</b>
      </h5>
      <hr />
      <Form.List name="employmentHistory">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="flex">
                  <div className="flex-1">
                    <div
                      className="grid md:grid-cols-2 grid-cols-1 gap-2"
                      key={key}
                    >
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "jobTitle"]}
                          rules={[{ message: "Job title" }]}
                          label="Job title"
                        >
                          <Input className="py-3 text-lg" />
                        </Form.Item>
                      </div>
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "employer"]}
                          rules={[{ message: "Missing degree" }]}
                          label="Employer"
                        >
                          <Input className="py-3 text-lg" />
                        </Form.Item>
                      </div>

                      <div className=" text-start w-full flex flex-col gap-2">
                        <label>Start & End Date</label>
                        <div className="flex gap-2 ">
                          <Form.Item {...restField} name={[name, "startDate"]}>
                            <ConfigProvider locale={locale}>
                              <DatePicker />
                            </ConfigProvider>
                          </Form.Item>
                          <Form.Item {...restField} name={[name, "endDate"]}>
                            <ConfigProvider locale={locale}>
                              <DatePicker />
                            </ConfigProvider>
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
                  <div
                    className=" flex items-center 
                   align-middle "
                  >
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
                Add Employment History
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5 className="text-start text-xl py-3">
        <b>Internships</b>
      </h5>
      <hr />

      <Form.List name="internShips">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="flex">
                  <div className="flex-1">
                    <div className="grid md:grid-cols-2   gap-2" key={key}>
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "jobTitle"]}
                          rules={[{ message: "Job title" }]}
                          label="Job title"
                        >
                          <Input className="py-3 text-lg" />
                        </Form.Item>
                      </div>
                      <div className="">
                        <Form.Item
                          {...restField}
                          name={[name, "employer"]}
                          rules={[{ message: "Missing degree" }]}
                          label="Employer"
                        >
                          <Input className="py-3 text-lg" />
                        </Form.Item>
                      </div>

                      <div className=" text-start w-full flex flex-col gap-2">
                        <label>Start & End Date</label>
                        <div className="flex gap-2">
                          <Form.Item {...restField} name={[name, "startDate"]}>
                            <ConfigProvider locale={locale}>
                              <DatePicker />
                            </ConfigProvider>
                          </Form.Item>
                          <Form.Item {...restField} name={[name, "endDate"]}>
                            <ConfigProvider locale={locale}>
                              <DatePicker />
                            </ConfigProvider>
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
                  <div className=" flex items-center justify-start align-middle md:py-0 md:mt-0 ">
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

            <Form.Item className="w-1/3 ">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Internships
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default EmploymentHistory;
