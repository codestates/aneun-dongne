import styled from "styled-components";

export const Styled = {
  FormContainer: styled.div`
    .comment-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .commet-message {
      font-size: 1.4rem;
      font-weight: 500;
      padding: 40px 0px;
    }

    form button {
      border: none;
      border-radius: 10px;
      background-color: #3a6fb0;
      color: white;
      width: 90px;
      height: 30px;
      cursor: pointer;
      margin: 0px 15px;
      &:hover {
        background-color: #2f4d6f;
      }
    }
  `,
};
