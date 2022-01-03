import styled from "styled-components";
import { Link } from "react-router-dom";
export const Styled = {
  PlaceLists: styled.div`
    @media (max-width: 1000px) {
      margin: 0px;
      grid-column-gap: 0px;
      grid-template-columns: repeat(1, 1fr);
    }
    /* @media (max-width: 1023px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    } */
    @media (max-width: 660px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    /* @media (min-width: 1040px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 40px;
      text-decoration-line: none;
      margin-left: 30px;
    }
    @media (min-width: 1360px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 1730px) {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    } */
    /* display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  text-decoration-line: none;
  margin-left: 30px; */
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
