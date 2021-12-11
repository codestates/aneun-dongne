import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import { useRecoilState } from "recoil";
import { defaultcomments, deleteCommentmode } from "../../recoil/recoil";
import MyComment from "./MyComment";
import EditableHashTag from "../HashTag/EditableHashTag";
import axios from "axios";
import OnlyReadHashTag from "../HashTag/OnlyReadHashTag";

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
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  line-height: 1em;
  word-break: break-all;
  /* position: absolute; */
  top: 0;
  left: 10px;
  width: 370px;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;

  /* background-color: skyblue; */
`;

const ContentInput = styled.div`
  display: flex;
  padding: 10px;
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
`;

const BtnWrapper = styled.div`
  width: 370px;

  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  > button {
    margin: 10px 0 10px 0;
    background-color: rgb(192, 251, 255);
  }
  .change-comment,
  .complete-change {
    z-index: 999;

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
`;

const HashTagWrapper = styled.div`
  /* margin-top: 100px; */
  /* position: absolute; */
  /* background-color: red; */
  width: 370px;

  /* bottom: 0; */
  /* top: 75px; */
  /* margin-top: 75px; */
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

function Comments({ uuid, img, nickname, text, initialTags, date, editable, contentId }) {
  const [clickedBtn, setClickedBtn] = useState("");

  //editMode가 전역변수면 모든댓글창이 영향을받는다.
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(text);

  const [changeOrNot, setChangeOrNot] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const [defaultComment, setDefaultComment] = useRecoilState(defaultcomments);
  const [prevComment, setPrevComment] = useState(text);
  const [deleteOrNot, setDeleteOrNot] = useRecoilState(deleteCommentmode);
  // console.log(initialTags);
  useEffect(() => {
    //text,initialTags초기화
    setComment(text);
    setTags(initialTags);
  }, [text, initialTags]);
  useEffect(() => {
    // console.log("위", text);
    setPrevComment(text);
  }, []);

  //! 이것도 서버에서하래 유저권한 관련된건 다 서버에서 토큰이랑 비교후 결정
  // const editable = nickname === username; //

  function getCommentId(e) {
    // e.preventDefault(); //필요한가?
    //누른 버튼의 className으로 실행되는 함수가 결정된다.
    setClickedBtn(e.target.className);
  }

  useEffect(() => {
    if (clickedBtn === "delete-comment") {
      deleteComment();
    }
    if (clickedBtn === "complete-change") {
      completeChange();
    }
    if (clickedBtn === "change-comment") {
      changeComment();
    }
  }, [clickedBtn]);
  // console.log(tags.map((el) => el.substr(0, el.length - 1)));

  // 댓글 삭제요청 보내는 함수
  function deleteComment() {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/comment/${contentId}`,

        //! axios에선 params지만 express에선 req.query래요.
        //! 전송되는 url은 https://localhost:80/126508/?commentId=18  이래요
        { params: { commentId: uuid }, withCredentials: true }
      )
      .then((res) => {
        console.log(res.data.data);
        let arr = res.data.data.map((el) => {
          console.log(el.comments.comment_tags.split(","));
          console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        console.log(arr);
        setDefaultComment(arr);
        setDeleteOrNot(true);
      });
    setClickedBtn("");
  }
  function changeComment() {
    setPrevComment(comment);
    setEditMode(true);
    console.log(editMode);
  }
  function completeChange() {
    console.log(tags, comment);
    const body = {
      commentId: uuid, //댓글아뒤
      commentContent: comment, //댓글내용
      tagsArr: tags, //해시태그
    };
    axios
      .patch(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, body, {
        headers: { "content-type": "application/json" },
        withCredentials: true,
      })
      .then((res) => {
        let arr = res.data.data.map((el) => {
          console.log(el.comments.comment_tags.split(","));
          console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        console.log(arr);
        setDefaultComment(arr);
      });

    if (editMode) console.log("수정완료");
    else console.log("댓글수정 클릭");

    setEditMode(false);

    setClickedBtn("");
  }
  //댓글 바꾸는 함수
  const ChangeHandler = (e) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    setComment(prevComment);
    setEditMode(false);
    setClickedBtn("");
  }, [changeOrNot]);
  useEffect(() => {
    console.log(editMode);
  }, [editMode]);
  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={img}></ProfileImg>
          <NickName>{nickname}</NickName>
        </Profile>
        <ContentBox>
          {!editable ? (
            <Content name="comment">{text}</Content>
          ) : (
            <ContentInput>
              {!editMode ? (
                <div id="comment-read" name="comment">
                  <span>{comment}</span>
                </div>
              ) : (
                <textarea
                  id="comment-change"
                  type="text"
                  // value={comment}
                  defaultValue={prevComment}
                  onChange={(e) => ChangeHandler(e)}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      ChangeHandler(e);
                      setEditMode(false);
                    }
                  }}
                  name="comment"
                />
              )}
              {!editMode ? (
                <BtnWrapper>
                  <button
                    className="change-comment"
                    onClick={(e) => {
                      getCommentId(e);
                    }}
                  >
                    수정하기
                  </button>

                  <button type="submit" className="delete-comment" onClick={(e) => getCommentId(e)}>
                    댓글삭제
                  </button>
                </BtnWrapper>
              ) : (
                <BtnWrapper>
                  <button className="complete-change" onClick={(e) => getCommentId(e)}>
                    수정완료
                  </button>

                  <button className="get-back" onClick={() => setChangeOrNot(!changeOrNot)}>
                    수정취소
                  </button>
                </BtnWrapper>
              )}
            </ContentInput>
          )}
          <HashTagWrapper>
            {/* 편집못함? -> 읽기만가능한해시태그 안에 props로 다른사람의 해시태그 전달
            편집가능? -> 수정못함? : 읽기만가능한 해시태그안에 props로 나의 해시태그 전달
            편집가능? -? 수정가능? : 수정가능한 해시태그  */}
            {editable ? (
              editMode ? (
                <EditableHashTag tags={tags} setTags={setTags} uuid={uuid} />
              ) : (
                <OnlyReadHashTag initialTags={tags} uuid={uuid} /> //
              )
            ) : (
              <OnlyReadHashTag initialTags={initialTags} uuid={uuid} />
            )}
          </HashTagWrapper>
        </ContentBox>
        {/* <Date>작성날짜 : {date}</Date> */}
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
