import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { MemoCards } from "./PlaceCards";
import PlaceCards from "./PlaceCards";

import { placelist, placeaddress, placelocation, placeimg, placetitle } from "../recoil/recoil";
import { Link } from "react-router-dom";

const PlaceLists = styled.div`
  /* height: 100vh; */

  @media (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1360px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1730px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  text-decoration-line: none;
  margin-left: 30px;
`;
const MoveToTopBtn = styled.button`
  border-radius: 70%;

  background: rgba(255, 255, 255, 0.7);
  width: 60px;
  height: 60px;
  z-index: 999;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 0.5px solid rgb(192, 251, 255);

  display: ${(props) => (props.BtnStatus ? "inline" : "none")};
  &:hover {
    background: rgba(192, 251, 255, 0.7);
    transform: scale(1.1);
    bottom: 13px;
    border: 0.5px solid white;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Div = styled.div`
  color: black;
`;
// React.memo 쓰기
// 아 근데 왜 안돼 우선 제껴,

function PlaceList() {
  const placeList = useRecoilValue(placelist);
  const setPlaceLocation = useSetRecoilState(placelocation);
  const setPlaceAddress = useSetRecoilState(placeaddress);
  const setImgURL = useSetRecoilState(placeimg);
  const setTitle = useSetRecoilState(placetitle);
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  //! Top 버튼에 필요한 주석
  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 300) {
      // 300 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 300 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };
  function topBtn() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  function getPlaceLocation(obj, path, title, address) {
    console.log(path);
    setPlaceLocation(obj);
    setImgURL(path);
    setTitle(title);
    setPlaceAddress(address);
  }
  return (
    <PlaceLists>
      {placeList.map((place, idx) => {
        return (
          <Div key={idx}>
            {/* addr1이 undefined 되는 장소가 있어서 addr1는 임시방편으로 3항연산자 처리함 나중에 살펴보자. */}
            <StyledLink to={`/detailpage/${place[5]}`}>
              <MemoCards
                onClick={() => getPlaceLocation({ lat: place[0], lon: place[1] }, place[3], place[2], place[4])}
                title={place[2]}
                img={place[3]}
                addr1={place[4] ? place[4].split(" ")[0] : null}
              ></MemoCards>
            </StyledLink>
          </Div>
        );
      })}
      <MoveToTopBtn BtnStatus={BtnStatus} onClick={topBtn}>
        Top
      </MoveToTopBtn>
    </PlaceLists>
  );
}

export default React.memo(PlaceList);
