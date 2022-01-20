import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    justify-content: space-between;
    .menu-bar {
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #8ea1da;
      background-image: linear-gradient(
        to bottom,
        rgba(192, 251, 255, 1) 0,
        rgba(192, 251, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.1) 100%
      );
    }

    .profile {
      display: flex;
      align-items: center;
      width: 300px;
      height: 150px;
      border-radius: 20px;
      background-color: white;
      margin-bottom: 40px;
    }

    .profile-image {
      margin: 25px;
      width: 100px;
      height: 100px;
    }

    .profile-name {
      font-size: 1.5rem;
    }

    .menu-bar > .profile > .profile-image > img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
    }

    .link-container {
      display: flex;
      flex-direction: column;
      margin-right: 70px;
    }

    .link-wrapper {
      list-style: none;
      margin: 20px 0px;
    }

    .page-container {
      margin-top: 75px;
      display: flex;
      justify-content: center;
    }

    @media screen and (min-width: 320px) {
      flex-direction: column;
      .menu-bar {
        align-items: flex-start;
        margin-top: 260px;
        height: 80px;
        min-width: 50%;
      }

      .link-container {
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 190px;
      }

      .link-text {
        font-size: 0.8rem;
      }
    }

    @media screen and (min-width: 412px) {
      .link-text {
        font-size: 1rem;
      }
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      .menu-bar {
        align-items: center;
        height: 100vh;
        min-width: 400px;
        margin-top: 0px;
      }
      .link-container {
        flex-direction: column;
        width: 60%;
        margin-bottom: 0px;
      }

      .link-text {
        font-size: 1.5rem;
      }
    }
  `,

  NavLink: styled(NavLink)`
    text-decoration: none;
    font-size: 1.5rem;
    color: #96a3b6;
    font-weight: bold;
    &:hover {
      color: #172a71;
    }

    .fas {
      width: 50px;
      text-align: center;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;

      .fas {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  `,
  MoveToTopBtn: styled.button`
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    z-index: 100;
    border-radius: 100%;
    background-color: #b2e0f4;
    color: white;
    transition: all 0.3s;
    border: 0.5px solid white;
    display: ${(props) => (props.btnStatus ? "flex" : "none")};
    &:hover {
      background-color: #9cb1e0;
      transition: all 0.3s;
      border: 0.5px solid white;
    }
  `,
};
