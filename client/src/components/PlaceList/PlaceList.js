import React, { useEffect, useState, useCallback } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { Styled } from "./style";
import { MemoCards } from "../PlaceCard/PlaceCards";

import {
  placeaddress,
  placelocation,
  placeimg,
  placetitle,
  placelist,
  token,
  kToken,
  canSearchPlace,
  setPlacelistLoading,
} from "../../recoil/recoil";

import { Icon } from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";
import Empty from "../Empty/Empty";
import LikeLoading from "../Loading/LikeLoading";

function PlaceList({ height }) {
  const ableToSearchPlace = useRecoilValue(canSearchPlace);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const placeList = useRecoilValue(placelist);
  // const visitedList = useRecoilValueLoadable(placelist);
  const setPlaceLocation = useSetRecoilState(placelocation);
  const setPlaceAddress = useSetRecoilState(placeaddress);
  const setImgURL = useSetRecoilState(placeimg);
  const setTitle = useSetRecoilState(placetitle);
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);
  // const placeList = visitedList.contents;
  const placeListLoading = useRecoilValue(setPlacelistLoading);
  //! Top 버튼에 필요한 주석
  useEffect(() => {
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

    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });

  //탑버튼 클릭했을때 실행되는 onClick함수
  const topBtn = useCallback(
    function topBtn() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
      setScrollY(0); // ScrollY 의 값을 초기화
      setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
    },
    [btnStatus]
  );

  function getPlaceLocation(obj, path, title, address) {
    setPlaceLocation(obj);
    setImgURL(path);
    setTitle(title);
    setPlaceAddress(address);
  }
  console.log(height);

  if (placeListLoading || placeList.length === 0) {
    return <LikeLoading />;
  }

  return (
    <>
      <Styled.PlaceLists height={height}>
        {!ableToSearchPlace ? (
          <>
            <Empty />
          </>
        ) : (
          placeList.map((place) => {
            return (
              <Styled.Div key={place[5]}>
                <Styled.StyledLink to={`/detailpage/${place[5]}`}>
                  <MemoCards
                    // onClick={() => getPlaceLocation({ lat: place[0], lon: place[1] }, place[3], place[2], place[4])}
                    title={place[2]}
                    img={place[3]}
                    addr1={place[4] ? place[4].split(" ")[0] : null}
                    contentId={place[5]}
                    tags={place[6]}
                  ></MemoCards>
                </Styled.StyledLink>
              </Styled.Div>
            );
          })
        )}
        <Styled.MoveToTopBtn btnStatus={btnStatus} onClick={topBtn}>
          <Icon size={"60"} icon={angleUp} />
        </Styled.MoveToTopBtn>
      </Styled.PlaceLists>
    </>
  );
}
export default PlaceList;
// export default React.memo(PlaceList);
