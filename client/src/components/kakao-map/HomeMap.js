import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useSetRecoilState, useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
// import { changePlaceList } from "../../redux/actions/actions";
import styled from 'styled-components'
import dotenv from 'dotenv'
import notImageYet from '../../images/not-image-yet.png'
import { placelist,meetingplace,locations } from '../../recoil/recoil';
import './kakao-map.css'
import { cat1_num, cat1_name, cat2_num, cat2_name } from '../../location-data';
dotenv.config()

// 지역검색창
const SearchLocation = styled.select`
    
    margin-bottom: 5px;
    margin-right: 5px;
    margin-left:5px;
    width: 70px;
    height: 40px;
    background-color: white;
    /* border:gray 1px solid; */
    border:none;
    
    /* border:1px gray solid; */
    /* padding-right: ${(props) => (props.first ? '-15px' : '0')}; */
    border-right:${(props) => (props.first ? '1px gray solid' : 'none')};
`
const SearchKeyWord = styled.input`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:5px;
    width: 150px;
    height: 40px;
    background-color: white;
    border:gray 1px solid;
    border-radius: 10px;
    padding:5px;
`

const SearchPlace = styled.input`
    border:1px gray solid;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:5px;
    width: 150px;
    height: 40px;
    background-color: white;
    border:gray 1px solid;
    border-radius: 10px;
    padding:5px;
`
const SearchBtn = styled.button`
    margin-top: 160px;
    margin-bottom: 5px;
    margin-left:5px;
    width: 150px;
    height : 40px;
    background-color: rgb(192, 251, 255);
    border:none;
    border-radius: 10px;
    padding:5px;

    
`
const SearchBar = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left:5px;
    display:flex;
    padding:5px;
    width: 150px;
    height : 40px;
    border-radius: 5px;
    border:1px gray solid;
`
const MapRightBar = styled.div`
    position:relative;
    display: flex;
    flex-direction:column;
    border:1px rgb(192, 251, 255) solid;
    border-radius: 10px;
    margin-left: 30px;
    bottom : 10px;
    padding-left: 10px;
    padding-right: 10px;
`

const RightBtn = styled.button`
    border-radius: 5px;
    position: relative;
    left:-10px;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(to 
    right,
    rgba(255,255,255,0.9) 0,
    rgba(0,0,0,0) 60%,
    rgba(0,0,0,0) 100%
    );
    height:40px;
    width : 100px;
    margin-top:30px;
    border:none;
`
const RightBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    
`


