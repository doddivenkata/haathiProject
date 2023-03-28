import React from "react";
import { Layout } from "antd";
import { HeaderBar } from "../ReUsedComponents/HeaderBar";
import backgroundImg from "../assets/images/icons/Clip path group.svg";
import FooterBar from "../ReUsedComponents/FooterBar";
import ForgotForm from "../components/ForgetPage/ForgotForm";
const { Content } = Layout;

const Forgot = () => {
  return (
    <Layout className="container-signup forgot-container">
      <HeaderBar />
      <img
        src={backgroundImg}
        alt="background img"
        className="register-background-img"
      />
      <Content className="reg-bg-container">
        <ForgotForm />
      </Content>
      <FooterBar />
    </Layout>
  );
};

export default Forgot;
