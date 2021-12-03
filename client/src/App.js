import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { useRecoilState, useSetRecoilState } from "recoil";

import { loginState } from "./recoil/recoil";
import { userInfo } from "./recoil/recoil";

import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/DetailPage/DetailPage-index";
import Header from "./components/Header";

const App = () => {
  const setIsLogin = useSetRecoilState(loginState);
  const [info, setInfo] = useRecoilState(userInfo);

  const history = useHistory();

  const isAuthenticated = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/user/info`).then((res) => {
      setInfo(res.data.data.userInfo);
      setIsLogin(true);
      history.push("/");
    });
  };

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  return (
    <>
      <BrowserRouter>
        <Header handleResponseSuccess={handleResponseSuccess} />
        <Switch>
          <Route exact path="/">
            <Mainpage />
          </Route>
          <Route exact path="/home">
            <Home info={info} />
          </Route>
          <Route exact path="/detailpage/:id" component={DetailPage}></Route>
          {/* <Redirect from="*" to="/" /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
// "/detailpage/:id"
