import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import { nowlocation } from "../recoil/recoil";
import { useRecoilState } from "recoil";
dotenv.config();

export const Body = styled.div`
  position: relative;
  display: flex;
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 20rem;
  margin-right: 0.5rem;
  border-radius: 25px;
  margin-top: 50px;
  background-color: #4ccded;

  :hover {
    background-color: black;
    transition: all 0.3s;
  }
`;

export const TitleFirstView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  /* margin-left: 20rem;
  margin-right: 0.5rem; */
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const TitleSecondView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-left: 20rem;
  margin-right: 0.5rem; */
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
`;
export const TitleThirdView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-left: 20rem;
  margin-right: 0.5rem; */
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 1rem;
    font-weight: bold;
  }
`;
//현재위치 가져오기
// navigator.geolocation.getCurrentPosition(function(pos) {
//     var latitude = pos.coords.latitude;
//     var longitude = pos.coords.longitude;
//     alert("현재 위치는 : " + latitude + ", "+ longitude);
// });

function Mainpage() {
  const [location, setlocation] = useRecoilState(nowlocation);

  if (navigator.geolocation) {
    // GPS를 지원갸능할 때
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // alert(position.coords.latitude + " " + position.coords.longitude);
        setlocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("GPS를 지원하지 않습니다");
  }

  //const [isStart, setIsStart] = useState(false);

  const history = useHistory();
  const ToHome = () => {
    history.push("/home");
  };

  //위치기반 첫번째 사진 넣기
  //해시태그 움짤
  //내가 가본 곳 움짤
  //후기 나열하기

  return (
    <>
      <Body>
        <Button>
          <MenuButton onClick={ToHome}>시작하기</MenuButton>
          <TitleFirstView>
            <div className="title">우리 동네에서 인기있는 관광지는?</div>
          </TitleFirstView>
          <TitleSecondView>
            <div className="title">
              저희는 여러분의 관심사에 알맞는 관광지를 찾아드릴 수 있습니다.
            </div>
          </TitleSecondView>
          <TitleThirdView>
            <div className="title">
              그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수
              있어요.
            </div>
          </TitleThirdView>
        </Button>
      </Body>
    </>
  );
}
export default Mainpage;
