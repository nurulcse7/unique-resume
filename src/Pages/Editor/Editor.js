import { Button, Form, message, Modal, Tabs } from "antd";
import React from "react";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import EmploymentHistory from "../../components/ProfileForm/EmploymentHistory";
import PersonalInfo from "../../components/ProfileForm/PersonalInfo";
import ReferencesNHobbies from "../../components/ProfileForm/ReferencesNHobbies";
import SkillsEducation from "../../components/ProfileForm/SkillsEducation";
import WebsitesSocialLinks from "../../components/ProfileForm/WebsitesSocialLinks";
import "./editor.css";
import Template1 from "../ResumeTemplate/Template1";
import Template2 from "../ResumeTemplate/Template2";
import Template3 from "../ResumeTemplate/Template3";
import Template4 from "../ResumeTemplate/Template4";
import Template5 from "../ResumeTemplate/Template5";
import Template6 from "../ResumeTemplate/Template6";
import axiosInstance from "../../utils/axiosInstance";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeData } from "../../redux/action/resumeData";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styles from "../../style";
import Template7 from "../ResumeTemplate/Template7";
import Template8 from "../ResumeTemplate/Template8";
import Template9 from "../ResumeTemplate/Template9";
const Editor = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const { data } = useSelector((state) => state.resumeData);
  const componentRef = useRef();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const onFinish = async (values) => {
    await axiosInstance.post("/api/resumeinfo", values, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    message.success("Update successfully");
  };
  useEffect(() => {
    dispatch(resumeData());
  }, [data, dispatch]);

  const params = useParams();
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 data={data} />;
      }
      case "2": {
        return <Template2 data={data} />;
      }
      case "3": {
        return <Template3 data={data} />;
      }
      case "4": {
        return <Template4 data={data} />;
      }
      case "5": {
        return <Template5 data={data} />;
      }
      case "6": {
        return <Template6 data={data} />;
      }
      case "7": {
        return <Template7 data={data} />;
      }
      case "8": {
        return <Template8 data={data} />;
      }
      case "9": {
        return <Template9 data={data} />;
      }
      default:
        return;
    }
  };

  return (
    <div>
      <div className={`${styles.padding} update-profile md:max-w-[70%]  px-6`}>
        <div className="">
          <div>
            <Form layout="vertical" onFinish={onFinish} initialValues={data}>
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: `Personal Info`,
                    key: "1",
                    children: <PersonalInfo />,
                  },
                  {
                    label: `Skills and Education`,
                    key: "2",
                    children: <SkillsEducation />,
                  },

                  {
                    label: `Employment History`,
                    key: "3",
                    children: <EmploymentHistory />,
                  },
                  {
                    label: `Websites & Social Links`,
                    key: "4",
                    children: <WebsitesSocialLinks />,
                  },
                  {
                    label: `References And Hobbies`,
                    key: "5",
                    children: <ReferencesNHobbies />,
                  },
                ]}
              />

              <Button
                htmlType="submit"
                className="bg-primary px-5 text-white py-5 flex items-center hover:text-white"
              >
                UPDATE
              </Button>
            </Form>
          </div>
          <>
            <div
              className="btn-body fixed bottom-0 right-0"
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
                    <Button>print</Button>
                  </Link>
                ) : (
                  <Button className="mx-5" onClick={handlePrint}>
                    Print
                  </Button>
                )}
              </div>

              <div className="px-12 h-[100%] bg-white" ref={componentRef}>
                {gettemplate()}
              </div>
            </Modal>
          </>
        </div>
      </div>
      <div
        className="px-12 text-left mx-auto h-[29.7cm] hidden md:block w-[21cm] border-red-700 border-2 bg-gray-100"
        ref={componentRef}
      >
        {gettemplate()}
      </div>
    </div>
  );
};

export default Editor;
