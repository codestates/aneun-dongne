import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { RecoilRoot } from "recoil";

import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage/DetailPage-index";
import Header from "./components/Header";

const App = () => {
  // TODO userinfo, isLogin 리코일로 관리하기
  const [isLogin, setIsLogin] = useState(false);
  const [userinfo, setUserinfo] = useState(null);

  const history = useHistory();

  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/user/info`).then((res) => {
      setUserinfo(res.data.data.userInfo);
      setIsLogin(true);
      history.push("/");
    });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  // TODO isLogin 활용해서 리다이렉트 연결해놓기!
  return (
    <>
      <BrowserRouter>
        <Header handleResponseSuccess={handleResponseSuccess} />
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/home">
            <Home userinfo={userinfo} />
          </Route>
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
