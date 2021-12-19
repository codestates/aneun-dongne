import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    position: relative;
    width: 100%;
    overflow-x: hidden;

    @media screen and (max-width: 780px) {
      font-size: 1.3rem;
    }
  `,
  MainTitleView: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 780px) {
      width: 100%;

      margin-top: 10%;
      font-size: 1.2rem;
    }

    img {
      position: relative;
      width: 100%;
      @media screen and (max-width: 780px) {
        max-width: 100%;

        height: auto;
      }
    }
    .main-title {
      margin-top: 10%;
      position: absolute;
      font-size: 3rem;
      color: white;

      @media screen and (max-width: 780px) {
        position: absolute;
        text-align: center;

        width: 100%;
        margin-top: 40px;
        font-size: 1rem;
      }
    }
    .icons {
      color: #ffffff7a;
      width: 100px;
      margin: 0 auto;
      animation-name: updown;
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;

      @keyframes updown {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(10px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      :hover {
        cursor: pointer;
        color: white;
        transition: all 0.3s;
      }
      @media screen and (max-width: 780px) {
        width: 100px;
        margin-top: 50px;
        size: 0.5rem;
        display: none;
      }
    }

    i {
      justify-content: center;
      margin-right: 50%;
    }
  `,
  StartButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    width: 180px;
    height: 70px;
    border-style: none;
    cursor: pointer;
    transition: all 0.3s;
    border: 2px solid rgb(194, 194, 194);
    border-radius: 5px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;

    :hover {
      color: white;
      background-color: #ffffff7a;

      transition: all 0.3s;
    }
    @media screen and (max-width: 780px) {
      width: 20%;
      height: 30px;
      font-size: 0.5rem;
    }
  `,
  PopularTitleView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    margin-top: 10%;

    .title {
      font-size: 2.5rem;
      font-weight: bold;

      @media screen and (max-width: 780px) {
        font-size: 0.8rem;
      }
    }

    @media screen and (max-width: 780px) {
      flex-direction: column;
      width: 100%;
      height: 50%;
    }
  `,

  FocusTitleView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    .title {
      font-size: 2.5rem;
      font-weight: bold;

      @media screen and (max-width: 780px) {
        font-size: 0.8rem;
      }
    }

    @media screen and (max-width: 780px) {
      flex-direction: column;
      width: 100%;
      height: 50%;
    }
  `,
  DiyTitleView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;

    .title {
      font-size: 2.5rem;
      font-weight: bold;

      @media screen and (max-width: 780px) {
        font-size: 0.8rem;
      }
    }

    @media screen and (max-width: 780px) {
      flex-direction: column;
      width: 100%;
      height: 50%;
    }
  `,
  PeopleTitleView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    background-color: #505f7b;
    color: white;
    @media screen and (max-width: 780px) {
      height: 600px;
    }
    .title {
      margin-bottom: 50px;
      font-size: 2.5rem;
      font-weight: bold;
      @media screen and (max-width: 780px) {
        font-size: 1.3rem;
      }
    }

    .peopleTitle {
      margin-top: 30px;
      font-size: 1.5rem;
      font-weight: bold;

      > img {
        width: 15px;
        height: 15px;
        cursor: pointer;
      }
    }
  `,
  TitleEndView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 40vh;
    background-color: rgb(57 57 57);

    @media screen and (max-width: 780px) {
      height: 30vh;
    }

    .title {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
      color: white;
      margin-bottom: 200px;
      margin-top: 20px;
      border-radius: 20px;
      width: 800px;
      height: 50px;

      @media screen and (max-width: 780px) {
        margin-top: 80px;
        font-size: 1rem;
        width: 80%;
        text-align: center;
      }
    }
  `,

  Image: styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;

    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 780px) {
      width: 60%;
      margin-bottom: 15%;
    }
    img {
      width: 50%;
      height: 30%;
      object-fit: cover;
      margin-left: auto;
      margin-right: auto;
    }
    .play {
      margin-top: auto;
      margin-left: 5%;
      margin-right: auto;
      margin-bottom: auto;
    }
    .play-popular {
      margin-top: auto;
      margin-right: auto;
      margin-bottom: auto;
    }
    .play-focus {
      margin-top: auto;
      margin-right: auto;
      margin-bottom: auto;
    }
    .play-diy {
      margin-top: auto;
      margin-left: 3%;
      margin-right: auto;
      margin-bottom: auto;
    }
    .illust {
      margin-top: 7%;
      display: flex;
      justify-content: center;
      width: 40%;
      margin-left: 5px;
    }
  `,
  VideoContainer: styled.div`
    width: 80%;

    img {
      width: 80%;
      object-fit: cover;
      border-radius: 8px;
    }
  `,
};
