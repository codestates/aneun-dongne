import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { loginState } from "./recoil/recoil";
import { token, kToken, userInfo } from "./recoil/recoil";

import { MainPage, Home, MyPage, DetailPage, KakaoRedirectHandler } from "./pages";
import Header from "./components/Header/Header";
import Cookies from "universal-cookie";
const App = () => {
  const cookies = new Cookies();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setInfo = useSetRecoilState(userInfo);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  const isAuthenticated = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          // Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setInfo(res.data.data.userInfo);
        setIsLogin(true);
      });
  };

  useEffect(() => {
    // if (cookies.get("jwt") || cookies.get("kakao-jwt")) {
    if (window.sessionStorage.getItem("jwt")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [window.sessionStorage.getItem("jwt")]);

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  return (
    <>
      <Header handleResponseSuccess={handleResponseSuccess} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/home" component={Home} />
        <Route path="/mypage" component={MyPage} />
        <Route exact path="/detailpage/:id" component={DetailPage} />
        <Route path="/user/kakao/callback" component={KakaoRedirectHandler} />
      </Switch>
    </>
  );
};

export default App;
