import React, { useEffect, useState } from 'react'
import { useSetRecoilState, useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
import styled from "styled-components";
import PlaceCards from './PlaceCards';
import { placelist,meetingplace,locations } from '../recoil/recoil';

const PlaceLists = styled.div`
height: 100vh;
display: grid; 
grid-template-columns: repeat(4, 1fr);
`
const MoveToTopBtn = styled.button`
border-radius: 70%;
background: transparent;
width:4rem;
height: 4rem;
position: fixed;
bottom:1rem;
right: 1rem;

${({ BtnStatus }) => {
      return BtnStatus ? `display: none` : null;
    }}
&:hover {
    background: rgba(192, 251, 255,0.7);
}
`

function PlaceList() {
    const placeList = useRecoilValue(placelist) 
    const [ScrollY, setScrollY] = useState(0); 
    const [BtnStatus, setBtnStatus] = useState(false);
    useEffect(() => {
        const watch = () => {
          window.addEventListener('scroll', handleFollow);
        }
        watch(); // addEventListener 함수를 실행
        return () => {
          window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
        }
      })

      const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if(ScrollY > 100) {
          // 100 이상이면 버튼이 보이게
          setBtnStatus(true);
        } else {
          // 100 이하면 버튼이 사라지게
          setBtnStatus(false);
        }
      }
    function topBtn(){
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
      }

    return (

        <PlaceLists>
            {
                placeList.map((place,idx)=>{
                    return(
                    <div key = {idx}>
                        {/* addr1이 undefined 되는 장소가 있어서 addr1는 임시방편으로 3항연산자 처리함 나중에 살펴보자. */}
                        <PlaceCards title = {place[2]} img={place[3]} addr1={place[4] ? place[4].split(' ')[0] : null}/>
                    </div>
                    )
                    })
            }
            <MoveToTopBtn BtnStatus={BtnStatus} onClick = {topBtn}>Top</MoveToTopBtn>
        </PlaceLists>
        
     
    )
}

export default PlaceList