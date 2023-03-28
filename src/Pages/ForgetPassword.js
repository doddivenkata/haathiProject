import React, { useState } from "react";
import {
  Card,
  Avatar,
  Typography,
  Button,
  Form,
  Input,
  Checkbox,
  Layout,
  Upload,
} from "antd";
import "../assets/styles/main.css";
import { ArrowRightOutlined} from "@ant-design/icons";
import hlogo from "../assets/images/haathilogo.png";
import { useNavigate,Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const Forget = () => {
  const Navigate = useNavigate();
  const [sucess, isSucess] = useState(true);

  const onFinish = (values) => {
    console.log("Success:", values);
    isSucess(false);
  };
  const mainPage = () => {
    Navigate("/register");
  };
  return (
    <Layout className="container-signup">
      <Header className="haathi-logo-header">
        <Title level={3}>
          <Avatar size={45} style={{ marginRight: "6px" }} src={hlogo}></Avatar>
          Haathi.ai
        </Title>
      </Header>
      <Content className="reg-bg-container">
        <Card
          style={{ height: "297px", width: "556px", borderRadius: "25px" }}
          bodyStyle={{ backgroundColor: "#ffff" }}
          title={
            <Header className="haathi-logo-header form-header">
              <Avatar
                size={45}
                style={{ backgroundColor: "#D9D9D9", marginRight: "6px" }}
                src={hlogo}
              ></Avatar>
              <Title align="center" level={3} style={{ color: "#064B8A" }}>
                Haathi.ai
              </Title>
            </Header>
          }
          bordered="false"
        >
          <div className="text">
            {sucess ? (
              <Form
                layout="vertical"
                autocomplete="off"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  label={
                    <label
                      style={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "24px",
                        lineHeight: "33px",
                        color: " #064B8A",
                        marginLeft: "150px",
                      }}
                    >
                      Enter your email address
                    </label>
                  }
                  name="firstname"
                  rules={[
                    {
                      message: "Please input your firstname!",
                    },
                  ]}
                >
                  <Input style={{ backgroundColor: "#F1F0F0" }} />
                </Form.Item>

                <Form.Item>
                  <Link to="/SignIn">
                    <Button
                      type="button"
                      htmlType="submit"
                      onClick={mainPage}
                      style={{
                        backgroundColor: " #ebf6f6",
                        marginRight: "20px",
                        borderRadius: "25px",
                      }}
                    >
                      To main page
                    </Button>
                  </Link>

                  <Button
                    type="button"
                    htmlType="submit"
                    style={{
                      backgroundColor: " #78D38C",
                      borderRadius: "25px",
                    }}
                  >
                    Send my password
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <div>
                <p>
                  Thank you! Letter with your password has been sent to *email
                  address
                </p>
                <Link to="/SignIn">
                  <Button
                    type="button"
                    htmlType="submit"
                    style={{
                      backgroundColor: " #ebf6f6",
                      marginRight: "20px",
                      borderRadius: "25px",
                    }}
                  >
                    To main page
                  </Button>
                </Link>

                <Button
                  type="button"
                  htmlType="submit"
                  style={{
                    backgroundColor: " #78D38C",
                    borderRadius: "25px",
                  }}
                >
                  <a href="https://gmail.com" target="_blank" rel="noreferrer">
                    To email{<ArrowRightOutlined />}
                  </a>
                </Button>
              </div>
            )}
          </div>
        </Card>
      </Content>
      <Footer className="footer">
        <div className="icon color1"></div>
        <div className="icon color2"></div>
        <div className="icon color3"></div>
      </Footer>
    </Layout>
  );
};

export default Forget;
