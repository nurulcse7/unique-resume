import React from "react";
import { Link } from "react-router-dom";
import dashboardResume from "../../assets/dashboardResume.webp";
const DashboardResume = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className="my-4">
          <h1 className="text-5xl mt-4 font-bold">Let's get you a resume!</h1>
          <div className="w-[60%] mx-auto mt-5">
            <p className="text-sm font-semibold">
              There is no resume currently associated to you. When you create
              one it will show up here for you to manage.
            </p>
          </div>

          <div className="mt-6">
            <Link
              to="/resume-templates"
              className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
              type="button"
            >
              Build Your Resume
            </Link>
          </div>

          <div className="mt-4">
            <img
              className="w-96 mx-auto"
              src={dashboardResume}
              alt="dasboardResume"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardResume;
