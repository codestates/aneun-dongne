import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    display: flex;
    flex-direction: column;
    /* border: 1px blue solid; */
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
    > .hide {
      display: none;
    }
  `,
  CutDownBtn: styled.button`
    border: none;
    background: transparent;
    width: 50px;
    margin-bottom: 1rem;
    > .hide {
      display: none;
    }
  `,
};
