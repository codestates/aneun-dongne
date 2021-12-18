import React, { useEffect, useState } from "react";
import axios from "axios";
import { Styled } from "./style";
import HomeMap from "../../components/HomeMap/HomeMap";
import PlaceList from "../../components/PlaceList/PlaceList";

import { useRecoilState } from "recoil";
import { loading, defaultposition, usersaddress, nowlocation } from "../../recoil/recoil";
import Loading from "../../components/Loading/Loading";

function Home() {
  const [nowLocation, setNowLocation] = useRecoilState(nowlocation);
  const [isLoading, setIsLoading] = useRecoilState(loading);
  const [add, setAdd] = useRecoilState(usersaddress);
  const [pending, setPending] = useState(false);
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);
  // * 현재위치 받는 useEffect
  const getPosition = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        // console.log("여기 돼?");
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(isLoading);
        setNowLocation({ lat, lon });
        setDefaultPosition({ lat, lon });
        // console.log(isLoading);
        axios
          .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`, {
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
          })
          .then((res) => {
            return res.data.documents[0].address;
          })
          .then((address) => {
            // console.log(address);
            setAdd({
              area: address.region_1depth_name,
              sigg: address.region_2depth_name,
              address: address.address_name,
            });
          })
          //   .then(res=>console.log(meetingPlace))
          .catch((err) => console.log(err)); //237줄에 console.log(meetingPlace)있음.
        // console.log(isLoading);
        setIsLoading(false);
      },
      (err) => alert("위치권한을 허용해주세요")
    );
  };
  useEffect(() => {
    // console.log("이건돼?");
    let mounted = true;
    getPosition();
    // console.log(add);
    return () => {
      mounted = false;
    };
    // // console.log(defaultPosition);
  }, []);

  return (
    <>
      <Styled.FixedComp>
        {isLoading ? (
          <Loading />
        ) : (
          <Styled.DivRow>
            <Styled.DivColumn>
              <HomeMap />
            </Styled.DivColumn>
            <Styled.DivColumnSecond>
              <PlaceList />
            </Styled.DivColumnSecond>
          </Styled.DivRow>
        )}
      </Styled.FixedComp>
    </>
  );
}

export default Home;
