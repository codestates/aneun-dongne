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
  `,

  FormContainer: styled.div`
    /* border: 1px gray solid; */
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    > h2 {
      /* background: red; */
      margin-top: 80px;
      margin-left: 20px;
      margin-right: 20px;
      text-align: center;
    }
    > .button-wrapper {
      margin: 40px;
      display: flex;
    }
    > .button-wrapper button {
      margin: 30px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 10px;
      width: 90px;
      height: 30px;
      cursor: pointer;
      &:hover {
        background-color: #ff443c;
        border: none;
      }
    }

    .error-message {
      color: red;
    }
  `,
};
