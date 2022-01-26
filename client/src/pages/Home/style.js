import styled from "styled-components";
export const Styled = {
  FixedComp: styled.div`
    margin-top: 73px;
    position: relative;
  `,
  DivRow: styled.div`
    display: flex;

    @media screen and (max-width: 880px) {
      flex-direction: column;
    }
  `,
  DivColumn: styled.div`
    position: relative;
    /* background: orange; */
    /* margin-right: 60px; */

    /* width: 100px; */
    @media screen and (min-width: 880px) {
      position: fixed;
      left: 0;

      top: 75px;
      /* width: 100%; */
      width: ${(props) => `${props.width}px`};
      height: 90vh;
    }
    @media screen and (max-width: 880px) {
      height: 55vh;
      position: fixed;
      /* left: 0; */
      width: 100%;
      top: 75px;

      /* height: 401px; */
      height: ${(props) => `${props.upBoxHeight}px` || "null"};
      /* background: red; */
    }
  `,
  DivColumnSecond: styled.div`
    width: 240px;
    height: 240px;
    /* background: red; */
    /* margin: auto 0; */
    @media screen and (min-width: 880px) {
      position: absolute;
      right: 0;
    }
    @media screen and (max-width: 880px) {
      margin-top: ${(props) => `${props.height}px` || "null"};

      width: 100%;
    }
  `,
  OpenModalBtn: styled.button`
    position: absolute;
    z-index: 998;
    top: 20px;
    left: 20px;
    padding: 10px;
    background: rgba(58, 111, 176, 0.7);

    border-radius: 10px;
    border: none;
    &:hover {
      background: rgba(58, 111, 176, 1);
      cursor: pointer;
    }
  `,
};
