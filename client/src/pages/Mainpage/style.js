import styled from "styled-components";

export const Styled = {
  MainpageContainer: styled.div`
    height: 3000px; // 나중에 높이 정해지면 지우기

    button {
      width: 100px;
      height: 100px;
      background-color: red;
    }
  `,

  ModalContainer: styled.div`
    position: relative;
  `,

  ModalBackdrop: styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
  `,

  ModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 500px;
    height: 500px;
    z-index: 2;
    border: 1px solid black;

    .cancel-button {
      width: 50px;
      height: 50px;
      background-color: red;
    }
  `,
};
