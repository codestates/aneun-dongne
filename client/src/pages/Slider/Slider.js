import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import { useHistory } from "react-router-dom";
import img1 from "../../img/korea03.jpg";
import img2 from "../../img/korea04.jpg";
import img3 from "../../img/korea01.jpg";
import img4 from "../../img/korea02.jpg";
import img5 from "../../img/korea05.jpg";
import img6 from "../../img/korea06.jpg";

const Imgbox = styled.div`
  width: 100%;
  height: 1300px;
  overflow: hidden;
`;

const Button = styled.div`
  all: unset;
  padding: 20px 20px;
  margin: 10px;
  align-items: flex-end;
  font-size: 1rem;
  font-weight: bold;
  color: #88bfff;
  border-radius: 50px;
  border: 2px solid #88bfff;
  cursor: pointer;
  &:hover {
    background-color: #88bfff;
    color: #fff;
  }
`;
const Sliderimgbox = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

const Side = styled.div`
  text-align: center;
`;
export const MenuButton = styled.button`
  /* margin-left: 25vw;
  margin-right: 50px;
  margin-bottom: 400px;
  margin-top: 400px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center; */

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  width: 150px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 43vw;
  margin-right: 350px;
  border-radius: 25px;
  margin-top: 150px;
  background-color: #00ccff;

  :hover {
    background-color: #6af4aa;

    transition: all 0.3s;
  }
`;

export const TitleView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  /* justify-content: center */
  /* justify-content: center; */
  /* flex-direction: column; */
  /* img {
    width: 100%;
  } */

  .title {
    margin-left: 25vw;
    margin-right: 50px;
    margin-bottom: 400px;
    margin-top: 400px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;

    background-color: #f0f9ff99;
    border-radius: 20px;
    width: 700px;
    height: 70px;
  }
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Slider() {
  const [newPhoto, setnewPhoto] = useState(0);
  const slideRef = useRef(null);
  const lastphoto = 5;

  const PrevBtn = () => {
    if (newPhoto === 0) {
      setnewPhoto(lastphoto);
    } else {
      setnewPhoto(newPhoto - 1);
    }
  };

  const NextBtn = () => {
    if (newPhoto >= lastphoto) {
      setnewPhoto(0);
    } else {
      setnewPhoto(newPhoto + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.6s ease-in-out";
    slideRef.current.style.transform = `translateX(-${newPhoto}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [newPhoto]);

  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };

  return (
    <Body>
      <Imgbox>
        <Sliderimgbox ref={slideRef}>
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img1} />
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img2} />
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img3} />
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img4} />
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img5} />
          <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
          <Slide img={img6} />
        </Sliderimgbox>
        <Side>
          <Button onClick={PrevBtn}>Prev</Button>
          <Button onClick={NextBtn}>Next</Button>
        </Side>
      </Imgbox>{" "}
    </Body>
  );
}
