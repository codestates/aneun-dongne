import { atom, selector } from "recoil";
import axios from "axios";

export const nowlocation = atom({
  key: "nowlocation",
  default: { lat: 0, lon: 0 },
});

export const placelist = atom({
  key: "placelist",
  default: [],
});

//메인페이지에서 유저주소, 좌표 넘어오면 연결시키기
//!meetingplace는 아마 수정될텐데 우선은 기능에 필요해서 남겨둠
export const meetingplace = atom({
  key: "meetingplace",

  default: ["", "", ""],
});
//! 관광지 관련 전역변수
export const placeaddress = atom({
  key : 'placeaddress',
  default : ""
})

export const placetitle = atom ({
  key : "placetitle",
  default : ""
})

export const placelocation = atom({
  key : 'placelocation',
  default : {lat:0,lon:0,}
})
export const placeimg = atom ({
  key : 'placeimg',
  default : ''
})

export const sendPlaceinfo = selector({
  key:'sendPlaceInfo',
  get:({get}) => {
    return {
      img:get(placeimg),
      location:get(placelocation),
      title:get(placetitle),
      address:get(placeaddress)
    }
  },
  set:({set},img,location,title,address) => {
    set(placeimg,img);
    set(placetitle,title);
    set(placelocation,location);
    set(placeaddress, address);
  }
  
})

export const locations = atom({
  key: "location",
  default: {
    lat: 36,
    lon: 127,
  },
});
