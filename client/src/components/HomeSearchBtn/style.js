import styled from "styled-components";

export const Styled = {
  //오른쪽 버튼
  RightBtn: styled.button`
    border-radius: 5px;
    position: relative;
    z-index: 7.9; //버튼
    /* left: -10px;
    bottom: 20px; */
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    height: 40px;
    width: 100px;

    border: none;
    cursor: pointer;
    perspective: 230px;
    transition: all 0.5s ease-in-out;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background-color: rgb(192, 251, 255);
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 5px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    &:hover {
      color: black;
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
    }
    &:active {
      //
    }
  `,
  RightBtnBox: styled.div`
    z-index: 7.9;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0 10px 0px;
  `,
};

// &:hover {
// 	/* box-shadow: inset 2px 2px 0px 0px rgba(255, 255, 255, 0.5), 0px 7px 7px 7px rgba(0, 0, 0, 0.1),
// 		5px 5px 0px 0px rgba(0, 0, 0, 0.1); */
// 	background-image: linear-gradient(
// 		to left top,
// 		rgba(255, 255, 255, 0.9) 0,
// 		rgba(0, 0, 0, 0) 60%,
// 		rgba(0, 0, 0, 0) 100%
// 	);
// }
