import React, { useEffect, useState } from "react"
import axios from 'axios'
import styled from "styled-components";
import HomeMap from "../components/kakao-map/HomeMap"
import PlaceList from '../components/PlaceList';
import KeyWordsList from '../components/KeyWordsList';
const FixedComp = styled.div`
    position: sticky;
    top:0;
`
function Home() {
    return (
        <div>
            <FixedComp>
                <KeyWordsList />
                <HomeMap />
            </FixedComp>
            <PlaceList />
        </div>
    )
}

export default Home
