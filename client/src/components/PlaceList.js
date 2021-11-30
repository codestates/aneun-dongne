import React from 'react'
import { useSetRecoilState, useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
import styled from "styled-components";
import PlaceCards from './PlaceCards';
import { placelist,meetingplace,locations } from '../recoil/recoil';
function PlaceList() {
    
    
    // const placeList = useSelector((state=>state.changePlaceListReducer))
    const placeList = useRecoilValue(placelist) 
    // const [location,setLocation] = useRecoilState(nowlocation)
    // setLocation({
    //     lat : position.coords.latitude,
    //     lon : position.coords.longitude
    // })
    const PlaceList = styled.div`
        display:flex;
        flex-direction: column;
        position: relative;
    `

    return (
        <PlaceList>
            {placeList.map((place,idx)=>{
            return(
            <div key = {idx}>
                {/* addr1이 undefined 되는 장소가 있어서 addr1는 임시방편으로 3항연산자 처리함 나중에 살펴보자. */}
                <PlaceCards title = {place[2]} img={place[3]} addr1={place[4]?place[4].split(' ')[0]:null}/>
            </div>
            )
            })}
        </PlaceList>
    )
}

export default PlaceList
