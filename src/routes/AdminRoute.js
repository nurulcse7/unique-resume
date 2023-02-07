import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  if (user.role === "pro") {
    return children;
  }

  return (
    <Navigate to="/dashboard" state={{ from: location }} replace></Navigate>
  );
};

export default AdminRoute;
