import React from "react";
import { useState } from "react";
import { CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { Progress } from "antd";

const CVPageLayout = () => {
  const [mainData, setMainData] = useState("");
  const [fileList, setFileList] = useState([]);
  return (
    <div>
      <div className="book mt-20">
        <div className="page">
          <div className="subpage ">
            <div className="flex justify-between">
              <div className="text-left">
                <h1 className="text-2xl font-bold">
                  {mainData?.fname} {mainData?.lname}{" "}
                </h1>
                <p className="text-xl"> {mainData?.title}</p>
                {mainData?.email ? (
                  <>
                    <p>Email : {mainData?.email}</p>
                  </>
                ) : (
                  <></>
                )}
                {mainData?.phone ? (
                  <>
                    {" "}
                    <p>Phone : {mainData?.phone}</p>
                  </>
                ) : (
                  <></>
                )}
                {mainData?.address ? (
                  <>
                    <p>
                      Address : {mainData?.address}, {mainData?.city},{" "}
                      {mainData?.country}
                    </p>
                  </>
                ) : (
                  <></>
                )}

                <div className="mt-5">
                  {mainData?.socialLabel ? (
                    <>
                      <a
                        className="text-blue-400 underline "
                        href={mainData?.socialLink}
                      >
                        {" "}
                        {mainData?.socialLabel}
                      </a>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {fileList[0]?.thumbUrl ? (
                <>
                  {" "}
                  <div className="mr-5">
                    <img
                      width="140"
                      height="190"
                      src={fileList[0]?.thumbUrl}
                      alt=""
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="my-5">
              {mainData?.summary ? (
                <>
                  <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                    CAREER OBJECTIVE
                  </h1>
                  <p className="text-sm my-2 text-justify">
                    {mainData?.summary}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="my-5">
              {mainData?.jobTitle ? (
                <>
                  <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                    WORKING EXPERENCE
                  </h1>
                  <p className="text-lg  font-semibold  my-2 text-justify">
                    {mainData?.jobCompany}
                  </p>
                  <p className="text-sm my-2 text-justify">
                    {mainData?.jobTitle}
                  </p>
                  <p className="text-sm my-2 text-justify flex items-center">
                    <span className=" flex gap-2 items-center justify-start">
                      <CalendarOutlined /> {mainData?.jobStart} to{" "}
                      {mainData?.jobEnd}
                    </span>
                    <span className="ml-5 flex gap-2 items-center justify-start">
                      {" "}
                      <EnvironmentOutlined /> {mainData?.jobCity}
                    </span>
                  </p>

                  <p className="text-sm my-2 text-justify">
                    {mainData?.jobDescription}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="my-5">
              {mainData?.schoolTitle ? (
                <>
                  <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                    EDUCATION
                  </h1>
                  <p className="text-lg  font-semibold  my-2 text-justify">
                    {mainData?.schoolTitle}
                  </p>
                  <p className="text-sm my-2 text-justify">
                    {mainData?.schoolDegree}
                  </p>
                  <p className="text-sm my-2 text-justify flex items-center">
                    <span className=" flex gap-2 items-center justify-start">
                      <CalendarOutlined /> {mainData?.schoolStart} to{" "}
                      {mainData?.schoolEnd}
                    </span>
                    <span className="ml-5 flex gap-2 items-center justify-start">
                      {" "}
                      <EnvironmentOutlined /> {mainData?.schoolCity}
                    </span>
                  </p>

                  <p className="text-sm my-2 text-justify">
                    {mainData?.schoolDescription}
                  </p>
                </>
              ) : (
                <></>
              )}
            </div>
            {/* Langualge */}
            <div className="my-5">
              <div>
                {mainData?.languageName ? (
                  <>
                    <h1 className="text-xl border-b-4 border-gray-500 font-bold ">
                      Language
                    </h1>
                    <div className="grid grid-cols-3 gap-4 ">
                      <p className="text-lg  font-semibold  my-2 text-justify">
                        {mainData?.languageName}
                      </p>
                      <div className="text-sm my-2 text-justify">
                        <p> {mainData?.languageLevel}</p>

                        {mainData?.languageLevel === "Native speaker" ? (
                          <>
                            <Progress percent={30} />
                          </>
                        ) : (
                          <></>
                        )}
                        {mainData?.languageLevel === "Highly proficient" ? (
                          <>
                            <Progress percent={75} />
                          </>
                        ) : (
                          <></>
                        )}
                        {mainData?.languageLevel === "Very good command" ? (
                          <>
                            <Progress percent={100} />
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* Add Section */}
          </div>
        </div>
        {/* <div className="page">
              <div className="subpage">Page 2/2</div>
            </div> */}
      </div>
    </div>
  );
};

export default CVPageLayout;
