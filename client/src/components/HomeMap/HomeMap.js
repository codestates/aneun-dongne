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
import "../MapInRoom/kakao-map.css";

import { useHistory } from "react-router-dom";
import { Styled } from "./style.js";
import Loading from "../Loading/Loading";
import HomeRightbar from "../HomeSearchBar/Home-Rightbar-index";
import LikeLoading from "../Loading/LikeLoading";
import MapLoading from "../Loading/MapLoading";

const HomeMap = () => {
  const kakao = window.kakao;
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const history = useHistory();
  const [add, setAdd] = useRecoilState(usersaddress);
  const [placeList, setPlaceList] = useRecoilState(placelist);
  // const nowLoc = useRecoilValue(nowlocation);
  // const [add, setAdd] = useState({ area: "", sigg: "", address: "" });

  const [pending, setPending] = useState(true);
  const [map, setMap] = useState(null);
  const [place, setPlace] = useState("");
  const [clickedNowLocationBtn, setClickedNowLocationBtn] = useRecoilState(isClickedNowLocation);
  const loc = useRecoilValueLoadable(setLo);

  const getWtm = useRecoilValueLoadable(getWTM);
  //   const [meetingPlace,setMeetingPlace] = useState([region,city,add])

  //!!클릭한 곳을 pickPoint에 할당할 것, 초기값은 사용자 위치.
  // const [pickPoint, setPickPoint] = useState([defaultPosition.lat, defaultPosition.lon]); //!원래 [location.lat,location.lon] 임
  const [pickPoint, setPickPoint] = useRecoilState(pickpoint); //!원래 [location.lat,location.lon] 임

  // //!지역 검색창을 위한 state
  // const [area, setArea] = useState("null"); //메인페이지에서 넘어오면 userAddress[0]넣기
  // const [areaIdx, setAreaIdx] = useState(0); //메인페이지에서 넘어오면 (cat1_name.indexOf(area))넣기
  // const [sigg, setSigg] = useState("null"); //메인페이지에서 넘어오면 userAddress[1]넣기

  //! 지도 줌인,줌아웃레벨, 숫자가 작을수록 줌인
  const [level, setLevel] = useState(10);

  //! 검색했다는 신호
  // const [keyWord, setKeyWord] = useState("");
  // const [searched, setSearched] = useState(false);
  //! 평면좌표
  const [mapLoading, setMapLoading] = useState(false);
  // const [getPosition, setGetPosition] = useState({ x: 0, y: 0 });
  // console.log("클릭한지점", pickPoint);
  /**
   *! 장소 검색시 실행되는 함수 serachPlace
   * @param keyword 검색어
   */
  // console.log(getWtm);
  const wtm = getWtm.contents;
  const searchPlace = (keyword) => {
    setPending(true);
    console.log(keyword);

    // const places = new kakao.maps.services.Places()
    const places = new kakao.maps.services.Places();
    //검색
    places.keywordSearch(keyword, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        //검색어를 keyWord상태에 할당한다. -> 검색어를 서버에 전달하기위해
        // setKeyWord(keyword);
        const firstItem = result[0];
        const { x, y } = firstItem;
        let moveLatLng = {};

        // '도'를 선택하면 대한민국 전체를 보여준다. -> 인기 50개 보여주면 좋을것같은데
        if (keyword === "도") {
          //충주. 그냥 한국의중심쯤
          moveLatLng = new kakao.maps.LatLng(37, 128);
          // setLevel(14);
        }
        // '특정지역'을 선택하면 그 곳으로 중심좌표를 옮긴다.
        else {
          moveLatLng = new kakao.maps.LatLng(y, x);
        }
        console.log(keyword);
        console.log("중심좌표", moveLatLng);
        map.panTo(moveLatLng);
        //!! setPickPoint를 등록하여 클릭한것과 같은 효과를 낸다.
        //!!setPickPoint([moveLatLng.Ma, moveLatLng.La]);  -> 이거 주석하면 마커 안나옴.. 이게 마커나오는 기능과의 연결고리임..

        // 검색했다는 신호
        // setSearched(true);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        // alert("검색 결과가 없습니다.");
        return;
      } else {
        alert("서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.");
      }
      //   setPickPoint()
      setPending(false);
    });
  };

  // ! 클릭할때마다 평면좌표 찍어온다.
  // useEffect(() => {
  //   // if (wtm.x === 0 || wtm.y === 0) return null;
  //   axios
  //     .get(
  //       `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${pickPoint[1]}&y=${pickPoint[0]}&input_coord=WGS84&output_coord=WTM`,
  //       {
  //         headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
  //       }
  //     )
  //     .then((res) => {
  //       setWtm({ x: res.data.documents[0].x, y: res.data.documents[0].y });
  //     })

  //     .catch((err) => console.log(err));
  //   console.log("평면좌표", wtm);
  // }, [pickPoint]);

  useEffect(() => {
    //! 픽포인트, 반경, 검색어 아예 없을때
    console.log(typeof area);
    //   //! areaCode : 서울1,인천2,대전3,대구4,광주5,부산6,울산7,세종8,경기31,강원32,충북33,충남34,경북35,경남36,전북37,전남38,제주40

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
        // console.log(res.data.data);
        //!id는 어떤건가요??
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
        //구체적으로 어딘갈 찍으면 지도 zoom-in 10
        setLevel(10);
      });
  }, [wtm.x, wtm.y]); //! 평면좌표 바뀔때마다 실행

  // !
  // const func = async () => {
  //   // * 위의 useEffect에서 받아온 좌표들을 지도에 노란색 마커로 표시
  //   // console.log("effect");
  //   //!위경도 -> 평면좌표
  //   // console.log(placeList);
  //   const container = await document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   const options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new kakao.maps.LatLng(pickPoint[0], pickPoint[1]), //지도의 중심좌표를 마커로 변경-> 밑의 let markerCenter랑 연결
  //     level: level, //지도의 레벨(확대, 축소 정도)
  //   };
  //   if (container === null) {
  //     return;
  //   }
  //   console.log(container);
  //   const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  //   //마커가 표시될 위치입니다.
  //   let markerCenter = new kakao.maps.Marker({
  //     // 지도 중심좌표에 마커를 생성합니다
  //     position: map.getCenter(),
  //     map: map,
  //   });
  //   let bounds = new kakao.maps.LatLngBounds();

  //   console.log(placeList);

  //   // !마커 여러개찍기, placeList:[[관광지1의 y좌표,x좌표,제목,썸네일,주소],[관광지2의 y좌표,x좌표,제목,썸네일,주소],...]
  //   let positions = [];
  //   for (let i = 0; i < placeList.length; i++) {
  //     positions.push({
  //       addr: placeList[i][4],
  //       img: placeList[i][3],
  //       content: placeList[i][2],
  //       latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
  //       contentId: placeList[i][5],
  //     });
  //   } //!position = [ {addr:주소,latlng:좌표,content:관광지이름,img:관광지썸네일},... ]

  //   const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
  //   for (let i = 0; i < positions.length; i++) {
  //     // 마커 이미지의 이미지 크기 입니다
  //     const imageSize = new kakao.maps.Size(24, 35);

  //     // 마커 이미지를 생성합니다
  //     const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  //     bounds.extend(positions[i].latlng);
  //     // 마커를 생성합니다
  //     let marker = new kakao.maps.Marker({
  //       map: map, // 마커를 표시할 지도
  //       position: positions[i].latlng,
  //       image: markerImage, // 마커 이미지
  //     }); // 마커를 표시할 위치

  //     //관광지마커의 infowindow(마우스 올렸을때만)
  //     let iwContent = `<div style="padding:5px;">${positions[i].content}<br></div>`,
  //       iwPosition = new kakao.maps.LatLng(positions[i][0], positions[i][1]);
  //     let infowindow = new kakao.maps.InfoWindow({
  //       position: iwPosition,
  //       content: iwContent,
  //       // removable : iwRemoveable
  //     });
  //     kakao.maps.event.addListener(marker, "mouseover", function () {
  //       infowindow.open(map, marker);
  //     });
  //     kakao.maps.event.addListener(marker, "mouseout", function () {
  //       infowindow.close();
  //     });
  //     //관광지 마커 클릭하면 정보나오기
  //     // ! 여기 홈페이지 주소도 넣어줘야함. 백엔드에 요구하기. 위치기반url에는 홈페이지 응답으로 안준다.
  //     let onClickContent = `<div class="wrap">
  //                <div class="info">
  //                    <div class="title">
  //                    ${positions[i].content}

  //                    </div>
  //                    <div class="body">
  //                        <div class="img">
  //                            <img src=${positions[i].img || notImageYet} width="73" height="70">
  //                       </div>
  //                        <div class="desc">
  //                            <div class="ellipsis">${positions[i].addr}</div>
  //                        </div>
  //                    </div>
  //                </div>
  //           </div>`,
  //       iwRemoveable = true;
  //     let infowindowOnClick = new kakao.maps.InfoWindow({
  //       position: iwPosition,
  //       content: onClickContent,
  //       removable: iwRemoveable,
  //     });

  //     kakao.maps.event.addListener(marker, "click", function () {
  //       infowindowOnClick.open(map, marker);
  //     });
  //   }

  //   if (false) {
  //     //어케될지 몰곘네
  //     return;
  //   } else {
  //     //내위치 마커의 infowindow -> 파란색마커임,
  //     let iwContentCenter = '<div style="padding:5px;">내 위치 <br></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  //       // iwPositionCenter = new kakao.maps.LatLng([0, 0]),//! 있어야되는줄 알았는데 없어도 된다. 나중에 문제생기면 복구용으로 안지움
  //       iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다; //인포윈도우 표시 위치입니다
  //     // 인포윈도우를 생성합니다

  //     let infowindowCenter = new kakao.maps.InfoWindow({
  //       // position: iwPositionCenter,//! 있어야되는줄 알았는데 없어도 된다. 나중에 문제생기면 복구용으로 안지움
  //       content: iwContentCenter,
  //       removable: iwRemoveable,
  //     });

  //     // marker.setMap(map);

  //     // 중심좌표 마커에 클릭이벤트를 등록합니다
  //     kakao.maps.event.addListener(markerCenter, "click", function () {
  //       // 마커 위에 인포윈도우를 표시합니다
  //       infowindowCenter.open(map, markerCenter);
  //     });
  //   }

  //   // //!내위치 클릭시 작동. 주소값을 얻어서 도/시군구 select에 입력시킨다.
  //   if (clickedNowLocationBtn) {
  //     axios
  //       .get(
  //         `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${pickPoint[1]}&y=${pickPoint[0]}&input_coord=WGS84`,
  //         { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
  //       )
  //       .then((res) => res.data.documents[0].address)
  //       .then((address) => {
  //         // console.log(address)
  //         setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
  //         console.log(add);
  //       })
  //       .then(setClickedNowLocationBtn(false))
  //       //   .then(res=>console.log(meetingPlace))
  //       .catch((err) => console.log(err)); //
  //   }
  //   //!! 맵을 클릭시 주소변경
  //   kakao.maps.event.addListener(map, "click", function (mouseEvent) {
  //     //* 내위치마커에 infowindow 생성

  //     // ? 클릭한 위도, 경도 정보를 가져옵니다
  //     let latlng = mouseEvent.latLng;
  //     // console.log(latlng.Ma, latlng.La);
  //     setPickPoint([latlng.Ma, latlng.La]);
  //     //?  마커 위치를 클릭한 위치로 옮깁니다
  //     markerCenter.setPosition(latlng);
  //     // setCenterPosition([latlng.getLat(),latlng.getLng()])

  //     // ?  좌표를 주소로 변환 -> 버튼 클릭시 onClick이벤트를 통해 91번줄로 이동

  //     axios
  //       .get(
  //         `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`,
  //         { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
  //       )
  //       .then((res) => res.data.documents[0].address)
  //       .then((address) => {
  //         // console.log(address)
  //         setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
  //       })
  //       //   .then(res=>console.log(meetingPlace))
  //       .catch((err) => console.log(err)); //
  //   });
  //   map.setBounds(bounds);
  //   setMap(map);
  // };
  useEffect(async () => {
    // return func();
    // // * 위의 useEffect에서 받아온 좌표들을 지도에 노란색 마커로 표시
    // // console.log("effect");
    // //!위경도 -> 평면좌표
    // // console.log(placeList);
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(pickPoint[0], pickPoint[1]), //지도의 중심좌표를 마커로 변경-> 밑의 let markerCenter랑 연결
      level: level, //지도의 레벨(확대, 축소 정도)
    };
    if (container === null) {
      return;
    }
    // console.log(container);
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    //마커가 표시될 위치입니다.
    let markerCenter = new kakao.maps.Marker({
      // 지도 중심좌표에 마커를 생성합니다
      position: map.getCenter(),
      map: map,
    });
    let bounds = new kakao.maps.LatLngBounds();

    // console.log(placeList);

    // !마커 여러개찍기, placeList:[[관광지1의 y좌표,x좌표,제목,썸네일,주소],[관광지2의 y좌표,x좌표,제목,썸네일,주소],...]
    let positions = [];
    for (let i = 0; i < placeList.length; i++) {
      positions.push({
        addr: placeList[i][4],
        img: placeList[i][3],
        content: placeList[i][2],
        latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1]),
        contentId: placeList[i][5],
      });
    } //!position = [ {addr:주소,latlng:좌표,content:관광지이름,img:관광지썸네일},... ]

    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      bounds.extend(positions[i].latlng);
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng,
        image: markerImage, // 마커 이미지
      }); // 마커를 표시할 위치

      //관광지마커의 infowindow(마우스 올렸을때만)
      // let iwContent = `<div style="padding:5px;">${positions[i].content}<br></div>`,
      let iwContent = `<div class="wrap">
      <div class="info">
          <div class="title">
          ${positions[i].content}

          </div>
          <div class="body">
              <div class="img">
                  <img src=${positions[i].img || `/images/not-image-yet.png`} width="73" height="70">
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
      // ! 여기 홈페이지 주소도 넣어줘야함. 백엔드에 요구하기. 위치기반url에는 홈페이지 응답으로 안준다.
      let onClickContent = `<div class="wrap">
                 <div class="info">
                     <div class="title">
                     ${positions[i].content}

                     </div>
                     <div class="body">
                         <div class="img">
                             <img src=${positions[i].img || `/images/not-image-yet.png`} width="73" height="70">
                        </div>
                         <div class="desc">
                             <div class="ellipsis">${positions[i].addr}</div>
                         </div>
                     </div>
                 </div>
            </div>`,
        iwRemoveable = true;
      let infowindowOnClick = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: onClickContent,
        removable: iwRemoveable,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        // infowindowOnClick.open(map, marker);
        history.push(`/detailpage/${positions[i].contentId}`);
      });
    }

    //내위치 마커의 infowindow -> 파란색마커임,
    let iwContentCenter = '<div style="padding:5px;">내 위치 <br></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      // iwPositionCenter = new kakao.maps.LatLng([0, 0]),//! 있어야되는줄 알았는데 없어도 된다. 나중에 문제생기면 복구용으로 안지움
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다; //인포윈도우 표시 위치입니다
    // 인포윈도우를 생성합니다

    let infowindowCenter = new kakao.maps.InfoWindow({
      // position: iwPositionCenter,//! 있어야되는줄 알았는데 없어도 된다. 나중에 문제생기면 복구용으로 안지움
      content: iwContentCenter,
      removable: iwRemoveable,
    });

    // marker.setMap(map);

    // 중심좌표 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(markerCenter, "click", function () {
      // 마커 위에 인포윈도우를 표시합니다
      infowindowCenter.open(map, markerCenter);
    });

    // //!내위치 클릭시 작동. 주소값을 얻어서 도/시군구 select에 입력시킨다.
    if (clickedNowLocationBtn) {
      await axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${pickPoint[1]}&y=${pickPoint[0]}&input_coord=WGS84`,
          { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
        )
        .then((res) => res.data.documents[0].address)
        .then((address) => {
          // console.log(address)
          setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
          console.log(add);
        })
        .then(setClickedNowLocationBtn(false))
        //   .then(res=>console.log(meetingPlace))
        .catch((err) => console.log(err)); //
    }
    //!! 맵을 클릭시 주소변경
    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      //* 내위치마커에 infowindow 생성

      // ? 클릭한 위도, 경도 정보를 가져옵니다
      let latlng = mouseEvent.latLng;
      // console.log(latlng.Ma, latlng.La);
      setPickPoint([latlng.Ma, latlng.La]);
      //?  마커 위치를 클릭한 위치로 옮깁니다
      markerCenter.setPosition(latlng);
      // setCenterPosition([latlng.getLat(),latlng.getLng()])

      // ?  좌표를 주소로 변환 -> 버튼 클릭시 onClick이벤트를 통해 91번줄로 이동

      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`,
          { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
        )
        .then((res) => res.data.documents[0].address)
        .then((address) => {
          // console.log(address)
          setAdd({ area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name });
        })
        //   .then(res=>console.log(meetingPlace))
        .catch((err) => console.log(err)); //
    });

    map.setBounds(bounds);
    setMap(map);
    setPending(false);
  }, [placeList, level]);

  // const changeArea = (area) => {
  //   console.log(area);
  //   searchPlace(area);
  //   setArea(area);
  //   setAreaIdx(cat1_name.indexOf(area));
  // };
  // const changeSigg = (sigg) => {
  //   console.log(area, sigg);
  //   searchPlace(`${area} ${sigg}`);
  //   setSigg(sigg);
  //   setLevel(8);
  // };
  /* margin-top:${(props)=>props.first?'10px':'50px'} */
  if (loc.state === "loading" && getWtm.state === "loading") {
    console.log("로딩");
    return (
      <Styled.Div>
        <HomeRightbar
          // area={area}
          // sigg={sigg}
          // areaIdx={areaIdx}
          // changeArea={changeArea}
          // changeSigg={changeSigg}
          setLevel={setLevel}
          // handleSearch={handleSearch}
          searchCurrentPlace={searchPlace}
          place={place}
          pickPoint={pickPoint}
          setPickPoint={setPickPoint}
        />

        <MapLoading />
      </Styled.Div>
    );
  }
  return (
    <Styled.Div>
      <HomeRightbar
        setLevel={setLevel}
        searchCurrentPlace={searchPlace}
        place={place}
        pickPoint={pickPoint}
        setPickPoint={setPickPoint}
      />
      <br />
      <div>&nbsp;&nbsp;{"지도를 클릭하시면 반경 10km 내의 관광지가 표시됩니다"}</div>
      <Styled.Map id="map"></Styled.Map>
    </Styled.Div>
  );
};

export default HomeMap;

