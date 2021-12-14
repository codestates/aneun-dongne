import React from "react";
import styled from "styled-components";
import Mylike from "./MyLike";

export default function LikeLists({ postsInfo, handlecontentClick }) {
  return (
    <div onClick={handlecontentClick}>
      <img src={postsInfo.post_firstimage} />
      <div>{postsInfo.post_areacode}</div>
      <div>{postsInfo.post_title}</div>
      <div>{postsInfo.isLiked}</div>
      <div>{postsInfo.likeCount}</div>
    </div>
  );
}
