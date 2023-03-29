import { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { StepsContextValue } from "../../useContext/ContextValues";
import { CardHeaderBar } from "../../ReUsedComponents/HeaderBar";
import { FooterBar, SquareBoxs } from "../../ReUsedComponents/FooterBar";
import "./StepsPages.scss";
import "./steps.css";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  BorderOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import hlogo from "../../assets/images/haathilogo.png";
import shopify from "../../assets/images/shopify.png";
import messageLog from "../../assets/images/icons/Frame(2).svg";

import dashboardLog from "../../assets/images/icons/Frame(3).svg";

import loadingIcon from "../../assets/images/icons/Loading.svg";
const { Title } = Typography;

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="currentColor"
      class="bi bi-arrow-right"
      viewBox="0 0 16 16"
      className="arrow-container"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );
};

export const WelcomeCard = () => {
  let navigate = useNavigate();
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const startHandle = () => {
    setCurrentStep({
      ...currentStep,
      welcome: false,
      explanation: true,
    });
  };

  return (
    <Card
      title={<CardHeaderBar />}
      extra={
        <Button
          type="button"
          htmlType="submit"
          className="header-card-button"
          onClick={() => navigate("/dashboard")}
        >
          Skip onboarding {<ArrowRightOutlined />}
        </Button>
      }
      className="card-bg-container"
    >
      <h1 className="card-heading">Welcome *first Name</h1>
      <p className="card-para">
        Hi! I,m Haathi and I'll explain you how to connect your data ad set-up
        dashboards step by step ! it's easy
      </p>
      <Button className="welcome-card-ant-btn" onClick={startHandle}>
        Yes Show me! <ArrowRightOutlined />
      </Button>
      <FooterBar />
    </Card>
  );
};

export const ExplainationCard = () => {
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const stepsStartHandle = () => {
    setCurrentStep({
      ...currentStep,
      explanation: false,
      stepOne: true,
    });
  };

  return (
    <>
      <Card title={<CardHeaderBar />} extra={<SquareBoxs />}>
        <p className="card-para exp-para">
          Let me show you how the process looks like. There are 3 simple steps
          to go through to help me organize your data.
        </p>
      </Card>

      <div className="three-steps-card-container  ">
        <Card
          title={
            <div className="footer-nav">
              <div className="box" id="box1"></div>
              <h1 className="steps-headings">Step 1</h1>
            </div>
          }
        >
          <h1 className="explain-para">
            Connect your data via
            <br /> Shopify!
          </h1>

          <img
            src={shopify}
            alt="icon"
            className="icons icon-shopify"
            width={50}
          />

          <div className="explain-btn-div ">Connect Now</div>
        </Card>
        <Arrow />
        <Card
          title={
            <div className="footer-nav">
              <div className="box" id="box2"></div>
              <h1 className="steps-headings">Step 3</h1>
            </div>
          }
        >
          <h1 className="explain-para">Wait for confirmation!</h1>

          <img
            src={messageLog}
            alt="icon"
            className="icons icon-message"
            width={80}
          />

          <div className="explain-btn-div">Check email </div>
        </Card>
        <Arrow />
        <Card
          title={
            <div className="footer-nav">
              <div className="box" id="box3"></div>
              <h1 className="steps-headings">Step 3</h1>
            </div>
          }
        >
          <h1 className="explain-para">
            Access your pre-populated
            <br /> dashboards & users!
          </h1>

          <img
            src={dashboardLog}
            alt="icon"
            className="icons icon-dashboard"
            width={80}
          />

          <div className="explain-btn-div">Access </div>
        </Card>
      </div>
      <h1 className="next-link" id="to-steps" onClick={stepsStartHandle}>
        Let’s Start
        <CaretRightOutlined />
      </h1>
    </>
  );
};

