import React, { useRef } from "react";

import { Styled } from "./style";

const OnlyReadHashTag = ({ initialTags, uuid }) => {
  const tagInput = useRef(null);
  return (
    <>
      <Styled.TagsInput ref={tagInput} id="outer-box">
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
      </Styled.TagsInput>
    </>
  );
};

export default OnlyReadHashTag;
