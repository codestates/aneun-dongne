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

    @media screen and (min-width: 880px) {
      position: sticky;
      left: 0;

      top: 75px;
      width: 100%;

      height: 90vh;
    }
    @media screen and (max-width: 880px) {
      height: 55vh;
      position: fixed;
      /* left: 0; */
      top: 75px;
      width: 100%;
      /* height: 90vh; */
      /* background: red; */
    }
  `,
  DivColumnSecond: styled.div`
    border-left: 1px gray solid;
    width: 240px;
  `,
  OpenModalBtn: styled.button`
    position: absolute;
    z-index: 998;
    top: 20px;
    left: 20px;
    padding: 10px;
    /* background: rgba(255, 255, 255, 0.5); */
    opacity: 0.7;
    border-radius: 10px;
    border: none;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  `,
};
