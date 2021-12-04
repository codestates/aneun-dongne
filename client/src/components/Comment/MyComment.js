import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyHashTag from "../HashTag/MyHashTag";
import { useRecoilState } from "recoil";
import { mycomments } from "../../recoil/recoil";
const CommentWrapper = styled.div`
  width: 100%;
`;
const Comment = styled.div`
  position: relative;
  display: flex;
  border: 1px gray solid;
  height: 200px;
  margin: 10px;
`;
const Profile = styled.div`
  position: relative;
  /* background-color: red; */
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
  margin-top: 40px;
  position: relative;
  width: 480px;
  height: 140px;
  > button {
    position: absolute;
    right: 10px;
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
  }
  button:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  }
  button:hover {
    color: black;
    transform: scale(1.1);
  }
  button:hover:after {
    left: 0;
  }
  button:active {
    //
  }
`;

const Content = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 370px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HashTagWrapper = styled.div`
  /* display: flex; */
  position: absolute;
  /* background-color: pink; */
  width: 370px;
  height: 50px;
  bottom: 10px;
  left: 10px;
  white-space: nowrap;
  border: none;
`;
const Date = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

function MyComment({ writeDummy }) {
  const [something, setSomething] = useState("");
  const [myComments, setMyComments] = useRecoilState(mycomments);
  const writeSomething = (e) => {
    setSomething(e.target.value);
  };

  const registerMyComment = (something) => {
    console.log(something);
    setSomething("");
    setMyComments([...myComments, [something]]);
  };

  useEffect(() => {}, []);
  return (
    <CommentWrapper>
      <Comment>
        <Profile>
          <ProfileImg src="/people3.png"></ProfileImg>
          <NickName>김코딩</NickName>
        </Profile>
        <ContentBox>
          <Content
            type="text"
            value={something}
            onChange={(e) => writeSomething(e)}
            onKeyUp={(e) => {
              if (e.key === "Enter") registerMyComment(e.target.value);
            }}
          ></Content>
          <button onClick={registerMyComment}>작성하기</button>
          <HashTagWrapper>
            <MyHashTag initialTags={[]} />
          </HashTagWrapper>
        </ContentBox>
        <Date>작성날짜 : {`DB에서 시간날라오겠지`}</Date>
      </Comment>
    </CommentWrapper>
  );
}

export default MyComment;
