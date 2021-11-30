import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

  .alert-box {
    color: red;
  }
`;

const ModalLogin = ({ handleResponseSuccess, ToSignupModal }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    const { email, password } = loginInfo;
    if (email === "") {
      setErrorMessage("이메일을 입력하세요");
      return;
    } else if (password === "") {
      setErrorMessage("비밀번호를 입력하세요");
      return;
    }

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
      })
      .catch((error) => {
        setErrorMessage("아이디와 비밀번호를 정확히 입력하세요");
      });
  };

  return (
    <>
      <FormContainer>
        <div className="form-title">Log in</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-email">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              onChange={handleInputValue("email")}
            />
          </div>
          <div className="form-password">
            <label for="password">password</label>
            <input
              id="password"
              type="password"
              onChange={handleInputValue("password")}
            />
          </div>
          <div className="alert-box">{errorMessage}</div>
          <div className="login-button" onClick={handleLogin}>
            로그인
          </div>
          <div>아직 회원이 아니신가요?</div>
          <div className="signup-link" onClick={ToSignupModal}>
            회원가입하기
          </div>
        </form>
      </FormContainer>
    </>
  );
};

export default ModalLogin;
