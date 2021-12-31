import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    padding: 20px;
    /* margin-left: 20px; */
    /* margin-right: 20px; */
    border-top: 2px #2f4d6f solid;
    border-bottom: 2px #2f4d6f solid;
    margin-bottom: 10px;

    @media screen and (max-width: 780px) {
      width: 100%;

      font-size: 0.5rem;
      /* padding-left: 5px; */
      /* padding-right: 5px; */
      /* margin-right: 5px; */
      padding: 0px 0 0px 0;
    }
  `,
  Side: styled.div`
    /* background: orange; */
    /* min-width: 20%; */
    /* background: skyblue; */
    padding-right: 40px;
    /* padding-left: 40px; */

    border-right: 2px #2f4d6f solid;
    display: flex;
    flex-direction: column;
    width: 30%;

    @media screen and (max-width: 780px) {
      /* font-size: 0.5rem; */
      padding-right: 0;
      /* padding-right: 10px; */
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
      /* padding-top: 20px; */
      /* padding-bottom: 30px; */
      padding-left: 25%;
      /* min-width: 200px; */
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
      /* background: blue; */
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
    /* background: blue; */
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 30px; */

    /* margin-left: 50px; */
    /* @media screen and (max-width: 1500px) { */
    /* display: grid; */
    /* display: flex; */
    //!경화님꺼
    /* @media screen and (max-width: 1400px) {
  

      grid-template-columns: 1fr 1fr;
      grid-column-gap: 130px;
    } */
    //!
    @media screen and (max-width: 780px) {
      /* font-size: 0.5rem; */
      margin-left: 5px;
      margin-right: 5px;
      padding: 0px 0 0px 0;
    }

    @media screen and (max-width: 640px) {
      /* display: grid; */
      /* display: flex; */

      /* grid-template-columns: 1fr 1fr; */
      /* grid-column-gap: 100px; */
    }
    @media screen and (max-width: 400px) {
      /* display: grid; */
      /* display: flex; */

      /* grid-template-columns: 1fr 1fr; */
      /* grid-column-gap: 10px; */
    }

    > .user-info {
      margin-left: 10px;

      /* background: red; */
      display: flex;
      flex-direction: column;
      @media screen and (max-width: 780px) {
        /* width: 100%; */
        font-size: 0.5rem;
        padding: 0;
        width: 60px;
      }
      @media screen and (max-width: 400px) {
        /* background: orange; */
        width: 40px;
      }
    }

    > .user-info .user-name {
      /* background: skyblue; */
      /* margin: 10px; */
      width: 100px;
      height: 40px;
      text-align: center;
      /* padding: 0 0 15px 0; */
      /* border-radius: 20px; */
      /* transition: all 0.3s ease; */

      //!추가한것
      margin-top: 30px;
      /* font-size: 1.2rem; */
      letter-spacing: 0.1em;
      transition: all 0.3s ease;
      /* padding-top: 20px; */
      padding-bottom: 30px;
      /* padding-left: 25%; */

      //!
      @media screen and (max-width: 780px) {
        /* width: 100%; */
        font-size: 0.5rem;
        /* margin: 5px; */
        /* background: orange; */
        text-align: start;

        /* margin: 0px; */
        /* padding: 20px 0 0px 0; */
      }
    }
    /* > .user-info .user-job {
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
      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        text-align: start;
        padding: 0px 0 0px 0;
        height: 10px;
      }
    } */
    > .user-info .info-icon {
      /* padding: 15px 10px 15px 10px; */
      /* width: 100px; */
      /* background: red; */
      display: flex;
      /* justify-content: space-evenly; */
      /* margin: 10px; */
      height: 50px;

      @media screen and (max-width: 780px) {
        font-size: 0.5rem;
        padding: 0px 0 0px 0;
        /* background: red; */
        /* height: 10px; */
      }

      > i {
        padding-right: 10px;
        /* margin-left: 10px; */
        /* background: orange; */
        @media screen and (max-width: 780px) {
          font-size: 0.5rem;
          padding-right: 3px;
        }
      }
    }
    a,
    span {
      /* background: purple; */
      /* width: 200px; */
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
        /* width: 100%; */
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
