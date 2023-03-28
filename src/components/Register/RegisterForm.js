import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Typography, Card, Upload } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./registerForm.scss";
import { CardHeaderBar } from "../../ReUsedComponents/HeaderBar";

const RegisterForm = () => {
  let navigate = useNavigate();
  const [formFields, setFormFields] = useState(true);
  const [respone, setResponse] = useState(true);

  const { email } = formFields;

  const handleVerification = (values) => {
    setFormFields(!formFields);
  };
  const onFinish = (values) => {
    setResponse(false);
  };

  return (
    <>
      {respone && (
        <Card className="register-form-card">
          <CardHeaderBar />
          

          {formFields ? (
            <Form
              layout="vertical"
              name="register-form1"
              onFinish={handleVerification}
            >
              <Form.Item
                label={<div className="label">First name</div>}
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your firstname!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={<div className="label">Last name</div>}
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your lastname!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={<div className="label">Email</div>}
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
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={<div className="label">Password</div>}
                name="password"
                hasFeedback
                rules={[
                  { required: true, message: "Please input your  password" },

                  {
                    pattern: new RegExp(
                      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
                    ),
                    message:
                      "Password must contain at least one lowercase letter, uppercase letter, number, and special character",
                  },
                ]}
              >
                <Input.Password style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={<div className="label">Confirm the password</div>}
                name="cpassword"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password",
                  },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "Your password and confirmation password do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item>
                <Button className="button" htmlType="submit">
                  Next {<ArrowRightOutlined />}
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              layout="vertical"
              name="register-form2"
              onFinish={onFinish}
              // autocomplete="off"
            >
              <Form.Item
                label={<div className="label">Your company name</div>}
                name="yourcompanyname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Your company name!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={
                  <div className="label">upload your company logotype</div>
                }
                name="logotype"
              >
                <Upload accept=".png">
                  <Button
                    className="upload"
                    style={{ backgroundColor: " #ebf6f6" }}
                  >
                    Click here to upload
                  </Button>
                </Upload>
              </Form.Item>
              <Form.Item
                label={<div className="label">Your role in the company</div>}
                name="role"
                rules={[
                  {
                    required: true,
                    message: "Please input your role in the company!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>
              <Form.Item
                label={<div className="label">Company Website</div>}
                name="companywebsite"
                rules={[
                  {
                    required: true,
                    message: "Please input your field!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>

              <Form.Item
                label={<div className="label"></div>}
                name=" "
                rules={[
                  {
                    required: true,
                    message: "Please input your field!",
                  },
                ]}
              >
                <Input style={{ backgroundColor: "#F1F0F0" }} />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox className="checkbox">
                  I agree to condition and terms
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="button"
                  // onClick={() => {
                  //   showSucess();
                  //   onFinish();
                  // }}
                  className="button1"
                  htmlType="submit"
                  align="center"
                >
                  Submit & register
                </Button>
              </Form.Item>
            </Form>
          )}
        </Card>
      )}
      {!respone && (
        <Card
          className="register-response-card"
          actions={[
            <Button className="gray-btn" onClick={() => navigate("/signIn")}>
              To main page
            </Button>,

            <Button className="green-btn">Let’s start!</Button>,
          ]}
        >
          <CardHeaderBar />
          <p className="cardModel-para">
            You’ve been successfully registered!
            <br />
            Don’t forget to confirm your email.
            <br />
            Confirmation has been sent to * email
          </p>
        </Card>
      )}
    </>
  );
};

export default RegisterForm;
