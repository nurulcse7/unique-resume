import { Button, Form, Input, message } from "antd";
import { Confirm } from "notiflix";
import React from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
const ReferencesNHobbies = () => {
  return (
    <div>
      <h5 className="text-start text-xl py-3">
        <b>References</b>
      </h5>
      <hr />
      <Form.List name="references">
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
                      name={[name, "referent'sFullName"]}
                      label="Referent's Full Name"
                    >
                      <Input placeholder="Full Name" className="py-3 text-lg" />
                    </Form.Item>
                  </div>
                  <div className=" w-full  gap-1">
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      label="Company"
                    >
                      <Input placeholder="Company" className="py-3 text-lg" />
                    </Form.Item>
                  </div>
                  <div className=" w-full">
                    <Form.Item
                      {...restField}
                      name={[name, "phone"]}
                      label="Phone"
                    >
                      <Input placeholder="Phone" className="py-3 text-lg" />
                    </Form.Item>
                  </div>
                  <div className=" w-full gap-2 flex">
                    <Form.Item
                      className="flex-1"
                      {...restField}
                      name={[name, "email"]}
                      label="Email"
                    >
                      <Input placeholder="Email" className="py-3 text-lg" />
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
                Add one more reference
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <div className="">
        <h5 className="text-start text-xl py-3">
          <b>References</b>
        </h5>
        <hr />
        <Form.Item name="hobbies" label="What do you like?">
          <TextArea rows={4} />
        </Form.Item>
      </div>
    </div>
  );
};

export default ReferencesNHobbies;
