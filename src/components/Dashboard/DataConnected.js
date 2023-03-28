import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Modal,
  Typography,
  Layout,
  Form,
  Input,
  Alert,
  Spin,
  Space,
  DatePicker,
  Progress,
  Card,
  Avatar,
} from "antd";
import { BorderOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./dataConnected.scss";
import { DashboardContextValue } from "../../useContext/ContextValues";
import { CardHeaderBar } from "../../ReUsedComponents/HeaderBar";
import shopifyLog from "../../assets/images/icons/Shopify-Logo 1.svg";
import hlogo from "../../assets/images/haathilogo.png";

import { UploadOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Header, Footer, Content } = Layout;

function FinanceModal({ isModalOpen, handleOk, handleCancel }) {
  //   const { current, setCurrent } = useContext(StepsContextValue);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertFailed, setAlertFailed] = useState(false);
  const [modalHeight, setmodalHeight] = useState("500px");
  const [buttonStatus, setButtonStatus] = useState(true);
  const [loaderModal, setLoaderModal] = useState(false);
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { dashboardPage, setDashboardPage } = useContext(DashboardContextValue);

  const dashboardHandle = () => {
    console.log("connection done");
    setDashboardPage({
      connectedCom: false,
    });
  };

  const onFinish = (values) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      setLoading(false);

      if (values.password === "Qwer@123") {
        setAlertSuccess(true);
        setAlertFailed(false);
        form.resetFields();
        setButtonStatus(false);
      } else {
        setAlertFailed(true);
        setAlertSuccess(false);
      }
    }, 500);
  };
  const connectionFormhandleSubmit = (values) => {
    console.log(values);
    handleCancel();
    setLoaderModal(true);
    setIsRunning(true);
  };

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 5)), 1000);
    }
    if (filled === 100) {
    }
  }, [filled, isRunning]);

  return (
    <>
      <Modal
        open={loaderModal}
        onCancel={() => {
          setLoaderModal(false);
        }}
        width={700}
        centered
        footer={null}
      >
        <div bodyStyle={{ backgroundColor: "#ffff" }} bordered="false">
          <div className="connected-modal">
            <img
              src={shopifyLog}
              alt="progress"
              className="step2-progress"
            ></img>

            <div className="progressbar">
              <div
                style={{
                  height: "100%",
                  width: `${filled}%`,
                  backgroundColor: filled === 100 ? "#78D391" : "#DDE76F",
                  transition: "width 0.5s",
                }}
              ></div>

              {filled === 100 ? (
                <span className="progressPercent">done</span>
              ) : (
                <span className="progressPercent">{filled}%</span>
              )}
            </div>

            {filled === 100 ? (
              <h2>Your synchronisation is successfully finished!</h2>
            ) : (
              <h2>Wait for connection...</h2>
            )}
            {filled === 100 ? (
              <p className="modal-conent-para">
                You can go to your dashboards and see different... You can also
                ask me specific question about...
              </p>
            ) : (
              <p className="modal-conent-para">
                We will fetch your data tables from Shopify and arrange the data
                in your personal Haathi data warehouse. This process might take
                up to 1 hour!”
              </p>
            )}
            {filled === 100 && (
              <Button className="connect-button" onClick={dashboardHandle}>
                To dashboard
              </Button>
            )}
          </div>
        </div>
      </Modal>
      <Modal
        title={<img src={shopifyLog} alt="icon" className="log-center" />}
        bodyStyle={{ minHeight: modalHeight }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        resetFields
        footer={[
          <Button
            className="connect-button"
            disabled={buttonStatus}
            onClick={connectionFormhandleSubmit}
          >
            Connect now 000
          </Button>,
        ]}
      >
        <Spin spinning={loading}>
          <Form
            layout="vertical"
            id="Finance"
            autocomplete="off"
            onFinish={onFinish}
            form={form}
          >
            <Form.Item label="Source Type">
              <Input
                style={{ backgroundColor: "#F1F0F0" }}
                prefix={
                  <img
                    src={shopifyLog}
                    width="25px"
                    height="25px"
                    alt="icon"
                    style={{ backgroundColor: "#F1F0F0" }}
                  />
                }
                defaultValue="Shopify Type"
              />
            </Form.Item>
            <Form.Item label="Source name" name="">
              <Input
                style={{ backgroundColor: "#F1F0F0" }}
                defaultValue="shopify name"
              />
            </Form.Item>
            <Form.Item
              label="shopify Store"
              name="Shopify"
              rules={[
                {
                  required: true,
                  message: "Please input your shopify store name",
                },
              ]}
            >
              <Input
                style={{ backgroundColor: "#F1F0F0" }}
                placeholder="https://NAME.my shopify.com"
              />
            </Form.Item>

            <Form.Item
              label="API Key"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input.Password style={{ backgroundColor: "#F1F0F0" }} />
            </Form.Item>
            <Form.Item
              label="Replication Start Date"
              name="Replication Start Date"
              rules={[
                {
                  required: true,
                  message: "Please input your Data",
                },
              ]}
            >
              <DatePicker
                style={{
                  width: "100%",
                  height: "33px",
                  borderRadius: "6px",
                  backgroundColor: "#F1F0F0",
                }}
              />
            </Form.Item>
            <Space className="status-msg-container">
              <Button
                htmlType="Submit"
                type="primary"
                style={{ backgroundColor: "#78D391" }}
              >
                Test Connection
              </Button>

              {alertSuccess && (
                <Alert
                  message="Connection Successfull"
                  description=""
                  type="success"
                  style={{ width: "36vh" }}
                  showIcon
                  className="err-msg"
                />
              )}
              {alertFailed && (
                <Alert
                  message="Connection Failed "
                  description=""
                  type="error"
                  style={{ width: "36vh" }}
                  showIcon
                />
              )}
            </Space>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

const ErrorComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnectionModalOpen, setIsConnectionModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const connectionModal = () => {
    setIsConnectionModalOpen(true);
  };

  const connectionHandleCancel = () => {
    setIsConnectionModalOpen(false);
  };

  const connectionModelHandle = () => {
    handleOk();
    connectionModal();
  };

  return (
    <div className="errMsg-bg-container">
      <h2 className="connection-status">No data connected</h2>
      <p className="modal-content-title">Connect your data!</p>
      <div className="para-container">
        <p className="connection-msg">
          We need access to your Shopify account to
          <br />
          get all the necessary data, analyse it and set up <br />
          dashboards. All you need it’s just connect your <br />
          account to our system. Use your Shopify’s login for synchronisation.
        </p>
      </div>
      <div className="container">
        <img src={shopifyLog} alt="icon" className="shopify-icon" />
      </div>

      <div className="container">
        <Button className="connect-button" onClick={showModal}>
          Connect Now
        </Button>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered={true}
        width={455}
        className="connect-now-popUp"
      >
        <div>
          <Header className="haathi-logo-header form-header">
          <CardHeaderBar/>

            <div className="connect-pop-header-colum">
              <div className="mode-step-title-bg">
                <BorderOutlined className="square-icon" />
              </div>
              <h3>step1</h3>
            </div>
          </Header>
          <div>
            <h1 className="modal-content-title">Connect your data sources!</h1>
          </div>
          <p className="modal-content-para">
            You need to log in your Shopify account so that I can gather and
            analyze your data and set up dashboards.
          </p>
          <Button
            className="connect-button modal-connect-button"
            onClick={connectionModelHandle}
          >
            Connect now
          </Button>
          <div>
            <p className="modal-conent-para2 ">
              After you have connected your account you need to wait a few hours
              for synchronisation. When the process's been finished you get
              notification to your email.
            </p>
          </div>
        </div>
      </Modal>

      <FinanceModal
        isModalOpen={isConnectionModalOpen}
        handleCancel={connectionHandleCancel}
      />
    </div>
  );
};

export default ErrorComponent;
