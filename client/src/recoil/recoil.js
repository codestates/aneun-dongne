import { atom, selector } from "recoil";
import axios from "axios";

export const placelist = atom({
  key: "placelist",
  default: [],
});
//메인페이지에서 유저주소, 좌표 넘어오면 연결시키기
export const meetingplace = atom({
  key: "meetingplace",
  default: ["충북", "청주시", "충청북도 청주시 하이마트"],
});

export const locations = atom({
  key: "location",
  default: {
    lat: 36,
    lon: 127,
  },
});
