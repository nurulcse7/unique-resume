import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
const Main = () => {
  const { iaAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar iaAuthenticated={iaAuthenticated} user={user} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
