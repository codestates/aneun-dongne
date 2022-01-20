import styled from "styled-components";

export const Styled = {
  UserInfopage: styled.div`
    top: 0;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
  `,
  View: styled.div`
    margin-top: 40px;
    margin-left: 20px;
    width: 500px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    .image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .image-container .image-wrapper {
      width: 200px;
      height: 200px;
    }

    .image-container .btn-image-edit {
      margin-left: 200px;
      margin-top: 8px;
    }

    button {
      width: 65px;
      height: 35px;
      margin-left: 10px;
      border: none;
      background-color: #3a6fb0;
      border-radius: 12px;
      cursor: pointer;
      color: white;

      &:hover {
        background-color: #2f4d6f;
      }
    }
  `,

  ContentBox: styled.div`
    margin-top: 40px;

    > form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > form .userinfo-each-label {
      width: 400px;
      margin: 20px 0px 20px 100px;

      @media screen and (min-width: 320px) {
        width: 300px;
        margin: 20px 0px 20px 0px;
      }

      @media screen and (min-width: 500px) {
        width: 400px;
        margin: 20px 0px 20px 100px;
      }
    }

    > form .userinfo-each-label input {
      border: 2px solid gray;
      font-size: 1.2rem;
      width: 300px;
      height: 30px;
      padding-left: 10px;
      border-radius: 8px;
    }
    form .userinfo-button-label {
      display: flex;
      justify-content: center;
      margin: 30px 0;
    }

    > form .alert-box {
      text-align: center;
      color: red;
    }
    form .userinfo-button-label .btn-exit {
      width: 80px;
      height: 40px;
      background-color: red;
      color: white;
      &:hover {
        background-color: #ff443c;
      }
    }
  `,
};
