import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Styled } from "./style";
import { visitedModal } from "../../recoil/recoil";

function VisitedCards({ area, sigg, image, memo, id }) {
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  const [vtModal, setVtModal] = useState(null);
  const openModalHandler = (modal) => {
    setVtModal(modal);
    setIsVisitedOpen(true);
  };
  const closeVisitedModal = () => {
    if (isVisitedOpen) {
      setVtModal(null);
      setIsVisitedOpen(false);
    }
  };

  return (
    <>
      <Styled.PlaceCard>
        <div className={`place-cards ${id}`}>
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
