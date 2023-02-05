import { Form, Input } from "antd";
import React from "react";
const { TextArea } = Input;

function PersonalInfo() {
  return (
    <div>
      <div className="grid md:grid-cols-2  gap-1 ">
        <div className="">
          <Form.Item name="jobTitle" label="Wanted Job Title">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="fname" label="First Name">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="lname" label="Last Name">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="email" label="Email">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>
        <div className="">
          <Form.Item name="mobileNumber" label="Mobile Number">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>

        <div className="col-md-12">
          <Form.Item name="professionalSummary" label="Professional Summary">
            <TextArea />
          </Form.Item>
        </div>
        <div className="col-md-12">
          <Form.Item name="address" label="Address">
            <Input className="py-3 text-lg" />
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
