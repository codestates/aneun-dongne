import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { commentPostId, commentUniqueId, commentDeleteLoading } from "../../recoil/recoil";
import { Styled } from "../ModalDeleteComment/style";
import { defaultcomments } from "../../recoil/detailpage";
import LikeLoading from "../Loading/LikeLoading";

const ModalDeleteComment = ({ setIsDeleteModal, renderMyComments }) => {
  const cookies = new Cookies();
  const commentId = useRecoilValue(commentUniqueId);
  const contentId = useRecoilValue(commentPostId);
  const [isLoading, setIsloading] = useRecoilState(commentDeleteLoading);
  const setDefaultComment = useSetRecoilState(defaultcomments);

  const deleteComment = async () => {
    setIsloading(true);
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: { commentId: commentId },
      })
      .then((res) => {
        if (!renderMyComments) {
          let arr = res.data.data.map((el) => {
            return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
          });
          setDefaultComment(arr);
        } else {
          renderMyComments();
        }
      })
      .then(() => {
        setIsloading(false);
        setIsDeleteModal(false);
      });
  };

  return (
    <>
      <Styled.FormContainer>
        <form className="comment-container" onSubmit={(e) => e.preventDefault()}>
          {isLoading ? (
            <>
              <LikeLoading />
            </>
          ) : (
            <>
              <div className="commet-message">댓글을 삭제하시겠습니까?</div>
              <div className="button-wrapper">
                <button type="submit" value="delete" onClick={deleteComment}>
                  삭제
                </button>
                <button onClick={() => setIsDeleteModal(false)}>취소</button>
              </div>
            </>
          )}
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalDeleteComment;
