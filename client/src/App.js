import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import axios from "axios";
import "./App.css";

import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { loginState } from "./recoil/recoil";
import { userInfo } from "./recoil/recoil";
import { token } from "./recoil/recoil";
import { withCookies, Cookies, useCookies } from "react-cookie";

import { Mainpage, Home, MyPage, DetailPage } from "./pages";
import Header from "./components/Header/Header";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [info, setInfo] = useRecoilState(userInfo);
  const accessToken = useRecoilValue(token);

  const history = useHistory();

  const isAuthenticated = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          // Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("홈으로 가잔");
        setInfo(res.data.data.userInfo);
        setIsLogin(true);
        // history.push("/home");
      });
  };
  //쿠키안에 jwt 있는지 보고 로긴상태결정
  useEffect(() => {
    if (cookies.jwt) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log(cookies);
  }, []);

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
      {/* <Redirect from="*" to="/" /> */}
    </>
  );
};

export default App;
// "/detailpage/:id"
