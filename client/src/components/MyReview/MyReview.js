import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

import MyReviewComment from "../MyReviewComment/MyReviewComment";

const Body = styled.div`
  margin-left: 450px;
`;

const MyReview = () => {
  const accessToken = useRecoilValue(token);
  const [comments, SetComments] = useState([]);

  const renderMyComments = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/commentlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        SetComments(res.data.data);
      });
  };

  useEffect(() => {
    renderMyComments();
  }, []);

  return (
    <>
      <Body>
        <div className="comment-list">
          {comments.length === 0
            ? "댓글이 없음"
            : comments.map((comment) => {
                return <MyReviewComment key={comment.comments.id} comment={comment} SetComments={SetComments} />;
              })}
        </div>
      </Body>
    </>
  );
};

export default MyReview;
