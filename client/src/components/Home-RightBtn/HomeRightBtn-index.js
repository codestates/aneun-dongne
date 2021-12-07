import React, { useEffect } from "react";

import { Styled } from "./style";
import {
  isSavepositionOpen,
  nowlocation,
  setLo,
  usersaddress,
  pickpoint,
  isClickedNowLocation,
} from "../../recoil/recoil";
import { useRecoilValue, useSetRecoilState, useRecoilState, useRecoilValueLoadable } from "recoil";

function HomeRightBtn({ pending, setPending }) {
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);
  const nowLoc = useRecoilValue(nowlocation);
  const setPickPoint = useSetRecoilState(pickpoint);
  const [add, setAdd] = useRecoilState(usersaddress);
  const loc = useRecoilValueLoadable(setLo);
  const [clickedNowLocationBtn, setClickedNowLocationBtn] = useRecoilState(isClickedNowLocation);
  const openSavePositionModalHandler = () => {
    setIsSavePositionOpen(true);
  };

  // if (loc.state === "loading") {
  //   return (
  //     <>
  //       <Styled.RightBtnBox>
  //         <Styled.RightBtn onClick={openSavePositionModalHandler}>현재위치 저장</Styled.RightBtn>
  //         <Styled.RightBtn>내가 가본 곳</Styled.RightBtn>
  //         <Styled.RightBtn onClick={() => setPickPoint([nowLoc.lat, nowLoc.lon])}>
  //           <i className="fas fa-map-marker-alt"></i>
  //         </Styled.RightBtn>
  //       </Styled.RightBtnBox>
  //     </>
  //   );
  // }

  // if (loc.state === "hasValue")

  // console.log(nowLoc);
  return (
    <>
      <Styled.RightBtnBox>
        <Styled.RightBtn onClick={openSavePositionModalHandler}>현재위치 저장</Styled.RightBtn>
        <Styled.RightBtn>내가 가본 곳</Styled.RightBtn>
        <Styled.RightBtn
          onClick={() => {
            setPickPoint([nowLoc.lat, nowLoc.lon]);
            setClickedNowLocationBtn(true);
          }}
        >
          <i className="fas fa-map-marker-alt"></i>
        </Styled.RightBtn>
      </Styled.RightBtnBox>
    </>
  );
}

export default HomeRightBtn;
