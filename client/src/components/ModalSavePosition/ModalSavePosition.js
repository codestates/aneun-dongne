import React, { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isSavepositionOpen,
  loginState,
  loginModal,
  usersaddress,
  defaultposition,
  token,
  kToken,
  saveOrNotModal,
} from "../../recoil/recoil";
import { Styled } from "./style";
import ImageUpload from "../ImageUpload/ImageUpload";
import { toast } from "react-toastify";

const ModalSavePosition = () => {
  const [isSaveOrNotModal, setIsSaveOrNotModal] = useRecoilState(saveOrNotModal);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);
  const [image, setImage] = useState(""); //전역으로 바꿀수도
  const [memo, setMemo] = useState(""); //마찬가지 전역으로 바꿀수도
  const [curUserImage, setCurUserImage] = useState(null);
  const [placeImage, setPlaceImage] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [clickedBtn, setClickedBtn] = useState(false); //저장버튼 누른 후 인지 아닌지 확인하려는 용도
  const [errorMessage, setErrorMessage] = useState("");
  //유저 위치정보
  const [userAddr, setUserAddr] = useRecoilState(usersaddress);
  const [defaultPosition, setDefaultPosition] = useRecoilState(defaultposition);
  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);

  function updateInfoRequest(e) {
    e.preventDefault();
    // 로긴 안한상태면 로그인부터 시킨다.
    if (!isLogin) {
      setIsSavePositionOpen(false);
      setIsLoginOpen(true);
      return;
    }
    if (memo === "") {
      toast.error("메모를 입력해주세요", {
        position: toast.POSITION.TOP_CENTER,
      });
      return null;
    }
    let formData = new FormData();

    // form-data 객체의 기존 키에 새 값을 추가하거나 키가 없으면 키를 추가한다.
    // 이미지를 보낼땐 formData안에 넣어서 안보내면 1MB만 되어도 에러가 뜨더라구요
    formData.append("image", placeImage); // 파일 -req.file, 나머지는 req.body로 가요
    formData.append("memo", memo); //메모
    formData.append("area", userAddr.area);
    formData.append("sigg", userAddr.sigg);
    formData.append("mapx", defaultPosition.lon);
    formData.append("mapy", defaultPosition.lat);

    axios
      .post(`${process.env.REACT_APP_API_URL}/visited`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setIsUploaded(true);
        setIsSaveOrNotModal(true);
        setIsSavePositionOpen(false);
        toast.info("업로드 중입니다", {
          position: toast.POSITION.TOP_CENTER,
        });
        setIsSavePositionOpen(false);
      })
      .catch((err) => {
        setClickedBtn(true);
        setIsUploaded(false);
        if (!isUploaded && clickedBtn) {
          toast.error("이미지 업로드 실패", {
            position: toast.POSITION.TOP_CENTER,
          });
          setIsSavePositionOpen(false);
        }
      });
  }
  // useEffect(() => {
  //   //onClick으로 하니까 필요없으려나?? 우선 납둬봐
  // }, [isUploaded]);

  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsSavePositionOpen(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <form className="form-id" onSubmit={updateInfoRequest}>
          <div className="form-title">이미지 추가</div>
          <ImageUpload placeImage={placeImage} setPlaceImage={setPlaceImage} />

          <div className="form-memo">
            <h3>메모</h3>
            <input
              id="memo"
              value={memo}
              placeholder="기억하고 싶은 내용을 적어주세요"
              onChange={(e) => {
                setMemo(e.target.value);
              }}
            />
          </div>
          {/* //! 로긴안했으면 모달창뜨게하기, 모달창 여러개 떴을때 우선순위 정하기 */}
          <button type="submit" className="save-position-button">
            저장
          </button>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalSavePosition;
