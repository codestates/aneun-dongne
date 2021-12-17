import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    @media (min-width: 1024px) {
      z-index: -8;
      /* border-left: none; */
      /* border-right: none; */
      position: fixed;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: white;

      padding-left: 45px;

      padding-bottom: 30px;
      border-right: none;
      width: 100%;
      height: 80%;

      border-bottom: 1px #3a6fb0 solid;

      > span {
        z-index: -8;
      }
    }
    @media (max-width: 1023px) {
      /* width: 90%; */
      /* background: red; */
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 80%;
    }
  `,
  Map: styled.div`
    z-index: -8;
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 10px;
    /* width: 600px; */
    /* height: 100%; */
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
    @media (min-width: 1024px) {
      width: 600px;
      height: 100%;
    }
    @media (max-width: 1023px) {
      /* border: 1px red solid; */
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 0;
      width: 80%;
      height: 300px;
    }
  `,
};
