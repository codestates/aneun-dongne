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
  const { email, password } = loginInfo;

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
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
      .catch(() => {
        setErrorMessage("아이디와 비밀번호를 정확히 입력하세요");
      });
  };

  return (
    <>
      <FormContainer>
        <div className="form-title">아는 동네</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-email">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={handleInputValue("email")}
            />
          </div>
          <div className="form-password">
            <label htmlFor="password">password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleInputValue("password")}
            />
          </div>
          <div className="alert-box">{errorMessage}</div>
          {/* <div className="login-button" onClick={handleLogin}>
            로그인
          </div> */}

          <button type="submit" onClick={handleLogin}>
            로그인
          </button>
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
