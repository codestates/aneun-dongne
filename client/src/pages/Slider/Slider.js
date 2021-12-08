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
  height: 1000px;
  overflow: hidden;
`;

const Prevbutton = styled.div`
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  font-size: 3rem;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  background-color: #ffffff78;
`;

const Nextbutton = styled.div`
  position: absolute;
  z-index: 2;
  background: none;
  border: none;
  font-size: 3rem;
  top: 60%;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  background-color: #ffffff78;
`;

const Sliderimgbox = styled.div`
  margin-bottom: 50px;
  display: flex;
`;

// const Side = styled.div`
//   text-align: center;
//   margin: 50px;
//   margin-bottom: 0px;
//   margin-top: 0px;
//   margin-left: 0px;
//   margin-right: 0px;
// `;

export const TitleView = styled.div`
  display: center;

  .title {
    position: fixed;
    top: 40%;
    right: 20%;
    left: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;

    background-color: #fdfeff21;
    border-radius: 20px;
    border: 5px white;
    border-style: solid;
    color: black;
    /* width: 700px; */
    height: 80px;
  }
  .start-button {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    position: fixed;
    color: white;
    width: 150px;
    height: 60px;
    border-style: none;
    border-radius: 50px;
    top: 55%;
    right: 45%;
    left: 45%;
    background-color: #00ccff;
    align-items: center;

    transition: all 0.3s;
    cursor: pointer;

    :hover {
      background-color: #6af4aa;

      transition: all 0.3s;
    }
  }
`;

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default function Slider(props) {
  const [{ img1 }, { img2 }, { img3 }, { img4 }, { img5 }, { img6 }] = imgdummy;

  const [imgdummy, setImgdummy] = useState(0);
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
          {/* <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <button className="start-button" onClick={ToHome}>
              시작하기
            </button>
          </TitleView>
          <Slide img={img1} /> */}

          {props.map((props) => (
            <div>
              <TitleView>
                <div className="title">어디론가 놀러가고 싶으신가요?</div>
                <button className="start-button" onClick={ToHome}>
                  시작하기
                </button>
              </TitleView>
              <Slide img={imgdummy} />
            </div>
          ))}

          {/* <TitleView>
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <button className="start-button" onClick={ToHome}>
              시작하기
            </button>
          </TitleView>
          <Slide img={img2} /> */}

          {/* <TitleView>
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
          <Slide img={img6} /> */}
        </Sliderimgbox>
        <Prevbutton className="prev" onClick={PrevBtn}>
          &#60;
        </Prevbutton>

        <Nextbutton className="next" onClick={NextBtn}>
          &#62;
        </Nextbutton>
      </Imgbox>
    </Body>
  );
}
