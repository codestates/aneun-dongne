import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    background-color: white;
    z-index: 999;
    padding: 5px;
    margin-left: auto;
    cursor: pointer;
    border: none;
    font-size: 30px;
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
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 30px;
    }

    form button {
      margin: 10px;
      border: none;
      border-radius: 10px;
      background-color: #3a6fb0;
      width: 90px;
      height: 30px;
      cursor: pointer;
      color: white;
      &:hover {
        background-color: #2f4d6f;
      }
      &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -1;
        background-color: #3a6fb0;
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
    }

    .form-image {
      cursor: pointer;
      width: 65px;
      height: 40px;
      background-color: #3a6fb0;
    }

    .form-memo {
      margin: 20px 0px;
      display: flex;
      flex-direction: column;
      /* background-color: pink; */
      text-align: center;
    }
    .form-memo input {
      /* margin: 20px 0px; */
      width: 300px;
      height: 80px;
    }

    form .save-position-button {
      margin-top: -10px;
    }

    .error-message {
      color: red;
    }
  `,
};
