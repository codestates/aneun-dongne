import React from 'react'
import styled from "styled-components";
import notImageYet from '../images/not-image-yet.png'
const PlaceCard = styled.div`
    margin:10px;
    .place-cards{
        display:flex;
        flex-direction:column;
    }
    .place-cards > img {
        border:1px red solid;
        width: 200px;
        height:180px;
        object-fit: scale-down;
    }
    .place-cards-title > {

    }
`

function PlaceCards({title,img,addr1}) {
    console.log(addr1)
    return (
            <PlaceCard>
            <div className = 'place-cards'>
                {img ? <img src= {img} /> : <img src= {notImageYet} />}
                <div className ='place-cards-title'>
                    <span>{`[${addr1}]`}</span> 
                    <span>{title}</span>
                </div>    
                <hr />
            </div>
            </PlaceCard>
        

    )
}

export default PlaceCards
