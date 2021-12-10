import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  /* z-index: 995; */

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 400px;

  > #tags {
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    /* width: 700px; */
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
    cursor: pointer;
    transition: all 0.5s ease-in-out;
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
`;

const ReadMoreBtn = styled.button`
  border: blue 1px solid;
  z-index: 999;
  border: none;
  /* background: transparent; */
  width: 50px;
  margin-bottom: 1rem;
  cursor: pointer;
`;
const CutDownBtn = styled.button`
  border: blue 1px solid;
  z-index: 999;
  border: none;
  /* background: transparent; */
  width: 50px;
  margin-bottom: 1rem;
  cursor: pointer;
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
                {tag}
              </div>
            );
          })}
        </div>
      </TagsInput>
    </>
  );
};

export default OnlyReadHashTag;
