import styled from "styled-components";
import { Link } from "react-router-dom";
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
      margin-left: 15px;
      padding: 10px;
      cursor: pointer;
      font-size: 2rem;
      font-weight: bold;
      width: 100px;
    }

    .header-button-wrapper {
      display: flex;
    }

    .kakao_mainpage-button {
      cursor: pointer;
      margin: 20px 20px;
      width: 190px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .mainpage-button {
      cursor: pointer;
      margin: 20px 20px;
      width: 100px;
      text-align: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    @media screen and (max-width: 480px) {
      .mainpage-button {
        font-size: 1rem;
        margin: 30px 5px;
      }
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
    height: ${(props) => props.height || "650px"};
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;

    @media screen and (max-height: 900px) {
      // height: 500px;
      height: ${(props) => props.height || "500px"};
      width: 350px;
    }

    @media screen and (max-width: 500px) {
      // height: 500px;
      height: ${(props) => props.height || "500px"};
      width: 340px;
    }
  `,
  StyledLink: styled(Link)`
    text-decoration: none;
    color: black;
  `,
};
