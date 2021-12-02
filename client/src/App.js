import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home";
import ModalLogin from "./components/ModalLogin";
import DetailPage from './pages/DetailPage/DetailPage-index';
import Header from './pages/Mainpage/index';

import Header from "./components/Header";

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

  // TODO isLogin 활용하기!
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
         <Route exact path="/">
            <Mainpage handleResponseSuccess={handleResponseSuccess} />
         </Route>
         {/* <Redirect from="*" to="/" /> */}
         <Route exact path="/home">
           <Home userinfo={userinfo} />
         </Route>
         <Route exact path = "/detailpage/:id" component={DetailPage}></Route>
         {/* //!
         {isShowLoginModal ? <ModalLogin /> : null }
         //! */}
        </Switch>
      </BrowserRouter>
    </>
  );

};

export default App;
