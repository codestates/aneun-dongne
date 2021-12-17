import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { loginState } from "./recoil/recoil";
import { token, kToken, userInfo } from "./recoil/recoil";

import { MainPage, Home, MyPage, DetailPage, KakaoRedirectHandler } from "./pages";
import Header from "./components/Header/Header";
import Cookies from "universal-cookie";
const App = () => {
  const cookies = new Cookies();
  const setIsLogin = useSetRecoilState(loginState);
  const setInfo = useSetRecoilState(userInfo);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  console.log(accessToken);

  const isAuthenticated = async () => {
    console.log(accessToken);
    // if(!accessToken)
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
        console.log("홈으로 가잔");
        setInfo(res.data.data.userInfo);
        setIsLogin(true);
      });
  };

  // console.log(accessToken);
  // //쿠키안에 jwt 있는지 보고 로긴상태결정

  useEffect(() => {
    if (accessToken || kakaoToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [accessToken, kakaoToken]);

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
      {/* <Redirect from="*" to="/" /> */}
    </>
  );
};

export default App;
// "/detailpage/:id"
