import styled from "styled-components";

export const Styled = {
  TagsInput: styled.div`

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 100%;

  > #tags {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0;
    margin: auto 0 2% 0;
  }
  .tag {
    overflow: hidden;
    text-overflow: ellipsis;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    font-size: 0.8rem;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    color: #162b71;
  }
  }`,
};
