import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { visitedModal } from "../../recoil/recoil";

export const Styled = {
  PlaceCard: styled.div`
    /* background: skyblue; */
    margin: auto;
    margin-top: 40px;
    border: 1px #3a6fb0 solid;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    width: 250px;
    min-height: 200px;
    cursor: pointer;
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
      /* background-color: red; */
      border-radius: 20px;
      width: 100%;
      margin: 10px;
    }
    .place-cards > img {
      width: 90%;
      height: 130px;
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

    @media screen and (max-width: 600px) {
      width: 180px;
      height: 100px;
      margin: 0px;

      .place-cards > img {
        width: 160px;
      }
    }

    @media screen and (max-width: 438px) {
      width: 150px;

      .place-cards > img {
        width: 130px;
      }
    }

    @media screen and (max-width: 370px) {
      width: 140px;

      .place-cards > img {
        width: 120px;
      }
    }
  `,
  ModalContainer: styled.div`
    position: relative;
  `,

  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    backdrop-filter: contrast(50%);
    /* backdrop-filter: brightness(50%); */

    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  `,
  ModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 450px;
    height: 650px;
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;
  `,
};

function VisitedCards({ area, sigg, image, memo, id }) {
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  const [vtModal, setVtModal] = useState(null);
  const openModalHandler = (modal) => {
    setVtModal(modal);
    setIsVisitedOpen(true);
  };
  const closeVisitedModal = () => {
    console.log(isVisitedOpen);
    if (isVisitedOpen) {
      setVtModal(null);
      setIsVisitedOpen(false);
    }
  };

  return (
    <>
      <Styled.PlaceCard>
        <div className={`place-cards ${id}`}>
          {/* <div className={`place-cards ${id}`} onClick={(e) => openModalHandler(id)}> */}
          {image ? <img className={id} src={image} /> : <img className={id} src="/images/not-image-yet.png" />}
          <div className={`place-cards-title ${id}`}>
            <div className={id}>
              [ {area} {sigg} ]
            </div>
            <div className="place-cards-memo">{memo}</div>
          </div>
        </div>
      </Styled.PlaceCard>
    </>
  );
}

export default React.memo(VisitedCards);
