import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  token,
  kToken,
  pickpoint,
  usersaddress,
  isClickedNowLocation,
  placelist,
  setLo,
  getWTM,
} from "../../recoil/recoil";

import { useHistory } from "react-router-dom";
import { Styled } from "./style.js";
import HomeRightbar from "../HomeSearchBar/Home-Rightbar-index";
import MapLoading from "../Loading/MapLoading";
import { toast } from "react-toastify";

const HomeMap = () => {
  const kakao = window.kakao;
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const history = useHistory();
  const [add, setAdd] = useRecoilState(usersaddress);
  const [placeList, setPlaceList] = useRecoilState(placelist);

  const [pending, setPending] = useState(true);
  const [map, setMap] = useState(null);
  const [place, setPlace] = useState("");
  const [clickedNowLocationBtn, setClickedNowLocationBtn] = useRecoilState(isClickedNowLocation);
  const loc = useRecoilValueLoadable(setLo);

  const getWtm = useRecoilValueLoadable(getWTM);

  //!!클릭한 곳을 pickPoint에 할당할 것, 초기값은 사용자 위치.
  // const [pickPoint, setPickPoint] = useState([defaultPosition.lat, defaultPosition.lon]); //!원래 [location.lat,location.lon] 임
  const [pickPoint, setPickPoint] = useRecoilState(pickpoint); //!원래 [location.lat,location.lon] 임

  //! 지도 줌인,줌아웃레벨, 숫자가 작을수록 줌인
  const [level, setLevel] = useState(10);

  //! 평면좌표
  const [mapLoading, setMapLoading] = useState(false);

  /**
   *! 장소 검색시 실행되는 함수 serachPlace
   * @param keyword 검색어
   */
  const wtm = getWtm.contents;

  const searchPlace = (keyword) => {
    setPending(true);
    const places = new kakao.maps.services.Places();
    //검색
    places.keywordSearch(keyword, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const firstItem = result[0];
        const { x, y } = firstItem;
        let moveLatLng = {};

        if (keyword === "도") {
          moveLatLng = new kakao.maps.LatLng(37, 128);
        } else {
          moveLatLng = new kakao.maps.LatLng(y, x);
        }
        map.panTo(moveLatLng);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // alert("검색 결과가 없습니다.");
        return;
      } else {
        toast.error("서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      //   setPickPoint()
      setPending(false);
    });
  };

  useEffect(() => {
    // ! 픽포인트, 반경, 검색어 아예 없을때
    //! areaCode : 서울1,인천2,대전3,대구4,광주5,부산6,울산7,세종8,경기31,강원32,충북33,충남34,경북35,경남36,전북37,전남38,제주40
    axios
      .get(`${process.env.REACT_APP_API_URL}/home`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
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
        setPlaceList(list);

        setLevel(10);
      });
  }, [wtm.x, wtm.y]); //! 평면좌표 바뀔때마다 실행

  useEffect(async () => {
    // //!위경도 -> 평면좌표
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(pickPoint[0], pickPoint[1]), //지도의 중심좌표를 마커로 변경-> 밑의 let markerCenter랑 연결
      level: level, //지도의 레벨(확대, 축소 정도)
    };
    if (container === null) {
      return;
    }
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    //마커가 표시될 위치입니다.
    let markerCenter = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
      map: map,
    });
    let bounds = new kakao.maps.LatLngBounds();

    let positions = [];

    for (let i = 0; i < placeList.length; i++) {
      positions.push({
        addr: placeList[i][4],
        img: placeList[i][3],
        content: placeList[i][2],
        latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
        contentId: placeList[i][5],
      });
    }
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      bounds.extend(positions[i].latlng);
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng,
        image: markerImage, // 마커 이미지
      });

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
        infowindow.open(map, marker);
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

    // marker.setMap(map);

    // 중심좌표 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(markerCenter, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindowCenter.open(map, markerCenter);
    });

    // // //!내위치 클릭시 작동. 주소값을 얻어서 도/시군구 select에 입력시킨다.
    // if (clickedNowLocationBtn) {
    //   await axios
    //     .get(
    //       `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${pickPoint[1]}&y=${pickPoint[0]}&input_coord=WGS84`,
    //       { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
    //     )
    //     .then((res) => res.data.documents[0].address)
    //     .then((address) => {
    //       setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
    //     })
    //     .then(setClickedNowLocationBtn(false))

    //     .catch((err) => console.log("에러", err)); //
    // }
    // //!! 맵을 클릭시 주소변경

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // ? 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;

      setPickPoint([latlng.Ma, latlng.La]);
      //?  마커 위치를 클릭한 위치로 옮깁니다
      markerCenter.setPosition(latlng);

      // ?  좌표를 주소로 변환 -> 버튼 클릭시 onClick이벤트를 통해 91번줄로 이동

      // axios
      //   .get(
      //     `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`,
      //     { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
      //   )
      //   .then((res) => res.data.documents[0].address)
      //   .then((address) => {
      //     setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
      //   })

      //   .catch((err) => console.log("에러", err)); //
    });

    map.setBounds(bounds);
    setMap(map);
    setPending(false);
  }, [placeList]);

  return (
    <Styled.Div>
      <HomeRightbar
        setLevel={setLevel}
        // searchCurrentPlace={searchPlace}
        // place={place}
        // pickPoint={pickPoint}
        // setPickPoint={setPickPoint}
      />
      {loc.state === "loading" && getWtm.state === "loading" ? (
        <MapLoading />
      ) : (
        <Styled.Map id="map">
          <div className="map-experiment">&nbsp;&nbsp;{"지도를 클릭하시면 반경 10km 내의 관광지가 표시됩니다."}</div>
        </Styled.Map>
      )}
    </Styled.Div>
  );
};

export default HomeMap;
