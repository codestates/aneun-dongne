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
      margin: 30px 0px 30px 0px;
    }

    label {
      font-size: 1.2rem;
      font-weight: bold;
      color: #00ccff;
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
      border: 1px solid #00ccff;
      margin-bottom: 5px;
    }

    .signup-button {
      cursor: pointer;
      width: 150px;
      height: 50px;
      background-color: #00ccff;
      color: white;
      border-radius: 10px;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .login-link {
      cursor: pointer;
      color: #00ccff;
      font-size: 1rem;
      margin-top: 20px;
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
        background-color: #6af4aa;
        transition: all 0.3s;
      }
    }
  `,
};
