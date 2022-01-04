import styled from "styled-components";
export const Styled = {
  FixedComp: styled.div`
    margin-top: 73px;
    position: relative;
    /* background: red; */
  `,
  DivRow: styled.div`
    display: flex;
    /* background: blue; */
    @media screen and (max-width: 880px) {
      flex-direction: column;
    }
  `,
  DivColumn: styled.div`
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
    /* background: orange; */
  `,
  OpenModalBtn: styled.button`
    position: fixed;
    top: 75px;
    background: rgba(255, 255, 255, 0.5);
    background: skyblue;
  `,
};
