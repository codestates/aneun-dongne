import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
`;

// TODO 회원가입 유효성 검사 만들기

const ModalSignup = ({ handleResponseSuccess, ToLoginModal }) => {
  const [userinfo, setUserInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfrim: "",
  });

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userinfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    const { nickname, email, password } = userinfo;

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
        <div className="form-title">Sign In</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-nickname">
            <label for="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              onChange={handleInputValue("nickname")}
            />
          </div>
          <div className="form-email">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              onChange={handleInputValue("email")}
            />
          </div>
          <div className="form-password">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={handleInputValue("password")}
            />
          </div>
          <div className="form-password-confirm">
            <label for="password">Password Confirm</label>
            <input
              id="password-confirm"
              type="password"
              onChange={handleInputValue("passwordConfrim")}
            />
          </div>
          <div className="login-button" onClick={handleSignup}>
            회원가입
          </div>
          <div className="signup-link" onClick={ToLoginModal}>
            로그인창으로 가기
          </div>
        </form>
      </FormContainer>
    </>
  );
};

export default ModalSignup;
