import React from "react";
import { Layout, Typography, Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
const { Title } = Typography;

export const HeaderBar = () => {
  return (
    <Header className="header-nav-container">
      <img
        className="nav-header-haathi-log"
        src="HaathiLog.svg"
        alt="log"
      ></img>
      <h1 className="nav-Header-title">Haathi.ai</h1>
    </Header>
  );
};

export const CardHeaderBar = () => {
  return (
    <>
      <nav className="card-header-nav  ">
        <Title
          style={{ color: "#064B8A" }}
          level={3}
          className="card-nav-header-tittle"
        >
          <Avatar
            size={45}
            src="HaathiLog.svg"
            className="card-nav-header-log"
          ></Avatar>
          Haathi.ai
        </Title>
      </nav>
    </>
  );
};
