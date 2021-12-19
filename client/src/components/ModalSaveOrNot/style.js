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
      width: 90px;
      height: 30px;

      &:hover {
        background-color: #2f4d6f;
      }
    }

    .error-message {
      color: red;
    }
  `,
};
