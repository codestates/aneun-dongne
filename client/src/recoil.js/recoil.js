import { atom } from "recoil";
import axios from "axios";

export const nowlocation = atom({
  key: "nowlocation",
  default: { lat: 0, lon: 0 },
});
