import React, { useState } from "react";
import axios from "axios";

import { valid } from "../../validator";
import { message } from "../../message";

import { Styled } from "../ModalSignup/style";

const ModalSignup = ({ handleResponseSuccess, ToLoginModal }) => {
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    confirm: "",
  });

  // TODO 중복된 이메일과 닉네임은 서버. 어떻게 할 지?

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    const id = e.target.id;
    const value = e.target.value;
    if (id === "password-confirm") {
      if (userInfo.password === e.target.value) {
        setErrorMessage({ ...errorMessage, passwordConfirm: "" });
      } else {
        setErrorMessage({
          ...errorMessage,
          passwordConfirm: "비밀번호가 일치하지 않습니다.",
        });
      }
      return;
    }
    if (valid[id](value)) {
      setErrorMessage((prev) => {
        prev[id] = "";
        return prev;
      });
    } else {
      setErrorMessage((prev) => {
        prev[id] = message[id];
        return prev;
      });
    }
  };

  const handleSignup = () => {
    const { nickname, email, password, passwordConfirm } = userInfo;
    if (
      nickname === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      setErrorMessage({
        ...errorMessage,
        confirm: "양식을 채워주세요.",
      });
      return;
    }

    if (
      errorMessage.nickname ||
      errorMessage.email ||
      errorMessage.password ||
      errorMessage.passwordConfirm
    ) {
      setErrorMessage({
        ...errorMessage,
        confirm: "양식을 올바르게 작성해주세요.",
      });
      return;
    }

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        {
          nickname,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => {
        handleResponseSuccess();
      });
  };

  return (
    <>
      <Styled.FormContainer>
        <div className="form-title">아는 동네</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-nickname">
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              value={userInfo.nickname}
              onChange={handleInputValue("nickname")}
            />
            <div className="error-message">{errorMessage.nickname}</div>
          </div>
          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={userInfo.email}
              onChange={handleInputValue("email")}
            />
            <div className="error-message">{errorMessage.email}</div>
          </div>

          <div className="form-password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={userInfo.password}
              onChange={handleInputValue("password")}
            />
            <div className="error-message">{errorMessage.password}</div>
          </div>
          <div className="form-password-confirm">
            <label htmlFor="password-confirm">Password Confirm</label>
            <input
              id="password-confirm"
              type="password"
              value={userInfo.passwordConfirm}
              onChange={handleInputValue("passwordConfirm")}
            />
            <div className="error-message">{errorMessage.passwordConfirm}</div>
          </div>
          <div className="error-message">{errorMessage.confirm}</div>
          <div className="signup-link" onClick={ToLoginModal}>
            로그인창으로 가기
          </div>
          <button type="submit" className="login-button" onClick={handleSignup}>
            회원가입
          </button>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalSignup;
