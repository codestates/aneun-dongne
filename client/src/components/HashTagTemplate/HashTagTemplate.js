import React from "react";
import styled from "styled-components";
const KeyWordBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
`;
const KeyWord = styled.div`
  border-bottom: 1px gray solid;
  display: grid;
  margin-top: 6px;
  margin-right: 6px;
  padding: 5px;
  color: #162b71;
`;

function HashTagTemplate({ keywordDummy }) {
  return (
    <>
      <KeyWordBox>
        {keywordDummy.map((keyword, idx) => {
          return (
            <KeyWord idx={idx + "px"} id={idx} position={"absolute"} key={idx}>
              {keyword}
            </KeyWord>
          );
        })}
      </KeyWordBox>
    </>
  );
}
export default React.memo(HashTagTemplate);
