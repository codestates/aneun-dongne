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

    .error-message {
      color: red;
    }
  `,
};
