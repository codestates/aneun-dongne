import React from "react";
import styled from "styled-components";
import OthersHashTag from "../HashTag/OthersHashTag";

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
  /* background-color: yellow; */

  margin-top: 40px;
  position: relative;
  width: 400px;
  height: 140px;
`;

const Content = styled.input`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 370px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  /* border: 1px gray solid; */
  /* background-color: whitesmoke; */
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
  /* overflow-y: scroll; */

  /* overflow: auto; */
  /* white-space: nowrap; */
`;
const Date = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
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
        <ContentBox>
          <Content type="text" value={comment.comment}></Content>
          <HashTagWrapper>
            <OthersHashTag initialTags={comment.keyword} />
            {/* {comment.keyword.map((word, idx) => {
              // return <span key={idx}>{word}</span>;
              return (
                <span key={idx}>
                  <HashTag initialTags={word} />
                </span>
              );
            })} */}
          </HashTagWrapper>
        </ContentBox>
        <Date>작성날짜 : {comment.data}</Date>
      </Comment>
    </>
  );
}

export default Comments;
