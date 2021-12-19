import styled from "styled-components";

export const Styled = {
  RightBtnBox: styled.div`
    @media (min-width: 768px) {
    }
    z-index: 7.9;
    display: flex;
    justify-content: space-evenly;
    margin: 10px 0 10px 0px;
  `,
  //오른쪽 버튼
  RightBtn: styled.button`
    border-radius: 5px;
    position: relative;
    z-index: 7.9;
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
    @media (max-width: 400px) {
      margin: 1px auto;

      width: 80px;
    }
  `,
};
