import React, { useState, useEffect } from "react";

import { Styled } from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { defaultcomments, deleteCommentmode, token, kToken, loginState, loginModal } from "../../recoil/recoil";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import axios from "axios";
import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";
import LikeLoading from "../Loading/LikeLoading";

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
    console.log(e);
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
    <Styled.CommentWrapper>
      <Styled.Comment>
        <Styled.ProfileBox>
          <Styled.Profile>
            <Styled.ProfileImgBox>
              <Styled.ProfileImg src={img} />
            </Styled.ProfileImgBox>
            <Styled.NickName>{nickname}</Styled.NickName>
          </Styled.Profile>
        </Styled.ProfileBox>
        <Styled.ContentBox>
          <Styled.ContentWrapper>
            <>
              {commentLoading ? (
                <div>
                  <LikeLoading />
                </div>
              ) : (
                <>
                  {!editable ? (
                    <Styled.Content name="comment" className="comment-read">
                      {text}
                    </Styled.Content>
                  ) : (
                    <>
                      {!editMode ? (
                        <Styled.Content name="comment">
                          <span>{comment}</span>
                        </Styled.Content>
                      ) : (
                        <Styled.Content>
                          <Styled.ContentInput
                            id="comment-change"
                            className="comment-read"
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
                        </Styled.Content>
                      )}
                    </>
                  )}
                </>
              )}
            </>
            <Styled.HashTagWrapper>
              {editable ? (
                editMode ? (
                  <EditableHashTag tags={tags} setTags={setTags} uuid={uuid} />
                ) : (
                  <OnlyReadHashTag initialTags={tags} uuid={uuid} /> //
                )
              ) : (
                <OnlyReadHashTag initialTags={initialTags} uuid={uuid} />
              )}
            </Styled.HashTagWrapper>
          </Styled.ContentWrapper>
        </Styled.ContentBox>
        <Styled.BtnBox>
          <>
            {!editable ? (
              <></>
            ) : (
              <>
                {!editMode ? (
                  <Styled.BtnWrapper>
                    <Styled.BtnOne>
                      <button
                        className="change-comment"
                        onClick={(e) => {
                          getCommentId(e);
                        }}
                      >
                        수정하기
                      </button>
                    </Styled.BtnOne>
                    <Styled.BtnTwo>
                      <button type="submit" className="delete-comment" onClick={(e) => getCommentId(e)}>
                        댓글삭제
                      </button>
                    </Styled.BtnTwo>
                  </Styled.BtnWrapper>
                ) : (
                  <Styled.BtnWrapper>
                    <Styled.BtnOne>
                      <button className="complete-change" onClick={(e) => getCommentId(e)}>
                        수정완료
                      </button>
                    </Styled.BtnOne>
                    <Styled.BtnTwo>
                      <button className="get-back" onClick={() => setChangeOrNot(!changeOrNot)}>
                        수정취소
                      </button>
                    </Styled.BtnTwo>
                  </Styled.BtnWrapper>
                )}
              </>
            )}
          </>
        </Styled.BtnBox>
        {/* <Styled.Date>{`작성날짜: ${date}`}</Styled.Date> */}
      </Styled.Comment>
    </Styled.CommentWrapper>
  );
}

export default React.memo(Comments);
