import { Button, Form, Tabs } from "antd";
import React from "react";
import { useState } from "react";
import PersonalInfo from "../../components/ProfileForm/PersonalInfo";
import SkillsEducation from "../../components/ProfileForm/SkillsEducation";

const Editor = () => {
  const [user, setUser] = useState(null);
  const onFinish = async (values) => {
    console.log(values);
    setUser(values);
  };
  // useEffect(() => {
  //   getUserDetaile();
  // }, []);

  return (
    <div>
      <>
        <div className="update-profile max-w-[90%] mx-auto">
          <h4>
            <b>Update Profile</b>
          </h4>
          <hr />
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
                // {
                //   label: `Experience or Projects`,
                //   key: "3",
                //   children: <ExperienceProjects />,
                // },
                // {
                //   label: `Additional Info`,
                //   key: "4",
                //   children: <Address />,
                // },
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
      </>
    </div>
  );
};

export default Editor;
