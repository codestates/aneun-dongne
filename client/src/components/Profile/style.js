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
    align-self: center;
  `,

  ContentBox: styled.div`
    width: 100%;
    margin-top: 30px;

    > form {
      display: flex;
      flex-direction: column;
    }
    > form button {
      width: 80px;
      border: none;
      height: 40px;
      background-color: #3a6fb0;
      border-radius: 20px;
      cursor: pointer;
      color: white;

      &:hover {
        background-color: #2f4d6f;
      }
    }
    > form .userinfo-each-label {
      margin: 23px auto;

      position: relative;
    }

    > form .userinfo-each-label input,
    form .userinfo-each-label div {
      font-size: 1.2rem;
      width: 300px;
      border-left: none;
      border-right: none;
      border-top: none;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 20px;
    }
    form .userinfo-button-label {
      display: flex;
      justify-content: center;
      margin: 40px 0;
    }
    > form .userinfo-button-label .btn-edit {
      width: 80px;
      height: 40px;
      border-radius: 20px;
      margin-left: 120px;
    }
    > form .alert-box {
      text-align: center;
      color: red;
    }
    .btn-exit {
      width: 80px;
      height: 40px;
      border-radius: 20px;
      background-color: red;
      color: white;
      &:hover {
        background-color: #ff443c;
      }
    }
  `,

  ImgDiv: styled.div`
    width: 200px;
    height: 200px;
    margin: 10px auto;
  `,
};