export const StepOne = () => {
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const stepBackHandle = () => {
    setCurrentStep({
      ...currentStep,
      explanation: true,
      stepOne: false,
    });
  };
  const stepNextHandle = () => {
    setCurrentStep({
      ...currentStep,
      explanation: false,
      stepOne: false,
      stepTwo: true,
    });
  };

  return (
    <Card
      title={<CardHeaderBar />}
      extra={
        <div className="footer-nav">
          <div className="box" id="box1"></div>
          <h1 className="steps-headings" style={{ marginTop: "-7px" }}>
            Step 1
          </h1>
        </div>
      }
      actions={[
        <Button className="gray-btn" onClick={stepBackHandle}>
          Back
        </Button>,
        <Button className="gray-btn">Read more</Button>,
        <Button className="green-btn" onClick={stepNextHandle}>
          I got it! Next{" "}
        </Button>,
      ]}
      className="card-bg-container"
    >
      <h1 className="card-heading">Connect your data sources!</h1>

      <img src={shopify} className="steps-icon" alt="icon" width={50} />

      <p className="card-para">
        Navigate to Sources-tab to integrate data from Shopify! Use your
        Shopify-login for synchronization.
      </p>
    </Card>
  );
};

export const StepTwo = () => {
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const stepBackHandle = () => {
    setCurrentStep({
      ...currentStep,
      welcome: false,
      explanation: false,
      stepOne: true,
      stepTwo: false,
      stepThree: false,
    });
  };
  const stepNextHandle = () => {
    setCurrentStep({
      ...currentStep,
      welcome: false,
      explanation: false,
      stepOne: false,
      stepTwo: false,
      stepThree: true,
    });
  };
  return (
    <Card
      title={<CardHeaderBar />}
      extra={
        <div className="footer-nav">
          <div className="box" id="box2"></div>
          <h1 className="steps-headings" style={{ marginTop: "-7px" }}>
            Step 2
          </h1>
        </div>
      }
      actions={[
        <Button className="gray-btn" onClick={stepBackHandle}>
          Back
        </Button>,
        <Button className="green-btn" onClick={stepNextHandle}>
          I got it! Next{" "}
        </Button>,
      ]}
      className="card-bg-container"
    >
      <h1 className="card-heading">
        We will fetch your data<br/> tables and arrange the data
      </h1>

      <img src={loadingIcon} className="steps-icon" alt="icon" width={190} />

      <p className="card-para step-2para">
        We will fetch your data tables from Shopify and arrange the data in your
        personal Haathi data warehouse. This process might take up to 1 hour!”.
      </p>
    </Card>
  );
};

export const StepThree = () => {
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const stepBackHandle = () => {
    setCurrentStep({
      ...currentStep,
      welcome: false,
      explanation: false,
      stepOne: false,
      stepTwo: true,
      stepThree: false,
      askMe: false,
    });
  };
  const stepNextHandle = () => {
    setCurrentStep({
      welcome: false,
      explanation: false,
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      askMe: true,
    });
  };

  return (
    <Card
      title={<CardHeaderBar />}
      extra={
        <div className="footer-nav">
          <div className="box" id="box3"></div>
          <h1 className="steps-headings" style={{ marginTop: "-7px" }}>
            Step 3
          </h1>
        </div>
      }
      actions={[
        <Button className="gray-btn" onClick={stepBackHandle}>
          Back
        </Button>,
        <Button className="gray-btn">Read more</Button>,
        <Button className="green-btn" onClick={stepNextHandle}>
          I got it! Next{" "}
        </Button>,
      ]}
      className="card-bg-container"
    >
      <h1 className="card-heading">Access your pre-populated dashboards!</h1>

      <img src={shopify} className="steps-icon" alt="icon" width={50} />

      <p className="card-para step-3para ">
        After synchronization I’ll show you your data via set dashboards. You
        can see them on main-page. ?OBS! You can assign specific roles to users.
      </p>
    </Card>
  );
};

export const AskMe = () => {
  const { currentStep, setCurrentStep } = useContext(StepsContextValue);

  const stepBackHandle = () => {
    setCurrentStep({
      ...currentStep,
      welcome: false,
      explanation: false,
      stepOne: false,
      stepTwo: false,
      stepThree: true,
      askMe: false,
    });
  };

  return (
    <Card
      title={<CardHeaderBar />}
      extra={<SquareBoxs />}
      actions={[
        <Button onClick={stepBackHandle}>Back</Button>,
        <Button className="gray-btn">Read more</Button>,
        <Link to="/dashboard">
          <Button className="green-btn">I got it! Next</Button>
        </Link>,
      ]}
      className="card-bg-container"
    >
      <h1 className="card-heading">Ask Me!</h1>

      <img src={shopify} className="steps-icon" alt="icon" width={40} />

      <p className="card-para">
        Ask me whatever you want or need to know! I’ll give you answers on
        specific questions, based on your data from Shopify.
      </p>
    </Card>
  );
};
