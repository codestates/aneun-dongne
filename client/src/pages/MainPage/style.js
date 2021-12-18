import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    position: relative;
    margin-right: auto;
    margin-left: auto;

    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin: 0 auto;
      padding: 0 2vw;

      width: 60%;
      height: 100%;
    }

    @media only screen and (min-width: 768px) {
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
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
    border: 1px solid rgb(194, 194, 194);
    border-radius: 5px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    background-color: transparent;

    :hover {
      background-color: #6af4aa;
      transition: all 0.3s;
    }

    @media all and (min-width: 768px) and (max-width: 1050px) {
      margin-top: 10rem;
      flex-direction: column;
      margin: 0 auto;

      border: 1px solid #aaa;
      width: 50%;
      height: 50%;
      font-size: 0.5rem;
    }

    @media only screen and (min-width: 768px) {
    }

    @media screen and (min-width: 480px) and (max-width: 767px) {
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
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 30px;
        font-size: 0.8rem;
      }
    }

    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin-top: 3px;
      margin: 0 auto;
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
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 30px;
        font-size: 0.8rem;
      }
    }
    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin-top: 3px;
      margin: 0 auto;
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
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 20px;
        font-size: 0.8rem;
      }
    }
    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin-top: 3px;
      margin: 0 auto;
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

    .title {
      margin-bottom: 50px;
      font-size: 2.5rem;
      font-weight: bold;
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 20px;
        font-size: 1rem;
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
    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin-top: 3px;
      margin: 0 auto;
      width: 100%;
      height: 50%;
    }
  `,
  TitleEndView: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
    background-color: rgb(57 57 57);

    .title {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      color: white;
      margin-bottom: 170px;
      border-radius: 20px;
      width: 800px;
      height: 50px;
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 20px;
        font-size: 1rem;
      }
    }
    @media all and (min-width: 768px) and (max-width: 1050px) {
      flex-direction: column;
      margin-top: 3px;
      margin: 0 auto;
      width: 100%;
      height: 200px;
    }
  `,
  Image: styled.div`
    display: flex;
    justify-content: center;

    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    img {
      width: 30%;
      height: 30%;

      object-fit: cover;

      margin-left: auto;
      margin-right: auto;
    }
    .play {
      margin-top: auto;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: auto;
    }
  `,
  VideoContainer: styled.div`
    width: 50%;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  `,
  MainTitleView: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: relative;
      width: 100%;
    }
    .main-title {
      margin-top: 10%;
      position: absolute;
      font-size: 3rem;
      font-family: fantasy;
      color: white;

      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 10rem;
        width: 30%;
        font-size: 0.5rem;
      }
    }
    .icons {
      margin-top: 10%;
      margin-left: 41%;
      margin-right: auto;
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
        color: #6af4aa;
        transition: all 0.3s;
      }
    }

    i {
      justify-content: center;
      margin-right: 50%;
      @media all and (min-width: 768px) and (max-width: 1050px) {
        margin-top: 1rem;
        width: 10%;
        font-size: 0.5rem;
      }
    }
  `,
};
