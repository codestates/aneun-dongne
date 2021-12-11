import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-top: 1px rgb(192, 251, 255) solid;
    border-bottom: 1px rgb(192, 251, 255) solid;
    margin-bottom: 10px;
    /* background-color: green; */
  `,
  Side: styled.div`
    /* border: 1px gray solid; */
    /* background-color: skyblue; */
    border-right: 1px rgb(192, 251, 255) solid;
    display: flex;
    flex-direction: column;
    width: 30%;

    .footer-logo {
      /* background-color: orange; */
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-right: auto;
      margin-left: auto;
      padding-top: 20px;
      padding-bottom: 30px;
    }
    img {
      width: 60px;
      height: 30px;
    }

    .footer-logo-text {
      margin: 0;
      text-align: center;
      margin-top: 30px;
      font-size: 1.2rem;

      letter-spacing: 0.1em;
      transition: all 0.3s ease;

      &:hover {
        color: rgb(21, 225, 240);
        padding-left: 10px;
      }
    }

    .side-col {
      /* width: 50%; */
      display: flex;
      background-color: red;
      flex-direction: column;
      justify-content: space-between;
    }
    .side-col .info-icon {
      display: flex;
      /* justify-content: space-evenly; */
      padding: 10px;
      background-color: white;
      /* border: 1px gray solid; */
      padding-left: 20%;
      a {
        transition: all 0.3s ease;
        text-decoration: none;
        color: gray;
      }
    }
    .side-col .info-icon a:hover {
      color: rgb(21, 225, 240);
      padding-left: 10px;
    }
    .side-col .info-icon i {
      /* display: none; */
      padding-right: 20px;
    }
  `,
  User: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    /* margin-left: auto;
    margin-right: auto; */
    /* background-color: yellow; */

    > .user-info {
      display: flex;
      flex-direction: column;
      /* border: 1px gray solid; */
    }
    > .user-info .user-name-job-wrapper {
      /* display: flex; */
    }
    > .user-info .user-name {
      /* border: 1px gray solid; */
      margin: 10px;
      width: 100px;
      height: 50px;
      text-align: center;
      padding: 15px 0 15px 0;
      border-radius: 20px;
      transition: all 0.3s ease;
      &:hover {
        color: rgb(21, 225, 240);
        padding-left: 10px;
      }
    }
    > .user-info .user-job {
      /* border: 1px gray solid; */
      /* background-color: rgb(192, 251, 255); */
      background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      margin: 10px;
      width: 100px;
      height: 50px;
      text-align: center;
      padding: 15px 0 15px 0;
      border-radius: 20px;
      transition: all 0.3s ease;
      &:hover {
        color: rgb(21, 225, 240);
        padding-left: 10px;
      }
    }
    > .user-info .info-icon {
      padding: 10px;
      display: flex;
      /* justify-content: space-evenly; */

      /* border: 1px gray solid; */
      > i {
        padding-right: 10px;
      }
    }
    a {
      transition: all 0.3s ease;
      text-decoration: none;
      color: gray;
    }
    .user-info .info-icon a:hover {
      color: rgb(21, 225, 240);
      padding-left: 10px;
    }
  `,
  TeamName: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    > h2 {
      text-align: center;
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
    #footer-logo-img1 {
      animation: blink 6s ease-in-out infinite;
      animation-delay: 1s;
      @keyframes blink {
        10% {
          opacity: 1;
          /* margin-left: 0; */
        }
        25% {
          opacity: 0;
          /* margin-left: 20px; */
        }
        50% {
          opacity: 0;
        }
        75% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }

    #footer-logo-img2 {
      animation: blink2 6s ease-in-out infinite;
      animation-delay: 2s;
      @keyframes blink2 {
        0% {
          opacity: 0;
          /* margin-left: 0; */
        }
        25% {
          opacity: 1;
          /* margin-left: 20px; */
        }
        50% {
          opacity: 0;
        }
        75% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
    #footer-logo-img3 {
      animation: blink3 6s ease-in-out infinite;
      animation-delay: 2s;

      @keyframes blink3 {
        0% {
          opacity: 0;
          /* margin-left: 0; */
        }
        25% {
          opacity: 0;
          /* margin-left: 20px; */
        }
        50% {
          opacity: 1;
        }

        75% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
    #footer-logo-img4 {
      animation: blink4 6s ease-in-out infinite;
      animation-delay: 2s;

      @keyframes blink4 {
        0% {
          opacity: 0;
          /* margin-left: 0; */
        }
        25% {
          opacity: 0;
          /* margin-left: 20px; */
        }
        50% {
          opacity: 0;
        }
        75% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    }
  `,
};
