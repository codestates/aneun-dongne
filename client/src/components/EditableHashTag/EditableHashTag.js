import React from "react";
import { Styled } from "./style";

const EditableHashTag = ({ setTags, tags }) => {
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    if (event.target.value !== " " && event.target.value.length <= 20) {
      //스페이스바로 입력하기 때문에 마지막글자에 공백이 생기면서 입력이 되는데, 해시태그안의 공백을 모두 빈문자열로 바꿔준다.
      let newTagsObj = new Set([...tags, event.target.value.replace(" ", "").replace(",", "").replace("#", "")]);
      setTags([...newTagsObj]);
      event.target.value = "";
      if (event.target.value === " ") {
        return;
      }
    } else {
      setTags([...tags]);
      event.target.value = "";
      if (event.target.value === " ") {
        return;
      }
    }
  };

  return (
    <>
      <Styled.TagsInput>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => (event.code === "Space" && event.target.value !== " " ? addTags(event) : null)}
          placeholder="스페이스바로 해시태그를 입력할 수 있습니다"
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
