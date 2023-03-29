import React, { useState } from "react";
import {
  WelcomeCard,
  ExplainationCard,
  StepOne,
  StepTwo,
  StepThree,
  AskMe,
} from "../components/StepsPages/WelcomeCard";
import { useNavigate } from "react-router-dom";
import { StepsContextValue } from "../useContext/ContextValues";
import { Layout } from "antd";

import { HeaderBar } from "../ReUsedComponents/HeaderBar";
const { Footer, Content } = Layout;

const SignInWelcome = ({ children }) => {
  let navigate = useNavigate();
  const [cssClass, setCssClass] = useState("bg-cards-container");

  return (
    <StepsContextValue.Consumer>
      {(value) => {
        const {
          welcome,
          explanation,
          stepOne,
          stepTwo,
          stepThree,
          askMe,
        } = value.currentStep;
        if (explanation) {
          setCssClass("explanation-container");
        } else {
          setCssClass("bg-cards-container");
        }
        console.log(cssClass);
        return (
          <Layout className="welcome-container">
           
              <HeaderBar />
            
                <p
                  className="welcome-logout-link"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/signin");
                  }}
                >
                  Log Out
                </p>
               
             
         

            <Content className={cssClass}>
              {welcome && <WelcomeCard />}
              {explanation && <ExplainationCard />}
              {stepOne && <StepOne />}
              {stepTwo && <StepTwo />}
              {stepThree && <StepThree />}
              {askMe && <AskMe />}
            </Content>
            <Footer className="Footer-bg-container">
              <h1>Data insights, reimagined!</h1>
            </Footer>
          </Layout>
        );
      }}
    </StepsContextValue.Consumer>
  );
};

export default SignInWelcome;
