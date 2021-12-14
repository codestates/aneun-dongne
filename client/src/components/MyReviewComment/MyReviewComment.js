import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Body = styled.div`
  margin: 20px 0px;
  border: 1px black solid;
  width: 600px;
`;

const MyReviewComment = ({ comment }) => {
  const history = useHistory();
  const updatedAt = comment.comments.updatedAt.slice(0, 10);

  const handleContentClick = () => {
    history.push(`/detailpage/${comment.comments.comment_post_contentid}`);
  };

  const deleteComment = () => {
    axios
      .delete
      // `${process.env.REACT_APP_API_URL}/comment/${contentId}`,

      //! axios에선 params지만 express에선 req.query래요.
      //! 전송되는 url은 https://localhost:80/126508/?commentId=18  이래요
      // { params: { commentId: uuid }, withCredentials: true }
      ()
      .then((res) => {
        console.log(res.data.data);
        // let arr = res.data.data.map((el) => {
        //   return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        // });
      });
  };

  return (
    <>
      <Body>
        <div>{comment.user.user_image_path}</div>
        <div>{comment.user.nickname}</div>
        <div onClick={handleContentClick}>{comment.comments.comment_content}</div>
        <div>{comment.comments.comment_tags}</div>
        <div onClick={handleContentClick}>{comment.post.title}</div>
        <div>작성날짜 : {updatedAt}</div>
        <button>삭제</button>
      </Body>
    </>
  );
};

export default MyReviewComment;
