import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  DashboardOutlined,
  BarChartOutlined,
  TableOutlined,
  DatabaseOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import "../../assets/styles/main.css";
import icon from "../../assets/images/icons/Icon_uppload.svg";
import siderIcon from '../../assets/images/circle 1.png'
// import squaresIcon from "../../assets/images/Frame.svg";

import { Layout, Menu, Space } from "antd";
const { Sider } = Layout;

const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(false);

  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label: (
        <NavLink to={key}>
          <span class="sider-main-titles">{label}</span>
        </NavLink>
      ),
    };
  }
  const itemsTop = [
    getItem(
      "Dashboards",
      "/dashboard",
      collapsed ? <DashboardOutlined /> : <img src={icon} alt="icon" />
    ),
    getItem(
      "Reports",
      "/reports",
      collapsed ? <BarChartOutlined /> : <img src={icon} alt="icon" />
    ),
    getItem(
      "Data",
      "/data",
      collapsed ? <TableOutlined /> : <img src={icon} alt="icon" />
    ),
    // getItem(
    //   "Sources",
    //   "/source",
    //   collapsed ? <DatabaseOutlined /> : <img src={icon} alt="icon" />
    // ),
    getItem(
      "Trash",
      "/trash",
      collapsed ? <DeleteOutlined /> : <img src={icon} alt="icon" />
    ),
    // getItem(
    //   "Settings",
    //   "/settings",
    //   collapsed ? <SettingOutlined /> : <img src={icon} alt="icon" />
    // ),
  ];

  return (
    <Sider
      width={257}
      style={{ borderTopRightRadius: "20px", width: "60vh" ,height:'auto'}}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className ='sider-header-container' style={{ height: 32, margin: 16}} >
        {!collapsed && (<>
        <img src={siderIcon} alt ='icon'/>
        <h1 class ="sider-header-title">Sparrowhawk Team</h1>
        </>)}
        </div>
        
       
      <Menu
        theme="light"
        style={{ background: "transparent", marginRight: "10px" }}
        defaultSelectedKeys={["/dashboard"]}
        mode="inline"
        items={itemsTop}
      />
    </Sider>
  );
};

export default Sidenav;
