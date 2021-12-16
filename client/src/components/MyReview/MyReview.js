import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

import MyReviewComment from "../MyReviewComment/MyReviewComment";
import LikeLoading from "../Loading/LikeLoading";

const MyReview = () => {
  const accessToken = useRecoilValue(token);
  const [comments, SetComments] = useState([]);
  const [isLoing, SetIsloading] = useState(true);

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
        SetIsloading(true);
        SetComments(res.data.data);
      })
      .then(() => {
        SetIsloading(false);
      });
  };

  useEffect(() => {
    renderMyComments();
  }, []);

  return (
    <>
      <div className="comment-list">
        {isLoing ? (
          <div>
            <LikeLoading />
          </div>
        ) : (
          <div>
            {comments.length === 0
              ? "댓글이 없음"
              : comments.map((comment) => {
                  return <MyReviewComment key={comment.comments.id} comment={comment} SetComments={SetComments} />;
                })}
          </div>
        )}
      </div>
    </>
  );
};

export default MyReview;
