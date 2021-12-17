import styled from "styled-components";

export const Styled = {
  FormContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-title {
      margin: 70px 0px 30px 0px;
    }

    label {
      font-size: 1.5rem;
      font-weight: bold;
      color: #00ccff;
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
      border: 1px solid #00ccff;
    }

    .login-button {
      margin-top: 5px;
      cursor: pointer;
      width: 250px;
      height: 50px;
      background-color: #00ccff;
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
      color: #00ccff;
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
        background-color: #6af4aa;
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

    @media screen and (max-height: 660px) {
      label {
        font-size: 1rem;
      }
    }
  `,
};
