import React from "react";
import { Styled } from "./style";
import { cat1_name, cat2_name } from "../../location-data";
import HomeRightBtn from "../Home-RightBtn/HomeRightBtn-index";
function HomeRightbar({ area, sigg, areaIdx, changeArea, changeSigg, handleSearch, searchPlace, place }) {
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
          <Styled.SearchKeyWord placeholder="ex) 가을, 놀이공원"></Styled.SearchKeyWord>

          <Styled.SearchPlace
            type="text"
            value={place}
            onChange={(e) => handleSearch(e)}
            placeholder="ex) 경복궁, 창덕궁"
            onKeyUp={(e) => {
              if (e.key === "Enter") searchPlace(place);
            }}
          ></Styled.SearchPlace>
          <Styled.SearchBtn onClick={() => searchPlace(place)}>검색</Styled.SearchBtn>
        </Styled.SearchWrapper>
        <HomeRightBtn />
      </Styled.MapRightBar>
    </div>
  );
}

export default HomeRightbar;
