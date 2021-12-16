import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: white;
    z-index: 999;
    padding: 5px;
    margin-left: auto;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
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

    form h3 {
      margin-top: 10px;
    }

    form button {
      margin-top: 10px;
      border: none;
      border-radius: 10px;
      background: rgb(192, 251, 255);
      width: 90px;
      height: 30px;
      transition: all 0.5s ease-in-out;
      &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: rgb(192, 251, 255);
        background-image: linear-gradient(
          to left top,
          rgba(255, 255, 255, 0.9) 0,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        border-radius: 5px;
        box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
          4px 4px 5px 0px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }
      &:hover {
        color: black;
        transform: scale(1.1);
      }
      &:hover:after {
        left: 0;
        width: 100%;
      }
      &:active {
        //
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
