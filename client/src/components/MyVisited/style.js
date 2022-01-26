import styled from "styled-components";

export const Styled = {
  Body: styled.div``,

  Div: styled.div`
    margin-left: 20px;
    position: relative;
    width: 500px;
    height: 300px;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px #3a6fb0 solid;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;

    @media screen and (max-width: 530px) {
      width: 450px;
    }

    @media screen and (max-width: 480px) {
      width: 400px;
    }

    @media screen and (max-width: 438px) {
      width: 350px;
    }

    @media screen and (max-width: 370px) {
      width: 320px;
    }
  `,
  // Map: styled.div`
  //   width: 480px;
  //   height: 300px;
  //   border-radius: 10px;
  //   margin-left: auto;
  //   margin-right: auto;
  //   margin-bottom: 1rem;

  //   @media screen and (max-width: 530px) {
  //     width: 440px;
  //   }

  //   @media screen and (max-width: 480px) {
  //     width: 380px;
  //   }

  //   @media screen and (max-width: 438px) {
  //     width: 330px;
  //   }

  //   @media screen and (max-width: 370px) {
  //     width: 300px;
  //   }
  // `,
  ModalContainer: styled.div`
    position: relative;
  `,

  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    backdrop-filter: contrast(50%);
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
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
  RightBtn: styled.button`
    border-radius: 5px;
    position: relative;
    z-index: 7.9;

    background-color: #3a6fb0;
    color: white;
    height: 40px;
    width: 150px;
    border: none;
    cursor: pointer;
    perspective: 230px;
    margin-left: auto;
    margin-right: auto;
    &:hover {
      background-color: #2f4d6f;
    }
    @media (max-width: 400px) {
      margin: 1px auto;

      width: 80px;
    }
  `,
};
