import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HomeMap from "../../components/kakao-map/HomeMap";
import PlaceList from "../../components/PlaceList";
import KeyWordsList from "../../components/HashTag/Home-KeyWordsList";
import { useRecoilState } from "recoil";
import { defaultposition } from "../../recoil/recoil";

const FixedComp = styled.div`
  position: relative;
  margin-top: 80px;
`;

function Home() {
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);
  // * 현재위치 받는 useEffect
  const getPosition = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        // console.log("여기 돼?");
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(isLoading);

        setDefaultPosition({ lat, lon });

        // console.log(isLoading);
      },
      (err) => alert("위치권한을 허용해주세요")
    );
  };
  useEffect(() => {
    // console.log("이건돼?");
    getPosition();
    // console.log(defaultPosition);
  });

  return (
    <>
      <FixedComp>
        <KeyWordsList />

        <HomeMap defaultPosition={defaultPosition} />
        <PlaceList />
      </FixedComp>
    </>
  );
}

export default Home;
