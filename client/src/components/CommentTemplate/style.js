import styled from "styled-components";

export const Styled = {
  CommentWrapper: styled.div`
    width: 100%;
    .comment-template {
      background: yellow;
      margin-left: auto;
      margin-right: auto;
      @media (max-width: 768px) {
        width: 80%;
        margin-left: 40px;
        margin-right: auto;
      }
      @media (max-width: 612px) {
        width: 450px;
        margin-left: 20px;
        margin-right: auto;
      }
    }
  `,
};
