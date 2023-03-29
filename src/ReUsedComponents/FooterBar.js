import { Footer } from "antd/es/layout/layout";
import React from "react";

export const SquareBoxs = () => {
  return (
    <div className="footer-nav">
      <div className="box" id="box1"></div>
      <div className="box" id="box2"></div>
      <div className="box" id="box3"></div>
    </div>
  );
};

export const FooterBar = () => {
  return (
    <>
      <Footer className="footer-nav">
        <div className="box" id="box1"></div>
        <div className="box" id="box2"></div>
        <div className="box" id="box3"></div>
      </Footer>
    </>
  );
};
