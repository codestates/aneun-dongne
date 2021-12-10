import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Review from "./Review";

import { useRecoilState, useRecoilValue } from "recoil";
import { placelist, loginState } from "../recoil/recoil";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Body = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column; */
`;

export const StartButton = styled.button`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: white;
  width: 180px;
  height: 70px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  /* margin-left: 350px;
  margin-right: 350px; */
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: transparent;

  :hover {
    background-color: #6af4aa;
    transition: all 0.3s;
  }
`;

export const PopularTitleView = styled.div`
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

export const FocusTitleView = styled.div`
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

export const DiyTitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  /* display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  } */
`;

export const PeopleTitleView = styled.div`
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
  background-color: rgb(57 57 57);

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    color: white;
    margin-bottom: 170px;
    /* background-color: #f0f9ff99; */
    border-radius: 20px;
    width: 800px;
    height: 50px;
  }
`;

// export const PopularContainer = styled.div`
//   position: static;
//   margin-bottom: 1rem;
//   font-size: 2.5rem;
// `;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  img {
    width: 1000px;
    height: 500px;
    object-fit: cover;
  }
`;

export const VideoContainer = styled.div`
  /* width: 500px;
  height: 300px; */
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;
export const MainTitleView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
    width: 100%;
  }
  .main-title {
    position: absolute;
    font-size: 3rem;
    font-family: fantasy;
    color: white;
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
        <MainTitleView>
          <img
            src="https://res.cloudinary.com/cloudinary/image/upload/c_limit,w_770/f_auto,fl_lossy,q_auto/Mario_1.gif"
            muted
            autoPlay
            loop
            playsInline
          />
          <div className="main-title">
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <StartButton onClick={ToHome}>시작하기</StartButton>
          </div>
        </MainTitleView>

        <PopularTitleView className="populartitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">우리 동네에서 인기있는 관광지는?</div>

          <VideoContainer>
            <Image>
              <img src="/mapclick.png" />

              <img
                src="https://res.cloudinary.com/cloudinary/image/upload/c_limit,w_770/f_auto,fl_lossy,q_auto/Mario_1.gif"
                muted
                autoPlay
                loop
                playsInline
              />
            </Image>
          </VideoContainer>
        </PopularTitleView>

        <FocusTitleView className="focustitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">저희는 여러분의 관심사에 알맞는 관광지를 찾아드릴 수 있습니다.</div>
          <VideoContainer>
            <Image>
              <img
                src="https://res.cloudinary.com/cloudinary/image/upload/c_limit,w_770/f_auto,fl_lossy,q_auto/Mario_1.gif"
                muted
                autoPlay
                loop
                playsInline
              />
              <img src="/mapimgpeople.png" />
            </Image>
          </VideoContainer>
        </FocusTitleView>

        <DiyTitleView className="diytitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수 있어요.</div>
          <VideoContainer>
            <Image>
              <img src="/likeimg.png" />
              <img
                src="https://res.cloudinary.com/cloudinary/image/upload/c_limit,w_770/f_auto,fl_lossy,q_auto/Mario_1.gif"
                muted
                autoPlay
                loop
                playsInline
              />
            </Image>
          </VideoContainer>
        </DiyTitleView>

        <PeopleTitleView className="peopletitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            유저들의 후기
          </div>
          <Review />
          {/* <img src="/people3.png" />
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
          </div> */}
        </PeopleTitleView>

        <TitleEndView>
          <div className="title">나와 어울리는 장소로 떠날 준비가 되셨나요?</div>
          <StartButton onClick={ToHome}>시작하기</StartButton>
        </TitleEndView>
      </Body>
    </>
  );
}
export default Mainpage;
