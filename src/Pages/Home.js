import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate()
  return (
    <>
    <center style = {{marginTop:'450px'}}>
      <p>Haathi home page</p>
      <Space direction="vertical">
        <Space wrap>
          <Button type="primary" size={30} onClick={()=>navigate('/SignIn')}>
            SignIn
          </Button>
          <Button type="primary" size={30} onClick={()=>navigate('/register')}>
            Register
          </Button>
        </Space>
      </Space>
      </center>
    </>
  );
};

export default Home;
