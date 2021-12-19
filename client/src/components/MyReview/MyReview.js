import React, { useState, useEffect } from "react";
import axios from "axios";

import { useRecoilValue } from "recoil";
import { token, kToken } from "../../recoil/recoil";

import MyReviewComment from "../MyReviewComment/MyReviewComment";
import LikeLoading from "../Loading/LikeLoading";
import Empty from "../Empty/Empty";
import Cookies from "universal-cookie";

const MyReview = () => {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [comments, SetComments] = useState([]);
  const [isLoing, SetIsloading] = useState(true);
  const cookies = new Cookies();

  const renderMyComments = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/commentlists`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
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
            {comments.length === 0 ? (
              <Empty />
            ) : (
              comments.map((comment) => {
                return (
                  <div key={comment.comments.id}>
                    <MyReviewComment comment={comment} SetComments={SetComments} />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MyReview;
