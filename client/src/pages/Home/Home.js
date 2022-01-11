import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Styled } from "./style";
import HomeMap from "../../components/HomeMap/HomeMap";
import PlaceList from "../../components/PlaceList/PlaceList";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { loading, defaultposition, nowlocation, usersaddress, searchPlaceModal } from "../../recoil/recoil";
import Loading from "../../components/Loading/Loading";

import { toast } from "react-toastify";
import HomeRightbar from "../../components/HomeSearchBar/Home-Rightbar-index";

function Home() {
  const upBox = useRef();
  //atom값을 참조하지 않아야 리렌더링이 안됨.
  const [openModal, setOpenModal] = useState(false);
  // const [openSearchPlaceModal, setOpenSearchPlaceModal] = useRecoilState(searchPlaceModal);
  const setOpenSearchPlaceModal = useSetRecoilState(searchPlaceModal);
  // const setNowLocation = useSetRecoilState(nowlocation);
  // const [isLoading, setIsLoading] = useState(true);
  const setAdd = useSetRecoilState(usersaddress);
  const defaultPositionReset = useResetRecoilState(defaultposition);
  // const setDefaultPosition = useSetRecoilState(defaultposition);
  const [height, setHeight] = useState(0);
  const addressReset = useResetRecoilState(usersaddress);

  useEffect(() => {
    setHeight(upBox.current.getBoundingClientRect().height);
    // mount 되고 난 뒤의 시점이니까 catContainerRef.current의 값이 업데이트 된 상태
  }, []);
  useEffect(() => {
    console.log(height);
  }, [height]);
  useEffect(() => {
    return () => {
      addressReset();
      defaultPositionReset();
    };
  }, []);
  // * 현재위치 받는 useEffect

  // useEffect(() => {
  //   axios
  //     .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${127}&y=${37.5}&input_coord=WGS84`, {
  //       headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       return res.data.documents[0].address;
  //     })
  //     .then((address) => {
  //       setAdd({
  //         area: address.region_1depth_name,
  //         sigg: address.region_2depth_name,
  //         address: address.address_name,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   setOpenSearchPlaceModal(!openSearchPlaceModal);
  //   console.log(openSearchPlaceModal);
  // }, [openModal]);
  console.log(window.innerHeight * 0.68);
  let upBoxHeight = window.innerHeight * 0.68;
  return (
    <>
      <Styled.FixedComp>
        <>
          <Styled.DivRow>
            <Styled.DivColumn upBoxHeight={upBoxHeight} className="second" ref={upBox}>
              <HomeMap />
              {openModal ? null : (
                <>
                  <Styled.OpenModalBtn
                    onClick={() => {
                      setOpenSearchPlaceModal(true);
                    }}
                  >
                    지역검색창
                  </Styled.OpenModalBtn>
                </>
              )}
            </Styled.DivColumn>
            <Styled.DivColumnSecond>
              <PlaceList height={height} />
            </Styled.DivColumnSecond>
          </Styled.DivRow>

          {/* <HomeRightbar /> */}
        </>
      </Styled.FixedComp>
    </>
  );
}

export default Home;
