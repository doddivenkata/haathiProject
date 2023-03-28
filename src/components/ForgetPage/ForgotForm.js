import React, { useState } from "react";
import { Card, Button, Form, Input } from "antd";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { CardHeaderBar } from "../../ReUsedComponents/HeaderBar";
import "./ForgotForm.scss";

const ForgotForm = () => {
  const navigate = useNavigate();
  const [IsSucess, SetIsSucess] = useState(true);

  const onFinish = (values) => {
    console.log(values);
    SetIsSucess(!IsSucess);
  };
  return (
    <>
      {IsSucess ? (
        <Card>
          <CardHeaderBar />

          <Form
            layout="vertical"
            autocomplete="off"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              label={<div className="email-label">Enter your email adress</div>}
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <div className="btn-container">
              <Button
                type="button"
                htmlType="submit"
                className="main-btn"
                onClick={() => navigate("./signIn")}
              >
                To main page
              </Button>

              <Button type="button" htmlType="submit" className="send-btn">
                Send my
              </Button>
            </div>
          </Form>
        </Card>
      ) : (
        <Card>
          <CardHeaderBar />
          <p className="greeting-para">
            Thank you! Letter with your password <br /> has been sent to *email
            address
          </p>
          <div className="btn-container">
            <Button
              type="button"
              htmlType="submit"
              className="main-btn"
              onClick={() => navigate("./signIn")}
            >
              To main page
            </Button>

            <Button type="button" htmlType="submit" className="send-btn">
              <a href="https://gmail.com" target="_blank" rel="noreferrer">
                To email <ArrowRightOutlined />
              </a>
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default ForgotForm;
