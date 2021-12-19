import styled from "styled-components";
export const Styled = {
  FixedComp: styled.div`
    margin-top: 73px;
  `,
  DivRow: styled.div`
    @media (max-width: 1023px) {
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
