import React, { useState } from "react";
import axios from "axios";
import { Styled } from "./style";
import {
  isSavepositionOpen,
  nowlocation,
  pickpoint,
  isClickedNowLocation,
  defaultposition,
  usersaddress,
} from "../../recoil/recoil";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
function HomeRightBtn() {
  const [isLoading, setIsLoading] = useState(true);
  const setIsSavePositionOpen = useSetRecoilState(isSavepositionOpen);
  const nowLoc = useRecoilValue(nowlocation);
  const setNowLocation = useSetRecoilState(nowlocation);
  const setDefaultPosition = useSetRecoilState(defaultposition);
  const setAdd = useSetRecoilState(usersaddress);
  const [clickedNowLocationBtn, setClickedNowLocationBtn] = useRecoilState(isClickedNowLocation);
  const openModalHandler = () => {
    setIsSavePositionOpen(true);
  };

  return (
    <>
      <Styled.RightBtnBox>
        <Styled.RightBtn onClick={openModalHandler}>갤러리 저장</Styled.RightBtn>
        <Link to="/mypage/visited">
          <Styled.RightBtn>내가 가본 곳</Styled.RightBtn>
        </Link>
        <Styled.RightBtn
          onClick={() => {
            // useEffect(() => {
            setIsLoading(true);
            const getPosition = () => {
              // navigator.geolocation.watchPosition()를 사용하고 있었는데
              //이는 사용자 움직임에 따라 계속 위치정보 갱신
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const lat = position.coords.latitude;
                  const lon = position.coords.longitude;
                  console.log("---");
                  setNowLocation({ lat, lon });
                  // setDefaultPosition({ lat, lon });
                  // axios
                  //   .get(`https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${lon}&y=${lat}&input_coord=WGS84`, {
                  //     headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
                  //   })
                  // .then((res) => {
                  //   return res.data.documents[0].address;
                  // })
                  // .then((address) => {
                  //   setAdd({
                  //     area: address.region_1depth_name,
                  //     sigg: address.region_2depth_name,
                  //     address: address.address_name,
                  //   });
                  // })
                  // .catch((err) => console.log(err));
                  setIsLoading(false);
                },
                (err) => {
                  toast.error("위치권한을 허용해주세요", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }
              );
            };
            getPosition();
            // }, []);
            // setDefaultPosition({ lat: nowLoc.lat, lon: nowLoc.lon });
            setClickedNowLocationBtn(true); // 현재위치 버튼 눌렀다는 신호, HomeMap.js에서 반응한다.
          }}
        >
          <i className="fas fa-map-marker-alt"></i>
        </Styled.RightBtn>
      </Styled.RightBtnBox>
    </>
  );
}

export default HomeRightBtn;
