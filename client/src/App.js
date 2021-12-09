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
// import Slider from "./pages/Slider/Slider";
import MyPage from "./pages/Mypage/MyPage";
import Likelists from "./pages/Mypage/Likelists";
import Commentlists from "./pages/Mypage/Commentlists";
import UserInfo from "./pages/Mypage/Userinfo";
import UserInfoPage from "./pages/Mypage/UserInfoPage";

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
          {/* <Slider /> */}
          <Mainpage />
        </Route>
        <Route exact path="/home">
          <Home info={info} />
        </Route>
        <Route exact path="/mypage">
          {/* UserInfo는 한페이지안에 메뉴바, 내용 다있는 컴퍼넌트 */}
          <UserInfo />
          {/* MyPage는 메뉴바랑 내용이랑 분리되어 있는 컴퍼넌트 */}
          {/* <MyPage /> */}
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
