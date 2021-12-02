import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 3px;
    margin-left: auto;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  `,

  FormContainer: styled.div`
    border: 1px gray solid;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form-image {
      cursor: pointer;
      width: 60px;
      height: 40px;
      background-color: #a3dcf3;
    }

    .form-memo {
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      background-color: pink;
      text-align: center;
    }
    .form-memo input {
      /* margin: 20px 0px; */
      width: 300px;
      height: 80px;
    }

    .form-memo .save-position-button {
      margin: 0;
    }

    .error-message {
      color: red;
    }
  `,
};
