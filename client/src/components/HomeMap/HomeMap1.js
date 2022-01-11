// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useSetRecoilState, useResetRecoilState, useRecoilState, useRecoilValueLoadable } from "recoil";
// import {
//   usersArea,
//   usersSigg,
//   pickpoint,
//   placelist,
//   getWTM,
//   defaultposition,
//   canSearchPlace,
// } from "../../recoil/recoil";

// import { useHistory } from "react-router-dom";
// import { Styled } from "./style.js";
// // import HomeRightbar from "../HomeSearchBar/Home-Rightbar-index";
// import MapLoading from "../Loading/MapLoading";
// // import { toast } from "react-toastify";

// const HomeMap = () => {
//   const kakao = window.kakao;
//   const setAbleToSearchPlace = useSetRecoilState(canSearchPlace);
//   const history = useHistory();
//   const mapRef = useRef(null);
//   const [options, setOptions] = useState({});
//   const usersAreaReset = useResetRecoilState(usersArea);
//   const usersSiggReset = useResetRecoilState(usersSigg);
//   const [placeList, setPlaceList] = useRecoilState(placelist);

//   const [pending, setPending] = useState(true);
//   const [map, setMap] = useState(null);

//   const getWtm = useRecoilValueLoadable(getWTM);

//   //!!클릭한 곳을 pickPoint에 할당할 것, 초기값은 사용자 위치.
//   // const [pickPoint, setDefaultPosition] = useState([defaultPosition.lat, defaultPosition.lon]); //!원래 [location.lat,location.lon] 임
//   // const [pickPoint, setPickPoint] = useRecoilState(pickpoint); //!원래 [location.lat,location.lon] 임
//   const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);

//   //! 지도 줌인,줌아웃레벨, 숫자가 작을수록 줌인
//   const [level, setLevel] = useState(10);

//   //! 평면좌표
//   const [mapLoading, setMapLoading] = useState(false);

//   /**
//    *! 장소 검색시 실행되는 함수 serachPlace
//    * @param keyword 검색어
//    */
//   const wtm = getWtm.contents;

//   useEffect(() => {
//     //클락하면 지역검색창 초기화
//     usersAreaReset();
//     usersSiggReset();

//     // ! 픽포인트, 반경, 검색어 아예 없을때
//     //! areaCode : 서울1,인천2,대전3,대구4,광주5,부산6,울산7,세종8,경기31,강원32,충북33,충남34,경북35,경남36,전북37,전남38,제주40
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/home`, {
//         headers: {
//           // Authorization: `Bearer ${accessToken || kakaoToken}`,
//           "Content-Type": "application/json",
//         },
//         params: {
//           areacode: "null",
//           sigungucode: "null",
//           radius: 10000,
//           clientwtmx: wtm.x,
//           clientwtmy: wtm.y,
//           tag: "null", //null로 넣으면 undefined되어서, 문자열로 넣겠음
//           searchWord: "null",
//         },
//         withCredentials: true,
//       })
//       .then((res) => {
//         const list = res.data.data.map((el) => {
//           return [
//             Number(el.post_mapy),
//             Number(el.post_mapx),
//             el.post_title,
//             el.post_firstimage,
//             el.post_addr1,
//             el.post_contentid,
//           ];
//         });
//         setPlaceList(list);

//         setLevel(10);
//       });
//   }, [wtm.x, wtm.y]); //! 평면좌표 바뀔때마다 실행
//   // console.log(pickPoint);
//   // const container = mapRef.current;
//   // useEffect(() => {
//   //   setOptions({
//   //     ...options,
//   //     ...{
//   //       //지도를 생성할 때 필요한 기본 옵션
//   //       center: new kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lon), //지도의 중심좌표를 마커로 변경-> 밑의 let markerCenter랑 연결
//   //       level: level, //지도의 레벨(확대, 축소 정도)
//   //     },
//   //   });
//   // }, [container]);
//   useEffect(async () => {
//     // //!위경도 -> 평면좌표
//     setMapLoading(true);
//     // const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
//     const container = mapRef.current;

//     const options = {
//       //지도를 생성할 때 필요한 기본 옵션
//       center: new kakao.maps.LatLng(defaultPosition.lat, defaultPosition.lon), //지도의 중심좌표를 마커로 변경-> 밑의 let markerCenter랑 연결
//       level: level, //지도의 레벨(확대, 축소 정도)
//     };

//     if (container === null) {
//       console.log("hi");
//       return;
//     }

//     const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
//     //마커가 표시될 위치입니다.

//     let markerCenter = new kakao.maps.Marker({
//       // 지도 중심좌표에 마커를 생성합니다
//       position: map.getCenter(),
//       map: map,
//     });

//     let bounds = new kakao.maps.LatLngBounds();

//     let positions = [];

//     for (let i = 0; i < placeList.length; i++) {
//       positions.push({
//         addr: placeList[i][4],
//         img: placeList[i][3],
//         content: placeList[i][2],
//         latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
//         contentId: placeList[i][5],
//       });
//     }

//     const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

//     for (let i = 0; i < positions.length; i++) {
//       const imageSize = new kakao.maps.Size(24, 35);
//       const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
//       bounds.extend(positions[i].latlng);
//       // 마커를 생성합니다
//       let marker = new kakao.maps.Marker({
//         map: map, // 마커를 표시할 지도
//         position: positions[i].latlng,
//         image: markerImage, // 마커 이미지
//       });

//       //관광지마커의 infowindow(마우스 올렸을때만)

//       let iwContent = `<div style="width: 200px">
//       <div class="info">
//           <div class="title">
//           ${positions[i].content}

