import React from "react";

import { Styled } from "./style";
import { isSavepositionOpen, nowlocation, pickpoint, isClickedNowLocation } from "../../recoil/recoil";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { Link } from "react-router-dom";

function HomeRightBtn() {
  const setIsSavePositionOpen = useSetRecoilState(isSavepositionOpen);
  const nowLoc = useRecoilValue(nowlocation);
  const setPickPoint = useSetRecoilState(pickpoint);
  const [clickedNowLocationBtn, setClickedNowLocationBtn] = useRecoilState(isClickedNowLocation);
  const openModalHandler = () => {
    setIsSavePositionOpen(true);
  };

  return (
    <>
      <Styled.RightBtnBox>
        <Styled.RightBtn onClick={openModalHandler}>현재위치 저장</Styled.RightBtn>
        <Link to="/mypage/visited">
          <Styled.RightBtn>내가 가본 곳</Styled.RightBtn>
        </Link>
        <Styled.RightBtn
          onClick={() => {
            setPickPoint([nowLoc.lat, nowLoc.lon]);
            setClickedNowLocationBtn(true); // 현재위치 버튼 눌렀다는 신호, HomeMap.js에서 반응한다.
          }}
        >
          <i className="fas fa-map-marker-alt"></i>
        </Styled.RightBtn>
      </Styled.RightBtnBox>
    </>
  );
}

export default HomeRightBtn;
