import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { commentPostId, commentUniqueId, commentDeleteLoading } from "../../recoil/recoil";
import { Styled } from "../ModalDeleteComment/style";

const ModalDeleteComment = ({ setIsDeleteModal, renderMyComments }) => {
  const cookies = new Cookies();
  const commentId = useRecoilValue(commentUniqueId);
  const contentId = useRecoilValue(commentPostId);
  const setIsloading = useSetRecoilState(commentDeleteLoading);

  const deleteComment = async () => {
    setIsloading(true);
    setIsDeleteModal(false);
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: { commentId: commentId },
      })
      .then(() => {
        renderMyComments();
      })
      .then(() => {
        setIsloading(false);
      });
  };

  return (
    <>
      <Styled.FormContainer>
        <form className="comment-container" onSubmit={(e) => e.preventDefault()}>
          <div className="commet-message">댓글을 삭제하시겠습니까?</div>
          <div className="button-wrapper">
            <button type="submit" value="delete" onClick={deleteComment}>
              삭제
            </button>
            <button onClick={() => setIsDeleteModal(false)}>취소</button>
          </div>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalDeleteComment;
