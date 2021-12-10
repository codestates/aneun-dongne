import React from "react";
import { Styled } from "./style";
import { isSavepositionOpen } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

function HomeRightBtn() {
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);

  const openSavePositionModalHandler = () => {
    setIsSavePositionOpen(true);
  };
  return (
    <>
      <Styled.RightBtnBox>
        <Styled.RightBtn onClick={openSavePositionModalHandler}>현재위치 저장</Styled.RightBtn>
        <Styled.RightBtn>내가 가본 곳</Styled.RightBtn>
      </Styled.RightBtnBox>
    </>
  );
}

export default HomeRightBtn;
