import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import HomeMap from "../../components/HomeMap/HomeMap";
import PlaceList from "../../components/PlaceList/PlaceList";
import { useRecoilState } from "recoil";
import { loading, defaultposition, usersaddress, nowlocation } from "../../recoil/recoil";
import Loading from "../../components/Loading/Loading";

const FixedComp = styled.div`
  margin-top: 73px;
`;
const DivRow = styled.div`
  @media (min-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
    display: flex;

    justify-content: space-evenly;
  }
`;
const DivColumn = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
`;
const DivColumnSecond = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
    display: flex;

    flex-direction: column;
    align-content: center;

    position: absolute;
    right: 3%;
  }
`;

function Home() {
  const [nowLocation, setNowLocation] = useRecoilState(nowlocation);
  const [isLoading, setIsLoading] = useRecoilState(loading);
  const [add, setAdd] = useRecoilState(usersaddress);
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);
  // * 현재위치 받는 useEffect
  const getPosition = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setNowLocation({ lat, lon });
        setDefaultPosition({ lat, lon });
        axios
          .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`, {
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
          })
          .then((res) => {
            return res.data.documents[0].address;
          })
          .then((address) => {
            setAdd({
              area: address.region_1depth_name,
              sigg: address.region_2depth_name,
              address: address.address_name,
            });
          })
          .catch((err) => console.log(err));
        setIsLoading(false);
      },
      (err) => alert("위치권한을 허용해주세요")
    );
  };
  useEffect(() => {
    let mounted = true;
    getPosition();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <FixedComp>
        {isLoading ? (
          <Loading />
        ) : (
          <DivRow>
            <DivColumn>
              <HomeMap />
            </DivColumn>
            <DivColumnSecond>
              <PlaceList />
            </DivColumnSecond>
          </DivRow>
        )}
      </FixedComp>
    </>
  );
}

export default Home;
