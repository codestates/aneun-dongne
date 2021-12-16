import styled from "styled-components";
import React from "react";

export const Body = styled.div`
  position: center;
  margin-top: 70%;
  margin-left: 5px;
  color: #68e1fd;
  font-size: 2rem;
  /* margin-right: auto;
  margin-left: auto; */
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 100px;
  margin-left: auto;
  margin-right: auto; */
  /* background-color: aqua; */
  img {
    width: 300px;
    height: 300px;

    /* justify-content: center; */
    /* object-fit: cover; */
    /* margin-left: auto;
    margin-right: auto; */
    /* background-color: blue; */
    /* background-image: "../public/Empty.png"; */
    background-image: url("https://ifh.cc/g/hWTBLO.png");
    /* background-image: url("https://ifh.cc/g/wKwGNs.jpg"); */
    background-size: 300px;

    transform: scale(2);
    box-shadow: 3px 3px 3px 3px gray;

    /* color: white;
    border: 5px solid;
    color: #68e1fd;
    border-radius: 5rem; */

    overflow: hidden;
  }
`;

function Empty() {
  return (
    <Body>
      <div>비어있어요!</div>
      <Image>
        <img scr="" alt="" />
      </Image>
    </Body>
  );
}

export default Empty;
