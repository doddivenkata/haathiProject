import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Input, Dropdown, List, Avatar } from "antd";
import profilelog from "../../assets/images/icons/profile.svg";
import searchLog from "../../assets/images/icons/Clock.svg";

import logoutLog from "../../assets/images/icons/logout.svg";
import settingsLog from "../../assets/images/icons/settings.svg";

const HeaderNav = () => {
  let navigate = useNavigate();

  const data = [
    {
      title: <h1 className="dropdown_titles margin_add ">Signed in as</h1>,
      description: <p className="dropdown_titles color">userName</p>,
      avatar: (
        <img src={profilelog} className="dropdown-profile-log" alt="icon" />
      ),
    },
    {
      title: (
        <NavLink to="/settings">
          <p className="dropdown_titles">Settings</p>
        </NavLink>
      ),
      avatar: <img src={settingsLog} alt="icon" />,
    },
    {
      title: (
        <p
          className="dropdown_titles"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/signin");
          }}
        >
          logout
        </p>
      ),
      avatar: <img src={logoutLog} alt="icon" />,
    },
  ];

  const options = (
    <List
      style={{
        backgroundColor: "#ffffff",
        padding: "2px",
        margin: "0px",
        borderRadius: "10px",
        width: "220px",
        borderWidth: "15px",
      }}
      min-width="100%"
      className="header-notifications-dropdown "
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            style={{ paddingLeft: "1px" }}
            avatar={
              <Avatar
                style={{ backgroundColor: "transparent" }}
                src={item.avatar}
              />
            }
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
  return (
    <div className="search-header">
      <>
        <Input
          style={{ height: "60px" }}
          prefix={
            <img src={searchLog} alt="search-log" width="25px" height="25px" />
          }
          placeholder="Basic usage"
          className="search-input"
        />
      </>
      <Dropdown
        overlay={options}
        trigger={["click"]}
        dropdownRender={(menu) => (
          <div className="dropdown-content">{menu}</div>
        )}
      >
        <a href="##">
          <img src={profilelog} alt="profile log" className="profile-log" />
        </a>
      </Dropdown>
    </div>
  );
};

export default HeaderNav;
