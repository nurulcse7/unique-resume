import React from "react";
import {
  ApartmentOutlined,
  AuditOutlined,
  ContactsOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EmployerDetails from "../EmployerDetails/EmployerDetails";
import LetterDetails from "../LetterDetails/LetterDetails";

const CoverEditor = () => {
  return (
    <div>
      <section className="">
        <div className="px-20  flex md:flex-row flex-col w-full text-left bg-gray-100   justify-between items-top ">
          <div className="mb-20  max-w-[500px]  flex-1">
            <div className="mr-5 mt-20">
              <PersonalDetails />
              <EmployerDetails />
              <LetterDetails />
            </div>
          </div>
          <div className="flex-1 fixed max-h-[800px] p-6 w-[50%] bg-gray-700 flex-nowrap  top-0 bottom-0 right-0 ">
            <div className="absolute">
              {/* <div className={`${styles.padding}  `}>{gettemplate()}</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverEditor;
