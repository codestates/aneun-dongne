import React from "react";

import { Styled } from "./style";

import { useRecoilValue } from "recoil";
import { commentDeleteLoading } from "../../recoil/recoil";

import LikeLoading from "../Loading/LikeLoading";
import Comments from "../Comments/Comments";

function CommentTemplate({ commentDummy, contentId }) {
  const isLoading = useRecoilValue(commentDeleteLoading);

  return (
    <>
      {commentDummy.map((comment, idx) => {
        //여기도 toast로 바꿔보자
        if (comment.text === "\n") return null;
        //key에 인덱스넣는건 최후의수단
        return (
          <div className="comment-template" key={comment[0].id}>
            <Comments
              uuid={comment[0].id}
              img={comment[0].user_image_path}
              nickname={comment[0].nickname}
              text={comment[0].comment_content}
              initialTags={comment[0].comment_tags}
              date={comment[0].createdAt}
              commentId={comment[0].comment_post_contentid}
              editable={comment[0].editable}
              contentId={contentId}
            ></Comments>
          </div>
        );
      })}
    </>
  );
}

export default React.memo(CommentTemplate);
