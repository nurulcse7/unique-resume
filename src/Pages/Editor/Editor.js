import { Button, Form, Tabs } from "antd";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import EmploymentHistory from "../../components/ProfileForm/EmploymentHistory";
import PersonalInfo from "../../components/ProfileForm/PersonalInfo";
import ReferencesNHobbies from "../../components/ProfileForm/ReferencesNHobbies";
import SkillsEducation from "../../components/ProfileForm/SkillsEducation";
import WebsitesSocialLinks from "../../components/ProfileForm/WebsitesSocialLinks";
import Template1 from "../ResumeTemplate/Template1";
import Template2 from "../ResumeTemplate/Template2";
import Template3 from "../ResumeTemplate/Template3";
import Template4 from "../ResumeTemplate/Template4";
import Template5 from "../ResumeTemplate/Template5";
import Template6 from "../ResumeTemplate/Template6";

const Editor = () => {
  const [user, setUser] = useState(null);
  const onFinish = async (values) => {
    console.log(values);
    setUser(values);
  };
  const params = useParams();
  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return <Template1 />;
      }
      case "2": {
        return <Template2 />;
      }
      case "3": {
        return <Template3 />;
      }
      case "13": {
        return <Template4 />;
      }
      case "5": {
        return <Template5 />;
      }
      case "6": {
        return <Template6 />;
      }
      default:
        return;
    }
  };

  return (
    <div className="">
      <div className="">
        <div className="update-profile md:max-w-[70%] px-6">
          <Form layout="vertical" onFinish={onFinish} initialValues={user}>
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
              type="primary"
              className="bg-blue-500 px-5"
            >
              UPDATE
            </Button>
          </Form>
        </div>
        <div className="px-12 h-[100%] bg-white">{gettemplate()}</div>
      </div>
    </div>
  );
};

export default Editor;
