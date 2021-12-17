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

const style = {
  cursor: "pointer",
};

const Arrow = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-10%); // 상하(수직 방향)의 이동 거리 값
`;

export const myArrow = ({ type, onClick }) => {
  const pointer =
    type === consts.PREV ? (
      <Icon size={"60"} icon={angleLeft} style={style} />
    ) : (
      <Icon size={"60"} icon={angleRight} style={style} />
    );

  return <Arrow onClick={onClick}>{pointer}</Arrow>;
};
