import { useState } from "react";
import styled from "styled-components";

export const TagsInput = styled.div`
  z-index: 999;

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

const OthersHashTag = ({ initialTags }) => {
  // const [tags, setTags] = useState(initialTags);

  return (
    <>
      <TagsInput>
        <div id="tags">
          {initialTags
            ? initialTags.map((tag, index) => (
                <div key={index} className="tag">
                  {tag}
                </div>
              ))
            : null}
        </div>
      </TagsInput>
    </>
  );
};

export default OthersHashTag;
