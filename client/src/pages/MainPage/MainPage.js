import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Review from "../Review";
import { Icon } from "react-icons-kit";
import { angleDoubleDown } from "react-icons-kit/fa/angleDoubleDown";

import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../../recoil/recoil";

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

AOS.init();

export const Body = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  /* overflow-x: visible; */
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
  margin-top: 10%;

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
  background-color: #505f7b;
  color: white;

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
  margin-left: auto;
  margin-right: auto;
  img {
    width: 30%;
    height: 30%;

    object-fit: cover;

    margin-left: auto;
    margin-right: auto;
  }
  .play {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
  }
`;

export const VideoContainer = styled.div`
  /* width: 500px;
  height: 300px; */
  width: 50%;

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
    margin-top: 10%;
    position: absolute;
    font-size: 3rem;
    font-family: fantasy;
    color: white;
  }
  .icon {
    margin-top: 10%;
    margin-left: 41%;
    margin-right: auto;
    animation-name: updown;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @keyframes updown {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    :hover {
      cursor: pointer;
      color: #6af4aa;
      transition: all 0.3s;
    }
  }

  /* i {
    justify-content: center;
    margin-right: 50%;
  } */
`;

// export const Icon = styled.i`
//   justify-content: center;
// `;

// export const Icon = styled.div`
//   display: flex;
// `;

function MainPage() {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };

  const ToScrollBottom = (e) => {
    window.scroll({
      top: 800,

      behavior: "smooth",
    });
  };

  console.log("로긴되었나요", isLogin);

  return (
    <>
      <Body>
        <MainTitleView>
          <img src="/images/look.gif" muted autoPlay loop playsInline />
          <div className="main-title">
            <div className="title">어디론가 떠나고 싶으신가요?</div>
            <StartButton onClick={ToHome}>시작하기</StartButton>
            <div className="icon">
              <Icon size={"100"} icon={angleDoubleDown} onClick={ToScrollBottom} />
            </div>
          </div>
        </MainTitleView>

        <PopularTitleView className="populartitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">우리 동네에서 인기있는 관광지는?</div>

          <VideoContainer>
            <Image>
              <img src="images/mapclick.png" />

              <img
                className="play"
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
                className="play"
                src="https://res.cloudinary.com/cloudinary/image/upload/c_limit,w_770/f_auto,fl_lossy,q_auto/Mario_1.gif"
                muted
                autoPlay
                loop
                playsInline
              />
              <img src="images/mapimgpeople.png" />
            </Image>
          </VideoContainer>
        </FocusTitleView>

        <DiyTitleView className="diytitle" data-aos="fade-up" data-aos-duration="1000">
          <div className="title">그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수 있어요.</div>
          <VideoContainer>
            <Image>
              <img src="images/likeimg.png" />

              <img
                className="play"
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
        </PeopleTitleView>

        <TitleEndView>
          <div className="title">나와 어울리는 장소로 떠날 준비가 되셨나요?</div>
          <StartButton onClick={ToHome}>시작하기</StartButton>
        </TitleEndView>
        <Footer />
      </Body>
    </>
  );
}
export default MainPage;
