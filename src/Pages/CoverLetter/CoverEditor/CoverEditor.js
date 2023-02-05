import React, { useRef, useState } from "react";

import PersonalDetails from "../PersonalDetails/PersonalDetails";
import EmployerDetails from "../EmployerDetails/EmployerDetails";
import LetterDetails from "../LetterDetails/LetterDetails";
import { Button, Modal } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Template1 from "../../ResumeTemplate/Template1";
import Template2 from "../../ResumeTemplate/Template2";
import Template3 from "../../ResumeTemplate/Template3";
import { useReactToPrint } from "react-to-print";
import styles from "../../../style";

const CoverEditor = () => {
  const [open, setOpen] = useState(false);
  const componentRef = useRef();
  const navigate = useNavigate();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
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
    <div>
      <section className={`${styles.padding}  bg-gray-100 `}>
        <div className="w-full text-left  justify-between items-top ">
          <div className=" ">
            <div className="">
              <PersonalDetails />
              <EmployerDetails />
              <LetterDetails />
            </div>
            <button
              type="submit"
              className="inline-block my-5 px-5 py-3 border-2 hover:bg-primary bg-secondary border-white text-white font-medium text-sm leading-snug uppercase rounded-md  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Submit
            </button>
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
                <Button className="mx-5" onClick={handlePrint}>
                  Print
                </Button>
              </div>
              <div className="px-12 h-[100%] bg-white" ref={componentRef}>
                {gettemplate()}
              </div>
            </Modal>
          </>
        </div>
      </section>
    </div>
  );
};

export default CoverEditor;
