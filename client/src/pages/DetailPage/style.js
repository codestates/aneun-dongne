import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    > .hide {
      display: none;
    }
  `,
  Img: styled.img`
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
  `,

  Title: styled.h2`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    margin-top: 5%;
    padding: 10px;
    color: #3a6fb0;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media (max-width: 640px) {
      font-size: 1.4rem;
    }
    @media (max-width: 535px) {
      font-size: 1.3rem;
    }
    @media (max-width: 470px) {
      font-size: 1.2rem;
    }
    @media (max-width: 360px) {
      font-size: 1rem;
    }
  `,

  PageURL: styled.a`
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 3%;
    text-decoration: none;
    color: gray;
    cursor: pointer;
    padding: 1%;
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
    > .hide {
      display: none;
    }
  `,

  Overview: styled.span`
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    line-height: 200%;
    // border: 1px #3a6fb0 solid;
    border-radius: 10px;
    padding: 3%;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    > .hide {
      display: none;
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
  ReadMoreBtn: styled.button`
    border: none;
    background: transparent;
    width: auto;
    cursor: pointer;
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
  CutDownBtn: styled.button`
    border: none;
    background: transparent;
    width: auto;
    cursor: pointer;
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
  LikeBtn: styled.button`
    border: 1px red solid;
    border-radius: 20px;
    width: auto;
    height: auto;
    padding: 1% 2%;
    margin: 40px auto;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.3s ease-in-out;
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }

    &:active {
      transform: scale(1.5);
    }
    .fa-heart {
      color: red;
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
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    @media (max-width: 750px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 320px) {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
  `,
};
