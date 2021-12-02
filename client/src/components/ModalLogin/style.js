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
      width: 150px;
      height: 50px;
      background-color: #00ccff;
      color: white;
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: bold;
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

    button {
      border: 0;
      transition: all 0.3s;
    }

    button:hover {
      background-color: #6af4aa;
      transition: all 0.3s;
    }
  `,
};
