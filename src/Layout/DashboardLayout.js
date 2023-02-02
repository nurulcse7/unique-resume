import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { iaAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div>
      {/* Header */}
      <Navbar iaAuthenticated={iaAuthenticated} user={user} />
      {/* <!-- component --> */}
      <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4">
        <div>
          <Sidebar></Sidebar>
        </div>

        <div className="col-span-3 bg-[#f3f4f6] ">
          <Outlet></Outlet>
        </div>
      </div>

      {/* Footer */}

      <Footer />
    </div>
  );
};

export default DashboardLayout;
