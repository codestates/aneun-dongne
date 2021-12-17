import React from "react";
import styled from "styled-components";

export const ContentEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: black;
  font-size: 3rem;
  margin-right: auto;
  margin-left: auto;
  margin-top: 200px;

  font-weight: bold;

  > img {
    justify-content: center;
    width: 100%;
  }
`;

const Empty = () => {
  return (
    <ContentEmpty>
      텅 비어 있어요!
      <img src="/images/Empty.png" />
    </ContentEmpty>
  );
};

export default Empty;
