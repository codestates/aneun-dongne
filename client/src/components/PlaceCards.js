import React from "react";
import styled from "styled-components";
import notImageYet from "../img/not-image-yet.png";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 1px rgb(107, 217, 224) solid;

  border-radius: 20px;
  width: 200px;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: box-shadow 0.1s, transform 0.1s;
  text-decoration: inherit;
  animation: color-change 2s infinite;
  @keyframes color-change {
    0% {
      border-left: #c1ff6b 1px solid;

      border-top: #c1ff6b 1px solid;
    }
    50% {
      border-left: #fab4b4 1px solid;

      border-top: #fab4b4 1px solid;
    }
    100% {
      border-left: #46ffff 1px solid;

      border-top: #46ffff 1px solid;
    }
  }
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
    height: 150px;
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
  // console.log(prev.img === next.img);
  return prev.img === next.img;
}
// console.log(React.memo(PlaceCards, PropsEqual));
export const MemoCards = React.memo(PlaceCards, PropsEqual);
// export default React.memo(PlaceCards, PropsEqual);
