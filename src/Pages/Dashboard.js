import React from "react";
import ErrorComponent from "../components/Dashboard/DataConnected";
import DashboardChats from "../components/Dashboard/DashboardChats";
import { DashboardContextValue } from "../useContext/ContextValues";

const Dashboard = () => {
  return (
    <DashboardContextValue.Consumer>
      {(value) => {
        const { connectedCom } = value.dashboardPage;
        return (
          <>
            {connectedCom && <ErrorComponent />}
            {!connectedCom && <DashboardChats />}
          </>
        );
      }}
    </DashboardContextValue.Consumer>
  );
};

export default Dashboard;
