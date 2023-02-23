import { Button, Form, Input, message, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import CoverLetterTemplate1 from "../../components/CoverLetterTemplates/CoverLetterTemplate1";
import CoverLetterTemplate2 from "../../components/CoverLetterTemplates/CoverLetterTemplate2";
import CoverLetterTemplate3 from "../../components/CoverLetterTemplates/CoverLetterTemplate3";
import CoverLetterTemplate4 from "../../components/CoverLetterTemplates/CoverLetterTemplate4";
import CoverLetterTemplate5 from "../../components/CoverLetterTemplates/CoverLetterTemplate5";
import CoverLetterTemplate6 from "../../components/CoverLetterTemplates/CoverLetterTemplate6";
import CoverLetterTemplate7 from "../../components/CoverLetterTemplates/CoverLetterTemplate7";
import CoverLetterTemplate8 from "../../components/CoverLetterTemplates/CoverLetterTemplate8";
import CoverLetterTemplate9 from "../../components/CoverLetterTemplates/CoverLetterTemplate9";
import { coverTemplate } from "../../redux/action/data";
import styles from "../../style";
import axiosInstance from "../../utils/axiosInstance.js";

const CoverLetterEditor = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.coverletter);
  const componentRef = useRef();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const onFinish = async (values) => {
    await axiosInstance.post("/api/coverletterinfo", values, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    message.success("Update successfully");
  };
  useEffect(() => {
    dispatch(coverTemplate());
  }, [data, dispatch]);
  const params = useParams();
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <CoverLetterTemplate1 data={data} />;
      }
      case "2": {
        return <CoverLetterTemplate2 data={data} />;
      }
      case "3": {
        return <CoverLetterTemplate3 data={data} />;
      }
      case "4": {
        return <CoverLetterTemplate4 data={data} />;
      }
      case "5": {
        return <CoverLetterTemplate5 data={data} />;
      }
      case "6": {
        return <CoverLetterTemplate6 data={data} />;
      }
      case "7": {
        return <CoverLetterTemplate7 data={data} />;
      }
      case "8": {
        return <CoverLetterTemplate8 data={data} />;
      }
      case "9": {
        return <CoverLetterTemplate9 data={data} />;
      }

      default:
        return;
    }
  };

  return (
    <div>
      <div className={`${styles.padding} md:max-w-[70%]  `}>
        <h4 className="text-start font-semibold text-xl mb-3">
          Personal Details
        </h4>
        <Form layout="vertical" onFinish={onFinish} initialValues={data}>
          <div className={` grid md:grid-cols-2  gap-5 `}>
            <div className="">
              <Form.Item name="fullname" label="Full Name">
                <Input className="py-3 text-lg" />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item name="jobTitle" label="Wanted Job Title">
                <Input className="py-3 text-lg" />
              </Form.Item>
            </div>

            <div className="">
              <Form.Item name="address" label="Address">
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
          </div>
          <h4 className="text-start font-semibold text-xl">Employer Details</h4>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="">
              <Form.Item name="companyName" label="Company Name">
                <Input className="py-3 text-lg" />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item name="hiringManagerName" label="Hiring Manager Name">
                <Input className="py-3 text-lg" />
              </Form.Item>
            </div>
            <div className="">
              <Form.Item name="companyAddress" label="Address">
                <Input className="py-3 text-lg" />
              </Form.Item>
            </div>{" "}
            <br />
            <div>
              <h4 className="text-start font-semibold text-xl">
                Letter Details
              </h4>
              <Form.Item name="letterDetails">
                <TextArea />
              </Form.Item>
            </div>
          </div>
          <>
            <div
              className="btn-body absolute md:bottom-0 bottom-0 right-[10px] md:right-[50px]"
              onClick={() => setOpen(true)}
            >
              <button className="btn btn-hover">
                <span className="btn-text">Preview & Download</span>
              </button>
            </div>
            <Modal
              centered
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              width={1000}
            >
              <div className="flex justify-end my-5 mx-5 px-12 pb-5">
                <Button
                  className="back-btn"
                  onClick={() => navigate("/resume-templates")}
                >
                  Back
                </Button>
                {user.role === "user" ? (
                  <Link to="/select-plan">
                    <Button>Download PDF</Button>
                  </Link>
                ) : (
                  <Button className="mx-5" onClick={handlePrint}>
                    Download PDF
                  </Button>
                )}
              </div>
              <div className="px-12 h-[100%] bg-white" ref={componentRef}>
                {gettemplate()}
              </div>
            </Modal>
          </>

          <div>
            <Button
              htmlType="submit"
              className="bg-primary focus:text-white hover:text-white active:text-white flex items-center text-white py-5 px-5"
            >
              UPDATE
            </Button>
          </div>
        </Form>
      </div>

      <div
        className="px-12 text-left mx-auto h-[29.7cm] hidden md:block w-[21cm] border-red-700 border-2 bg-gray-100"
        ref={componentRef}
      >
        <p>{gettemplate()}</p>
      </div>
    </div>
  );
};

export default CoverLetterEditor;
