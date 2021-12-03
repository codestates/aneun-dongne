import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
  `,
  Map: styled.div`
    width: 700px; //px로 할까요?? 작은모니터 큰모니터 생각하느라 괜히사소한거에 걱정되네요 ㅋㅋ
    height: 400px;
    margin: auto;
    margin-bottom: 1rem;
  `,
  Address: styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;
  `,
};
