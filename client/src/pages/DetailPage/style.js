import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    margin-top: 80px;
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
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;
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
    margin-bottom: 10px;
    margin-top: 100px;
    padding: 10px;
    color: skyblue;
    &:hover {
      transform: scale(1.05);

      transition: all 0.3s ease;
    }
  `,
  PageURL: styled.a`
    margin-left: auto;
    margin-right: 2rem;
    margin-bottom: 2rem;
    text-decoration: none;
    color: black;
    cursor: pointer;
  `,

  Overview: styled.span`
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    border: 1px rgb(192, 251, 255) solid;
    border-radius: 10px;
    padding: 20px;
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
    margin-bottom: 30px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.1s ease-in-out;
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
