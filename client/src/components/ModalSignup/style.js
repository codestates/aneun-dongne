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

    input {
      margin: 20px 0px;
      width: 300px;
      height: 30px;
    }

    .signup-button {
      cursor: pointer;
      width: 60px;
      height: 40px;
      background-color: #a3dcf3;
    }

    .login-link {
      cursor: pointer;
      color: #a3dcf3;
    }

    .error-message {
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
