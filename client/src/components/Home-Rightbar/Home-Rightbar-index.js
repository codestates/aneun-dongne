import React, { useState } from "react";
import axios from "axios";
import { Styled } from "./style";
import { cat1_name, cat2_name } from "../../location-data";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersaddress, token, kToken } from "../../recoil/recoil";
import HomeRightBtn from "../Home-RightBtn/HomeRightBtn-index";
import Loading from "../Loading/Loading";
function HomeRightbar({ setLevel, searchCurrentPlace }) {
  const [area, setArea] = useState(0); //메인페이지에서 넘어오면 userAddress[0]넣기
  const [areaIdx, setAreaIdx] = useState(0); //메인페이지에서 넘어오면 (cat1_name.indexOf(area))넣기
  const [sigg, setSigg] = useState(0); //메인페이지에서 넘어오면 userAddress[1]넣기
  const [place, setPlace] = useState("");
  const [add, setAdd] = useRecoilState(usersaddress);
  const [hashtag, setHashtag] = useState("null");
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  // console.log(add);
  const changeArea = (area) => {
    console.log(area);
    // searchPlace(area);
    if (area === "도") {
      setArea("도");
    } else {
      setArea(area);
    }
    setAreaIdx(cat1_name.indexOf(area));
  };
  const changeSigg = (sigg) => {
    console.log(area, sigg);
    // searchPlace(`${area} ${sigg}`);
    setSigg(sigg);
    setLevel(10);
  };
  const handleSearch = (e) => {
    // console.log(e.target.value)
    setPlace(e.target.value);
    // e.target.value=''
  };
  console.log(place);
  const searchPlace = (area, sigg, hashtag, keyword) => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/home`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        params: {
          areacode: 33,
          sigungucode: 1,
          radius: 10000,
          clientwtmx: "null",
          clientwtmy: "null",
          tag: hashtag, //
          searchWord: place,
        },
        withCredentials: true,
      })
      .then((res) => {
        setLevel(13);
        console.log(res.data);
      });
  };
  return (
    <div>
      <Styled.MapRightBar>
        <p>오늘 떠나볼 동네는?</p>

        <Styled.SearchWrapper>
          <Styled.SearchBar>
            <Styled.SearchLocation first value={area} onChange={(e) => changeArea(e.target.value)} name="h_area1">
              {cat1_name.map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
            {/* //!지역을 선택하세요 추가 - 서버에 null이나 undefined 보내주기. */}
            <Styled.SearchLocation value={sigg} onChange={(e) => changeSigg(e.target.value)} name="h_area2">
              {cat2_name[areaIdx].map((el, idx) => {
                {
                  /* {cat2_name[0].map((el, idx) => { */
                }
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
          </Styled.SearchBar>
          <Styled.SearchKeyWord value={hashtag} onChange={(e) => setHashtag(e.target.value)} name="hashtag">
            {keywordDummy.map((el, idx) => {
              return <option key={idx}>{el}</option>;
            })}
          </Styled.SearchKeyWord>

          <Styled.SearchPlace
            type="text"
            value={place}
            onChange={(e) => handleSearch(e)}
            placeholder="ex) 경복궁, 창덕궁"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                console.log(area);
                searchPlace(area, sigg, hashtag, place);
              }
            }}
          ></Styled.SearchPlace>
          <Styled.SearchBtn onClick={() => searchPlace(area, sigg, hashtag, place)}>
            <i className="fas fa-search"></i>
          </Styled.SearchBtn>
        </Styled.SearchWrapper>
        <HomeRightBtn />
      </Styled.MapRightBar>
    </div>
  );
}

export default HomeRightbar;

const keywordDummy = [
  "#산책하기좋은",
  "#절",
  "#왕릉",
  "#공원",
  "#놀이공원",
  "#데이트",
  "#자전거코스",
  "#가을",
  "#미술관",
  "#박물관",
];
