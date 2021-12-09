import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProfileUpload from "../../components/UploadImage/ProfileUpload";
import { StyledLink } from "../../components/PlaceList";
export const Body = styled.div`
  /* position: relative; */
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;

  margin-top: 73px;
`;
export const MenuBar = styled.div`
  margin: 0px 50px 0 10px;
  background: white;
  box-shadow: rgb(180 180 180) -1px 1px 8px;
  border-radius: 20px;
  width: 300px;
  height: 100%;
  border-radius: 10px;
  position: absolute;
  top: 0;
  /* padding: 100px; */
  /* z-index: 9; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8ea1da;
  background-image: linear-gradient(
    to bottom,
    rgba(192, 251, 255, 1) 0,
    rgba(192, 251, 255, 0.5) 60%,
    rgba(255, 255, 255, 0.1) 100%
  );

  > img {
    margin: 30px;
    width: 170px;
    height: 170px;
    border-radius: 100%;
    cursor: pointer;
  }
  > input {
    border: none;
    align-items: center;
  }

  > .menu-img {
    /* background-color: red; */
    margin-top: 40%;
    /* margin-right: 50%; */
    width: 100px;
    height: 100px;
  }
  > h2 {
    margin-top: 20px;
    /* background: red; */
  }
`;
const ButtonList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  .menubar-button {
    cursor: pointer;
    border-radius: 20px;
    font-size: 1.3em;
    padding: 10px;
    margin-top: 20px;
    border: none;
    /* background-color: #8ea1da; */
    transition: all 0.5s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
function Menubar({ imgUrl, setImgUrl, nickname }) {
  console.log(nickname);
  return (
    <>
      <MenuBar>
        <div className="menu-img">
          <ProfileUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
        </div>
        <h2>{nickname}</h2>
        <ButtonList>
          <StyledLink to="/mypage">
            <button className="menubar-button">프로필수정</button>
          </StyledLink>
          <StyledLink to="/mapage/likelist">
            <button className="menubar-button">좋아요 한 관광지</button>
          </StyledLink>
          <StyledLink to="/mapage/my-comment">
            <button className="menubar-button">내가 쓴 리뷰</button>
          </StyledLink>
          <button className="menubar-button">내가 가본 곳</button>
        </ButtonList>
      </MenuBar>
    </>
  );
}

export default Menubar;
