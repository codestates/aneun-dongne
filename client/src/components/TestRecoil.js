import React from "react";
import { useRecoilValue } from "recoil";
import { getPlace } from "../recoil/recoil";

function TestRecoil() {
  const placeArr = useRecoilValue(getPlace);
  console.log(placeArr);

  return <div>{placeArr}</div>;
}

export default TestRecoil;
