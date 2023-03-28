import { useState } from "react";
import { Layout, Avatar, DatePicker } from "antd";
import {SearchOutlined} from '@ant-design/icons';
import './layout.scss'
import Sidenav from "./Sidenav";
import HeaderNav from "./HeaderNav";
import { AskHaathiSearch } from "../chatBot/HaathiChatBot"
import { Footer } from "antd/es/layout/layout";
import { DashboardContextValue } from "../../useContext/ContextValues";
import haathilog from "../../assets/images/haathilogo.png";
import cornerIcon from "../../assets/images/icons/Clip path group.svg";
const { Content } = Layout;
const { RangePicker } = DatePicker;

const Main = ({ children }) => {
  const [open, isOpen] = useState({ logo: true, search: false, chat: false });

  const handleExpand = () => {
    console.log("expanded");
    isOpen({
      ...open,
      logo: !open.logo,
      search: !open.search,
    });
  };

  const dateSerachHandle =(value)=>{
    console.log(value)
  }

  return (
    <>
      <DashboardContextValue.Consumer>
        {(value) => {
          const { connectedCom } = value.dashboardPage;
          return (
            <div className="bg-container">
              <img src={cornerIcon} alt="loading" className="corenerLog" />
              <nav className="bg-header-container">
                <div className="header-div1">
                  <img
                    src='HaathiLog.svg'
                    alt="haathi-text"
                    className="layout-haathi-log"
                  />
                </div>
                <form className="header-div2">
                  <h1 className="nav-form-tittle">From</h1>
                  <RangePicker />
                  <SearchOutlined className="search-icon" onClick={dateSerachHandle}/>
                </form>
              </nav>

              <Layout
                className="layout-container"
                style={{
                  height: "auto",
                }}
              >
                <Sidenav />

                <Layout className="layout-container">
                  <Content
                    style={{
                      margin: "0 16px",
                      paddingTop:'0px',
                    }}
                  >
                    <HeaderNav />

                    <div className="main-container">
                      {open.search && <AskHaathiSearch />}
                      {children}
                    </div>
                  </Content>
                  {!connectedCom && (
                    <Footer className="main-footer-container">
                      {open.logo && (
                        <Avatar
                          src={haathilog}
                          alt="log"
                          onClick={handleExpand}
                        />
                      )}
                    </Footer>
                  )}
                </Layout>
              </Layout>
            </div>
          );
        }}
      </DashboardContextValue.Consumer>
    </>
  );
};
export default Main;
