import { atom, selector } from "recoil";
import axios from "axios";

//! 유저 주소 - Home.js에서 사용
export const usersaddress = atom({
  key: "usersaddress",
  default: { area: "", sigg: "", addr: "" },
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

export const sendPlaceinfo = selector({
  key: "sendPlaceInfo",
  get: ({ get }) => {
    return {
      img: get(placeimg),
      location: get(placelocation),
      title: get(placetitle),
      address: get(placeaddress),
    };
  },
  set: ({ set }, img, location, title, address) => {
    set(placeimg, img);
    set(placetitle, title);
    set(placelocation, location);
    set(placeaddress, address);
  },
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

export const locations = atom({
  key: "location",
  default: {
    lat: 36,
    lon: 127,
  },
});

//! 로긴
export const loginState = atom({
  key: "loginState",
  default: false,
});
//! 로긴모달
export const loginModal = atom({
  key: "loginModal",
  default: false,
});
export const userInfo = atom({
  key: "userInfo",
  default: {
    email: "",
    createdAt: "",
    nickname: "",
    updatedAt: "",
    user_area: "",
    user_sigg: "",
    user_image_path: "",
  },
});
//!pickpoint바뀔때마다 바뀌는 값
export const defaultposition = atom({
  key: "defaultPosition",
  default: { lat: 0, lon: 0 },
});
//! 현재위치 버튼때 필요한 값, 새로고침될때빼고는 안바뀐다.
export const nowlocation = atom({
  key: "nowlocation",
  default: { lat: 0, lon: 0 },
});

// ! 댓글
export const defaultcomments = atom({
  key: "defaultcomments",
  default: [],
});

//! 댓글 수정신호
export const deleteCommentmode = atom({
  key: "deleteCommentMode",
  default: false,
});

// ! 위치기반 API -> 지도위 나타나는 좌표 바꾸는거. 지도 클릭한효과랑 같음
export const pickpoint = selector({
  key: "pickpoint",
  get: ({ get }) => {
    // console.log(get(defaultposition).lat, get(defaultposition).lon);
    return [get(defaultposition).lat, get(defaultposition).lon];
  },
  set: ({ set }, arr) => {
    set(defaultposition, { lat: arr[0], lon: arr[1] });
  },
});

export const token = atom({
  key: "token",
  default: "",
});

export const infoEdit = atom({
  key: "infoEdit",
  default: "",
});
// ! 현재위치
export const isClickedNowLocation = atom({
  key: "isClickedNowLocation",
  default: false,
});

// ! 위치기반 API
export const getWTM = selector({
  key: "getWTN",
  get: async ({ get }) => {
    return (
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${get(pickpoint)[1]}&y=${
            get(pickpoint)[0]
          }&input_coord=WGS84&output_coord=WTM`,
          {
            headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
          }
        )
        .then((res) => {
          return { x: res.data.documents[0].x, y: res.data.documents[0].y };
        })
        // .then((wtm) => {
        //   return axios
        //     .get(`${process.env.REACT_APP_API_URL}/home`, {
        //       params: {
        //         radius: 10000,
        //         clientwtmx: wtm.x,
        //         clientwtmy: wtm.y,
        //         tag: "null", //null로 넣으면 undefined되어서, 문자열로 넣겠음
        //         searchWord: "null",
        //       },
        //       withCredentials: true,
        //     })
        //     .then((res) => {
        //       console.log(res.data.data);
        //       //!id는 어떤건가요??
        //       const list = res.data.data.map((el) => {
        //         return [
        //           Number(el.post_mapy),
        //           Number(el.post_mapx),
        //           el.post_title,
        //           el.post_firstimage,
        //           el.post_addr1,
        //           el.post_contentid,
        //         ];
        //       });
        //       console.log(list);
        //       return list;
        //     });
        // })

        .catch((err) => console.log(err))
    );
  },
});
export const setLo = selector({
  key: "setLo",
  get: async ({ get }) => {
    return (
      axios
        .get(
          `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${get(pickpoint)[1]}&y=${
            get(pickpoint)[0]
          }&input_coord=WGS84`,
          { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
        )
        .then((res) => res.data.documents[0].address)
        .then((address) => {
          // console.log(address)
          // console.log({
          //   area: address.region_1depth_name,
          //   sigg: address.region_2depth_name,
          //   address: address.address_name,
          // });
          return { area: address.region_1depth_name, sigg: address.region_2depth_name, address: address.address_name };
        })
        //   .then(res=>console.log(meetingPlace))
        .catch((err) => console.log(err))
    ); //237줄에 console.log(meetingPlace)있음.
  },
});
