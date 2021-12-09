import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import axios from "axios";
import "./App.css";

import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";

import { loginState } from "./recoil/recoil";
import { userInfo } from "./recoil/recoil";
import { token } from "./recoil/recoil";
import { withCookies, Cookies, useCookies } from "react-cookie";
import Mainpage from "./pages/Mainpage";
import Home from "./pages/Home/Home";
import DetailPage from "./pages/DetailPage/DetailPage-index";
import Header from "./components/Header";
import Slider from "./pages/Slider/Slider";
import Mypage from "./pages/Mypage/MyPage";
import Likelists from "./pages/Mypage/Likelists";
import Commentlists from "./pages/Mypage/Commentlists";
import UserInfo from "./pages/Mypage/Userinfo";

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [info, setInfo] = useRecoilState(userInfo);
  const accessToken = useRecoilValue(token);

  const history = useHistory();

  const isAuthenticated = async () => {
    // `${process.env.REACT_APP_API_URL}/user/info`
    await axios
      .get("https://localhost:80/user/info", {
        headers: {
          // Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setInfo(res.data.data.userInfo);
        setIsLogin(true);
        history.push("/home");
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
      <Switch>
        <Route exact path="/">
          <Slider />
          <Mainpage />
        </Route>
        <Route exact path="/home">
          <Home info={info} />
        </Route>
        <Route exact path="/mypage">
          {/* app.js에서 login인인 상태에서 mypage로 들어온다.
          아닐 경우에는 로그인 모달창이 뜨게 함.*/}
          {/* {isLogin ? <Mypage info={info} accessToken={accessToken} /> : <Home info={info} />} */}
          <UserInfo />
        </Route>
        <Route exact path="/mapage/likelist">
          <Likelists />
        </Route>
        <Route exact path="/mapage/my-comment">
          <Commentlists />
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
