import React from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 100%;

  border-radius: 6px;
  > #tags {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0 0 0;
  }
  .tag {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    color: #162b71;
    border-radius: 6px;
    text-align: left;
    margin: 0 5px 5px 0;
    > .tag-title {
      margin-right: 8px;
      text-align: left;
      // text-overflow: ellipsis;
      // display: -webkit-box;
      // // word-wrap: nomal;
      // // word-break: break-all;
      // -webkit-box-orient: vertical;
    }
  }

  .tag-close-icon {
    display: block;
    width: 14px;
    height: 14px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    color: #162b71;
    border-radius: 50%;
    cursor: pointer;
  }

  > input {
    flex: 1;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    width: 100%;
    font-size: 14px;
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    border: 1px solid #4000c7;
  }
`;
// import { Styled } from "./style";

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
      <TagsInput>
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
      </TagsInput>
    </>
  );
};

export default EditableHashTag;
