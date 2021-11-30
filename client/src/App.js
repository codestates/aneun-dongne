import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";
import { RecoilRoot } from "recoil";

import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home";

const App = () => {
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

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <Route exact path="/main">
              <Mainpage handleResponseSuccess={handleResponseSuccess} />
            </Route>
            <Route exact path="/home">
              <Home userinfo={userinfo} />
            </Route>
            <Route path="/">
              {isLogin ? <Redirect to="/home" /> : <Redirect to="/main" />}
            </Route>
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
