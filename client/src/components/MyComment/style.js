import styled from "styled-components";
export const Styled = {
  CommentWrapper: styled.div`
    width: 100%;
  `,
  Comment: styled.div`
    position: relative;
    display: flex;
    /* border: 1px red solid; */
    /* height: 200px; */
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 40px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);

    @media (max-width: 768px) {
      width: 80%;
      margin-left: 40px;
      margin-right: auto;
      /* margin-left: 10px; */
    }
    @media (max-width: 612px) {
      width: 450px;
      margin-left: 20px;
      margin-right: auto;
      /* margin-left: 10px; */
    }
  `,
  Profile: styled.div`
    position: relative;
    /* background-color: red; */
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

  ContentBox: styled.form`
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
  `,

  Content: styled.textarea`
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    width: 370px;
    height: 70px;
    padding: 10px;
  `,

  HashTagWrapper: styled.div`
    /* display: flex; */
    /* position: absolute; */
    /* background-color: pink; */
    width: 370px;
    /* height: 60px; */
    top: 75px;
    margin-top: 75px;
    left: 10px;
    /* padding-left: 10px; */
    padding-right: 10px;

    white-space: nowrap;
    border: none;
    border: 1px gray solid;
  `,
};
