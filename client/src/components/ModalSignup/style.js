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

    .error-message {
      color: red;
    }
  `,
};
