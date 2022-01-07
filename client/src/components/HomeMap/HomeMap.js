import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useSetRecoilState, useResetRecoilState, useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import {
  usersArea,
  usersSigg,
  pickpoint,
  placelist,
  getWTM,
  defaultposition,
  canSearchPlace,
  setPlacelistLoading,
} from "../../recoil/recoil";

import { useHistory } from "react-router-dom";
import { Styled } from "./style.js";
// import HomeRightbar from "../HomeSearchBar/Home-Rightbar-index";
import MapLoading from "../Loading/MapLoading";
import DefaultMap from "../DefaultMap/DefaultMap";
import LikeLoading from "../Loading/LikeLoading";
// import { toast } from "react-toastify";

const HomeMap = () => {
  const setPlaceListLoading = useSetRecoilState(setPlacelistLoading);
  const kakao = window.kakao;
  const setAbleToSearchPlace = useSetRecoilState(canSearchPlace);
  const history = useHistory();
  const mapRef = useRef(null);
  // const [options, setOptions] = useState({});
  const usersAreaReset = useResetRecoilState(usersArea);
  const usersSiggReset = useResetRecoilState(usersSigg);
  const [placeList, setPlaceList] = useRecoilState(placelist);
  // const visitedList = useRecoilValueLoadable(placelist);
  // console.log(visitedList);

  const [pending, setPending] = useState(true);
  // const [map, setMap] = useState(null);

  const getWtm = useRecoilValueLoadable(getWTM);

  //!!클릭한 곳을 pickPoint에 할당할 것, 초기값은 사용자 위치.

  /**
   *! 장소 검색시 실행되는 함수 serachPlace
   * @param keyword 검색어
   */
  const wtm = getWtm.contents;
  // const placeList = visitedList.contents;
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
    // setPlaceListLoading(false);
  }, [wtm.x, wtm.y]); //! 평면좌표 바뀔때마다 실행

  return (
    <Styled.Div>
      <>
        <div className="map-experiment">&nbsp;&nbsp;{"지도를 클릭하시면 반경 10km 내의 관광지가 표시됩니다."}</div>
        <DefaultMap />
      </>
    </Styled.Div>
  );
};

export default HomeMap;
