import React from "react";
import { Layout, } from "antd";
import { HeaderBar } from "../ReUsedComponents/HeaderBar";
import {FooterBar} from "../ReUsedComponents/FooterBar";
import SignInform from "../components/SignIn/SignInform";
import SignInImages from "../components/SignIn/SignInImages";
const { Content } = Layout;

const SignIn = () => {
  return (
    <Layout className="SignIn-Container">
      <HeaderBar />
      <Content className="singIn-Content">
        <SignInform />
        <SignInImages />
      </Content>
      <FooterBar />
    </Layout>
  );
};

export default SignIn;
