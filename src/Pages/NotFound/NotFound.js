import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../assets/notFound.svg";
const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {" "}
        <img src={notFound} alt="NotFoundPage" className=" w-3/6" />
<<<<<<< HEAD
=======
        <h3 className="text-primary text-xl">NOT FOUND</h3>
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
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
