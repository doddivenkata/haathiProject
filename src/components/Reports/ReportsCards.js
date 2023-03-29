import React, { useState } from "react";
import { Col, Card } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { SquareBoxs } from "../../ReUsedComponents/FooterBar";
import "./reportsCard.css";

const ReportCards = (props) => {
  const [statusContainer, setStatusContainer] = useState("visible");
  const [hidden, setHidden] = useState(true);
  const { color, title, Status, image } = props.items;

  const StatusIcon = () => {
    if (Status === "Available") {
      return <CheckOutlined style={{ color: "green" }} />;
    } else if (Status === "Lack of data") {
      return <CloseOutlined style={{ color: "red" }} />;
    } else {
      setStatusContainer("hidden");
      setHidden(false);
    }
  };

  return (
    <div>
      <Col className="reports-Card">
        <div className="report-card-container" style={{ background: color }}>
          <h1 className="card-title">{title}</h1>
          <hr className="h-line" />
          <div
            style={{
              marginTop: "4px",
              display: "flex",
              visibility: statusContainer,
            }}
          >
            <StatusIcon />
            <span className="description-text">{Status}</span>
          </div>
          {hidden && (
            <>
            <div className="reports-img-container">
              <img src={image} alt="Reporticon1" className="reports-img" />
            </div>
            </>
          )}
          {!hidden && (
            <div className="reports-container">
              <p className="description-text text-center">{Status}</p>
              <div className="reports-dots">
                <div className="reports-box" id="box1"></div>
                <div className="reports-box" id="box2"></div>
                <div className="reports-box" id="box3"></div>
              </div>
            </div>
          )}
        </div>
      </Col>
    </div>
  );
};

export default ReportCards;
