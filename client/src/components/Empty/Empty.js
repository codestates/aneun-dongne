import React from "react";
import { Styled } from "./styled";

const Empty = () => {
  return (
    <Styled.ContentEmpty>
      텅 비어 있어요!
      <img src="/images/Empty.png" />
    </Styled.ContentEmpty>
  );
};

export default Empty;
