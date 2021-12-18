import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { defaultcomments, deleteCommentmode, token, kToken, loginState, loginModal } from "../../recoil/recoil";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import axios from "axios";
import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";
import LikeLoading from "../Loading/LikeLoading";

const Comment = styled.div`
  position: relative;
  display: flex;
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
    background: red;
    margin-left: 10px;
  }
`;
const Profile = styled.div`
  position: relative;
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
`;

const NickName = styled.span`
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
`;

const ContentBox = styled.div`
  margin-top: 30px;
  position: relative;
  width: 480px;
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
  }
`;
//!-- 내가 바꾼거 댓글 높이
const Content = styled.div`
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
`;

const ContentInput = styled.div`
  display: flex;
  padding: 10px;
  width: 480px;

  > #comment-read {
    word-wrap: break-word;
  }
  > #comment-change {
    display: flex;
    flex-wrap: wrap;
    width: 370px;
    height: 70px;
  }
  > input,
  div {
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
`;

const HashTagWrapper = styled.div`
  width: 370px;
  padding-right: 10px;
  white-space: nowrap;
  border: none;
`;

const Date = styled.div`
  position: absolute;
  bottom: 25px;
  right: 5px;
`;

function Comments({ uuid, img, nickname, text, initialTags, date, editable, contentId }) {
  const [clickedBtn, setClickedBtn] = useState("");
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  //editMode가 전역변수면 모든댓글창이 영향을받는다.
  const [editMode, setEditMode] = useState(false);
  const [comment, setComment] = useState(text);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  const [changeOrNot, setChangeOrNot] = useState(false);
  const [tags, setTags] = useState(initialTags);
  const setDefaultComment = useSetRecoilState(defaultcomments);
  const [prevComment, setPrevComment] = useState(text);
  const setDeleteOrNot = useSetRecoilState(deleteCommentmode);
  const [commentLoading, setCommentLoading] = useState(false);

  useEffect(() => {
    setComment(text);
    setTags(initialTags);
  }, [text, initialTags]);

  useEffect(() => {
    setPrevComment(text);
  }, []);

  function getCommentId(e) {
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

  // 댓글 삭제요청 보내는 함수
  async function deleteComment() {
    setCommentLoading(true);
    await axios
      .delete(
        `${process.env.REACT_APP_API_URL}/comment/${contentId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken || kakaoToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
          params: { commentId: uuid },
        }

        //! axios에선 params지만 express에선 req.query래요.
        //! 전송되는 url은 https://localhost:80/126508/?commentId=18  이래요
        // { params: { commentId: uuid }, withCredentials: true }
      )
      .then((res) => {
        let arr = res.data.data.map((el) => {
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        setDefaultComment(arr);
        setDeleteOrNot(true);
      });
    setClickedBtn("");
    setCommentLoading(false);
  }
  function changeComment() {
    setPrevComment(comment);
    setEditMode(true);
  }
  async function completeChange() {
    const body = {
      commentId: uuid, //댓글아이디
      commentContent: comment, //댓글내용
      tagsArr: tags, //해시태그
    };
    setCommentLoading(true);

    await axios
      .patch(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        let arr = res.data.data.map((el) => {
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });
        setDefaultComment(arr);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoginOpen(true);
        }
      });

    setEditMode(false);

    setClickedBtn("");
    setCommentLoading(false);
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

  return (
    <>
      <Comment>
        <Profile>
          <ProfileImg src={img}></ProfileImg>
          <NickName>{nickname}</NickName>
        </Profile>
        <ContentBox>
          {commentLoading ? (
            <div>
              <LikeLoading />
            </div>
          ) : (
            <>
              {!editable ? (
                <Content name="comment" className="comment-read">
                  {text}
                </Content>
              ) : (
                <ContentInput>
                  {!editMode ? (
                    <div id="comment-read" className="comment-read" name="comment">
                      <span>{comment}</span>
                    </div>
                  ) : (
                    <textarea
                      id="comment-change"
                      type="text"
                      defaultValue={prevComment}
                      onChange={(e) => ChangeHandler(e)}
                      onKeyUp={(e) => {
                        if (e.key === "Enter") {
                          completeChange();
                        }
                      }}
                      name="comment"
                    />
                  )}
                </ContentInput>
              )}
              <>
                {!editable ? (
                  <></>
                ) : (
                  <>
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
                  </>
                )}
              </>
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
            </>
          )}
          <Date>작성날짜 : 2016.08.09{date}</Date>
        </ContentBox>
      </Comment>
    </>
  );
}

export default React.memo(Comments);
