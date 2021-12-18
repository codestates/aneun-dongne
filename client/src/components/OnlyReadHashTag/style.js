import styled from "styled-components";

export const Styled = {
  TagsInput: styled.div`

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 400px;

  > #tags {

    display: flex;
    flex-wrap: wrap;
    max-width: 400px;

    padding: 0;
    margin: 8px 0 0 0;
  }
  .tag {
    overflow: hidden;

    text-overflow: ellipsis;

    height: auto;

    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    color: #162b71;

    max-width: 400px;
  
  }

  }`,
};
