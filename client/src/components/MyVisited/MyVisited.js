import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Styled } from "./style";

import VisitedList from "../VisitedList/VisitedList";
import { token, kToken, visitedModal, newVisitedPlace, deleteCommentmode } from "../../recoil/recoil";
import { useRecoilValue, useRecoilState } from "recoil";

import Empty from "../Empty/Empty";
import ModalVisited from "../ModalVisited/ModalVisited";
import MapLoading from "../Loading/MapLoading";
import Cookies from "universal-cookie";

const { kakao } = window;

const MyVisited = () => {
  const [markerClick, setMarkerClick] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [placeList, setPlaceList] = useRecoilState(newVisitedPlace);
  const [loading, setLoading] = useState(false);
  const [deleteOrNot, setDeleteOrNot] = useRecoilState(deleteCommentmode);
  const cookies = new Cookies();

  async function getVisitedPlace() {
    const result = await axios
      .get(`${process.env.REACT_APP_API_URL}/visited`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setPlaceList(res.data.data);
      });
    return result;
  }
  useEffect(async () => {
    setLoading(true);
    await getVisitedPlace();
    setLoading(false);
    setDeleteOrNot(false);
  }, [, deleteOrNot]);

  useEffect(() => {
    const container = document.querySelector("#map");
    const options = {
      //!지도의 초기 중심화면 설정
      center: new kakao.maps.LatLng(37, 128),
      level: 14, //지도 줌인 레벨
    };
    if (container === null) {
      return;
    }
    const map = new kakao.maps.Map(container, options);
    // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성합니다
    let bounds = new kakao.maps.LatLngBounds();
    let positions = [];
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // const placeList = visitedList.contents;
    // for (let i = 0; i < visitedList.contents.length; i++) {
    //   positions.push({
    //     addr: `${visitedList.contents[i].visited_area} ${visitedList.contents[i].visited_sigg}`,
    //     img: visitedList.contents[i].visited_memo_image_path,
    //     content: visitedList.contents[i].visited_memo,
    //     latlng: new kakao.maps.LatLng(visitedList.contents[i].visited_mapy, visitedList.contents[i].visited_mapx),
    //   });
    // }
    for (let i = 0; i < placeList.length; i++) {
      positions.push({
        id: placeList[i].id,
        addr: `${placeList[i].visited_area} ${placeList[i].visited_sigg}`,
        visited_thumbnail_path: placeList[i].visited_memo_image_path,
        content: placeList[i].visited_memo,
        latlng: new kakao.maps.LatLng(placeList[i].visited_mapy, placeList[i].visited_mapx),
      });
    }
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng,
        image: markerImage, // 마커 이미지
      }); // 마커를 표시할 위치

      // 지도 범위정보에 좌표 추가
      bounds.extend(positions[i].latlng);
      //관광지마커의 infowindow(마우스 올렸을때만)
      let iwContent = `
      <div style="width: 200px">
        <img style = "width:100%;height:100px" src = ${positions[i].visited_thumbnail_path} />
        <div>[${positions[i].addr}]</div>
        <div style = 
          padding: 0 5px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;"
          >${positions[i].content}
        </div>
      </div>`,
        iwPosition = new kakao.maps.LatLng(positions[i].latlng.Ma, positions[i].latlng.La);
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

      kakao.maps.event.addListener(marker, "click", function () {
        //마커를 클릭하면 positions[i]가 selectedPosition에 담기고
        // markerClick 상태가 true로 변한다.
        setSelectedPosition(positions[i]);
        setMarkerClick(true);
      });
    }
    map.setBounds(bounds);
  }, [placeList]);

  if (placeList.length === 0) {
    return (
      <Styled.Body>
        <Empty />
      </Styled.Body>
    );
  } else
    return (
      <>
        <Styled.Body>
          <Styled.Div>{loading ? <MapLoading /> : <Styled.Map id="map"></Styled.Map>}</Styled.Div>
          <VisitedList
            placeList={placeList}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
            markerClick={markerClick}
            setMarkerClick={setMarkerClick}
          />
        </Styled.Body>
      </>
    );
};

export default MyVisited;
