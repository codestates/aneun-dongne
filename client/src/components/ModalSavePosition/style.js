import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
    background-color: white;
    z-index: 999;
    padding: 5px;
    margin-left: auto;
  `,

  FormContainer: styled.div`
    /* border: 1px gray solid; */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      position: relative;
    }

    .form-title {
      margin-top: 35px;
      font-size: 1.2rem;
      font-weight: bold;
    }

    form button {
      margin-top: 10px;
      border: none;
      border-radius: 10px;
      background: #3a6fb0;
      color: white;
      width: 90px;
      height: 30px;
      &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: #3a6fb0;

        border-radius: 5px;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      }
      &:hover {
        background-color: #2f4d6f;
      }
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
      /* background-color: pink; */
      text-align: center;
      > input {
        padding: 10px;
      }
    }
    .form-memo input {
      /* margin: 20px 0px; */
      width: 300px;
      height: 80px;
    }

    form .save-position-button {
      margin-top: 10px;
    }

    .error-message {
      color: red;
    }
    .alert-box {
      color: red;
    }
  `,
};
