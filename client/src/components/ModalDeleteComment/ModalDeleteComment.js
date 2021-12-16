import React from "react";
import { Styled } from "./style";
import { deleteCommentModal } from "../../recoil/recoil";
import { useSetRecoilState } from "recoil";

const ModalDeleteComment = () => {
  const setIsCommentDelete = useSetRecoilState(deleteCommentModal);
  const yesFunc = () => {
    setIsCommentDelete(false);
  };
  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsCommentDelete(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <h2>댓글 삭제할까요?</h2>
        <div className="button-wrapper">
          <button onClick={() => yesFunc()}>예</button>
          <button onClick={() => setIsCommentDelete(false)}>아니오</button>
        </div>
      </Styled.FormContainer>
    </>
  );
};

export default ModalDeleteComment;
