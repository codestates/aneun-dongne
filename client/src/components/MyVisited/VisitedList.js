import React, { useState } from "react";
import VisitedCards from "./VisitedCards";
import styled from "styled-components";
const Body = styled.div`
  /* display: flex; */
  @media (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1360px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1730px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  text-decoration-line: none;
  margin-left: 30px;
  /* background: yellow; */
  > .visited-cards-list {
    /* border: 1px gray solid; */
    margin: 15px;
  }
`;
function VisitedList({ placeList }) {
  const [selectedArr, setSelectedArr] = useState([]);
  // let selectedArr = [];
  // console.log(placeList);

  function selectNum(el) {
    // console.log(el.id);
    let list = placeList.filter((e) => {
      return e.id === el.id;
    });
    setSelectedArr(list);
    // console.log(selectedArr);
    // setSelectedArr(arr);
  }

  return (
    <Body>
      {placeList.map((el) => {
        return (
          <div className="visited-cards-list" key={el.id} onClick={() => selectNum(el)}>
            <VisitedCards
              id={el.id}
              area={el.visited_area}
              sigg={el.visited_sigg}
              memo={el.visited_memo}
              image={el.visited_thumbnail_path}
              sId={selectedArr.id}
              sArea={selectedArr.visited_area}
              sSigg={selectedArr.visited_sigg}
              sMemo={selectedArr.visited_memo}
              sImage={placeList[0].visited_thumbnail_path}
            />
          </div>
        );
      })}
    </Body>
  );
}

export default React.memo(VisitedList);
