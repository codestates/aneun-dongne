import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    padding: 20px;
    border-top: 2px #2f4d6f solid;
    border-bottom: 2px #2f4d6f solid;
    margin-bottom: 10px;

    @media screen and (max-width: 780px) {
      width: 100%;
      font-size: 0.5rem;
      padding: 0px 0 0px 0;
    }
  `,
  Side: styled.div`
    padding-right: 40px;
    border-right: 2px #2f4d6f solid;
    display: flex;
    flex-direction: column;
    width: 30%;

    @media screen and (max-width: 780px) {
      padding-right: 0;
      min-width: 80px;
      width: 5%;
    }

    img {
      width: 60px;
      height: 30px;
    }

    .footer-logo-text {
      margin-top: 30px;
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      transition: all 0.3s ease;
      padding-left: 25%;
      @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 0.8rem;
        margin-top: 30px;
        padding-bottom: 15px;
        padding-left: 15%;
        padding-right: 0;
      }
      @media screen and (max-width: 640px) {
        width: 100%;
        font-size: 0.8rem;
        margin-top: 30px;
        padding-left: 15%;
      }
    }

    .side-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 0.5rem;
      }
    }
    .side-col .info-icon {
      display: flex;
      padding: 10px;
      background-color: white;
      padding-left: 20%;
      @media screen and (max-width: 780px) {
        padding: 5px;
      }
      a {
        transition: all 0.3s ease;
        text-decoration: none;
        color: gray;
        @media screen and (max-width: 780px) {
          width: 100%;
          font-size: 0.5rem;
        }
      }
      @media screen and (max-width: 640px) {
        width: 100%;
        font-size: 0.5rem;
        padding-left: 5%;
      }
    }
    .side-col .info-icon a:hover {
      color: #2f4d6f;
      padding-left: 10px;
      @media screen and (max-width: 780px) {
        padding-left: 5px;
      }
    }
    .side-col .info-icon i {
      padding-right: 20px;
      @media screen and (max-width: 780px) {
        padding: 0px 3px 3px 0;
      }
    }
  `,
  User: styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    @media screen and (max-width: 780px) {
      margin-left: 5px;
      margin-right: 5px;
      padding: 0px 0 0px 0;
    }

    > .user-info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        padding: 0;
        width: 60px;
      }
      @media screen and (max-width: 400px) {
        width: 40px;
      }
    }

    > .user-info .user-name {
      width: 100px;
      height: 40px;
      text-align: center;
      margin-top: 30px;
      letter-spacing: 0.1em;
      transition: all 0.3s ease;
      padding-bottom: 30px;

      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        text-align: start;
      }
    }

    > .user-info .info-icon {
      display: flex;
      height: 50px;

      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        padding: 0px 0 0px 0;
      }

      > .github-icon {
        margin-right: 10px;
        @media screen and (max-width: 780px) {
          font-size: 0.5rem;
        }
      }
    }
    a,
    span {
      transition: all 0.3s ease;
      text-decoration: none;
      color: gray;
      @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 0.5rem;
      }
    }

    .user-info .info-icon a:hover {
      color: #2f4d6f;
      padding-left: 10px;
      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        padding-left: 3px;
      }
    }
  `,
  TeamName: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h2 {
      text-align: center;
      @media screen and (max-width: 780px) {
        width: 100%;
        font-size: 0.5rem;
        padding-left: 3px;
      }
    }
    > div {
      display: flex;
      justify-content: center;
    }
    > div img {
      margin: 0 50px;
      width: 60px;
      height: 30px;
    }
  `,
};
