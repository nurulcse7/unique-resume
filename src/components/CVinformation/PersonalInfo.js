import { Button, Form, Input, message, Modal, Upload } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Confirm } from "notiflix";

import axiosInstance from "../../utils/axiosInstance";
import axios from "axios";
import { useState } from "react";
const { TextArea } = Input;
function PersonalInfo({ info }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [img, setImg] = useState("");
  const handleCancel = () => setPreviewOpen(false);

  const handleCustom = async ({ file }) => {
    console.log(file);
    const formData = new FormData();
    formData.append("image", file);

    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=4e617bff24500ed4669c6e33ea216faa`,
      formData
    );
    const url = {
      imageUrl: data.data.url,
    };
    setImg(data.data.url);
    if (data) {
      const info = await axiosInstance.post("/api/cvinformation", url, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(info);
    }
  };

  const handlePreview = async () => {
    setPreviewImage(img);
    setPreviewOpen(true);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div>
        <img src={info?.imageUrl} alt="" className="w-[80px] h-full" />
      </div>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-2 ">
        <div className="">
          <Upload
            customRequest={handleCustom}
            listType="picture-circle"
            onPreview={handlePreview}
          >
            {uploadButton}
          </Upload>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{
                width: "100%",
              }}
              src={previewImage}
            />
          </Modal>
          <Form.Item name="name" label="Full Name">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="email" label="Email">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="mobileNumber" label="Mobile Number">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="fathersName" label="Father's Name">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="mothersName" label="Mother's Name">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="dateOfBirth" label="Date of Birth">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="sex" label="Sex" r>
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="blood" label="Blood Group">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="nationality" label="Nationality">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="religion" label="Religion">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="maritalStatus" label="Marital Status">
            <Input className="py-3" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="nid" label="National ID NO">
            <Input className="py-3" />
          </Form.Item>
        </div>
      </div>
      <div>
        <h4 className="text-start mb-4">Add Social Link</h4>
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
                                message.success("itmes removed");
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

              <Form.Item className="md:w-1/2 w-full">
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add link
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </div>
      <div className="flex md:flex-row gap-3 flex-col ">
        <div className="col-md-12 flex-1">
          <Form.Item name="carrierObjective" label="Carrier Objective">
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12 flex-1">
          <Form.Item name="address" label="Address">
            <Input className="py-3" />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
