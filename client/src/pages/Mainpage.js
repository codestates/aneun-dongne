import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";
import { nowlocation } from "../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";

import { placelist } from "../recoil/recoil";

dotenv.config();

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  color: white;
  width: 100px;
  height: 50px;
  border-style: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-left: 20rem;
  margin-right: 20rem;
  border-radius: 25px;
  margin-top: 100px;
  background-color: #00ccff;

  :hover {
    background-color: #6af4aa;
    transition: all 0.3s;
  }
`;

export const TitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10rem;
    background-color: #f0f9ff99;
    border-radius: 20px;
    width: 400px;
    height: 50px;
  }
`;
export const TitleFirstView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

export const TitleSecondView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .PageTitle {
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 0.05rem;
      height: 0.05rem;
      cursor: pointer;
    }
  }
`;
export const TitleThirdView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .PageTitle {
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 0.05rem;
      height: 0.05rem;
      cursor: pointer;
    }
  }
`;

export const TitlePeopleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .title {
    margin-bottom: 3rem;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .peopleTitle {
    margin-top: 3rem;
    font-size: 1.5rem;
    font-weight: bold;
    > img {
      width: 0.05rem;
      height: 0.05rem;
      cursor: pointer;
    }
  }
`;

export const TitleEndView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 50vh;
  background-color: #88bfff;

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10rem;
    /* background-color: #f0f9ff99; */
    border-radius: 20px;
    width: 800px;
    height: 50px;
  }
`;

export const MainImage = styled.div`
  > img {
    width: 100vw;
    height: 100vh;

    cursor: pointer;
  }
`;

//현재위치 가져오기
// navigator.geolocation.getCurrentPosition(function(pos) {
//     var latitude = pos.coords.latitude;
//     var longitude = pos.coords.longitude;
//     alert("현재 위치는 : " + latitude + ", "+ longitude);
// });

//useEffect

function Mainpage() {
  const [location, setlocation] = useRecoilState(nowlocation);
  const placeList = useRecoilValue(placelist);
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

  // axios
  //   .get(
  //     `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`,
  //     {
  //       headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
  //       params: { lat, lon },
  //     }
  //   )
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   });
  // useEffect(() => {
  //   if (!response) return setlocation();
  // }, []);

  //도로명 주소 가져오는 코드
  //역지오코딩
  // let geocoder = new kakao.maps.services.Geocoder();

  // let coord = new kakao.maps.LatLng(37.56496830314491, 126.93990862062978);
  // let callback = function (result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log("여기 위치는" + result[0].address.address_name + "입니다");
  //   }
  // };

  // geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

  //좌표 값에 해당하는 행정동, 법정동 정보를 얻는다.
  // let geocodersec = new kakao.maps.services.Geocoder();

  // let callbacksec = function (result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log("지역 명칭 : " + result[0].address_name);
  //     console.log("행정구역 코드 : " + result[0].code);
  //   }
  // };

  // geocodersec.coord2RegionCode(126.9786567, 37.566826, callbacksec);

  //const [isStart, setIsStart] = useState(false);

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

  return (
    <>
      <Body>
        <MainImage>
          <TitleView>
            <img src="/Mainimg.jpg" />
            <div className="title">어디론가 놀러가고 싶으신가요?</div>
            <MenuButton onClick={ToHome}>시작하기</MenuButton>
          </TitleView>
        </MainImage>
        <TitleFirstView>
          <div className="title">우리 동네에서 인기있는 관광지는?</div>
        </TitleFirstView>
        <TitleSecondView>
          <div className="title">
            저희는 여러분의 관심사에 알맞는 관광지를 찾아드릴 수 있습니다.
          </div>
          <img src="/blankpage.png" />
        </TitleSecondView>
        <TitleThirdView>
          <div className="title">
            그곳이 어디라도 간직하고 싶다면 내가 서있는 바로 그곳을 저장할 수
            있어요.
          </div>
          <img src="/blankpage.png" />
        </TitleThirdView>
        <TitlePeopleView>
          <div className="title">유저들의 후기</div>
          <img src="/people3.png" />
          <div className="peopleTitle">
            우리지역에서 인기있는 관광지가 궁금했는데 우리동네로 간편하게
            찾아줬어요. <p>강OO</p>
          </div>
          <img src="/people2.png" />
          <div className="peopleTitle">
            가고싶은 곳을 정하기 어려울 때 좋아요! <p>최OO</p>
          </div>
          <img src="/people1.png" />
          <div className="peopleTitle">
            친구들이 우리동네에 놀러왔을 때 원하는 곳으로 데려가기 간편해요!!
            <p>정OO</p>
          </div>
          <img src="/people4.png" />
          <div className="peopleTitle">
            동네를 산책하는 재미가 생겼어요!! <p>박OO</p>
          </div>
        </TitlePeopleView>

        <TitleEndView>
          <div className="title">
            나와 어울리는 장소로 떠날 준비가 되셨나요?
          </div>
          <MenuButton onClick={ToHome}>시작하기</MenuButton>
        </TitleEndView>
      </Body>
    </>
  );
}
export default Mainpage;
