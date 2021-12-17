import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    border-top: 1px #2f4d6f solid;
    border-bottom: 1px #2f4d6f solid;
    margin-bottom: 10px;
  `,
  Side: styled.div`
    min-width: 200px;
    border-right: 1px #2f4d6f solid;
    display: flex;
    flex-direction: column;
    width: 30%;

    .footer-logo {
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
    }

    .side-col {
      display: flex;
      background-color: red;
      flex-direction: column;
      justify-content: space-between;
    }
    .side-col .info-icon {
      display: flex;
      padding: 10px;
      background-color: white;
      padding-left: 20%;
      a {
        transition: all 0.3s ease;
        text-decoration: none;
        color: gray;
      }
    }
    .side-col .info-icon a:hover {
      color: #2f4d6f;
      padding-left: 10px;
    }
    .side-col .info-icon i {
      /* display: none; */
      padding-right: 20px;
    }
  `,
  User: styled.div`
    display: flex;
    /* width: 100%; */
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
      /* &:hover {
        color: rgb(21, 225, 240);
        padding-left: 10px;
      } */
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
      /* &:hover {
        color: rgb(21, 225, 240);
        padding-left: 10px;
      } */
    }
    > .user-info .info-icon {
      padding: 15px 10px 15px 10px;
      display: flex;
      margin: 10px;

      height: 50px;
      /* justify-content: space-evenly; */

      /* border: 1px gray solid; */
      > i {
        padding-right: 10px;
      }
    }
    a,
    span {
      width: 200px;
      transition: all 0.3s ease;
      text-decoration: none;
      color: gray;
    }
    /* span:hover {
      color: rgb(21, 225, 240);
    } */
    .user-info .info-icon a:hover {
      color: #2f4d6f;
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
  `,
};
