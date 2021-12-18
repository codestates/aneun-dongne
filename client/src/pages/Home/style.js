import styled from "styled-components";
export const Styled = {
  FixedComp: styled.div`
    margin-top: 73px;
  `,
  DivRow: styled.div`
    @media (max-width: 1023px) {
      /* display: flex; */

      /* background: yellow; */
    }
    @media (min-width: 1024px) {
      margin-left: auto;
      margin-right: auto;
      display: flex;

      justify-content: space-evenly;
    }
  `,
  DivColumn: styled.div`
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      /* margin: auto; */
      /* display: flex; */
      /* flex-direction: column; */
      /* background: blue; */
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-content: center;
    }
  `,
  DivColumnSecond: styled.div`
    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      /* background: red; */
    }
    @media (min-width: 1024px) {
      display: flex;

      flex-direction: column;
      align-content: center;

      position: absolute;
      right: 3%;
    }
  `,
};
