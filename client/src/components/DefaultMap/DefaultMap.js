/* global kakao */
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useRecoilValueLoadable, useResetRecoilState, useSetRecoilState } from "recoil";
import { usersArea, usersSigg, canSearchPlace, defaultposition, placelist, getWTM } from "../../recoil/recoil.js";
import { Styled } from "./style.js";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";

function DefaultMap() {
  const usersAreaReset = useResetRecoilState(usersArea);
  const usersSiggReset = useResetRecoilState(usersSigg);
  const [placeList, setPlaceList] = useRecoilState(placelist);
  //   const visitedList = useRecoilValueLoadable(placelist);
  //   const placeList = visitedList.contents;
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);

  const [kakaoMap, setKakaoMap] = useState(null);
  //   let kakaoMap = useRef(null);
  const getWtm = useRecoilValueLoadable(getWTM);
  const history = useHistory();
  const container = useRef();
  const [, setMarkers] = useState([]);
  const setAbleToSearchPlace = useSetRecoilState(canSearchPlace);
  const wtm = getWtm.contents;
  useEffect(() => {
    usersAreaReset();
    usersSiggReset();
    const center = new kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lon);
    const options = {
      center,
      level: 11,
    };
    const map = new kakao.maps.Map(container.current, options);
    // kakaoMap = map;
    console.log("hk");
    setKakaoMap(map);
  }, []);
  useEffect(() => {
    //클락하면 지역검색창 초기화
    usersAreaReset();
    usersSiggReset();

    // ! 픽포인트, 반경, 검색어 아예 없을때
    //! areaCode : 서울1,인천2,대전3,대구4,광주5,부산6,울산7,세종8,경기31,강원32,충북33,충남34,경북35,경남36,전북37,전남38,제주40
    axios
      .get(`${process.env.REACT_APP_API_URL}/home`, {
        headers: {
          // Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        params: {
          areacode: "null",
          sigungucode: "null",
          radius: 10000,
          clientwtmx: wtm.x,
          clientwtmy: wtm.y,
          tag: "null", //null로 넣으면 undefined되어서, 문자열로 넣겠음
          searchWord: "null",
        },
        withCredentials: true,
      })
      .then((res) => {
        const list = res.data.data.map((el) => {
          return [
            Number(el.post_mapy),
            Number(el.post_mapx),
            el.post_title,
            el.post_firstimage,
            el.post_addr1,
            el.post_contentid,
          ];
        });
        console.log(list);
        setPlaceList(list);
      });
  }, [wtm.x, wtm.y]); //! 평면좌표 바뀔때마다 실행

  useEffect(() => {
    console.log(kakaoMap);
    if (kakaoMap === null) {
      console.log("멥이 null일때");
      return;
    }

    if (placeList.length === 0) return;
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    let markerCenter = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: kakaoMap.getCenter(),
      map: kakaoMap,
    });

    let bounds = new kakao.maps.LatLngBounds();

    let positions = [];
    console.log(placeList);
    for (let i = 0; i < placeList.length; i++) {
      positions.push({
        addr: placeList[i][4],
        img: placeList[i][3],
        content: placeList[i][2],
        latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
        contentId: placeList[i][5],
      });
    }
    let markers = [];
    for (let i = 0; i < positions.length; i++) {
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
        // removable : iwRemoveable
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
        history.push(`/detailpage/${positions[i].contentId}`);
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

    // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
    kakao.maps.event.addListener(kakaoMap, "dragend", function (mouseEvent) {
      if (container === null) {
        return;
      }
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      console.log(positions);
      setAbleToSearchPlace(true);
      console.log("드래그");
      // ? 클릭한 위도, 경도 정보를 가져옵니다
      // let latlng = mouseEvent.latLng;
      let latlng = kakaoMap.getCenter();

      setDefaultPosition({ lat: latlng.Ma, lon: latlng.La });
      //?  마커 위치를 클릭한 위치로 옮깁니다
      markerCenter.setPosition(latlng);
    });

    // kakaoMap.setBounds(bounds);
  }, [placeList]);

  return (
    <>
      <Styled.Map ref={container}></Styled.Map>
    </>
  );
}
export default DefaultMap;
