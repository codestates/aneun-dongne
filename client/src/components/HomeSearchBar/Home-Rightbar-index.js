import React, { useState } from "react";
import axios from "axios";
import { Styled } from "./style";

import { areaNameArr, allSigg } from "../../modules/AreaCodetoName";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { token, kToken, placelist } from "../../recoil/recoil";
import HomeRightBtn from "../HomeSearchBtn/HomeRightBtn-index";

import { Autocomplete } from "../Autocomplete/Autocomplete";
import { getCodes } from "../../modules/AreaCodetoName";
function HomeRightbar({ setLevel }) {
  const [area, setArea] = useState("null");
  const [areaIdx, setAreaIdx] = useState(0);
  const [sigg, setSigg] = useState("null");
  const [place, setPlace] = useState("");

  const [hashtag, setHashtag] = useState("");
  const setPlaceList = useSetRecoilState(placelist);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  const changeArea = (area) => {
    if (area === "지역선택") {
      setArea("null");
    } else {
      setArea(area);
      setSigg("null");
    }
    setAreaIdx(areaNameArr.indexOf(area));
  };
  const changeSigg = (sigg) => {
    if (sigg === "지역선택") {
      setSigg("null");
    } else {
      setSigg(sigg);
    }
    setLevel(10);
  };
  const handleSearch = (e) => {
    setPlace(e.target.value);
  };
  const handleTagSearch = (e) => {
    setHashtag(e.target.value);
    console.log("handleTagSearch", hashtag);
  };
  const searchPlace = (area, sigg, place, hashtag) => {
    console.log(place);
    console.log("hash", hashtag);
    let areaCode = "";
    let siggCode = "";
    if (area === "null") {
      areaCode = 0;
      siggCode = 0;
    } else if (area !== "null" && sigg === "null") {
      areaCode = getCodes(area).areaCode;
      siggCode = 0;
    } else if (sigg !== "null") {
      areaCode = getCodes(area).areaCode;
      siggCode = getCodes(area, sigg).siggCode;
    }
    axios
      .get(`${process.env.REACT_APP_API_URL}/home`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        params: {
          areacode: areaCode,
          sigungucode: siggCode,
          radius: 10000,
          clientwtmx: "null",
          clientwtmy: "null",
          tag: hashtag,
          searchWord: place,
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.data.length === 0) return;
        console.log(res.data.data);
        const list = res.data.data
          .filter((el) => el.post_mapy !== "0.00000000000000000000" && el.post_mapx !== "0.00000000000000000000")
          .map((el) => {
            return [
              Number(el.post_mapy),
              Number(el.post_mapx),
              el.post_title,
              el.post_firstimage,
              el.post_addr1,
              el.post_contentid,
              el.post_tags.split(",") || [],
            ];
          });
        console.log(list);
        setPlaceList(list);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Styled.MapRightBar>
        <p>오늘 떠나볼 동네는?</p>

        <Styled.SearchWrapper>
          <Styled.SearchBar>
            <Styled.SearchLocation first value={area} onChange={(e) => changeArea(e.target.value)} name="h_area1">
              {areaNameArr.map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
            <Styled.SearchLocation value={sigg} onChange={(e) => changeSigg(e.target.value)} name="h_area2">
              {allSigg[areaIdx].map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
          </Styled.SearchBar>
          {/* <Autocomplete hashtag={hashtag} setHashtag={setHashtag} /> */}
          <Styled.SearchPlace
            type="text"
            value={hashtag}
            onChange={(e) => handleTagSearch(e)}
            placeholder="#해시태그 검색"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchPlace(area, sigg, place, hashtag);
              }
            }}
          ></Styled.SearchPlace>
          <Styled.SearchPlace
            type="text"
            value={place}
            onChange={(e) => handleSearch(e)}
            placeholder="관광지 검색"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchPlace(area, sigg, place, hashtag);
              }
            }}
          ></Styled.SearchPlace>
          {/* <div> */}
          <Styled.SearchBtn onClick={() => searchPlace(area, sigg, place, hashtag)}>
            <i className="fas fa-search"></i>
          </Styled.SearchBtn>
          {/* </div> */}
        </Styled.SearchWrapper>
        <HomeRightBtn />
      </Styled.MapRightBar>
    </div>
  );
}

export default HomeRightbar;
