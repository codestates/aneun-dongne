import styled from "styled-components";

export const Styled = {
  Comment: styled.div`
    position: relative;
    display: flex;

    /* border: 1px red solid; */
    /* height: 200px; */
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 40px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.1s ease-in-out;
  `,
  Profile: styled.div`
    position: relative;
    /* background-color: red; */
    display: flex;
    width: 80px;
    height: 140px;
    margin: 40px;
  `,
  ProfileImg: styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    position: absolute;
    /* background-color: white; */
  `,

  NickName: styled.span`
    /* background-color: yellowgreen; */
    position: absolute;
    bottom: 5px;
    text-align: center;
    width: 100%;
  `,

  ContentBox: styled.div`
    /* background-color: yellow; */
    margin-top: 30px;
    position: relative;
    width: 480px;
    /* height: 140px; */
    > button {
      position: absolute;
      right: -10px;
      top: 20px;
      width: 80px;
      border: none;
      height: 40px;
      background-color: rgb(192, 251, 255);
      background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      transition: all 0.5s ease;
      border-radius: 20px;
    }

    > div {
      /* background: red; */
      margin-left: 10%;
    }
  `,

  HashTagWrapper: styled.div`
    /* margin-top: 100px; */
    /* position: absolute; */
    /* background-color: red; */
    margin: 20% auto 0 auto;
    width: 370px;

    left: 10px;
    padding-right: 10px;
    white-space: nowrap;
    border: none;
  `,
  Date: styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
  `,
};
