import styled from "styled-components";

export const Styled = {
  HeaderContainer: styled.div`
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: white;
    width: 100%;
    .header-wrapper {
      display: flex;
      justify-content: space-between;
    }
    #logo {
      cursor: pointer;
      font-size: 2rem;
      font-weight: bold;
      width: 100px;
    }

    .header-button-wrapper {
      display: flex;
    }

    .mainpage-button {
      cursor: pointer;
      margin: 20px 20px;
      width: 100px;
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
    backdrop-filter: contrast(50%);
    /* backdrop-filter: brightness(50%); */

    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  `,

  LoginModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 450px;
    height: 500px;
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;
  `,

  ModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 450px;
    height: 650px;
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;
  `,
};
