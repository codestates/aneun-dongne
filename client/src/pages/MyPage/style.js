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
      align-items: center;
      justify-content: center;
      background-color: #8ea1da;
      background-image: linear-gradient(
        to bottom,
        rgba(192, 251, 255, 1) 0,
        rgba(192, 251, 255, 0.5) 60%,
        rgba(255, 255, 255, 0.1) 100%
      );
      height: 100vh;
      width: 400px;
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

    .link-text {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 1024px) {
      flex-direction: column;
      .menu-bar {
        align-items: flex-start;
        margin-top: 250px;
        height: 80px;
        width: 100%;
      }

      .link-container {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 190px;
      }
    }

    @media screen and (max-width: 780px) {
      .link-text {
        font-size: 1.3rem;
      }
    }

    @media screen and (max-width: 480px) {
      .link-text {
        font-size: 0.8rem;
        padding: 0px 7px;
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
};
