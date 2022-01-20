import styled from "styled-components";

export const Styled = {
  FormContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    .close-icon {
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
      margin: 30px 0px 30px 0px;
      width: 90px;
      height: 50px;
      object-fit: cover;
    }

    label {
      font-size: 1.2rem;
      font-weight: bold;
      color: #3a6fb0;
    }

    .form-nickname {
      display: flex;
      flex-direction: column;
    }

    .form-email {
      display: flex;
      flex-direction: column;
    }

    .form-password {
      display: flex;
      flex-direction: column;
    }

    .form-password-confirm {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 300px;
      height: 40px;
      border: 1px solid #3a6fb0;
      margin-bottom: 5px;
    }

    .signup-button {
      cursor: pointer;
      width: 150px;
      height: 50px;
      background-color: #3a6fb0;
      color: white;
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: 600;
    }

    .login-link {
      cursor: pointer;
      color: #3a6fb0;
      font-size: 1rem;
      margin-top: 12px;
    }

    .login-link:hover {
      text-decoration: underline;
    }

    .error-message {
      height: 10px;
      color: red;
      margin-bottom: 20px;
    }

    button {
      border: 0;
      transition: all 0.3s;

      &:hover {
        background-color: #2f4d6f;
        transition: all 0.3s;
      }
    }

    @media screen and (max-width: 500px) {
      label {
        font-size: 1rem;
      }

      input {
        width: 200px;
        height: 30px;
      }

      .signup-button {
        width: 200px;
        font-size: 1rem;
      }

      .error-message {
        font-size: 0.8rem;
        height: 2px;
        color: red;
        margin-bottom: 18px;
      }
    }

    @media screen and (max-height: 900px) {
      label {
        font-size: 1rem;
      }

      input {
        width: 200px;
        height: 30px;
      }

      .signup-button {
        width: 200px;
        font-size: 1rem;
      }

      .error-message {
        font-size: 0.8rem;
        height: 2px;
        color: red;
        margin-bottom: 12px;
      }
    }
  `,
};
