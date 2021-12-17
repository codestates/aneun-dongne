import React, { useRef } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
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
`;

const OnlyReadHashTag = ({ initialTags }) => {
  const tagInput = useRef(null);
  return (
    <>
      <TagsInput ref={tagInput} id="outer-box">
        <div id="tags">
          {initialTags.map((tag, index) => {
            //해시태그에 아무것도 안적혀 있거나 띄어쓰기만 적혀있으면 렌더링하지 않는다.
            if (tag.length === 0) return;
            return (
              <div key={index} className="tag">
                #{tag}
              </div>
            );
          })}
        </div>
      </TagsInput>
    </>
  );
};

export default OnlyReadHashTag;
