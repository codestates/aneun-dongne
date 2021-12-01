import React from 'react'
import styled from "styled-components";
import notImageYet from '../images/not-image-yet.png'
const PlaceCard = styled.div`
    margin:auto;
    margin-top:3rem;
    border:1px rgb(107, 217, 224) solid;
    border-radius: 20px;
    width:17rem;
    .place-cards{
        
        display:flex;
        flex-direction:column;
        align-content: center;
        justify-content: center;
        width: 100%;
    }
    .place-cards > img {
        border:1px rgb(192, 251, 255) solid;
        width: 80%;
        height:13rem;
        margin-left:auto;
        margin-right: auto;
        margin-top:0.5rem;
        margin-bottom:0.5rem;
        border-radius: 20px;
        
        
        /* object-fit: scale-down; */
    }
    .place-cards-title {
        margin-left:0.5rem;
        margin-top:0.3rem;
    }
    
`


function PlaceCards({title,img,addr1}) {
    
    // console.log(addr1)
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
