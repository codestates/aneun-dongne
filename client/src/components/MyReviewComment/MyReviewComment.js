import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, kToken, deleteCommentModal } from "../../recoil/recoil";

import { Icon } from "react-icons-kit";
import { ic_cancel_outline } from "react-icons-kit/md/ic_cancel_outline";

import { Styled } from "./style";
import { getAreaNames } from "../../AreaCodetoName";

import LikeLoading from "../Loading/LikeLoading";

const MyReviewComment = ({ comment, SetComments }) => {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const setIsCommentDelete = useSetRecoilState(deleteCommentModal);
  const [isLoing, SetIsloading] = useState(true);

  const history = useHistory();

  const sigungu = getAreaNames(comment.post.areacode, comment.post.sigungucode);
  const { user_image_path, nickname } = comment.user;
  const { id, comment_content, comment_tags, comment_post_contentid, createdAt } = comment.comments;
  const { title } = comment.post;
  const created = createdAt.slice(0, 10);
  const tagArr = comment_tags.split(",");

  const handleContentClick = () => {
    history.push(`/detailpage/${comment_post_contentid}`);
  };

  const handleDeleteButtonClick = () => {
    setIsCommentDelete(true);
  };

  const deleteComment = async () => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/comment/${comment_post_contentid}`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: { commentId: id },
        withCredentials: true,
      })
      .then((res) => {
        SetIsloading(true);
        SetComments(res.data.data);
      })
      .then(() => {
        SetIsloading(false);
      });
  };

  //TODO 모달창에서 로딩걸리게 하기

  return (
    <>
      <Styled.Body>
        <div className="user-container">
          <div className="user-info-wrapper">
            <img src={user_image_path} className="user-image" />
            <div className="user-name">{nickname}</div>
          </div>
          <div className="user-content-wrapper">
            <div className="user-content" onClick={handleContentClick}>
              {comment_content}
            </div>
            <div className="user-hastag-wrapper">
              {tagArr.map((tag) => (
                <span className="user-hastag">{tag}</span>
              ))}
            </div>
            <div className="user-content-bottom">
              <div className="user-location-wrapper">
                <span className="user-location">
                  [{sigungu.areaName} {sigungu.siggName}]
                </span>
                <span className="user-place" onClick={handleContentClick}>
                  {title}
                </span>
              </div>
              <div className="created-date">작성날짜 : {created}</div>
            </div>
          </div>
        </div>
        <div className="side-button">
          <Icon size={28} icon={ic_cancel_outline} onClick={handleDeleteButtonClick} className="delete-button" />
        </div>
      </Styled.Body>
    </>
  );
};

export default MyReviewComment;
