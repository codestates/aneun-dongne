import React, { useState, useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import OthersHashTag from "../HashTag/OthersHashTag";
import { useRecoilValue, useRecoilState } from "recoil";
import { loginState, updateText, update } from "../../recoil/recoil";

const Comment = styled.div`
  position: relative;
  display: flex;
  border: 1px gray solid;
  height: 200px;
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

  margin-top: 20px;
  position: relative;
  width: 400px;
  height: 140px;
`;

const Content = styled.div`
  position: absolute;
  top: 0px;
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
  top: 0px;
  left: 10px;
  width: 460px;
  height: 80px;
  padding-left: 10px;
  padding-right: 10px;

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
    /* top: -20px; */
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

  > .change-comment:hover {
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
    top: 60px;
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

  .delete-comment:hover {
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
  height: 40px;
  bottom: 0px;
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

function Comments({ img, nickname, text, initialTags, date, commentId }) {
  const [clickedBtn, setClickedBtn] = useState("");
  const commentRef = useRef(null);
  //! text 를 State로 하면 한템포씩 밀린다.
  // const [text, setText] = useState("");

  useEffect(() => {
    // setText(comment.text);
    // console.log(comment.text);
    // console.log(text);
  }, []);

  const username = "김코딩";
  const canToChange = nickname === username;
  const ChangeHandler = () => {
    console.log("hi");
    if (canToChange) {
      // document.querySelector("#comment").focus();
    }
  };

  function getCommentId(e) {
    // e.preventDefault(); //필요한가?
    setClickedBtn(e.target.className);
    if (clickedBtn === "change-comment") {
      // setText(e.target.value);
    }
  }

  // useEffect(() => {
  //   if (clickedBtn === "delete-comment") {
  //     deleteComment();
  //   }
  //   if (clickedBtn === "change-comment") {
  //     changeComment();
  //   }
  // }, [clickedBtn]);

  // 댓글 삭제요청 보내는 함수
  function deleteComment() {
    if (commentId === undefined) console.log("삭제하려는 댓글이 존재하지 않습니다."); //숫자라서 정확하기 명시해야함
    // else if (!login) console.log("로긴하소");
    console.log(clickedBtn, commentId);
    //axios : 전체배열 다시 받아서 전체댓글recoil 바꾼다.
    // 새로고침하면?? 초기화된다 -> 바로 get요청을 받는다. -> 괜찮다.

    setClickedBtn("");
  }
  // 댓글 수정요청 보내는 함수 -> 어떻게하는거야..
  function changeComment() {
    if (commentId === undefined) console.log("수정하려는 댓글이 존재하지 않습니다.");
    // else if (!login) console.log("로긴하소");
    console.log(clickedBtn, commentId);
    //axios
    // setText("res.body.text");
    setClickedBtn("");
  }
  console.log(text);
  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={img}></ProfileImg>
          <NickName>{nickname}</NickName>
        </Profile>
        <ContentBox>
          {/* {!canToChange ? ( */}
          <Content name="comment">{text}</Content>
          //{" "}
          {/* // ) : (
          // //   <ContentInput>
          // //     <input
          // //       id="comment"
          // //       ref={commentRef}
          // //       type="text"
          // //       value={text} //defaultValue로 하면 버그생겨서 콘솔에러떠도 우선 value로 함.
          // //       onChange={(e) => ChangeHandler(e)}
          // //       name="comment"
          // //     />
          // //     <button className="change-comment" onClick={(e) => getCommentId(e)}>
          // //       댓글수정
          // //     </button>
          // //     <button className="delete-comment" onClick={(e) => getCommentId(e)}>
          // //       댓글삭제
          // //     </button>
          // //   </ContentInput>
          // // )} */}
          <HashTagWrapper>
            <OthersHashTag initialTags={initialTags} />
          </HashTagWrapper>
        </ContentBox>
        <Date>작성날짜 : {date}</Date>
      </Comment>
    </>
  );
}
function PropsEqual(prev, next) {
  console.log(prev.text === next.text);
  return prev.text === next.text;
}
export default React.memo(Comments);
// export default Comments;
