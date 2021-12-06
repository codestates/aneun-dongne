import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    /* position: fixed; */
    /* top: 200px; */
    display: flex;
    flex-direction: column;
    background-color: white;

    padding-left: 45px;

    padding-bottom: 30px;

    width: 750px;

    border-bottom: 1px rgb(192, 251, 255) solid;
  `,
  Map: styled.div`
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 10px;
    width: 700px;
    height: 400px;
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  `,
};
