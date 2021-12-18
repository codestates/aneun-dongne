import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { MemoCards } from "../PlaceCard/PlaceCards";

import { placeaddress, placelocation, placeimg, placetitle, placelist, token, kToken } from "../../recoil/recoil";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";

const PlaceLists = styled.div`
  @media (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 660px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 40px;
    text-decoration-line: none;
    margin-left: 30px;
  }
  @media (min-width: 1360px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1730px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
const MoveToTopBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #3a6fb0;
  color: white;
  transition: all 0.3s;
  display: ${(props) => (props.BtnStatus ? "inline" : "none")};
  :hover {
    background-color: #2f4d6f;
    transition: all 0.3s;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const Div = styled.div`
  color: black;
`;

function PlaceList() {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
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
                contentId={place[5]}
              ></MemoCards>
            </StyledLink>
          </Div>
        );
      })}
      <MoveToTopBtn BtnStatus={BtnStatus} onClick={topBtn}>
        <Icon size={"60"} icon={angleUp} />
      </MoveToTopBtn>
    </PlaceLists>
  );
}

export default React.memo(PlaceList);
