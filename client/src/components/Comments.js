import React from "react";
import styled from "styled-components";

const Comment = styled.div`
  border: 1px gray solid;
  height: 200px;
  margin: 10px;
`;
const Profile = styled.div`
  position: relative;
  background-color: red;
  width: 80px;
  height: 140px;
  margin: 40px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  background-color: white;
`;

const NickName = styled.span`
  background-color: yellowgreen;
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
`;

function Comments({ comment }) {
  console.log(comment);
  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={comment.img}></ProfileImg>
          <NickName>{comment.nickname}</NickName>
        </Profile>
      </Comment>
    </>
  );
}

export default Comments;
