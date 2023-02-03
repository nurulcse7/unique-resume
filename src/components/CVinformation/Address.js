import { Button, Form, Input } from "antd";
import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Confirm, Notify } from "notiflix";

const Address = () => {
  return (
    <div>
      <h5>
        <b>Present Address</b>
      </h5>
      <hr />
      <Form.List name="presentAdd">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="grid md:grid-cols-5 md:gap-6" key={key}>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "village"]}
                      rules={[{ required: true, message: "Missing Village" }]}
                    >
                      <Input placeholder="Village" />
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "post"]}
                      rules={[{ required: true, message: "Missing Post" }]}
                    >
                      <Input placeholder="Post" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "ps"]}
                      rules={[{ required: true, message: "Missing P.S" }]}
                    >
                      <Input placeholder="P.S" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "district"]}
                      rules={[{ required: true, message: "Missing district" }]}
                    >
                      <Input placeholder="District" />
                    </Form.Item>
                  </div>
                  <div className="-mt-5 py-5 md:py-0 md:mt-0 ">
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
                Add more (if needed)
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <h5>
        <b>Permanent Address</b>
      </h5>
      <hr />
      <Form.List name="permanentAdd">
        {(fields, { add, remove }) => (
          <>
            <div>
              {fields.map(({ key, name, ...restField }) => (
                <div className="grid md:grid-cols-5 md:gap-6" key={key}>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "village"]}
                      rules={[{ required: true, message: "Missing Village" }]}
                    >
                      <Input placeholder="Village" />
                    </Form.Item>
                  </div>
                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "post"]}
                      rules={[{ required: true, message: "Missing Post" }]}
                    >
                      <Input placeholder="Post" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "ps"]}
                      rules={[{ required: true, message: "Missing P.S" }]}
                    >
                      <Input placeholder="P.S" />
                    </Form.Item>
                  </div>

                  <div className="">
                    <Form.Item
                      {...restField}
                      name={[name, "district"]}
                      rules={[{ required: true, message: "Missing district" }]}
                    >
                      <Input placeholder="District" />
                    </Form.Item>
                  </div>
                  <div className="-mt-5 py-5 md:py-0 md:mt-0 ">
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
                Add more (if needed)
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5>
        <b>Language Skills</b>
      </h5>
      <hr />
      <Form.List name="languageSkills">
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
                      rules={[{ required: true, message: "Missing language" }]}
                    >
                      <Input placeholder="Language" />
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
      <h5>
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
                      <Input placeholder="Personal Skill" />
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
};

export default Address;
