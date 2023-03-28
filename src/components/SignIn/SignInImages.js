import React from "react";
import {
  MessageOutlined,
  RetweetOutlined,
  HeartOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "./SignInImages.css";
import SystemLog from "../../assets/images/icons/systemImg.svg";

const SignInImages = () => {
  return (
    <div className="img-container">
      <div
        className="report-card1"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <img src="HaathiLog.svg" alt="log" className="reports-haathi-log" />

        <h3>Data insights, reimagined!</h3>

        <h6>#dataanalysis</h6>
        <h6>#haathi.in</h6>
      </div>
      <div
        className="report-card1 report-card2"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <img src="HaathiLog.svg" alt="log" className="reports-haathi-log" />
        <h3>Wow! Impressive!!</h3>

        <h6>#haathi.ai</h6>
        <h5>8:30 17/01/23</h5>
        <p className="span-content">
          <span>
            <MessageOutlined />
          </span>
          246{" "}
          <span>
            <RetweetOutlined /> 56
          </span>
          <span>
            <HeartOutlined /> 567
          </span>
          <span>
            <DownloadOutlined /> 5678
          </span>
        </p>
      </div>
      <div
        className="report-card1 report-card3"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <img src="HaathiLog.svg" alt="log" className="reports-haathi-log" />
        <h3 className="card3-title">All you need is a Shopify-</h3>
        <h3 className="card3-title">
          account! <span className ='card-3-content'>#dataanalysis</span>
        </h3>
        <p className="span-content">
          <span>
            <MessageOutlined />
          </span>
          232
          <span>
            <RetweetOutlined /> 98
          </span>
          <span>
            <HeartOutlined /> 657
          </span>
          <span>
            <DownloadOutlined /> 7678
          </span>
        </p>
      </div>
      <img src={SystemLog} alt="icon" className="SystemLog" />
    </div>
  );
};

export default SignInImages;
