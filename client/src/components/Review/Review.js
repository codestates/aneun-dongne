import React from "react";
import Carousel from "react-elastic-carousel";
import { responsive, myArrow } from "../../modules/carousel";

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
  @media screen and (max-width: 780px) {
    width: 100%;
    height: 92%;
  }
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
  font-size: 1.1rem;
  @media screen and (max-width: 780px) {
    position: center;
    text-align: center;
    font-size: 0.7rem;
    height: 300px;
  }
`;
export const Backview = styled(Review)`
  background: #5fa6f0;
  /* #1e7ed5 */
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
  @media screen and (max-width: 780px) {
    position: center;
    text-align: center;
    font-size: 1rem;
    height: 300px;
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
              ?????????????????? <br />
              ???????????? ???????????? <br />
              ??????????????? <br />
              ???????????? ?????????????????? <br />
              ???????????? ??? ??? ?????????.
            </ReviewHeader>
            <Backview>
              <img src="images/Designer.png" />
              <BackText>
                ?????????
                <br /> 2021 / 12 / 10
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/Fitness.png" />
            <ReviewHeader>
              ??????????????? ????????? ?????? <br />
              ?????? ????????? ?????? ??? ????????? ?????????!
            </ReviewHeader>
            <Backview>
              <img src="images/Fitness.png" />
              <BackText>
                ?????????
                <br /> 2021 / 12 / 13
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/kite.png" />
            <ReviewHeader>
              ????????? ???????????? ????????? ????????? ????????????!
              <br />
              ???????????? ????????? ????????????!!
            </ReviewHeader>
            <Backview>
              <img src="images/kite.png" />
              <BackText>
                ?????????
                <br /> 2021 / 12 / 15
              </BackText>
            </Backview>
          </Review>
        </Post>
        <Post>
          <Review>
            <img src="images/Notificationsr.png" />
            <ReviewHeader>
              "????????? ????????? ???"??? <br />
              ????????? ????????? ??? ???????????? ??? ?????? ??? ??? ????????? <br />
              ????????? ????????? ????????????
              <br /> ????????????!!
            </ReviewHeader>
            <Backview>
              <img src="images/Notificationsr.png" />
              <BackText>
                ?????????
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
