/* global kakao */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useRecoilValue, useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  usersArea,
  usersSigg,
  canSearchPlace,
  defaultposition,
  placelist,
  getWTM,
  searchPlaceModal,
  nowlocation,
  setPlacelistLoading,
  searcnPlaceBtnPressed,
  usersaddress,
  savedVisitedPlaceInMyPage,
} from "../../recoil/recoil.js";
import { Styled } from "./style.js";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import LikeLoading from "../Loading/LikeLoading.js";
import CommentLoading from "../Loading/CommentLoading.js";
import MapLoading from "../Loading/MapLoading.js";

function DefaultMap({ placeList, setPlaceList, prevList }) {
  const setOpenSearchPlaceModal = useSetRecoilState(searchPlaceModal);
  const usersAreaReset = useResetRecoilState(usersArea);
  const usersSiggReset = useResetRecoilState(usersSigg);
  const defaultPositionReset = useResetRecoilState(defaultposition);
  const [markerClicked, setMarkerClicked] = useState(false);
  const addressReset = useResetRecoilState(usersaddress);
  const [savedPlaceInMyPage, setSavedPlaceInMyPage] = useRecoilState(savedVisitedPlaceInMyPage);
  // const [placeList, setPlaceList] = useRecoilState(placelist);
  //   const visitedList = useRecoilValueLoadable(placelist);
  //   const placeList = visitedList.contents;
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);
  const [placeListLoading, setPlaceListLoading] = useRecoilState(setPlacelistLoading);
  const [kakaoMap, setKakaoMap] = useState(null);
  //   let kakaoMap = useRef(null);
  const [markerList, setMarkerList] = useState();
  const [merkerCtr, setMarckerCtr] = useState();
  const getWtm = useRecoilValueLoadable(getWTM);
  const history = useHistory();
  const container = useRef();
  const [isSearchPlaceBtnPressed, setSearchPlaceBtnPressed] = useRecoilState(searcnPlaceBtnPressed);
  const setAbleToSearchPlace = useSetRecoilState(canSearchPlace);
  const wtm = getWtm.contents;
  const nowLoc = useRecoilValue(nowlocation);
  const [address, setAddress] = useRecoilState(usersaddress);

  useEffect(() => {
    // console.log(defaultPosition.lat);
    //지도 틀
    // usersAreaReset();
    // usersSiggReset();

    // let center = new kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lon);
    let center = new kakao.maps.LatLng(37.5, 127);
    if (nowLoc.lat !== 0) {
      center = new kakao.maps.LatLng(nowLoc.lat, nowLoc.lon);
      setDefaultPosition({ lat: nowLoc.lat, lon: nowLoc.lon });
    }

    const options = {
      center,
      level: 10,
    };
    const map = new kakao.maps.Map(container.current, options);
    setKakaoMap(map);
  }, [nowLoc]);

  useEffect(() => {
    //언마운트시 모달창 끄기, 초기화필요한것들 초기화하기
    return () => {
      setOpenSearchPlaceModal(false);
    };
  });

  useEffect(() => {
    if (markerList) {
      //useState에서 이런식으로 함수 할당할수 있네

      markerList.forEach((marker) => marker.setMap(null));
    }

    //마커 그리는 과정, 관광지배열이 변경될때만 실행함.

    if (kakaoMap === null) {
      // console.log("멥이 null일때");

      return;
    }

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    let bounds = new kakao.maps.LatLngBounds();

    let positions = [];
    let markers = [];
    let markerCenter = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: kakaoMap.getCenter(),
    });
    for (let i = 0; i < placeList.length; i++) {
      positions.push({
        addr: placeList[i][4],
        img: placeList[i][3],
        content: placeList[i][2],
        latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
        contentId: placeList[i][5],
      });
      // }

      // for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      bounds.extend(positions[i].latlng);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: kakaoMap, // 마커를 표시할 지도
        position: positions[i].latlng,
        image: markerImage, // 마커 이미지
      });

      markers.push(marker);

      //관광지마커의 infowindow(마우스 올렸을때만)

      let iwContent = `<div style="width: 200px">
        <div class="info">
            <div class="title">
            ${positions[i].content}
  
            </div>
            <div class="body">
                <div class="img">
                    <img style = "width:100%;height:100px" src=${
                      positions[i].img || `/images/not-image-yet.png`
                    } width="73" height="70">
               </div>
                <div class="desc">
                    <div class="ellipsis">${positions[i].addr}</div>
                </div>
            </div>
        </div>
   </div>`,
        iwPosition = new kakao.maps.LatLng(positions[i][0], positions[i][1]);
      let infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });
      kakao.maps.event.addListener(marker, "mouseover", function () {
        infowindow.open(kakaoMap, marker);
      });
      kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });
      //관광지 마커 클릭하면 정보나오기

      kakao.maps.event.addListener(marker, "click", function () {
        // infowindowOnClick.open(map, marker);
        // 클릭한 마커만 표시.
        setMarkerClicked(true);
        setPlaceList([placeList[i]]);
        addressReset();
        infowindow.close();

        // 클릭한 마커의 세부정보페이지로 이동
        // history.push(`/detailpage/${positions[i].contentId}`);
      });
    }

    //내위치 마커의 infowindow -> 파란색마커임,
    let iwContentCenter = '<div style="padding:5px;">내 위치 <br></div>',
      // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다; //인포윈도우 표시 위치입니다
      iwRemoveable = true;
    // 인포윈도우를 생성합니다

    let infowindowCenter = new kakao.maps.InfoWindow({
      content: iwContentCenter,
      removable: iwRemoveable,
    });

    // placeList.setMap(kakaoMap);

    // 중심좌표 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(markerCenter, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다

      infowindowCenter.open(kakaoMap, markerCenter);
    });

    kakao.maps.event.addListener(kakaoMap, "click", function (mouseEvent) {
      // kakao.maps.event.addListener(kakaoMap, "dragend", function (mouseEvent) {

      if (container === null) {
        return;
      }

      let latlng = mouseEvent.latLng;
      // bounds.extend(latlng);

      axios
        .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.La}&y=${latlng.Ma}&input_coord=WGS84`, {
          headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
        })
        .then((res) => {
          return res.data.documents[0].address;
        })
        .then((address) => {
          setAddress({
            area: address.region_1depth_name,
            sigg: address.region_2depth_name,
            address: address.address_name,
          });
        });

      markerCenter.setMap(null);

      //클릭한곳에 마커 찍음
      markerCenter.setPosition(latlng);
      markerCenter.setMap(kakaoMap);
      //

      // new kakao.maps.LatLng(latlng.Ma, latlng.La);

      //   for (let i = 0; i < markers.length; i++) {
      //     markers[i].setMap(null);
      //   }
      setPlaceListLoading(true);

      setAbleToSearchPlace(true);

      // ? 클릭한 위도, 경도 정보를 가져옵니다

      //   let latlng = kakaoMap.getCenter();

      if (prevList && placeList.length === 1) {
        //관광지배열이 1개이고 이전배열은 1개 아닐떄, 즉 이떄만이 마커클릭한 상황임 이때 실행
        //마커 클릭했다가 원상복귀할때 사용할 장소배열은 prevList임.
        setPlaceList(prevList);
      }
      setDefaultPosition({ lat: latlng.Ma, lon: latlng.La });
      //?  마커 위치를 클릭한 위치로 옮깁니다
    });
    //! 지역검색하면 마커있는곳으로 지도 이동.
    if (isSearchPlaceBtnPressed === true) {
      kakaoMap.setBounds(bounds);
      // console.log("지역검색시 마커들 한눈에 보이도록 화면이동");

      if (isSearchPlaceBtnPressed) setSearchPlaceBtnPressed(false);
    }
    //!
    // if (prevList) {
    if (prevList) {
      // console.log("클릭", prevList);
      kakaoMap.setBounds(bounds);
      setMarkerClicked(false);
    }

    setPlaceListLoading(false);
    setMarkerList(markers);
    // console.log("hi");
  }, [placeList, kakaoMap, savedPlaceInMyPage]);

  return (
    <>
      <Styled.Map ref={container}>
        <Styled.ClickedAddress className="clicked-address">
          {address.area} {address.sigg}
        </Styled.ClickedAddress>
      </Styled.Map>
    </>
  );
}
export default DefaultMap;
