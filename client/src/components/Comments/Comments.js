import React, { useState, useEffect } from "react";
import axios from "axios";
import { Styled } from "./style";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { token, kToken, loginModal, deleteCommentModal, commentPostId, commentUniqueId } from "../../recoil/recoil";
import { defaultcomments } from "../../recoil/detailpage";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";
import LikeLoading from "../Loading/LikeLoading";
import ModalDeleteComment from "../ModalDeleteComment/ModalDeleteComment";

const Comments = ({ uuid, img, nickname, text, initialTags, date, editable, contentId }) => {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [clickedBtn, setClickedBtn] = useState("");
  //editMode가 전역변수면 모든댓글창이 영향을받는다.
  const [editMode, setEditMode] = useState(false);
  const [changeOrNot, setChangeOrNot] = useState(false);
  const [comment, setComment] = useState("");
  const [prevComment, setPrevComment] = useState(text);
  const [commentLoading, setCommentLoading] = useState(false);
  const [tags, setTags] = useState([]);

  const [isDeleteModal, setIsDeleteModal] = useRecoilState(deleteCommentModal);
  const setDefaultComment = useSetRecoilState(defaultcomments);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  const setContentId = useSetRecoilState(commentPostId);
  const setCommnetId = useSetRecoilState(commentUniqueId);

  // 댓글 삭제 모달창
  const handleDeleteCommentModal = () => {
    setIsDeleteModal(true);
    setContentId(contentId);
    setCommnetId(uuid);
  };

  const closeDeleteModalHandler = () => {
    setIsDeleteModal(false);
    setContentId(null);
    setCommnetId(null);
  };

  useEffect(() => {
    setComment(text);
  }, [text]);

  useEffect(() => {
    setTags(initialTags);
  }, [initialTags]);

  useEffect(() => {
    setPrevComment(text);
  }, []);

  function getCommentId(e) {
    setClickedBtn(e.target.className);
  }

  useEffect(() => {
    // if (clickedBtn === "delete-comment") {
    // }
    if (clickedBtn === "complete-change") {
      completeChange();
    }
    if (clickedBtn === "change-comment") {
      changeComment();
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
  }, [clickedBtn]);

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
      <Styled.ModalContainer>
        {isDeleteModal ? (
          <>
            <Styled.ModalBackdrop onClick={closeDeleteModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalDeleteComment setIsDeleteModal={setIsDeleteModal} />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
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
                              className="comment-read complete-change"
                              type="text"
                              defaultValue={prevComment}
                              onChange={(e) => ChangeHandler(e)}
                              onKeyUp={(e) => {
                                if (e.key === "Enter") {
                                  // completeChange();
                                  getCommentId(e);
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
                    <EditableHashTag tags={tags} setTags={setTags} uuid={uuid} getCommentId={getCommentId} />
                  ) : (
                    <OnlyReadHashTag initialTags={tags} uuid={uuid} />
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
                        <button type="submit" className="delete-comment" onClick={() => handleDeleteCommentModal()}>
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
    </>
  );
};

export default Comments;
