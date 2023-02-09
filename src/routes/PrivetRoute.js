import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const PrivetRoute = ({ children }) => {
  const { loading, iaAuthenticated, role } = useSelector((state) => state.user);
  console.log(role);
  const location = useLocation();
  if (loading) return <Loader />;
  if (iaAuthenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
