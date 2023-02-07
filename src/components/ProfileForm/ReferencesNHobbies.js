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
      <Form.List name="references">
        {(fields, { add, remove }) => (
          <>
            <div className="w-full">
              {fields.map(({ key, name, ...restField }) => (
                <div className="flex">
                  <div className="flex-1">
                    <div className="grid md:grid-cols-2 gap-2 " key={key}>
                      <div className=" w-full">
                        <Form.Item
                          {...restField}
                          name={[name, "fullName"]}
                          label="Full Name"
                        >
                          <Input
                            placeholder="Full Name"
                            className="py-3 text-lg"
                          />
                        </Form.Item>
                      </div>
                      <div className=" w-full  gap-1">
                        <Form.Item
                          {...restField}
                          name={[name, "company"]}
                          label="Company"
                        >
                          <Input
                            placeholder="Company"
                            className="py-3 text-lg"
                          />
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
                      </div>
                    </div>
                  </div>
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
              ))}
            </div>

            <Form.Item className="w-1/3">
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
          <b>Hobbies</b>
        </h5>
        <Form.Item name="hobbies" label="What do you like?">
          <TextArea />
        </Form.Item>
      </div>
    </div>
  );
};

export default ReferencesNHobbies;
