import React, { useState } from "react";
import axios from "axios";
import { Styled } from "./style";

import { areaNameArr, allSigg } from "../../modules/AreaCodetoName";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { token, kToken, placelist } from "../../recoil/recoil";
import HomeRightBtn from "../HomeSearchBtn/HomeRightBtn-index";

import { Autocomplete } from "./Autocomplete";
import { getCodes } from "../../modules/AreaCodetoName";
function HomeRightbar({ setLevel, searchCurrentPlace }) {
  const [area, setArea] = useState("null"); //메인페이지에서 넘어오면 userAddress[0]넣기
  const [areaIdx, setAreaIdx] = useState(0); //메인페이지에서 넘어오면 (cat1_name.indexOf(area))넣기
  const [sigg, setSigg] = useState("null"); //메인페이지에서 넘어오면 userAddress[1]넣기
  const [place, setPlace] = useState("");

  const [hashtag, setHashtag] = useState("null");
  const setPlaceList = useSetRecoilState(placelist);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  const changeArea = (area) => {
    console.log(area);
    // searchPlace(area);
    if (area === "- 지역선택 -") {
      setArea("null");
    } else {
      console.log(getCodes(area));
      setArea(area);
      setSigg("null");
    }
    setAreaIdx(areaNameArr.indexOf(area));
  };
  const changeSigg = (sigg) => {
    console.log(area, sigg);
    // searchPlace(`${area} ${sigg}`);
    if (sigg === "- 지역선택 -") {
      setSigg("null");
    } else {
      console.log(getCodes(area, sigg));
      setSigg(sigg);
    }
    setLevel(10);
  };
  const handleSearch = (e) => {
    // console.log(e.target.value)
    setPlace(e.target.value);
    // e.target.value=''
  };
  console.log(place);
  const searchPlace = (area, sigg, hashtag, place) => {
    console.log(area, sigg);
    let areaCode = "";
    let siggCode = "";
    if (area === "null") {
      console.log("지역은 ", area);
      areaCode = 0;
      siggCode = 0;
    } else if (area !== "null" && sigg === "null") {
      areaCode = getCodes(area).areaCode;
      siggCode = 0;
    } else if (sigg !== "null") {
      areaCode = getCodes(area).areaCode;
      siggCode = getCodes(area, sigg).siggCode;
    }

    console.log(area, sigg);
    console.log(areaCode, siggCode);
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
          tag: "null", //
          searchWord: place,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        // setLevel(13);
        if (res.data.data.length === 0) return;
        const list = res.data.data.map((el) => {
          return [
            Number(el.post_mapy),
            Number(el.post_mapx),
            el.post_title,
            el.post_firstimage,
            el.post_addr1,
            el.post_contentid,
          ];
        });
        setPlaceList(list);
      });
    // .then(() => {
    //   setArea("null");
    //   setSigg("null");
    // });
  };
  return (
    <div>
      <Styled.MapRightBar>
        <p>오늘 떠나볼 동네는?</p>

        <Styled.SearchWrapper>
          <Styled.SearchBar>
            <Styled.SearchLocation first value={area} onChange={(e) => changeArea(e.target.value)} name="h_area1">
              {/* {cat1_name.map((el, idx) => { */}
              {areaNameArr.map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
            {/* //!지역을 선택하세요 추가 - 서버에 null이나 undefined 보내주기. */}
            <Styled.SearchLocation value={sigg} onChange={(e) => changeSigg(e.target.value)} name="h_area2">
              {/* {cat2_name[areaIdx].map((el, idx) => { */}
              {allSigg[areaIdx].map((el, idx) => {
                {
                  /* {cat2_name[0].map((el, idx) => { */
                }
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
          </Styled.SearchBar>
          <Autocomplete hashtag={hashtag} setHashtag={setHashtag} />
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
