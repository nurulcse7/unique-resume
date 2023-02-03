import { Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Main = () => {
  const { iaAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div>
      <Navbar iaAuthenticated={iaAuthenticated} user={user} />
      <Outlet />
      <Divider />
      <Footer />
      <MessengerCustomerChat
        pageId='109422248585811'
        appId='1552485545263244'
        //   htmlRef="<REF_STRING>"
      />
    </div>
  );
};

export default Main;
