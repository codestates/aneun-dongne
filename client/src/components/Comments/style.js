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
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
    @media (max-width: 768px) {
      /* width: 80%; */
      background: red;
      margin-left: 10px;
    }
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

    button:hover {
      transform: scale(1.1);
    }

    button:active {
      transform: scale(1.1);
    }
    @media (max-width: 768px) {
      width: 80%;
      /* background: blue; */
      /* margin-left: 10px; */
    }
  `,
  //!-- 내가 바꾼거 댓글 높이
  Content: styled.div`
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    line-height: 1em;
    word-break: break-all;

    top: 0;
    left: 10px;
    width: 370px;
    min-height: 140px;
    padding-left: 10px;
    padding-right: 10px;

    background-color: skyblue;
  `,

  ContentInput: styled.div`
    display: flex;
    padding: 10px;
    width: 480px;
    /* border: 1px gray solid; */
    /* flex-wrap: wrap; */
    /* background-color: burlywood; */
    > #comment-read {
      word-wrap: break-word;
      /* background-color: green; */
      > span {
      }
    }
    > #comment-change {
      display: flex;
      flex-wrap: wrap;
      width: 370px;
      height: 70px;
    }
    > input,
    div {
      /* background-color: whitesmoke; */

      width: 370px;
      padding-left: 10px;
      padding-right: 10px;
    }
  `,
  //!----
  BtnWrapper: styled.div`
    width: 370px;

    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    > button {
      position: absolute;
      right: -10px;

      width: 80px;
      border: none;
      height: 40px;
      margin: 0px 0 0 0;
      background-color: rgb(192, 251, 255);
    }
    .change-comment,
    .complete-change {
      /* z-index : 3 내가한거 */
      z-index: 3;
      border: none;

      background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      width: 80px;
      height: 40px;
      transition: all 0.5s ease;
      border-radius: 20px;
    }

    > .change-comment:hover,
    .complete-change:hover {
      transform: scale(1.1);
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    .delete-comment,
    .get-back {
      border: none;
      top: 65px;
      background-image: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      width: 80px;
      height: 40px;
      transition: all 0.5s ease;
      border-radius: 20px;
    }

    .delete-comment:hover,
    .get-back:hover {
      transform: scale(1.1);
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  `,

  HashTagWrapper: styled.div`
    /* margin-top: 100px; */
    /* position: absolute; */
    /* background-color: red; */
    width: 370px;

    /* bottom: 0; */
    /* top: 75px; */
    /* margin-top: 75px; */

    padding-right: 10px;
    white-space: nowrap;
    border: none;
  `,

  Date: styled.div`
    position: absolute;
    bottom: 25px;
    right: 5px;
  `,
};
