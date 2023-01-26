import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
=======
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
>>>>>>> bed1e5d71a3687c46b18b4254a5cabc38e8d141e
    </div>
  );
};

export default Main;
