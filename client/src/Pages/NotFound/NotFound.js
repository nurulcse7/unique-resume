import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.svg";
const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <img src={notFound} alt="NotFoundPage" className=" w-3/6" />
        <h3 className="text-primary text-xl">NOT FOUND</h3>
        <Link to="/">
          {" "}
          <button className="bg-primary text-white px-3 py-3 rounded-md">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
