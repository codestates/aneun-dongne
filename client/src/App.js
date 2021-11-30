import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Mainpage from "./pages/Mainpage";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./App.css";
const App = () => {
  const [isContent, setContnet] = useState("연결됐니?");

  // axios 요청 : ec2 주소
  const isToggle = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/hello`).then((res) => {
      setContnet(res.data.data);
    });
  };

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
