import React from "react";
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
  console.log(placeList);

  return (
    <Body>
      {placeList.map((el, idx) => {
        return (
          <div className="visited-cards-list" key={idx}>
            <VisitedCards
              area={el.visited_area}
              sigg={el.visited_sigg}
              memo={el.visited_memo}
              image={el.visited_memo_image_path}
            />
          </div>
        );
      })}
    </Body>
  );
}

export default React.memo(VisitedList);
