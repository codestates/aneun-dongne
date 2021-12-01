import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { valid } from "../validator";
import { message } from "../message";

//TODO 관심사 분리하기
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    margin: 20px 0px;
    width: 300px;
    height: 30px;
  }

  .login-button {
    cursor: pointer;
    width: 60px;
    height: 40px;
    background-color: #a3dcf3;
  }

  .signup-link {
    cursor: pointer;
    color: #a3dcf3;
  }

  .error-message {
    color: red;
  }
`;

const ModalSignup = ({ handleResponseSuccess, ToLoginModal }) => {
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfrim: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfrim: "",
  });

  // TODO 에러메시지가 있을 경우에는 회원가입 버튼 누르지못하게.. + 빈 칸 있으면..

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
    const id = e.target.id;
    const value = e.target.value;
    if (id === "password-confirm") {
      if (userInfo.password === e.target.value) {
        setErrorMessage({ ...errorMessage, passwordConfrim: "" });
      } else {
        setErrorMessage({
          ...errorMessage,
          passwordConfrim: "비밀번호가 일치하지 않습니다.",
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
    const { nickname, email, password } = userInfo;

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
      <FormContainer>
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
              value={userInfo.passwordConfrim}
              onChange={handleInputValue("passwordConfrim")}
            />
            <div className="error-message">{errorMessage.passwordConfrim}</div>
          </div>
          <div className="signup-link" onClick={ToLoginModal}>
            로그인창으로 가기
          </div>
          <button type="submit" className="login-button" onClick={handleSignup}>
            회원가입
          </button>
        </form>
      </FormContainer>
    </>
  );
};

export default ModalSignup;
