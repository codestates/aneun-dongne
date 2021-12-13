import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import notImageYet from "../../img/not-image-yet.png";
import { visitedModal } from "../../recoil/recoil";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 1px rgb(107, 217, 224) solid;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  width: 250px;
  min-height: 200px;
  cursor: pointer;
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
    /* background-color: red; */
    border-radius: 20px;
    width: 100%;
    margin: 10px;
  }
  .place-cards > img {
    width: 90%;
    height: 100px;
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
    .place-cards-memo {
      /* background: red; */
      width: 90%;
      padding: 0 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

function VisitedCards({ area, sigg, image, memo }) {
  const setIsVisitedOpen = useSetRecoilState(visitedModal);
  const openModalHandler = () => {
    setIsVisitedOpen(true);
  };

  return (
    <PlaceCard onClick={openModalHandler}>
      <div className="place-cards">
        {image ? <img src={image} /> : <img src={notImageYet} />}
        <div className="place-cards-title">
          <div>
            [ {area} {sigg} ]
          </div>
          <div className="place-cards-memo">{memo}</div>
        </div>
      </div>
    </PlaceCard>
  );
}
// export default VisitedCards;
export default React.memo(VisitedCards);
