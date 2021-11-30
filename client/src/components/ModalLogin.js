import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

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

const ModalLogin = ({ handleResponseSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/login`,
        {
          email,
          password,
        },
        { "Content-Type": "application/json", withCredentials: true }
      )
      .then(() => {
        handleResponseSuccess();
      });
  };

  return (
    <>
      <FormContainer>
        <div>Log in</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="email">Email</label>
          <input id="email" type="text" onChange={handleInputValue("email")} />
          <label for="password">password</label>
          <input
            id="password"
            type="password"
            onChange={handleInputValue("password")}
          />
          <div className="login-button" onClick={handleLogin}>
            Log in
          </div>
          <div>아직 회원이 아니신가요?</div>
          <div className="signup-link">회원가입하기</div>
        </form>
      </FormContainer>
    </>
  );
};

export default ModalLogin;
