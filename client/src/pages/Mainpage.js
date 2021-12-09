import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useRecoilState, useRecoilValue } from "recoil";
import { placelist, loginState } from "../recoil/recoil";

export const Body = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */
`;

export const Button = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;

  .upload-btn {
    cursor: pointer;
    width: 100px;
    height: 50px;
    background-color: blue;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cancel {
    background-color: gray;
  }
`;

export const MenuButton = styled.button`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  /* margin-left: 350px;
  margin-right: 350px; */
  border-radius: 25px;
  margin-top: 10px;
  background-color: #00ccff;

  :hover {
    background-color: #6af4aa;

    transition: all 0.3s;
  }
`;

export const TitleFirstView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const TitleSecondView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .PageTitle {
    margin-top: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
`;
export const TitleThirdView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .PageTitle {
    margin-top: 50px;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
`;

export const TitlePeopleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    margin-bottom: 50px;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .peopleTitle {
    margin-top: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }
`;

export const TitleEndView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  background-color: #88bfff;

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 170px;
    /* background-color: #f0f9ff99; */
    border-radius: 20px;
    width: 800px;
    height: 50px;
  }
`;

export const PopularContainer = styled.div`
  position: static;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

export const Image = styled.div`
  display: flex;
  img {
    width: 1000px;
    height: 500px;
    object-fit: cover;
  }
`;

export const VideoContainer = styled.div`
  width: 300px;
  height: 300px;
  & img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export const TitleMainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
    width: 100%;
  }
  .main-title {
    position: absolute;
  }
`;

function Mainpage() {
  const placeList = useRecoilValue(placelist);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };

  //첫화면에 영상을 넣을 시 추가
  {
    /* <video video height="180" width="288" controls autoplay>
            <source src="/Main.mp4" type="video/mp4" />
          </video> */
  }
  console.log("로긴되었나요", isLogin);

  return (
    <>
      <Body>
        <TitleMainView>
          <img
            src={
              "https://user-images.githubusercontent.com/77098060/126061940-83ac21bc-9a61-4dd1-bf26-d3bba3495f5e.gif"
            }
            muted
            autoPlay
            loop
            playsInline
          />
          <div className="main-title">
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </div>
        </TitleMainView>

        <TitleFirstView>
          <div className="title">우리 동네에서 인기있는 관광지는?</div>

          <VideoContainer>
            <Image>
              <img src="/mapclick.png" />
            </Image>
            {/* gif 추가예정 */}
          </VideoContainer>
        </TitleFirstView>
        <TitleSecondView>
          <div className="title">저희는 여러분의 관심사에 알맞는 관광지를 찾아드릴 수 있습니다.</div>
          <Image>
            <img src="/mapimgpeople.png" />
          </Image>
        </TitleSecondView>
        <TitleThirdView>
          <div className="title">그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수 있어요.</div>
          <Image>
            <img src="/likedlistimg.png" />
          </Image>
        </TitleThirdView>
        <TitlePeopleView>
          <div className="title">유저들의 후기</div>
          <img src="/people3.png" />
          <div className="peopleTitle">
            우리지역에서 인기있는 관광지가 궁금했는데 우리동네로 간편하게 찾아줬어요. <p>-강OO</p>
          </div>
          <img src="/people2.png" />
          <div className="peopleTitle">
            가고싶은 곳을 정하기 어려울 때 좋아요! <p>-최OO</p>
          </div>
          <img src="/people1.png" />
          <div className="peopleTitle">
            친구들이 우리동네에 놀러왔을 때 원하는 곳으로 데려가기 간편해요!!
            <p>-정OO</p>
          </div>
          <img src="/people4.png" />
          <div className="peopleTitle">
            동네를 산책하는 재미가 생겼어요!! <p>-박OO-</p>
          </div>
        </TitlePeopleView>
        <TitleEndView>
          <div className="title">나와 어울리는 장소로 떠날 준비가 되셨나요?</div>
          <MenuButton onClick={ToHome}>시작하기</MenuButton>
        </TitleEndView>
      </Body>
    </>
  );
}
export default Mainpage;
