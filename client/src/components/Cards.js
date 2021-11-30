import React from 'react'
import styled from "styled-components";
import notImageYet from '../images/not-image-yet.png'
import PlaceCards from './PlaceCards';

function Cards(arr) {
    console.log(arr)
    return (
        <div>
            {
                arr.arr.map((place,idx)=>{
                    return(
                        <div key = {idx}>
             <PlaceCards title = {place[2]} img={place[3]} addr1={place[4] ? place[4].split(' ')[0] : null}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards
