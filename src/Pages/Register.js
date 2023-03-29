import React from "react";
import { Layout } from "antd";
import { HeaderBar } from "../ReUsedComponents/HeaderBar";
import {FooterBar} from "../ReUsedComponents/FooterBar";
import RegisterForm from "../components/Register/RegisterForm";
import backgroundImg from "../assets/images/icons/Clip path group.svg";

const { Content } = Layout;

const Register = () => {
  return (
    <Layout className="container-signup">
      <HeaderBar />
      <img
        src={backgroundImg}
        alt="background img"
        className="register-background-img"
      />
      <Content className="reg-bg-container">
        <RegisterForm />
      </Content>
      <FooterBar />
    </Layout>
  );
};

export default Register;
