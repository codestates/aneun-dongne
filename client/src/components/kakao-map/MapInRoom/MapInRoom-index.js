import React, { useEffect } from 'react';
// import { useSelector,shallowEqual } from 'react-redux';
import { useSetRecoilState, useRecoilValue, useResetRecoilState, useRecoilState } from 'recoil';
import { placetitle,placeaddress,nowlocation, placelocation, sendPlaceinfo,  } from '../../../recoil/recoil';
import styled from 'styled-components';
import { Styled } from './style'


const MapInRoom = () => {
    
    // const {lat,lon} = useSelector((state=>state.locationReducer),shallowEqual)
    const placeLocation = useRecoilValue(placelocation)
    const placeAddress = useRecoilValue(placeaddress)
    const placeTitle = useRecoilValue(placetitle)
    const { kakao } = window;
    console.log('관광지좌표 placeLocation',placeLocation)
    console.log('관광지주소 placeAddress',placeAddress)
    // console.log(placeLocation )
    useEffect(() => {
        const container = document.querySelector('#map');
        const options = {
            // center: new kakao.maps.LatLng(placeLocation .lat, placeLocation .lon),
            //!사실 placeLocation은 필요없음
            //!지도의 초기 중심화면 설정
            center: new kakao.maps.LatLng(placeLocation.lat, placeLocation.lon),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        // const markerPosition  = new kakao.maps.LatLng(placeLocation.lat,placeLocation.lon); 
        let geocoder = new kakao.maps.services.Geocoder();
        if(placeAddress){
        geocoder.addressSearch(placeAddress, function(result, status) {
            console.log(placeAddress)
            // 정상적으로 검색이 완료됐으면 
             if (status === kakao.maps.services.Status.OK) {
                console.log(result)
                let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
                // 결과값으로 받은 위치를 마커로 표시합니다
                let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });
                marker.setMap(map);   
                // 인포윈도우로 장소에 대한 설명을 표시합니다
                let infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">'+`${placeTitle}`+'</div>'
                });
                infowindow.open(map, marker);        
                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
             

        // 위도, 경도로 변환 및 마커표시
         
    
    // // }); 
    // // let markerPosition  = new kakao.maps.LatLng(lat, lon); 
    // //     let marker = new kakao.maps.Marker({
    // //         position: markerPosition
        }
    });
    }
           
        

    }, [placeLocation]);
    return (
        <Styled.Div>
            <Styled.Address>주소 : {placeAddress}</Styled.Address>
            <Styled.Map id = "map"></Styled.Map>
            
        </Styled.Div>            
    );
}

export default MapInRoom;





// const map = new kakao.maps.Map(container, options);
//         const markerPosition  = new kakao.maps.LatLng(placeLocation.lat,placeLocation.lon); 
//     //     const geocoder = new kakao.maps.services.Geocoder();
//     //     geocoder.addressSearch(placeAddress, function(result, status) {

//     //         // 정상적으로 검색이 완료됐으면 
//     //          if (status === kakao.maps.services.Status.OK) {
//     //             console.log(result)
//     //             let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        
//     //             // 결과값으로 받은 위치를 마커로 표시합니다
//                 let marker = new kakao.maps.Marker({
//                     map: map,
//                     position: markerPosition
//                 });
//                 marker.setMap(map);   
//     //             // 인포윈도우로 장소에 대한 설명을 표시합니다
//                 let infowindow = new kakao.maps.InfoWindow({
//                     content: '<div style="width:150px;text-align:center;padding:6px 0;">'+`${placeTitle}`+'</div>'
//                 });
//                 infowindow.open(map, marker);        
//     //             // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//                 map.setCenter(markerPosition);
            

//     //     // 위도, 경도로 변환 및 마커표시
         
    
//     // // }); 
//     // // let markerPosition  = new kakao.maps.LatLng(lat, lon); 
//     // //     let marker = new kakao.maps.Marker({
//     // //         position: markerPosition
//     //     });
           
        