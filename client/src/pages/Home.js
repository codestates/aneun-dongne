import React, { useEffect, useState } from "react"
import axios from 'axios'
import HomeMap from "../components/kakao-map/HomeMap"
import PlaceList from '../components/PlaceList';
import KeyWordsList from '../components/KeyWordsList';
function Home() {
    return (
        <div>
            <KeyWordsList />
            <HomeMap />
            <PlaceList />
        </div>
    )
}

export default Home
