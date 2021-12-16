import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "./recoil/recoil";
import { token, kToken, loading, userInfo } from "./recoil/recoil";

import { Mainpage, Home, MyPage, DetailPage, KakaoRedirectHandler } from "./pages";
import Header from "./components/Header/Header";

const App = () => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [info, setInfo] = useRecoilState(userInfo);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  // const [accessToken, setAccessToken] = useRecoilState(token);
  const [isLoading, setIsLoading] = useRecoilState(loading);
  console.log(accessToken);
  //카톡
  const authorizationCode = new URL(window.location.href).searchParams.get("code");
  const isAuthenticated = async () => {
    await console.log(accessToken);
    // if(!accessToken)
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
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
    console.log(accessToken);
  }, [accessToken, kToken]);

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  return (
    <>
      <Header handleResponseSuccess={handleResponseSuccess} />
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/home" component={Home} />
      <Route path="/mypage" component={MyPage} />
      <Route exact path="/detailpage/:id" component={DetailPage} />
      <Route path="/user/kakao/callback" component={KakaoRedirectHandler} />
      {/* <Redirect from="*" to="/" /> */}
    </>
  );
};

export default App;
// "/detailpage/:id"
