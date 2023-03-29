import React from "react";
import { useNavigate } from "react-router-dom";
const Protected = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  }, []);

  return children;
};
export default Protected;
