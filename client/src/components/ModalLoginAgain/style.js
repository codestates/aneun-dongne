import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.button`
    position: absolute;
    top: 20px;
    right: 35px;
    font-size: 30px;
    cursor: pointer;
    background-color: white;
    z-index: 999;
    padding: 5px;
    margin-left: auto;
    border: none;
  `,

  FormContainer: styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    > h2 {
      margin-top: 100px;
    }
    > .button-wrapper {
      margin: 40px;
      display: flex;
    }
    > .button-wrapper button {
      margin: 30px;
      border: none;
      border-radius: 10px;
      background: #3a6fb0;
      color: white;
      width: 90px;
      height: 30px;
      cursor: pointer;
      &:hover {
        background-color: #2f4d6f;
      }
    }
    .error-message {
      color: red;
    }
  `,
};
