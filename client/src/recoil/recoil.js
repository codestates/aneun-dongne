import { atom, selector } from "recoil";
import axios from "axios";
//

//
export const nowlocation = atom({
  key: "nowlocation",
  default: { lat: 0, lon: 0 },
});

export const placelist = atom({
  key: "placelist",
  default: [],
});

//메인페이지에서 유저주소, 좌표 넘어오면 연결시키기

//! 관광지 관련 전역변수
export const placeaddress = atom({
  key: "placeaddress",
  default: "",
});

export const placetitle = atom({
  key: "placetitle",
  default: "",
});

export const placelocation = atom({
  key: "placelocation",
  default: { lat: 0, lon: 0 },
});
export const placeimg = atom({
  key: "placeimg",
  default: "",
});

//! 로딩state
export const loading = atom({
  key: "loading",
  default: true,
});

//! Home화면에서 현재위치 저장 모달
export const isSavepositionOpen = atom({
  key: "isSavepositionOpen",
  default: false,
});
//! 로긴
export const loginState = atom({
  key: "loginState",
  default: false,
});

export const userInfo = atom({
  key: "userInfo",
  default: null,
});

export const defaultposition = atom({
  key: "defaultPosition",
  default: { lat: 0, lon: 0 },
});

// ! 위치기반 API
export const pickpoint = selector({
  key: "pickpoint",
  get: ({ get }) => {
    console.log(get(defaultposition).lat, get(defaultposition).lon);
    return [get(defaultposition).lat, get(defaultposition).lon];
  },
  set: ({ set }, arr) => {
    set(defaultposition, { lat: arr[0], lon: arr[1] });
  },
});

export const getPlace = selector({
  key: "getPlace",
  get: async () => {
    return navigator.geolocation.watchPosition(
      async (position) => {
        // console.log("여기 돼?");
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        // console.log(isLoading);

        const response = await axios.get(
          `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}`,
          {
            params: {
              MobileOS: "ETC",
              MobileApp: "TourAPI3.0_Guide",
              //! 관광지 개수
              numOfRows: 50,
              // areaCode:33,
              // sigunguCode:7,
              //! contentTypeId : 12:관광지,14:문화시설,15:행사,25:여행코스,28:레포츠,32:숙박,38:쇼핑,39:식당,
              contentTypeId: 12,
              // * 대분류 : 인문
              // cat1:'A02',
              //* 중분류 : 역사지구
              // cat2:'A0201',
              //*좌표,반경
              mapX: lon, //lon
              mapY: lat, //lat
              //! 반경 몇m??
              radius: 10000,
              //*
              arrange: "A",
              listYN: "Y",
            },
          },
          { "content-type": "application/json" }
        );
        const placeList = await response.data;
        console.log(placeList);
        return placeList;
      },
      (err) => alert("위치권한을 허용해주세요")
    );
  },
});
