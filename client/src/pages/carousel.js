import { Icon } from "react-icons-kit";
import { angleLeft } from "react-icons-kit/fa/angleLeft";
import { angleRight } from "react-icons-kit/fa/angleRight";
import { consts } from "react-elastic-carousel";
import styled from "styled-components";

export const responsive = [
  { width: 400, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 800, itemsToShow: 3 },
];

export const diaryResponsive = [
  { width: 300, itemsToShow: 1 },
  { width: 400, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
];

const style = {
  cursor: "pointer",
};

const Arrow = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-10%);
`;

export const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <Icon size={"50"} icon={angleLeft} style={style} />
    ) : (
      <Icon size={"50"} icon={angleRight} style={style} />
    );

  return (
    <Arrow onClick={onClick} disabled={isEdge}>
      {pointer}
    </Arrow>
  );
};

const DiaryArrow = styled.div`
  & i {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const myDiaryArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <Icon size={"50"} icon={angleLeft} style={style} />
    ) : (
      <Icon size={"50"} icon={angleRight} style={style} />
    );

  return (
    <DiaryArrow onClick={onClick} disabled={isEdge}>
      {pointer}
    </DiaryArrow>
  );
};
