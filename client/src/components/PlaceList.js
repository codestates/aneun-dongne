import React, { useEffect, useState } from 'react'
import { useSetRecoilState, useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
import styled from "styled-components";
import PlaceCards from './PlaceCards';
import { placelist, meetingplace, placeaddress, placelocation, placeimg, placetitle, sendPlaceinfo } from '../recoil/recoil';
import { Link,useHistory} from 'react-router-dom';

const PlaceLists = styled.div`
height: 100vh;
display: grid; 
grid-template-columns: repeat(4, 1fr);
text-decoration-line: none;
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

const StyledLink = styled(Link)`
	text-decoration: none;
    color:black;
    
`;
const Div = styled.div`
    
    color:black;
    
`;

function PlaceList() {
    const history = useHistory();
    const placeList = useRecoilValue(placelist) 
    const [placeLocation,setPlaceLocation] = useRecoilState(placelocation)
    const [placeAddress,setPlaceAddress] = useRecoilState(placeaddress)
    // const [sendPlaceInfo,setSendPlaceInfo] = useRecoilState(sendPlaceinfo)
    const [imgURL,setImgURL] = useRecoilState(placeimg)
    const [title,setTitle] = useRecoilState(placetitle)
    const [ScrollY, setScrollY] = useState(0); 
    const [BtnStatus, setBtnStatus] = useState(false);
    //! Top 버튼에 필요한 주석
    // useEffect(() => {
    //     const watch = () => {
    //       window.addEventListener('scroll', handleFollow);
    //     }
    //     watch(); // addEventListener 함수를 실행
    //     console.log(BtnStatus)
    //     return () => {
    //       window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    //     }
    //   })

    //   const handleFollow = () => {
    //     setScrollY(window.pageYOffset);
    //     if(ScrollY > 300) {
    //       // 100 이상이면 버튼이 보이게
    //       setBtnStatus(true);
    //     } else {
    //       // 100 이하면 버튼이 사라지게
    //       setBtnStatus(false);
    //     }
    //   }
    function topBtn(){
        window.scroll({
          top: 0,
          behavior: 'smooth'
        });
        setScrollY(0);  // ScrollY 의 값을 초기화
        setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
      }

    function getPlaceLocation (obj,path,title,address) {
        console.log(path)
        setPlaceLocation(obj)
        setImgURL(path)
        setTitle(title)
        setPlaceAddress(address)
        
        // setSendPlaceInfo(path,obj,title,address)
    }
    
    return (

        <PlaceLists>
            {
                placeList.map((place,idx)=>{
                    console.log(place[4])
                    return(
                    <Div key = {idx}>
                        {/* addr1이 undefined 되는 장소가 있어서 addr1는 임시방편으로 3항연산자 처리함 나중에 살펴보자. */}
                        <StyledLink to = {`/detailpage/${place[5]}`}>
                            <PlaceCards 
                            onClick = {()=>getPlaceLocation({lat:place[0],lon:place[1]},place[3],place[2],place[4])} 
                            // onClick = {()=>getPlaceLocation(place[3],{lat:place[0],lon:place[1]},place[2],place[4])} 
                        title = {place[2]} 
                        img={place[3]} 
                        addr1={place[4] ? place[4].split(' ')[0] : null}/>
                        </StyledLink>
                    </Div>
                    )
                    })
            }
            <MoveToTopBtn BtnStatus={BtnStatus} onClick = {topBtn}>Top</MoveToTopBtn>
        </PlaceLists>
        
     
    )
}

export default PlaceList