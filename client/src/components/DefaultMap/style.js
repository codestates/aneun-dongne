import styled from "styled-components";

export const Styled = {
  Map: styled.div`
    margin: 5px;
    position: relative;
    width: 100%;
    height: 99%;
    /* height: 300px; */
    border-radius: 10px;
  `,
  ClickedAddress: styled.span`
    position: absolute;
    z-index: 999;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    margin: 0 40%;
  `,
};
