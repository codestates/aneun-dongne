import React from 'react'
import styled from "styled-components";
import notImageYet from '../images/not-image-yet.png'
const PlaceCard = styled.div`
    margin:10px;
    border:1px gray solid;
    width:300px;
    .place-cards{
        display:flex;
        flex-direction:column;
        width: 250px;
    }
    .place-cards > img {
        border:1px red solid;
        width: 250px;
        height:230px;
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
                    <div>{`[${addr1}] `}</div> 
                    <span>{title}</span>
                </div>    
                <hr />
            </div>
            </PlaceCard>
        

    )
}

export default PlaceCards
