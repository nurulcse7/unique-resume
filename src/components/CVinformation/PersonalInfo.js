import { Form, Input } from "antd";
import React from "react";
const { TextArea } = Input;

function PersonalInfo() {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-2 ">
        <div className="">
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
        <div className="">
          <Form.Item name="portfolio" label="Portfolio">
            <Input className="py-3" />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item name="carrierObjective" label="Carrier Objective">
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item name="address" label="Address">
            <Input className="py-3" />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
