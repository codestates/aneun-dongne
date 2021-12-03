import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import HomeMap from "../components/kakao-map/HomeMap";
import PlaceList from "../components/PlaceList";
import KeyWordsList from "../components/KeyWordsList";

const FixedComp = styled.div`
  /* position: fixed;
  top: 8%; */
  position: sticky;
  top: 8%;
`;

function Home() {
  return (
    <>
      {/* <FixedComp> */}
      <KeyWordsList />
      <HomeMap />
      {/* </FixedComp> */}
      <PlaceList />
    </>
  );
}

export default Home;
