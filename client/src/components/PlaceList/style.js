import styled from "styled-components";
import { Link } from "react-router-dom";
export const Styled = {
  PlaceLists: styled.div`
    /* margin-top: 0; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 880px) {
      flex-direction: row;
      margin-top: 55vh;
      /* background: red; */
    }
  `,
  MoveToTopBtn: styled.button`
    border-radius: 70%;

    background: rgba(255, 255, 255, 0.7);
    /* background-color: #b2e0f4; */
    width: 60px;
    height: 60px;
    z-index: 999;
    position: fixed;
    bottom: 10px;
    right: 10px;
    border: 0.5px solid #3a6fb0;

    display: ${(props) => (props.btnStatus ? "inline" : "none")};
    &:hover {
      background: rgba(192, 251, 255, 0.7);
      transform: scale(1.1);
      bottom: 13px;
      border: 0.5px solid white;
    }
  `,

  StyledLink: styled(Link)`
    text-decoration: none;
    color: black;
  `,
  Div: styled.div`
    color: black;
  `,
};
