import React from "react";
import styled from "styled-components";

export default function Slide({ img }) {
  return <Img src={img} />;
}

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
