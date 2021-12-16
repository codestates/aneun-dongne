import React from "react";
import styled from "styled-components";

import LikeLoading from "./LikeLoading";

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

  > div {
    /* background: red; */
    margin-left: 0%;
    margin-top: 100px;
  }
`;

const HashTagWrapper = styled.div`
  /* margin-top: 100px; */
  /* position: absolute; */
  /* background-color: red; */
  margin: 20% auto 0 auto;
  width: 370px;

  padding-right: 10px;

  border: none;
`;
const Date = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

function CommentLoading({ userinfo }) {
  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={userinfo.user_image_path} />
          <NickName>{userinfo.nickname}</NickName>
        </Profile>

        <ContentBox>
          <div>
            <LikeLoading />
          </div>
          <HashTagWrapper></HashTagWrapper>
        </ContentBox>
      </Comment>
    </>
  );
}

export default CommentLoading;
