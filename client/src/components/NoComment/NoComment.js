import React from "react";
import styled from "styled-components";

import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";

const Comment = styled.div`
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
`;
const Profile = styled.div`
  position: relative;
  /* background-color: red; */
  display: flex;
  width: 80px;
  height: 140px;
  margin: 40px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  /* background-color: white; */
`;

const NickName = styled.span`
  /* background-color: yellowgreen; */
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
`;

const ContentBox = styled.div`
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
  > div {
    /* background: red; */
    margin-left: 10%;
  }
`;

const HashTagWrapper = styled.div`
  /* margin-top: 100px; */
  /* position: absolute; */
  /* background-color: red; */
  margin: 20% auto 0 auto;
  width: 370px;

  left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  border: none;
`;
const Date = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

function NoComment() {
  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={`https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png`}></ProfileImg>
          <NickName>아는동네</NickName>
        </Profile>

        <ContentBox>
          <div>여러분의 첫 댓글을 기다리고 있어요!</div>
          <HashTagWrapper>
            <OnlyReadHashTag initialTags={["해시태그도", "남겨주세요!"]} />
          </HashTagWrapper>
        </ContentBox>
      </Comment>
    </>
  );
}
function PropsEqual(prev, next) {
  console.log(prev.text === next.text);
  return prev.text === next.text;
}
export default NoComment;
// export default Comments;
