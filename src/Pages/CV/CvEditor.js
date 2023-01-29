import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CvTemplates.css";
import {
  ApartmentOutlined,
  AuditOutlined,
  ContactsOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import axiosInstance from "../../utils/axiosInstance";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ProfessionalSummary from "./ProfessionalSummary/ProfessionalSummary";
import EmploymentHistory from "./EmploymentHistory/EmploymentHistory";
import EducationHistory from "./EducationHistory/EducationHistory";
import WebsiteAndSocialLinks from "./WebsiteAndSocialLinks/WebsiteAndSocialLinks";
import Skills from "./Skills/Skills";
import Hobbies from "./Hobbies/Hobbies";
import Languages from "./Languages/Languages";
import References from "./References/References";
import InternShips from "./InternShips/InternShips";
import Template4 from "../ResumeTemplate/Template4";
import styles from "../../style";
import { useDispatch, useSelector } from "react-redux";
import { cvTemplate } from "../../redux/action/data";
import Template3 from "../ResumeTemplate/Template3";
import Template2 from "../ResumeTemplate/Template2";
import Template1 from "../ResumeTemplate/Template1";

// .......................................

// .......................................content-none

const CvTemplates = () => {
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
  const { user } = useSelector((state) => state.user);
  const TotalData = [
    {
      email: user?.email,
      personalInformation: [personalInformation],

      photoUrl: [fileList[0]?.thumbUrl],

      professionalSummary: [professionalSummary],

      employmentHistory: [employmentHistory],

      educationHistory: [educationHistory],

      websiteAndSocialLinks: [websiteAndSocialLinks],

      skills: [skills],

      hobbies: [hobbies],

      courses: [courses],

      internShips: [internShips],

      languages: [languages],

      references: [references],
    },
  ];
  const dispatch = useDispatch();
  // console.log("Totaldata", TotalData);

  // const [mainData, setMainData] = useState("");
  const [data, setData] = useState(null);
  if (TotalData) {
    localStorage.setItem("userInfo", JSON.stringify(TotalData));
  }
  console.log(TotalData);
  useEffect(() => {
    const userData = localStorage.getItem("userInfo");
    dispatch(cvTemplate());
    setData(userData);
  }, [dispatch]);

  const userSubmit = async () => {
    const { data } = await axiosInstance.post(`/api/cvinformation`, TotalData, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
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
      default:
        return;
    }
  };

  return (
    <section className="">
      <div className="px-20  flex md:flex-row flex-col w-full text-left bg-gray-100   justify-between items-top ">
        <div className="mb-20  max-w-[500px]  flex-1">
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
              onClick={userSubmit}
              className="inline-block my-5 px-5 py-3 border-2 hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex-1 fixed max-h-[800px] p-6 w-[50%] bg-gray-700 flex-nowrap  top-0 bottom-0 right-0 ">
          <div className="absolute">
            <div className={`${styles.padding}  `}>{gettemplate()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CvTemplates;