const HomeMap = () => {
    const kakao = window.kakao
    const [placeList,setPlaceList] = useRecoilState(placelist) 
    const [location,setLocation] = useRecoilState(locations)//{lat:37,lon:128}  
    const [meetingPlace,setMeetingPlace] = useRecoilState(meetingplace)   
    
    const [count,setCount] = useState(0)//1번만시작하게함
    const [pending, setPending] = useState(true)
    const [map, setMap] = useState(null)
    const [place,setPlace] = useState('')
    const [centerPosition,setCenterPosition] = useState([location.lat,location.lon])
//   const [meetingPlace,setMeetingPlace] = useState([region,city,add])
  
//!!클릭한 곳을 pickPoint에 할당할 것, 초기값은 사용자 위치.
    const [pickPoint,setPickPoint] = useState([location.lat,location.lon])

    //!지역 검색창을 위한 state
    const [area,setArea] = useState(' ')//메인페이지에서 넘어오면 userAddress[0]넣기
    const [areaIdx,setAreaIdx] = useState(0)//메인페이지에서 넘어오면 (cat1_name.indexOf(area))넣기
    const [sigg,setSigg] = useState(' ')//메인페이지에서 넘어오면 userAddress[1]넣기

    //! 지도 줌인,줌아웃레벨, 숫자가 작을수록 줌인
    const [level,setLevel] = useState(9)
  
  /**
   *! 장소 검색시 실행되는 함수 serachPlace
   * @param keyword 검색어
   */
    const searchPlace = keyword => {
    setCount(0)
    setPending(true)
    const places = new kakao.maps.services.Places()
    //검색
    places.keywordSearch(keyword, (result, status) => {


      if (status === kakao.maps.services.Status.OK) {
          //

        const firstItem = result[0]
        const { x, y } = firstItem
        const moveLatLng = new kakao.maps.LatLng(y, x)
        
        // console.log(moveLatLng.La)
        map.panTo(moveLatLng)
        //setPickPoint를 등록하여 클릭한것과 같은 효과를 낸다.
        setPickPoint([moveLatLng.Ma,moveLatLng.La])
        //검색창 빈칸으로 만들기
        setPlace(' ')
        console.log(area,sigg)
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 없습니다.")
      } else {
        alert("서비스에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.")
      }
    //   setPickPoint()
      setPending(false)
    })
  }

  const handleSearch = e => {
    
    // console.log(e.target.value)
    setPlace(e.target.value)
    // e.target.value=''
    
  }


  useEffect(() => {// * 지도의 한 점 클릭시 그 클릭한 점의 좌표 반경 10km의 관광지들의 좌표 전송
    

// !이건 내 좌표 반경 10km에 있는 관광지 좌표따오는거



    //!파라미터
    //! areaCode : 서울1,인천2,대전3,대구4,광주5,부산6,울산7,세종8,경기31,강원32,충북33,충남34,경북35,경남36,전북37,전남38,제주40
    //! sigunguCode : 제천:7
    //! cat1(대분류): 
    //! cat2(중분류):
    //! cat3(소분류)
    //! areaBased : 
    // if(count===0){
      setCount(count+1)
axios.get(`http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}`,
    {
      params:{
      MobileOS:'ETC',
      MobileApp:'TourAPI3.0_Guide',
      //! 관광지 개수
      numOfRows: 50,
      // areaCode:33,
      // sigunguCode:7,
      //! contentTypeId : 12:관광지,14:문화시설,15:행사,25:여행코스,28:레포츠,32:숙박,38:쇼핑,39:식당, 
      contentTypeId:12,
      // * 대분류 : 인문
      // cat1:'A02',
      //* 중분류 : 역사지구
      // cat2:'A0201',
      //*좌표,반경
      mapX:pickPoint[1],
      mapY:pickPoint[0],
      //! 반경 몇m??
      radius:10000,
      //* 
      arrange:'A',
      listYN:'Y',
      }
    }
    ,{'content-type': 'application/json'}).then(res=>{
    //   console.log(res.data)
      console.log(res.data.response.body.items.item)
      let list = (res.data.response.body.items.item)
      //! list : [[관광지각각의 y좌표,x좌표,제목,썸네일,주소],..]
      list=list.map(el=>{
        return [Number(el.mapy),Number(el.mapx),el.title,el.firstimage,el.addr1]
      })
    //   dispatch(changePlaceList(list))
    setPlaceList(list)//-> 이걸 PlaceList.js에서 사용한다.
      
    })
    .catch(err=>console.log(err))
  // }
},[pickPoint])//! pickPoint가 바뀔때마다, 즉 지도를 클릭할때마다 실행.
// ?
  
// !
useEffect(()=>{ // * 위의 useEffect에서 받아온 좌표들을 지도에 노란색 마커로 표시
    console.log(meetingPlace)
    console.log(area,sigg)
    console.log("effect")
    
    const container = document.getElementById("map") //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(pickPoint[0],pickPoint[1]), //지도의 중심좌표를 마커로 변경
      level: level //지도의 레벨(확대, 축소 정도)
    }
    const map = new kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
    //마커가 표시될 위치입니다.
    let markerCenter = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
      position: map.getCenter(),
      map: map,
    });
    // !마커 여러개찍기, placeList:[[관광지1의 y좌표,x좌표,제목,썸네일,주소],[관광지2의 y좌표,x좌표,제목,썸네일,주소],...]
    let positions = []
    for(let i = 0;i<placeList.length;i++){
      positions.push(
      {   
          addr:placeList[i][4],
          img:placeList[i][3],
          content:placeList[i][2],
          latlng: new kakao.maps.LatLng(placeList[i][0], placeList[i][1])
      })
    }//!position = [ {addr:주소,latlng:좌표,content:관광지이름,img:관광지썸네일},... ]
    
  //   let positions = [
  //     {
  //         latlng: new kakao.maps.LatLng(37.9841931357, 126.9042297694)
  //     },
  //     {
  //         latlng: new kakao.maps.LatLng(37.9841931357, 126.9042297694)
  //     },
  //     {
  //         latlng: new kakao.maps.LatLng(37.6196823854,127.4915450327)
  //     },
  //     {
  //         latlng: new kakao.maps.LatLng(37.8299471303,127.5074902248)
  //     }
  // ];
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for (let i = 0; i < positions.length; i ++) {
      
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35); 
      
      // 마커 이미지를 생성합니다    
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
      
      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, 
          image : markerImage // 마커 이미지 
        })// 마커를 표시할 위치
      
      //관광지마커의 infowindow(마우스 올렸을때만)
      let iwContent = `<div style="padding:5px;">${positions[i].content}<br></div>`,
      iwPosition = new kakao.maps.LatLng(positions[i][0],positions[i][1]);
      let infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent,
        // removable : iwRemoveable 
      });
      kakao.maps.event.addListener(marker, 'mouseover', function(){
        infowindow.open(map,marker)
      })
      kakao.maps.event.addListener(marker, 'mouseout', function(){
        infowindow.close();
      })
      //관광지 마커 클릭하면 정보나오기
      // ! 여기 홈페이지 주소도 넣어줘야함. 백엔드에 요구하기. 위치기반url에는 홈페이지 응답으로 안준다.
      let onClickContent = 
      `<div class="wrap"> 
                 <div class="info"> 
                     <div class="title"> 
                     ${positions[i].content} 
                         
                     </div> 
                     <div class="body"> 
                         <div class="img">
                             <img src=${positions[i].img||notImageYet} width="73" height="70">
                        </div> 
                         <div class="desc"> 
                             <div class="ellipsis">${positions[i].addr}</div>               
                         </div> 
                     </div> 
                 </div>    
            </div>`,iwRemoveable = true;
      let infowindowOnClick = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : onClickContent,
        removable : iwRemoveable 
      });

      kakao.maps.event.addListener(marker, 'click', function(){
        infowindowOnClick.open(map,marker)
      })

  }
  // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
  

  //내위치 마커의 infowindow -> 파란색마커임, 
  let iwContentCenter = '<div style="padding:5px;">내 위치 <br></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
  iwPositionCenter = new kakao.maps.LatLng([location.lat,location.lon]),iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다; //인포윈도우 표시 위치입니다
  // 인포윈도우를 생성합니다
  let infowindowCenter = new kakao.maps.InfoWindow({
    position : iwPositionCenter, 
    content : iwContentCenter,
    removable : iwRemoveable 
  });
  
        
    // marker.setMap(map);




