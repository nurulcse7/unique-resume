import React, { useEffect } from "react";
import { Button, Form, message, Modal, Tabs } from "antd";
import { useParams, useNavigate, Link } from "react-router-dom";
import PersonalInfo from "../../components/CVinformation/PersonalInfo";
import SkillsEducation from "../../components/CVinformation/SkillsEducation";
import ExperienceProjects from "../../components/CVinformation/Exprerience";
import Address from "../../components/CVinformation/Address";
import axiosInstance from "../../utils/axiosInstance.js";
import { useDispatch, useSelector } from "react-redux";
import { cvTemplate } from "../../redux/action/data";
import { useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CvTemplate1 from "../../components/CvTemplates/Cvtemplate1";
import Cvtemplate2 from "../../components/CvTemplates/Cvtemplate2";
import styles from "../../style";
import Cvtemplate3 from "../../components/CvTemplates/Cvtemplate3";
import Cvtemplate4 from "../../components/CvTemplates/Cvtemplate4";
import Cvtemplate5 from "../../components/CvTemplates/Cvtemplate5";
import Cvtemplate6 from "../../components/CvTemplates/Cvtemplate6";
import Cvtemplate7 from "../../components/CvTemplates/Cvtemplate7";

function CVEditor() {
  const { data } = useSelector((state) => state.cvdata);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const componentRef = useRef();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const params = useParams();
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <CvTemplate1 data={data} />;
      }
      case "2": {
        return <Cvtemplate2 data={data} />;
      }
      case "3": {
        return <Cvtemplate3 data={data} />;
      }
      case "4": {
        return <Cvtemplate4 data={data} />;
      }
      case "5": {
        return <Cvtemplate5 data={data} />;
      }
      case "6": {
        return <Cvtemplate6 data={data} />;
      }
      case "7": {
        return <Cvtemplate7 data={data} />;
      }

      default:
        return;
    }
  };
  const onFinish = async (values) => {
    await axiosInstance.post("/api/cvinformation", values, {
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    message.success("Update successfully");
    console.log(values);
  };

  useEffect(() => {
    dispatch(cvTemplate());
  }, [dispatch, data]);
  return (
    <div className="relative">
      <div
        className={`${styles.padding} update-profile  md:max-w-[70%] w-full `}
      >
        <div>
          <div>
            <Form
              layout="vertical"
              onFinish={onFinish}
              onChange={onFinish}
              initialValues={data}
            >
              <Tabs
                defaultActiveKey="1"
                items={[
                  {
                    label: `Personal Info`,
                    key: "1",
                    children: <PersonalInfo info={data} />,
                  },
                  {
                    label: `Skills and Education`,
                    key: "2",
                    children: <SkillsEducation />,
                  },
                  {
                    label: `Experience or Projects`,
                    key: "3",
                    children: <ExperienceProjects />,
                  },
                  {
                    label: `Additional Info`,
                    key: "4",
                    children: <Address />,
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
      {/* <div
        className="px-12 text-left mx-auto h-[29.7cm] hidden md:block w-[21cm] border-red-700 border-2 bg-gray-100"
        ref={componentRef}
      >
        <p>{gettemplate()}</p>
      </div> */}
    </div>
  );
}

export default CVEditor;
