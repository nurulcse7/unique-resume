import React from "react";
import { Link } from "react-router-dom";
const DashboardCv = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="my-4">
        <h1 className="text-5xl mt-4 font-bold">Let's get you a CV!</h1>
        <div className="w-[60%] mx-auto mt-5">
          <p className="text-sm font-semibold">
            There is no Curriculam Vita {"(CV)"} currently associated to you.
            When you create one it will show up here for you to manage.
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/cv-templates"
            className="bg-primary md:text-[15px] text-[12px] uppercase cursor-pointer   text-white  rounded shadow hover:shadow-lg py-1 md:py-2 z-10 px-4 border border-primary hover:border-transparent"
            type="button"
          >
            Create Your CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCv;
