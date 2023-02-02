import React from "react";
import Lottie from "lottie-react";
import imgData from "./success.json";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/action/user";
const Success = () => {
  const dispatch = useDispatch();
  const role = {
    role: "pro",
  };

  useEffect(() => {
    dispatch(updateProfile(role));
  }, [dispatch]);
  return (
    <div className="text-center min-h-[80vh]">
      <Lottie animationData={imgData} className="h-[250px]" loop={true} />
      <p className="text-green-500 text-2xl py-3">Thanks for Subscribe. </p>
      <div className="flex justify-center items-center gap-3">
        <Link
          to="/dashboard"
          className=" p-3 bg-primary text-white rounded-md btn-outline "
        >
          back to dashboard
        </Link>
      </div>
    </div>
  );
};

export default Success;
