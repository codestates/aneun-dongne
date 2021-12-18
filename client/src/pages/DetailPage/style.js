import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    > .hide {
      display: none;
    }
  `,
  Img: styled.img`
    width: 700px;
    height: 466px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);

    text-decoration: inherit;

    @media (max-width: 768px) {
      width: 80%;
      height: 406px;
      margin-left: 40px;
      margin-right: auto;
    }
    @media (max-width: 612px) {
      width: 450px;
      margin-left: 20px;
      margin-right: auto;
    }
  `,

  Title: styled.h2`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    margin-top: 60px;
    padding: 10px;
    color: skyblue;
  `,
  PageURL: styled.a`
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    padding: 10px;
    text-decoration: inherit;
  `,

  Overview: styled.span`
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    line-height: 30px;
    border: 1px #3a6fb0 solid;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;

    > .hide {
      display: none;
    }
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 40px;
      margin-right: auto;
    }
    @media (max-width: 612px) {
      width: 450px;
      margin-left: 20px;
      margin-right: auto;
    }
  `,
  ReadMoreBtn: styled.button`
    border: none;
    background: transparent;
    width: 50px;
    margin-bottom: 1rem;
    cursor: pointer;
  `,
  CutDownBtn: styled.button`
    border: none;
    background: transparent;
    width: 50px;
    margin-bottom: 1rem;
    cursor: pointer;
  `,
  LikeBtn: styled.button`
    border: 1px red solid;
    border-radius: 20px;
    width: 60px;
    height: 30px;
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
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    @media (max-width: 768px) {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 612px) {
      margin-left: auto;
      margin-right: auto;
    }
  `,
};
