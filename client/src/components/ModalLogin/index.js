import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { withCookies, Cookies, useCookies } from "react-cookie";
import { Styled } from "./style";
import { message } from "../../message";
// import Cookies from "universal-cookie";
import { token, loginState } from "../../recoil/recoil";
import KakaoLogin from "./KakaoLogin";

const ModalLogin = ({ handleResponseSuccess, ToSignupModal, closeLoginModalHandler }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [accessToken, setAccessToken] = useRecoilState(token);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = loginInfo;
  // const cookies = new Cookies();
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = async () => {
    if (email === "") {
      setErrorMessage(message.loginEmail);
      return;
    } else if (password === "") {
      setErrorMessage(message.loginPassword);
      return;
    }
    //http://localhost:3065/
    // `${process.env.REACT_APP_API_URL}/user/login`,
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          email,
          password,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.data.accessToken);
        setAccessToken(res.data.data.accessToken);
        closeLoginModalHandler();
        //! 쿠키를 읽는것 외에는 로그인상태를 바꿀 수 없다.
        // setIsLogin(true);
      })
      .then(() => {
        // console.log(accessToken);
        handleResponseSuccess();
      })
      .catch(() => {
        setErrorMessage(message.loginError);
      });
  };
  console.log("모달로그인", cookies);
  useEffect(() => {});

  return (
    <>
      <Styled.FormContainer>
        <div className="form-title">아는 동네</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={email} onChange={handleInputValue("email")} />
          </div>
          <div className="form-password">
            <label htmlFor="password">password</label>
            <input id="password" type="password" value={password} onChange={handleInputValue("password")} />
          </div>
          <div className="error-message">{errorMessage}</div>

          <button type="submit" className="login-button" onClick={handleLogin}>
            로그인
          </button>
          {/* <button type="submit" className="kakao-login-button" onClick={handleLogin}>
            카카오톡 로그인
          </button> */}
          <KakaoLogin />

          <div className="signup-text">아직 회원이 아니신가요?</div>
          <div className="signup-link" onClick={ToSignupModal}>
            회원가입하기
          </div>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalLogin;
