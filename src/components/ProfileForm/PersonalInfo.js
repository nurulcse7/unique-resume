import { Form, Input } from "antd";
import React from "react";
const { TextArea } = Input;

function PersonalInfo() {
  return (
    <div>
      <div className="grid md:grid-cols-4 md:gap-6 ">
        <div className="">
          <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="mobileNumber"
            label="Mobile Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="fathersName"
            label="Father's Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="mothersName"
            label="Mother's Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item
            name="dateOfBirth"
            label="Date of Birth"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="blood" label="Blood Group">
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="nationality" label="Nationality">
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="religion" label="Religion">
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="maritalStatus" label="Marital Status">
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="nid" label="National ID NO">
            <Input />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="portfolio" label="Portfolio">
            <Input />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item
            name="carrierObjective"
            label="Carrier Objective"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true }]}
          >
            <TextArea />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
