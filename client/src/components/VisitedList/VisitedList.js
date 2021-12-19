import React, { useState, useEffect } from "react";
import VisitedCards from "../VisitedCards/VisitedCards";
import styled from "styled-components";
import { Styled } from "./style";
import { useRecoilState } from "recoil";
import { visitedModal } from "../../recoil/recoil";
import ModalVisited from "../ModalVisited/ModalVisited";
function VisitedList({ placeList, selectedPosition, setSelectedPosition, markerClick, setMarkerClick }) {
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  const [selectedModal, setSelectedModal] = useState(null);
  useEffect(() => {
    if (selectedPosition !== null) {
      openModalHandler(selectedPosition);
      //markerClick상태를 false로 전환
      setMarkerClick(false);
    }
  }, [markerClick]);

  //selectedModal에 매개변수 el, 즉 클릭한 정보가 들어간다.
  const openModalHandler = (el) => {
    setSelectedModal(el);
    setIsVisitedOpen(true);
  };
  const closeVisitedModal = () => {
    if (isVisitedOpen) {
      setSelectedModal(null);
      setIsVisitedOpen(false);
    }
  };

  //! 배열을 매핑해서 모달에 넣을때는 array.map()을 작성하는 그 위치에서 모달창을 만들어야함
  return (
    <>
      <Styled.ModalContainer>
        {isVisitedOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeVisitedModal}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalVisited
                  id={selectedModal && selectedModal.id}
                  visitedImg={selectedModal && selectedModal.visited_thumbnail_path}
                  kmemo={selectedModal && selectedModal.visited_memo}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Styled.Body>
        {placeList.map((el) => {
          return (
            <div className="visited-cards-list" key={el.id} onClick={() => openModalHandler(el)}>
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
      </Styled.Body>
    </>
  );
}

export default React.memo(VisitedList);
