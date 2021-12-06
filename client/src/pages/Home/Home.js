import React, { useEffect } from "react";
import styled from "styled-components";
import HomeMap from "../../components/kakao-map/HomeMap/HomeMap";
import PlaceList from "../../components/PlaceList";
import HashTagList from "../../components/HashTag/HashTagList";
import { useRecoilState } from "recoil";
import { loading, defaultposition } from "../../recoil/recoil";

const FixedComp = styled.div`
  border-top: 1px gray solid;
  margin-top: 80px;
`;
const DivRow = styled.div`
  display: row;
`;
const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
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
        {isLoading ? (
          <div>로딩인디케이터 만들면 여기 넣기</div>
        ) : (
          <DivRow>
            <DivColumn>
              <HomeMap defaultPosition={defaultPosition} />
            </DivColumn>
            <DivColumn>
              <HashTagList />
              <PlaceList />
            </DivColumn>
          </DivRow>
        )}
      </FixedComp>
    </>
  );
}

export default Home;
