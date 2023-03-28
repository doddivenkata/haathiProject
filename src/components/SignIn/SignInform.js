import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Card, Button, Typography, Form, Input, Switch, Layout } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import "./SignInForm.scss";
import FetchData from "../../utils/FetchData";
const { Title } = Typography;
const { Content } = Layout;

const SignInform = () => {
  let navigate = useNavigate();
  const [rememberBtn, setRememberBtn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signInResponse, setSignresponse] = useState("");

  function onChange(checked) {
    setRememberBtn(checked);
  }

  const onFinish = async (values) => {
    console.log(values);
    setLoading(true);
    const body = JSON.stringify({
      userEmail: values?.email,
      userPassword: values?.password,
    });
    if (values?.email && values?.password) {
      console.log("Api call");
      const signInAPI = await FetchData(
        process.env.REACT_APP_LOCAL_API_KEY + "/login",
        "POST",
        null,
        body
      );
      // console.log({ signInAPI }) to print response data value;
      setSignresponse(signInAPI.responseData.error);
      if (signInAPI?.responseData?.token) {
        localStorage.setItem("token", signInAPI?.responseData?.token);
        localStorage.setItem(
          "userdetails",
          JSON.stringify(signInAPI?.responseData?.userdetails)
        );
        navigate("/signInWelcome");
      }
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/signInWelcome");
    }
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card>
        <nav className="nav-header ">
          <h1 className="signIn-tittle">Sign In </h1>
          <div className="square-box-containers">
            <div className="box" id="box1"></div>
            <div className="box" id="box2"></div>
            <div className="box" id="box3"></div>
          </div>
        </nav>
        <Title className="font-regular text-muted" level={5}>
          Enter your email & <br /> password to sign in!
        </Title>
        <Content className="SignIn-content">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
            className="row-col"
          >
            <Form.Item
              className="username"
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="natalia.kumpanenko@sparrowhawk.se" />
            </Form.Item>

            <Form.Item
              className="username"
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            {signInResponse && (
              <div className="resp-error-msg">{signInResponse}</div>
            )}

            <Form.Item
              name="remember"
              className="aligin-center"
              valuePropName="checked"
            >
              <Switch
                defaultChecked
                onChange={onChange}
                style={{ backgroundColor: rememberBtn ? "#78D391" : "#F1F0F0" }}
              />
              Remember me
            </Form.Item>
            <p className="forgot-para">
              Forgot your password? Click
              <span to="/forget" className="text-dark font-bold">
                <Link to="/forget">here.</Link>
              </span>
            </p>
            <Form.Item>
              <Button
                loading={loading}
                type="primary"
                htmlType="submit"
                id="SignIn-button"
              >
                SIGN IN
              </Button>
            </Form.Item>

            <p className="register-para forgot-para">
              Are you not registered yet? Click
              <span>
                <Link to="/register">here</Link>
              </span>
              to register now.
            </p>
          </Form>
        </Content>
      </Card>
    </>
  );
};

export default SignInform;
