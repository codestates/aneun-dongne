import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  /* z-index: 995; */
  /* background-color: blue; */
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 400px;

  > #tags {
    /* background-color: purple; */
    display: flex;
    flex-wrap: wrap;
    max-width: 400px;

    padding: 0;
    margin: 8px 0 0 0;
  }
  .tag {
    overflow: hidden;
    /* word-wrap: break-word; */
    text-overflow: ellipsis;
    /* max-width: 200; */
    height: auto;
    /* display: flex; */
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    border: 1px solid rgb(192, 251, 255);
    background-color: rgb(192, 251, 255);
    max-width: 400px;
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }
  .tag:after {
    position: absolute;
    content: "";
    width: 0;
    height: auto;
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
    //
    color: black;
    transform: scale(1.1);
  }
  .tag:hover:after {
    left: 0;
  }
  .tag:active {
    //
  }
`;

const OnlyReadHashTag = ({ initialTags, uuid }) => {
  // const [tags, setTags] = useState(initialTags);
  const tagInput = useRef(null);
  // console.log(initialTags);
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
