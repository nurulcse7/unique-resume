import React, { useEffect, useState } from "react";

import "../CV/CvTemplates.css";
import {
  ApartmentOutlined,
  AuditOutlined,
  ContactsOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import PersonalInformation from "../CV/PersonalInformation/PersonalInformation";
import ProfessionalSummary from "../CV/ProfessionalSummary/ProfessionalSummary";
import EmploymentHistory from "../CV/EmploymentHistory/EmploymentHistory";
import EducationHistory from "../CV/EducationHistory/EducationHistory";
import WebsiteAndSocialLinks from "../CV/WebsiteAndSocialLinks/WebsiteAndSocialLinks";
import Skills from "../CV/Skills/Skills";
import Hobbies from "../CV/Hobbies/Hobbies";
import Languages from "../CV/Languages/Languages";
import References from "../CV/References/References";
import InternShips from "../CV/InternShips/InternShips";
import Template4 from "./Template4";

const CreateRessume = () => {
  const [personalInformation, setPersonalInformation] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const [employmentHistory, setEmploymentHistory] = useState("");
  const [educationHistory, setEducationHistory] = useState("");
  const [websiteAndSocialLinks, setWebsiteAndSocialLinks] = useState("");
  const [skills, setSkills] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [courses, setCourses] = useState("");
  const [internShips, setInternShips] = useState("");
  const [languages, setLanguages] = useState("");
  const [references, setReferences] = useState("");
  const [fileList, setFileList] = useState([]);
  return (
    <section className="">
      <Row className="px-20  w-full text-left bg-gray-100  flex justify-between items-top">
        <Col span={12} className="mb-20">
          <div className="mr-5 mt-20">
            <PersonalInformation
              setPersonalInformation={setPersonalInformation}
              fileList={fileList}
              setFileList={setFileList}
            />
            {/* Professional Summary */}
            <ProfessionalSummary
              setProfessionalSummary={setProfessionalSummary}
            />
            {/* Employment History */}
            <EmploymentHistory
              employmentHistory={employmentHistory}
              setEmploymentHistory={setEmploymentHistory}
            />
            {/* Education */}
            <EducationHistory
              educationHistory={educationHistory}
              setEducationHistory={setEducationHistory}
            />
            {/* Websites & Social Links */}
            <WebsiteAndSocialLinks
              websiteAndSocialLinks={websiteAndSocialLinks}
              setWebsiteAndSocialLinks={setWebsiteAndSocialLinks}
            />
            {/* Skill */}
            <Skills skills={skills} setSkills={setSkills} />

            {/* hobbiesDetails */}
            <Hobbies setHobbies={setHobbies} />

            {/* Langulage */}
            <Languages languages={languages} setLanguages={setLanguages} />
            {/* References */}
            <References references={references} setReferences={setReferences} />
            {/* Internships */}
            <InternShips
              internShips={internShips}
              setInternShips={setInternShips}
            />

            {/* add section */}
            <section>
              <h1 className="text-3xl font-semibold">Add Section</h1>
              <div className="form-control mt-5 w-full ">
                <p className="label text-gray-400 mb-3 text-base "></p>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <h3
                  onClick={() =>
                    (document.getElementById("laguageTitle").style.display =
                      "none")(
                      (document.getElementById("laguageDetails").style.display =
                        "block")
                    )
                  }
                  id="laguageTitle"
                  className=" font-semibold "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <AuditOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Language
                  </span>
                </h3>
                <h3
                  id="InternshipsTitle"
                  onClick={() =>
                    (document.getElementById("InternshipsTitle").style.display =
                      "none"(
                        (document.getElementById(
                          "internshipsDetails"
                        ).style.display = "block")
                      ))
                  }
                  className=" font-semibold items-center "
                >
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <ApartmentOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Internships
                  </span>
                </h3>
                <h3
                  onClick={() =>
                    (document.getElementById("hobbiesTitle").style.display =
                      "none")(
                      (document.getElementById("hobbiesDetails").style.display =
                        "block")
                    )
                  }
                  id="hobbiesTitle"
                  className=" font-semibold items-center "
                >
                  {" "}
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <CrownOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    Hobbies
                  </span>
                </h3>
                <h3
                  id="referenceTitle"
                  onClick={() =>
                    (document.getElementById("referenceTitle").style.display =
                      "none")(
                      (document.getElementById(
                        "referenceDetails"
                      ).style.display = "block")
                    )
                  }
                  className=" font-semibold items-center "
                >
                  <span className="text-4xl text-blue-400 hover:text-blue-900">
                    <ContactsOutlined />
                  </span>
                  <span className="ml-3 text-xl hover:text-blue-400">
                    References
                  </span>
                </h3>
              </div>
            </section>

            <button
              type="submit"
              className="inline-block my-5 px-5 py-3 border-2 hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </Col>
        <Col span={12}>
          {/* <CVPageLayout />*/}
          <Template4 />
        </Col>
      </Row>
    </section>
  );
};

export default CreateRessume;
