import { useState } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  z-index: 999;
  /* background-color: red; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;

  border-radius: 6px;
  > #tags {
    display: flex;
    /* display: inline-block; */
    /* flex-wrap: wrap; */
    padding: 0;
    margin: 8px 0 0 0;
  }
  .tag {
    width: auto;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    border: 1px solid rgb(192, 251, 255);
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .tag:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .tag:hover {
    color: black;
    transform: scale(1.1);
  }
  .tag:hover:after {
    left: 0;
  }
  .tag:active {
    //
  }
  .tag-close-icon {
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    font-size: 14px;
    margin-left: 8px;
    color: #4000c7;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    /* padding: 4px 0 0 0; */
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

const MyHashTag = ({ initialTags }) => {
  // const selectedTags = (tags) => console.log(tags);
  //   const initialTags = { initialTags };
  //   console.log(initialTags);
  const [tags, setTags] = useState(initialTags);
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== "" && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      // selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsInput>
        <div id="tags">
          {tags.map((tag, index) => (
            <div key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => removeTags(index)}>
                &times;
              </span>
            </div>
          ))}
        </div>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};

export default MyHashTag;
