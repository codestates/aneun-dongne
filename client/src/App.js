import React, { useState } from "react";
import axios from "axios";
import Home from './pages/Home';
import './App.css'
const App = () => {
  const [isContent, setContnet] = useState("연결됐니?");

  // axios 요청 : ec2 주소
  const isToggle = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/hello`).then((res) => {
      setContnet(res.data.data);
    });
  };
  return (
    <div>
      <button onClick={isToggle}>{isContent}</button>
      <Home />
      
    </div>
    
  );
};

export default App;
