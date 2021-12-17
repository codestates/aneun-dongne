import React from "react";
import Carousel from "react-elastic-carousel";
import { responsive, myArrow } from "../modules/carousel";

import "aos/dist/aos.css";
import styled from "styled-components";

export const Content = styled.section`
  width: 80%;
`;

export const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: 0.5s all ease-out;

  backface-visibility: hidden;
  border-radius: 5px;
  flex-direction: column;
`;

export const Review = styled(CardFront)`
  background-color: #183152;
  display: flex;
  flex-direction: column;

  & img {
    clip-path: circle();
    object-fit: cover;
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    position: center;
    top: 18%;
  }
`;

export const ReviewHeader = styled.div`
  position: center;
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;

  font-weight: bold;
  font-size: 1.5rem;
`;
export const Backview = styled(Review)`
  background: #1e7ed5;
  /* #5fa6f0 */
  transform: rotateY(180deg);
`;

export const Post = styled.div`
  min-width: 20rem;

  min-height: 26.4rem;
  transform-style: preserve-3d;
  &:not(:first-child) {
    margin-left: 3rem;
  }

  &:hover ${Review} {
    transform: rotateY(180deg);
  }
  /* &:hover ${Backview} {
    transform: rotateY(180deg);
  } */
`;

export const BackText = styled.h2`
  font-size: 1.2rem;
  position: center;
  bottom: 40%;
  text-align: center;
  letter-spacing: 2px;
  text-justify: center;
  margin-left: 20%;
  margin-right: 20%;
  overflow-y: scroll;
  margin-top: 30%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LandingCard = () => {
  return (
    <Content className="content" data-aos="fade-up" data-aos-duration="1000">
      <Carousel breakPoints={responsive} renderArrow={myArrow} pagination={false}>
        <Post>
          <Review>
            <img src="images/Designer.png" />
            <ReviewHeader>
              우리동네에서 <br />
              인기있는 관광지가 <br />
              궁금했는데 <br />
              좋아요와 위치기반으로 <br />
              간편하게 볼 수 있어요.
            </ReviewHeader>
            <Backview>
              <img src="images/Designer.png" />
              <BackText>
                김코딩
                <br /> 2021 / 12 / 10
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/Fitness.png" />
            <ReviewHeader>
              해시태그로 원하는 곳을 <br />
              쉽고 빠르게 찾을 수 있어서 좋아요!
            </ReviewHeader>
            <Backview>
              <img src="images/Fitness.png" />
              <BackText>
                최코딩
                <br /> 2021 / 12 / 13
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/kite.png" />
            <ReviewHeader>
              새로운 동네로의 이사나 출장도 설레어요! ღ'ᴗ'ღ <br />
              산책하는 재미가 생겼어요!!
            </ReviewHeader>
            <Backview>
              <img src="images/kite.png" />
              <BackText>
                정코딩
                <br /> 2021 / 12 / 15
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/Notificationsr.png" />
            <ReviewHeader>
              "나만의 좋았던 곳"을 <br />
              저장해 놓으면 그 리스트를 한 번에 볼 수 있어서 <br />
              원하는 곳으로 여행하기
              <br /> 편리해요!!
            </ReviewHeader>
            <Backview>
              <img src="images/Notificationsr.png" />
              <BackText>
                박코딩
                <br /> 2021 / 12 / 16
              </BackText>
            </Backview>
          </Review>
        </Post>
      </Carousel>
    </Content>
  );
};

export default LandingCard;
