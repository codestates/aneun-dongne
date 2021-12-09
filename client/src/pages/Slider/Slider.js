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

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Imgbox = styled.div`
  width: 100%;
  height: 850px;
  overflow: hidden;
`;

// const Button = styled.div`
//   all: unset;
//   padding: 20px 20px;
//   margin: 10px;
//   align-items: flex-end;
//   font-size: 1rem;
//   font-weight: bold;
//   color: #88bfff;
//   border-radius: 50px;
//   border: 2px solid #88bfff;
//   cursor: pointer;
//   &:hover {
//     background-color: #88bfff;
//     color: #fff;
//   }
// `;

const Sliderimgbox = styled.div`
  margin-bottom: 30px;
  display: flex;

  /* justify-content: center; */
`;

const Side = styled.div`
  text-align: center;
`;
const MenuButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: white;
  width: 150px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 44vw;
  margin-right: 500px;
  border-radius: 25px;
  margin-top: 450px;
  background-color: #90bef9c7;
  :hover {
    background-color: #a2f8cade;
    transition: all 0.3s;
  }
`;

export const TitleButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  width: 700px;
  height: 100px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  top: -25%;
  margin-left: 28vw;
  border: 3px solid;
  border-radius: 20px;
  margin-top: 500px;

  background-color: #90bef9c7;
  :hover {
    background-color: #a2f8cade;
    transition: all 0.3s;
  }
`;

export const TitleView = styled.div`
  .title {
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

  // setTimeout(() => NextBtn(), 5000);

  useEffect(() => {
    let mounted = true;

    setTimeout(() => {
      // mounted 상태일 때 실행하려는 함수를 리턴한다.
      if (mounted) {
        return NextBtn();
      }
    }, 5000);

    // 컴포넌트가 unmount될 때 실행되는 함수로 이 시점에 mounted 변수를 false로 설정해준다.
    return () => {
      mounted = false;
    };
  });

  useEffect(() => {
    slideRef.current.style.transition = "all 0.6s ease-in-out";
    slideRef.current.style.transform = `translateX(-${newPhoto}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [newPhoto]);

  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };
  console.log(typeof ToHome);
  return (
    <Body>
      <Imgbox>
        <Sliderimgbox ref={slideRef}>
          <TitleView>
            <TitleButton onClick={ToHome}>어디론가 놀러가고 싶으신가요?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img1} />
          <TitleView>
            <TitleButton onClick={ToHome}>우리 동네를 둘러볼까요?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img2} />
          <TitleView>
            <TitleButton onClick={ToHome}>내가 아는 곳을 다시 보고 싶다면?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img3} />
          <TitleView>
            <TitleButton onClick={ToHome}>오늘은 특별한 곳을 가고 싶다면?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img4} />
          <TitleView>
            <TitleButton onClick>나만 아는 곳으로 가고 싶다면?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img5} />
          <TitleView>
            <TitleButton onClick>인기있는 관광지로 가볼까요?</TitleButton>
            <MenuButton onClick={ToHome}>start</MenuButton>
          </TitleView>
          <Slide img={img6} />
        </Sliderimgbox>
        <Side>
          {/* <Button onClick={PrevBtn}>Prev</Button>
          <Button onClick={NextBtn}>Next</Button> */}
        </Side>
      </Imgbox>
    </Body>
  );
}