//           </div>
//           <div class="body">
//               <div class="img">
//                   <img style = "width:100%;height:100px" src=${
//                     positions[i].img || `/images/not-image-yet.png`
//                   } width="73" height="70">
//              </div>
//               <div class="desc">
//                   <div class="ellipsis">${positions[i].addr}</div>
//               </div>
//           </div>
//       </div>
//  </div>`,
//         iwPosition = new kakao.maps.LatLng(positions[i][0], positions[i][1]);
//       let infowindow = new kakao.maps.InfoWindow({
//         position: iwPosition,
//         content: iwContent,
//         // removable : iwRemoveable
//       });
//       kakao.maps.event.addListener(marker, "mouseover", function () {
//         infowindow.open(map, marker);
//       });
//       kakao.maps.event.addListener(marker, "mouseout", function () {
//         infowindow.close();
//       });
//       //관광지 마커 클릭하면 정보나오기

//       kakao.maps.event.addListener(marker, "click", function () {
//         // infowindowOnClick.open(map, marker);
//         history.push(`/detailpage/${positions[i].contentId}`);
//       });
//     }

//     //내위치 마커의 infowindow -> 파란색마커임,
//     let iwContentCenter = '<div style="padding:5px;">내 위치 <br></div>',
//       // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다; //인포윈도우 표시 위치입니다
//       iwRemoveable = true;
//     // 인포윈도우를 생성합니다

//     let infowindowCenter = new kakao.maps.InfoWindow({
//       content: iwContentCenter,
//       removable: iwRemoveable,
//     });

//     // marker.setMap(map);

//     // 중심좌표 마커에 클릭이벤트를 등록합니다
//     kakao.maps.event.addListener(markerCenter, "click", function () {
//       // 마커 위에 인포윈도우를 표시합니다
//       infowindowCenter.open(map, markerCenter);
//     });

//     // kakao.maps.event.addListener(map, "click", function (mouseEvent) {
//     kakao.maps.event.addListener(map, "dragend", function (mouseEvent) {
//       if (container === null) {
//         return;
//       }
//       setAbleToSearchPlace(true);
//       // ? 클릭한 위도, 경도 정보를 가져옵니다
//       // let latlng = mouseEvent.latLng;
//       let latlng = map.getCenter();

//       setDefaultPosition({ lat: latlng.Ma, lon: latlng.La });
//       //?  마커 위치를 클릭한 위치로 옮깁니다

//       markerCenter.setPosition(latlng);
//     });

//     map.setBounds(bounds);

//     setMap(map);
//     setMapLoading(false);
//     setPending(false);
//   }, [placeList]);
//   // console.log(mapRef.current);

//   return (
//     <Styled.Div>
//       {getWtm.state === "loading" || placeList.length === 0 ? (
//         <MapLoading />
//       ) : (
//         <Styled.Map ref={mapRef}>
//           <div className="map-experiment">&nbsp;&nbsp;{"지도를 클릭하시면 반경 10km 내의 관광지가 표시됩니다."}</div>
//         </Styled.Map>
//       )}
//     </Styled.Div>
//   );
// };

// export default HomeMap;
