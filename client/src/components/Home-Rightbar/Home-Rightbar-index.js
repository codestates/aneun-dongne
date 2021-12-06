import React, { useState, useEffect } from "react";
import { Styled } from "./style";
import { cat1_name, cat2_name } from "../../location-data";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { loading, defaultposition, usersaddress, pickpoint, setLo } from "../../recoil/recoil";
import HomeRightBtn from "../Home-RightBtn/HomeRightBtn-index";
import Loading from "../Loading";
function HomeRightbar({ setLevel, handleSearch, searchPlace, place }) {
  const [area, setArea] = useState(""); //메인페이지에서 넘어오면 userAddress[0]넣기
  const [areaIdx, setAreaIdx] = useState(0); //메인페이지에서 넘어오면 (cat1_name.indexOf(area))넣기
  const [sigg, setSigg] = useState(""); //메인페이지에서 넘어오면 userAddress[1]넣기
  const [add, setAdd] = useRecoilState(usersaddress);
  const loc = useRecoilValueLoadable(setLo);

  const changeArea = (area) => {
    console.log(area);
    searchPlace(area);
    setArea(area);
    setAreaIdx(cat1_name.indexOf(area));
  };
  const changeSigg = (sigg) => {
    console.log(area, sigg);
    searchPlace(`${area} ${sigg}`);
    setSigg(sigg);
    setLevel(8);
  };
  // useEffect(() => {
  //   console.log(add);

  //   setArea(add.area);
  //   setSigg(add.sigg);
  //   console.log(pickPoint);
  // }, [add]);
  useEffect(() => {
    console.log("hi");
    setArea(loc.contents.area);
  }, [loc]);
  useEffect(() => {
    console.log(cat1_name.indexOf(area));
    if (cat1_name.indexOf(area) >= 0) setAreaIdx(cat1_name.indexOf(area));
    console.log(area, sigg, areaIdx);
    setSigg(loc.contents.sigg);
  }, [area]);

  if (loc.state === "loading") {
    console.log("로딩");
    return (
      <div>
        <Loading />
      </div>
    );
  }
  console.log(loc);

  // useEffect(()=>{

  // },[pickPoint])

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

            <Styled.SearchLocation value={sigg} onChange={(e) => changeSigg(e.target.value)} name="h_area2">
              {cat2_name[areaIdx + 1].map((el, idx) => {
                return <option key={idx}>{el}</option>;
              })}
            </Styled.SearchLocation>
          </Styled.SearchBar>
          <Styled.SearchKeyWord placeholder="ex) 가을, 놀이공원">
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
              if (e.key === "Enter") searchPlace(place);
            }}
          ></Styled.SearchPlace>
          <Styled.SearchBtn onClick={() => searchPlace(place)}>
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
