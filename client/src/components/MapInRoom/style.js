import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    position: relative;
    width: 100%;

    height: 100%:

    margin-top: 3%;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px;
    border-color: #3a6fb0;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);

    text-decoration: inherit;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
  `,
  Map: styled.div`
    width: 600px;
    height: 400px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 1rem;
    @media (max-width: 740px) {
      width: 510px;
      height: 340px;
    }
    @media (max-width: 672px) {
      width: 480px;
      height: 320px;
    }
    @media (max-width: 620px) {
      width: 420px;
      height: 280px;
    }
    @media (max-width: 560px) {
      width: 360px;
      height: 240px;
    }
    @media (max-width: 460px) {
      width: 270px;
      height: 180px;
    }
    @media (max-width: 360px) {
      width: 210px;
      height: 140px;
    }
  `,
  Address: styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-self: center;
    > a {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3px;
    }
    > a img {
      width: 30px;
      height: 30px;
      text-decoration: none;
      color: black;
      border-radius: 10px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
    @media (max-width: 640px) {
      font-size: 1rem;
    }
    @media (max-width: 535px) {
      font-size: 0.8rem;
    }
    @media (max-width: 470px) {
      font-size: 0.8rem;
    }
    @media (max-width: 360px) {
      font-size: 0.8rem;
    }
  `,
};
