import React from "react";
import styled from "styled-components";
import notImageYet from "../images/not-image-yet.png";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 3rem;
  border: 1px rgb(107, 217, 224) solid;
  border-radius: 20px;
  width: 17rem;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: box-shadow 0.1s, transform 0.1s;
  text-decoration: inherit;
  &:hover {
    transform: scale(1.1);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .place-cards {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    width: 100%;
  }
  .place-cards > img {
    width: 80%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;

    border-radius: 20px;

    /* object-fit: scale-down; */
  }
  .place-cards-title {
    margin-left: 10px;
    margin-top: 6px;
  }
`;

function PlaceCards({ title, img, addr1, onClick }) {
  // console.log(addr1)
  return (
    <PlaceCard onClick={onClick}>
      <div className="place-cards">
        {img ? <img src={img} /> : <img src={notImageYet} />}
        <div className="place-cards-title">
          <div>{`[${addr1}] `}</div>
          <span>{title}</span>
        </div>
      </div>
    </PlaceCard>
  );
}

function PropsEqual(prev, next) {
  console.log(prev.img === next.img);
  return prev.img === next.img;
}
// console.log(React.memo(PlaceCards, PropsEqual));
export const MemoCards = React.memo(PlaceCards, PropsEqual);
// export default React.memo(PlaceCards, PropsEqual);
