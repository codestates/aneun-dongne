import styled from "styled-components";

export const Styled = {
  RightBtnBox: styled.div`
    @media (min-width: 768px) {
      /* background: red; */
    }
    z-index: 7.9;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0 10px 0px;
  `,
  //오른쪽 버튼
  RightBtn: styled.button`
    @media (min-width: 768px) {
      /* background: red; */
    }
    border-radius: 5px;
    position: relative;
    z-index: 7.9;
    /* left: -10px;
    bottom: 20px; */
    position: relative;
    background-color: #3a6fb0;
    color: white;
    height: 40px;
    width: 100px;
    border: none;
    cursor: pointer;
    perspective: 230px;
    &:hover {
      background-color: #2f4d6f;
    }
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      z-index: 0;
      background-color: #3a6fb0;
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 5px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    }
  `,
};
