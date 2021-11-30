import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import { nowlocation } from "../recoil.js/recoil";
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

export const TitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  margin-left: 20rem;
  margin-right: 0.5rem;
  width: 100%;
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
  const ToHomepage = () => {
    history.push("/homepage");
  };

  return (
    <>
      <Body>
        <Button>
          <MenuButton onClick={ToHomepage}>시작하기</MenuButton>
          <TitleView>
            <div className="title">우리 동네에서 인기있는 관광지는?</div>
          </TitleView>
        </Button>
      </Body>
    </>
  );
}
export default Mainpage;
