import styled from "styled-components";

export const Styled = {
  FormContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .close-button {
      position: absolute;
      top: 20px;
      right: 35px;
      font-size: 30px;
      cursor: pointer;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-title {
      margin: 50px 0px 30px 0px;
      width: 90px;
      height: 50px;
      object-fit: cover;
    }

    label {
      font-size: 1.5rem;
      font-weight: bold;
      color: #3a6fb0;
    }

    .form-email {
      display: flex;
      flex-direction: column;
    }

    .form-password {
      display: flex;
      flex-direction: column;
    }

    input {
      margin-bottom: 30px;
      width: 300px;
      height: 40px;
      border: 1px solid #3a6fb0;
    }

    .login-button {
      margin-top: 5px;
      cursor: pointer;
      width: 250px;
      height: 50px;
      background-color: #3a6fb0;
      color: white;
      border-radius: 10px;
      font-size: 1.5rem;
      /* font-weight: bold; */
    }
    .kakao-login-button {
      margin-top: 15px;
      cursor: pointer;
      width: 250px;
      height: 50px;
      background-color: #ffe811;
      color: black;
      border-radius: 10px;
      font-size: 1.5rem;
      /* font-weight: bold; */
    }

    .error-message {
      height: 20px;
      color: red;
    }

    .signup-link {
      cursor: pointer;
      color: #3a6fb0;
      font-size: 1rem;
      margin-top: 5px;
    }

    .signup-link:hover {
      text-decoration: underline;
    }

    .signup-text {
      margin-top: 20px;
    }

    .alert-box {
      color: red;
    }

    .login-button {
      border: 0;
      transition: all 0.3s;

      &:hover {
        background-color: #2f4d6f;
        transition: all 0.3s;
      }
    }
    .kakao-login-button {
      border: 0;
      transition: all 0.3s;

      &:hover {
        background-color: yellow;
        transition: all 0.3s;
      }
    }

    @media screen and (max-height: 660px), screen and (max-width: 500px) {
      label {
        font-size: 1rem;
      }

      input {
        width: 200px;
        height: 30px;
      }

      .login-button {
        width: 200px;
        font-size: 1rem;
      }

      .kakao-login-button {
        width: 200px;
        font-size: 1rem;
      }
    }
  `,
};
