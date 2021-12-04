import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import OthersHashTag from "../HashTag/OthersHashTag";
import { useRecoilValue } from "recoil";
import { loginState } from "../../recoil/recoil";

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

const Content = styled.div`
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

const ContentInput = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 460px;
  height: 60px;
  padding-left: 10px;
  padding-right: 10px;
  /* border: 1px gray solid; */

  > input {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 370px;
    height: 60px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .change-comment {
    position: absolute;
    right: -20px;
    border: none;
    background-color: rgb(192, 251, 255);
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

  button:hover {
    transform: scale(1.1);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .delete-comment {
    position: absolute;
    top: 50px;
    right: -20px;
    border: none;
    background-color: rgb(192, 251, 255);
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

  button:hover {
    transform: scale(1.1);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
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

function Comments({ comment, commentId }) {
  const [clickedBtn, setClickedBtn] = useState("");
  const login = useRecoilValue(loginState);
  const commentRef = useRef(null);
  //! text 를 State로 하면 한템포씩 밀린다. const [text, setText] = useState(comment.text);
  const username = "김코딩";
  const canToChange = comment.nickname === username;
  const ChangeHandler = () => {
    console.log("hi");
    if (canToChange) {
      // document.querySelector("#comment").focus();
    }
  };

  function getCommentId(e) {
    // e.preventDefault(); //필요한가?
    setClickedBtn(e.target.className);
  }

  useEffect(() => {
    if (clickedBtn === "delete-comment") {
      deleteComment();
    }
    if (clickedBtn === "change-comment") {
      changeComment();
    }
  }, [clickedBtn]);

  // 댓글 삭제요청 보내는 함수
  function deleteComment() {
    if (commentId === undefined) console.log("아이디가 없는디요"); //숫자라서 정확하기 명시해야함
    // else if (!login) console.log("로긴하소");
    console.log(clickedBtn, commentId);
    //axios
    setClickedBtn("");
  }
  // 댓글 수정요청 보내는 함수
  function changeComment() {
    if (commentId === undefined) console.log("아이디가 없는디요");
    // else if (!login) console.log("로긴하소");
    console.log(clickedBtn, commentId);
    //axios
    setClickedBtn("");
  }

  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={comment.img}></ProfileImg>
          <NickName>{comment.nickname}</NickName>
        </Profile>
        <ContentBox>
          {!canToChange ? (
            <Content name="comment">{comment.text}</Content>
          ) : (
            <ContentInput>
              <input
                id="comment"
                ref={commentRef}
                type="text"
                defaultValue={comment.text}
                onChange={(e) => ChangeHandler(e)}
                name="comment"
              />
              <button className="change-comment" onClick={(e) => getCommentId(e)}>
                댓글수정
              </button>
              <button className="delete-comment" onClick={(e) => getCommentId(e)}>
                댓글삭제
              </button>
            </ContentInput>
          )}
          <HashTagWrapper>
            <OthersHashTag initialTags={comment.tags} />
          </HashTagWrapper>
        </ContentBox>
        <Date>작성날짜 : {comment.date}</Date>
      </Comment>
    </>
  );
}

export default Comments;
