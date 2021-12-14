import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { withCookies, Cookies, useCookies } from "react-cookie";
import { Styled } from "./style";
import { message } from "../../message";
// import Cookies from "universal-cookie";
import { loginState, token } from "../../recoil/recoil";
import KakaoLogin from "./KakaoLogin";

const ModalLogin = ({ handleResponseSuccess, ToSignupModal, closeLoginModalHandler }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [accessToken, setAccessToken] = useRecoilState(token);

  const [errorMessage, setErrorMessage] = useState("");
  const { email, password } = loginInfo;
  const [isLogin, setIsLogin] = useRecoilState(loginState);
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
        setAccessToken(res.data.data.accessToken);
        closeLoginModalHandler();
      })
      .then(() => {
        // console.log(accessToken);
        handleResponseSuccess();
      })
      .catch(() => {
        setErrorMessage(message.loginError);
      });
  };

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
    console.log(accessToken);
  }, [accessToken]);

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
