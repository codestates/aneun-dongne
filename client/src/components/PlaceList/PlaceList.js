import React, { useEffect, useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { Styled } from "./style";
import { MemoCards } from "../PlaceCard/PlaceCards";

import { placeaddress, placelocation, placeimg, placetitle, placelist, token, kToken } from "../../recoil/recoil";

import { Icon } from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";

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
    <Styled.PlaceLists>
      {placeList.map((place, idx) => {
        return (
          <Styled.Div key={idx}>
            {/* addr1이 undefined 되는 장소가 있어서 addr1는 임시방편으로 3항연산자 처리함 나중에 살펴보자. */}
            <Styled.StyledLink to={`/detailpage/${place[5]}`}>
              <MemoCards
                onClick={() => getPlaceLocation({ lat: place[0], lon: place[1] }, place[3], place[2], place[4])}
                title={place[2]}
                img={place[3]}
                addr1={place[4] ? place[4].split(" ")[0] : null}
                contentId={place[5]}
                tags={place[6]}
              ></MemoCards>
            </Styled.StyledLink>
          </Styled.Div>
        );
      })}
      <Styled.MoveToTopBtn BtnStatus={BtnStatus} onClick={topBtn}>
        <Icon size={"60"} icon={angleUp} />
      </Styled.MoveToTopBtn>
    </Styled.PlaceLists>
  );
}

export default React.memo(PlaceList);
