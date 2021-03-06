import styled from "styled-components";

export const Styled = {
  TagsInput: styled.div`
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 30px;
    width: 100%;
    border-radius: 6px;
    font-size: 0.8rem;
    > #tags {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin: 8px 0 0 0;
    }
    .tag {
      width: auto;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 8px;
      font-size: 0.8rem;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
    }

    .tag-close-icon {
      display: block;
      width: 14px;
      height: 14px;
      line-height: 14px;
      text-align: center;
      font-size: 12px;
      margin-left: 8px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
    }
    > input {
      flex: 1;
      font-size: 0.7rem;
      border: none;
      padding-left: 10px;
      padding-right: 10px;
      width: 100%;
      min-height: 25px;
      /* padding: 4px 0 0 0; */
      :focus {
        outline: transparent;
      }
    }
    &:focus-within {
      border: 1px solid #4000c7;
    }
  `,
};