// 중심좌표 마커에 클릭이벤트를 등록합니다
kakao.maps.event.addListener(markerCenter, 'click', function() {
  // 마커 위에 인포윈도우를 표시합니다
  infowindowCenter.open(map, markerCenter); 
  
});
kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
    
//* 내위치마커에 infowindow 생성
infowindowCenter.open(map, markerCenter);  
// ? 클릭한 위도, 경도 정보를 가져옵니다 
let latlng = mouseEvent.latLng; 
console.log(latlng.Ma, latlng.La)
setPickPoint([latlng.Ma, latlng.La])
//?  마커 위치를 클릭한 위치로 옮깁니다
markerCenter.setPosition(latlng);

//*?infowindow 마커위에 생성
infowindowCenter.setPosition(latlng)

console.log('도착')

// setCenterPosition([latlng.getLat(),latlng.getLng()])

// ?  좌표를 주소로 변환 -> 버튼 클릭시 onClick이벤트를 통해 91번줄로 이동
axios.get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`
  ,{headers:{Authorization:`KakaoAK ${process.env.REACT_APP_REST_API}`}}
  )
  .then(res=>res.data.documents[0].address)
  .then((address)=>{
    // console.log(address)
    setMeetingPlace([address.region_1depth_name,address.region_2depth_name,address.address_name])
  })
//   .then(res=>console.log(meetingPlace))
  .catch(err=>console.log(err)) //237줄에 console.log(meetingPlace)있음.
});
    setMap(map)
    setPending(false)
}, [kakao.maps,placeList,pickPoint,meetingPlace])


// !지역

//    const [area,setArea] = useState(' ')
// const [sigg,setSigg] = useState(' ')
// const [areaIdx,setAreaIdx] = useState(0)
//!


const changeArea = (area) => {
    console.log(area);
    searchPlace(area)
    setArea(area)
    setAreaIdx(cat1_name.indexOf(area))
}
const changeSigg = (sigg) => {
    console.log(area, sigg);
    searchPlace(`${area} ${sigg}`)
    setSigg(sigg)
    setLevel(8)
}
/* margin-top:${(props)=>props.first?'10px':'50px'} */
  return (
    <div className="map-box">
       
    <div id="map" ></div>
    <MapRightBar >
        <p>오늘 떠나볼 동네는?</p>
        <SearchBar>
            <SearchLocation first value = {area} onChange = {e=>changeArea(e.target.value)} name = 'h_area1' >
                {cat1_name.map((el,idx)=>{
                    return (
                        <option key = {idx}>{el}</option>
                    )
                })}
            </SearchLocation>  
        
            <SearchLocation value = {sigg} onChange = {e=>changeSigg(e.target.value)} name = 'h_area2'>
                {cat2_name[areaIdx+1].map((el,idx)=>{
                    return (
                        <option key = {idx} >{el}</option>
                    )
                })}
            </SearchLocation>
        </SearchBar>
            <SearchKeyWord placeholder = 'ex) 가을, 놀이공원'>
            </SearchKeyWord>
            
            <SearchPlace type = 'text' value = {place} onChange = {e=>handleSearch(e)} 
            placeholder="ex) 경복궁, 창덕궁"
            onKeyUp ={e=>{if(e.key==='Enter')searchPlace(place)}}
            ></SearchPlace>
            <SearchBtn onClick = {()=>searchPlace(place)}>검색</SearchBtn>
        
    </MapRightBar> 
    <RightBtnBox>
        <RightBtn >현재위치 저장</RightBtn>
        <RightBtn >내가 가본 곳</RightBtn>
    </RightBtnBox>
    </div>
  )
}

export default HomeMap








//! 남은거 : 
//! 시군구,도 option에 있는 글자를 지도에 파란마커가 있는 주소와 일치시키기
//! 무한스크롤
//! css,반응형