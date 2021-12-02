import styled from "styled-components";

export const Styled = {
  HeaderContainer: styled.div`
    position: fixed;
    z-index: 999;
    background-color: white;
    width: 100%;

    .header-wrapper {
      display: flex;
      justify-content: space-between;
    }
    #logo {
      cursor: pointer;
      margin: 20px;
      font-size: 2rem;
      font-weight: bold;
    }
    .header-button {
      display: flex;
    }

    .mainpage-button {
      cursor: pointer;
      margin: 20px 20px;
      width: 90px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
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
  `,
};
