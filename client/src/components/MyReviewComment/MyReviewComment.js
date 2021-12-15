import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

import { getAreaNames } from "../../AreaCodetoName";

const Body = styled.div`
  margin: 20px 0px;
  border: 1px black solid;
  width: 600px;
`;

const MyReviewComment = ({ comment, SetComments }) => {
  const accessToken = useRecoilValue(token);
  const history = useHistory();
  const [areacode, setAreaCode] = useState("");
  const [sigungucode, setSigunguCode] = useState("");
  const [titie, setTitle] = useState("");

  const sigungu = getAreaNames(comment.post.areacode, comment.post.sigungucode);
  const { user_image_path, nickname } = comment.user;
  const { comment_content, comment_tag, comment_post_contentid, createdAt } = comment.comments;
  const { title } = comment.post;
  const created = createdAt.slice(0, 10);

  const handleContentClick = () => {
    history.push(`/detailpage/${comment_post_contentid}`);
  };

  const deleteComment = async () => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/comment/${comment_post_contentid}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: { commentId: comment.comments.id },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);

        // SetComments(res.data.data);
      });
  };

  return (
    <>
      <Body>
        <div>{sigungu.areaName}</div>
        <div>{sigungu.siggName}</div>
        <div>{user_image_path}</div>
        <div>{nickname}</div>
        <div onClick={handleContentClick}>{comment_content}</div>
        <div>{comment_tag}</div>
        <div onClick={handleContentClick}>{title}</div>
        <div>작성날짜 : {created}</div>
        <button onClick={deleteComment}>삭제</button>
      </Body>
    </>
  );
};

export default MyReviewComment;
