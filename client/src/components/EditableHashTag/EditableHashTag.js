import React from "react";

import { Styled } from "./style";

const EditableHashTag = ({ setTags, tags }) => {
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value); //중복검사
    if (event.target.value !== "" && filtered.length === 0) {
      if (event.target.value.length === " ") {
        return;
      }

      //스페이스바로 입력하기 때문에 마지막글자에 공백이 생기면서 입력이 되는데, 해시태그안의 공백을 모두 빈문자열로 바꿔준다.
      setTags([...tags, event.target.value.replace(" ", "")]);
      event.target.value = "";
      console.log("tags", tags);
    }
  };

  return (
    <>
      <Styled.TagsInput>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => (event.code === "Space" && event.target.value !== " " ? addTags(event) : null)}
          placeholder="스페이스바로 해시태그 완성하는겨"
        />
        <div id="tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              <span className="tag-title">#{tag}</span>
              <span className="tag-close-icon" onClick={() => removeTags(index)}>
                &times;
              </span>
            </div>
          ))}
        </div>
      </Styled.TagsInput>
    </>
  );
};

export default EditableHashTag;
