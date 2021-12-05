import React, { useEffect } from "react";
import styled from "styled-components";
import HomeMap from "../../components/kakao-map/HomeMap";
import PlaceList from "../../components/PlaceList";
import HashTagList from "../../components/HashTag/HashTagList";
import { useRecoilState } from "recoil";
import { loading, defaultposition } from "../../recoil/recoil";

const FixedComp = styled.div`
  position: relative;
  margin-top: 120px;
`;

function Home() {
  const [isLoading, setIsLoading] = useRecoilState(loading);
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
        setIsLoading(false);
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
        <HashTagList />
        {isLoading ? (
          <div>로딩인디케이터 만들면 여기 넣기</div>
        ) : (
          <>
            <HomeMap defaultPosition={defaultPosition} />
            <PlaceList />
          </>
        )}
      </FixedComp>
    </>
  );
}

export default Home;
