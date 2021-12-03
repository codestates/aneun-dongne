import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    > .hide {
      display: none;
    }
  `,
  Img: styled.img`
    /* border: 1px red solid; */
    width: 696px;
    height: 466px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  `,

  Address: styled.h2`
    margin-left: auto;
    margin-right: auto;
    color: skyblue;

    margin-bottom: 1rem;
    margin-top: 1rem;
  `,
  Title: styled.div`
    margin-left: auto;
    margin-right: auto;
  `,
  PageURL: styled.a`
    margin-left: auto;
    margin-right: 2rem;
    margin-bottom: 2rem;
  `,

  Overview: styled.span`
    width: 700px;
    margin-left: auto;
    margin-right: auto;

    > .hide {
      display: none;
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
    /* background: white; */
    width: 60px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
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
      transform: scale(1.3);
    }
  `,
};
