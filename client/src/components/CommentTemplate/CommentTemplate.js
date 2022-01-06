import React from "react";

import Comments from "../Comments/Comments";
import { Styled } from "./style";

function CommentTemplate({ commentDummy, contentId }) {
  return (
    <div>
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
    </div>
  );
}

export default React.memo(CommentTemplate);
