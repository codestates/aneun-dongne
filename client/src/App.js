import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import axios from "axios";
import "./App.css";

import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { loginState } from "./recoil/recoil";

import { token, loading, userInfo } from "./recoil/recoil";
import { withCookies, Cookies, useCookies } from "react-cookie";
// import Cookies from "universal-cookie";
import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/DetailPage/DetailPage-index";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import MyPage from "./pages/MyPage/MyPage";
import MyVisited from "./components/MyVisited/MyVisited";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [info, setInfo] = useRecoilState(userInfo);

  const [accessToken, setAccessToken] = useRecoilState(token);
  const history = useHistory();
  const [isLoading, setIsLoading] = useRecoilState(loading);
  console.log(accessToken);
  //카톡
  const authorizationCode = new URL(window.location.href).searchParams.get("code");
  const isAuthenticated = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("홈으로 가잔");
        setInfo(res.data.data.userInfo);
        setIsLogin(true);
        window.location.reload();
      });
  };

  console.log(cookies);
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

  // 카톡 로긴
  useEffect(() => {
    function getToken() {
      if (authorizationCode) {
      }
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/kakaologin`, {
          authorizationCode,
          withCredentials: true,
        })
        .then(async (res) => {
          if (res.status === 201) {
            // 서버에서 응답으로 리프레시 토큰(쿠키), 액세스 토큰 옴
            // 받은 액세스 토큰을 전역상태에 저장
            setAccessToken(res.data.data.accessToken);
            // 액세스 토큰으로 유저정보 요청
            // 유저정보 전역 상태에 저장
            // setInfo(res.data.data.userInfo);
            // 로그인 상태 true
            handleResponseSuccess();
            setIsLoading(false);
            // setIsLogin(true);
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setIsLogin(false);
        });
    }
    getToken();
  }, []);
  return (
    <>
      <Header handleResponseSuccess={handleResponseSuccess} />
      <Switch>
        <Route exact path="/">
          <Mainpage />
          {/* <Loading /> */}
        </Route>
        <Route exact path="/home">
          <Home info={info} />
        </Route>
        <Route exact path="/mypage">
          <BrowserRouter>
            <MyPage />
          </BrowserRouter>
          {/* <MyVisited /> */}
        </Route>
        <Route exact path="/mapage/likelist">
          {/* <Likelists /> */}
        </Route>
        <Route exact path="/mapage/my-comment">
          {/* <Commentlists /> */}
        </Route>

        {/* <Commentlist />
          <Visted /> */}

        <Route exact path="/detailpage/:id" component={DetailPage}></Route>
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </>
  );
};

export default App;
// "/detailpage/:id"
