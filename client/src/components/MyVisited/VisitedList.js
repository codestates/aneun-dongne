import React, { useState } from "react";
import VisitedCards from "./VisitedCards";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { visitedModal } from "../../recoil/recoil";
import ModalVisited from "../ModalVisited/ModalVisited";
export const Styled = {
  PlaceCard: styled.div`
    /* background: skyblue; */
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
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  const [vtModal, setVtModal] = useState(null);
  // console.log(placeList);

  const openModalHandler = (el) => {
    setVtModal(el);
    setIsVisitedOpen(true);
  };
  const closeVisitedModal = () => {
    if (isVisitedOpen) {
      setVtModal(null);
      setIsVisitedOpen(false);
    }
  };

  //! 배열을 매핑해서 모달에 넣을때는 array.map()을 작성하는 그 위치에서 모달창을 만들어야함
  console.log(vtModal);
  return (
    <>
      <Styled.ModalContainer>
        {isVisitedOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeVisitedModal}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalVisited visitedImg={vtModal && vtModal.visited_thumbnail_path} />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Body>
        {placeList.map((el) => {
          return (
            <div className="visited-cards-list" key={el.id} onClick={() => openModalHandler(el)}>
              {/* <div className="visited-cards-list" key={el.id}> */}
              <VisitedCards
                id={el.id}
                area={el.visited_area}
                sigg={el.visited_sigg}
                memo={el.visited_memo}
                image={el.visited_thumbnail_path}
              />
            </div>
          );
        })}
      </Body>
    </>
  );
}

export default React.memo(VisitedList);
