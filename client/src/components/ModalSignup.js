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

const ModalSignup = () => {
  const [loginInfo, setLoginInfo] = useState({
    nickname: "",
    email: "",
    password: "",
    passwordConfrim: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
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
          <div className="login-button">회원가입</div>
          <div className="signup-link">로그인창으로 가기</div>
        </form>
      </FormContainer>
    </>
  );
};

export default ModalSignup;
