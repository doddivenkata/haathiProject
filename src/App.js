import React, { useState, useEffect } from "react";
import "./App.css";
import Aos from "aos";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  StepsContextValue,
  DashboardContextValue,
} from "./useContext/ContextValues";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Forget from "./Pages/ForgetPassword";
import Register from "./Pages/Register";
import Protected from "./utils/Protected";
import Main from "./components/layout/Main";
import Dashboard from "./Pages/Dashboard";
import Data from "./Pages/Data";
import DataSource from "./Pages/DataSource";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import Trash from "./Pages/Trash";
import SignInWelcome from "./Pages/SignInWelcome";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget" element={<Forget />} />
      <Route
        path="/signInWelcome"
        element={
          <Protected>
            <SignInWelcome />
          </Protected>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Main>
            <Protected>
              <Dashboard />
            </Protected>
          </Main>
        }
      />
      <Route
        path="/data"
        element={
          <Main>
            <Protected>
              <Data />
            </Protected>
          </Main>
        }
      />
      <Route
        path="/source"
        element={
          <Main>
            <Protected>
              <DataSource />
            </Protected>
          </Main>
        }
      />
      <Route
        path="/reports"
        element={
          <Main>
            <Protected>
              <Reports />
            </Protected>
          </Main>
        }
      />
      <Route
        path="/settings"
        element={
          <Main>
            <Protected>
              <Settings />
            </Protected>
          </Main>
        }
      />
      <Route
        path="/trash"
        element={
          <Main>
            <Protected>
              <Trash />
            </Protected>
          </Main>
        }
      />

      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  const [currentStep, setCurrentStep] = useState({ welcome: true });
  const [dashboardPage, setDashboardPage] = useState({ connectedCom: true });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="App">
        <StepsContextValue.Provider value={{ currentStep, setCurrentStep }}>
          <DashboardContextValue.Provider
            value={{ dashboardPage, setDashboardPage }}
          >
            <RouterProvider router={router} />
          </DashboardContextValue.Provider>
        </StepsContextValue.Provider>
      </div>
    </>
  );
}

export default App;
