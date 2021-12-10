import React from "react";
import Carousel from "react-elastic-carousel";
import { responsive, myArrow } from "./carousel";

import "aos/dist/aos.css";
import styled from "styled-components";

export const Content = styled.section`
  width: 80%;
`;

export const Cardul = styled.ul`
  width: 50rem;
  height: 33.3rem;
  overflow: hidden;
`;

export const CardWrapper = styled.section`
  position: relative;
  display: flex;
  width: 100%;
`;

export const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;

  transition: 1s all ease-out;
  backface-visibility: hidden;
  border-radius: 5px;
  flex-direction: column;
`;

export const Review = styled(CardFace)`
  background-color: #d3e8ff;
  display: flex;
  flex-direction: column;

  & img {
    clip-path: circle();
    object-fit: cover;
    width: 120px;
    height: 120px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    position: center;
    top: 18%;
  }
`;

export const CardBack = styled(CardFace)`
  background: var(--point-color);
  color: var(--primary-color);
  transform: rotateY(180deg);
`;

export const ReviewHeader = styled.h1`
  font-size: 1.5rem;
  position: absolute;
  bottom: 18%;
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
  p {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
  }
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
`;
const LandingCard = () => {
  return (
    <Content className="content" data-aos="fade-up" data-aos-duration="1000">
      <Carousel breakPoints={responsive} renderArrow={myArrow} pagination={false}>
        <Post>
          <Review>
            <img src="/people3.png" alt="" />
            <ReviewHeader>
              <p>박oo</p>우리동네에서 인기있는 관광지가 궁금했는데 우리동네로 간편하게 찾아줬어요.
            </ReviewHeader>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="/people4.png" alt="" style={{ objectPosition: "-8px 55%" }} />
            <ReviewHeader>
              <p>이oo</p>가고싶은 곳을 정하기 어려울 때 좋아요!
            </ReviewHeader>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="/people1.png" alt="" style={{ objectPosition: "-30px 60%" }} />
            <ReviewHeader>
              <p>정oo</p>친구들이 우리동네에 놀러왔을 때 원하는 곳으로 데려가기 간편해요!!
            </ReviewHeader>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="/people4.png" alt="" style={{ objectPosition: "-15px 45%" }} />
            <ReviewHeader>
              <p>김oo</p>동네를 산책하는 재미가 생겼어요!!
            </ReviewHeader>
          </Review>
        </Post>
      </Carousel>
    </Content>
  );
};

export default LandingCard;
