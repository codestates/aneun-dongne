import React from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { token, kToken, deleteCommentModal, commentPostId, commentUniqueId } from "../../recoil/recoil";

import { Icon } from "react-icons-kit";
import { ic_cancel_outline } from "react-icons-kit/md/ic_cancel_outline";

import { Styled } from "./style";
import { getAreaNames } from "../../modules/AreaCodetoName";
import Cookies from "universal-cookie";
import ModalDeleteComment from "../ModalDeleteComment/ModalDeleteComment";
import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";

const MyReviewComment = ({ comment, renderMyComments }) => {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  const [isDeleteModal, setIsDeleteModal] = useRecoilState(deleteCommentModal);
  const [contentId, setContentId] = useRecoilState(commentPostId);
  const [commentId, setCommnetId] = useRecoilState(commentUniqueId);

  const history = useHistory();
  const cookies = new Cookies();

  const sigungu = getAreaNames(comment.post.areacode, comment.post.sigungucode);
  const { user_image_path, nickname } = comment.user;
  const { id, comment_content, comment_tags, comment_post_contentid, createdAt } = comment.comments;
  const { title } = comment.post;
  const created = createdAt.slice(0, 10);
  const tagArr = comment_tags.split(",");

  const handleContentClick = () => {
    history.push(`/detailpage/${comment_post_contentid}`);
  };

  const handleDeleteCommentModal = (e) => {
    setIsDeleteModal(true);
    setContentId(comment_post_contentid);
    setCommnetId(id);
  };

  const closeDeleteModalHandler = () => {
    setIsDeleteModal(false);
    setContentId(null);
    setCommnetId(null);
  };

  return (
    <>
      <Styled.ModalContainer>
        {isDeleteModal ? (
          <>
            <Styled.ModalBackdrop onClick={closeDeleteModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalDeleteComment renderMyComments={renderMyComments} setIsDeleteModal={setIsDeleteModal} />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Styled.Wrapper>
        <Styled.CommentWrapper>
          <Styled.Comment>
            <Styled.ProfileBox>
              <Styled.Profile>
                <Styled.ProfileImgBox>
                  <Styled.ProfileImg src={user_image_path} />
                </Styled.ProfileImgBox>
                <Styled.NickName>{nickname}</Styled.NickName>
              </Styled.Profile>
            </Styled.ProfileBox>
            <Styled.ContentBox>
              <Styled.ContentWrapper onClick={handleContentClick}>
                <Styled.Content name="comment" className="comment-read">
                  {comment_content}
                </Styled.Content>
                <Styled.HashTagWrapper>
                  <OnlyReadHashTag initialTags={tagArr} />
                </Styled.HashTagWrapper>
                <Styled.UserLocationWrapper>
                  <span className="user-location">
                    [{sigungu.areaName} {sigungu.siggName}]
                  </span>
                  <span className="user-place">{` ${title}`}</span>
                </Styled.UserLocationWrapper>
              </Styled.ContentWrapper>
            </Styled.ContentBox>
            <Styled.BtnBox>
              <Styled.BtnWrapper>
                <Styled.BtnOne>
                  <Icon
                    size={28}
                    icon={ic_cancel_outline}
                    className="delete-button"
                    onClick={handleDeleteCommentModal}
                  />
                </Styled.BtnOne>
              </Styled.BtnWrapper>
            </Styled.BtnBox>
            <Styled.Date>{`작성날짜: ${created}`}</Styled.Date>
          </Styled.Comment>
        </Styled.CommentWrapper>
      </Styled.Wrapper>
    </>
  );
};

export default React.memo(MyReviewComment);
