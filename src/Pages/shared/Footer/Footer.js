import React from "react";

import { Row, Col } from "antd";
import Link from "antd/es/typography/Link";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h2 className="text-3xl">Resume Logo</h2>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center ">
                <h1 className="font-bold text-xl text-gray-400">SERVICES</h1>
                <div className="text-lg text-black">
                  <a to="">Branding</a>
                </div>
                <div className="text-lg">
                  <a to="#"> Design</a>
                </div>
                <div className="text-lg">
                  <a to="#"> Marketing</a>
                </div>
              </div>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <div className="footer-center">
                <h1 className="font-bold text-xl text-gray-400">COMPANY</h1>
                <div className="text-lg">
                  <a>About us</a>
                </div>
                <div className="text-lg">
                  <a to="#">Contact</a>
                </div>
                <div className="text-lg">
                  <a to="#">Job</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar mt-10">
          Ant Design ©2023 Created by Ant UED
          <Link to="#">AFX</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
