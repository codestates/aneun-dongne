import React, { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  visitedModal,
  loginState,
  loginModal,
  token,
  kToken,
  newVisitedPlace,
  deleteCommentmode,
} from "../../recoil/recoil";
import { Styled } from "./style";
import VisitedUpload from "../VisitedUpload/VisitedUpload";
import { toast } from "react-toastify";

function ModalVisited({ id, kmemo, visitedImg }) {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [isVisitedPlaceOpen, setIsVisitedPlaceOpen] = useRecoilState(visitedModal);
  const [image, setImage] = useState(""); //전역으로 바꿀수도
  const [memo, setMemo] = useState(kmemo); //마찬가지 전역으로 바꿀수도
  const [placeList, setPlaceList] = useRecoilState(newVisitedPlace);
  const [placeImage, setPlaceImage] = useState(visitedImg);
  const [isUploaded, setIsUploaded] = useState(false);
  const [clickedBtn, setClickedBtn] = useState(false); //저장버튼 누른 후 인지 아닌지 확인하려는 용도
  const [errorMessage, setErrorMessage] = useState({
    image: "",
    memo: "",
  });
  const [deleteOrNot, setDeleteOrNot] = useRecoilState(deleteCommentmode);
  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);

  async function updateInfo(e) {
    e.preventDefault();
    let formData = new FormData();
    // console.log("저장버튼 들어간다.", e);
    //form-data 객체의 기존 키에 새 값을 추가하거나 키가 없으면 키를 추가한다.

    formData.append("image", placeImage); // 파일
    formData.append("memo", memo); //메모

    axios
      .patch(`${process.env.REACT_APP_API_URL}/visited`, formData, {
        params: { visitedId: id },
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .then((res) => {
        setPlaceList(res.data.data);
        setIsUploaded(true);
        setIsVisitedPlaceOpen(false);
      })
      .catch((err) => {
        setClickedBtn(true);
        setIsUploaded(false);
        if (!isUploaded && clickedBtn) {
          toast.error("이미지 업로드 실패", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  }
  async function deleteInfo(e) {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/visited`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: { visitedId: id },
      })
      .then((res) => {
        setDeleteOrNot(true);
        setIsVisitedPlaceOpen(false);
      });
  }
  function updateInfoRequest(e) {
    e.preventDefault();
    // 로긴 안한상태면 로그인부터 시킨다.
    if (!isLogin) {
      setIsVisitedPlaceOpen(false);
      setIsLoginOpen(true);
      return;
    }
  }

  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsVisitedPlaceOpen(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <form id="form-id" onSubmit={updateInfoRequest}>
          <div className="form-title">이미지 수정</div>
          <VisitedUpload placeImage={placeImage} setPlaceImage={setPlaceImage} />

          <div className="form-memo">
            <h3>메모</h3>

            <input
              id="memo"
              value={memo}
              onChange={(e) => {
                setMemo(e.target.value);
              }}
            />
          </div>
          {/* //! 로긴안했으면 모달창뜨게하기, 모달창 여러개 떴을때 우선순위 정하기 */}
          <div className="button-wraaper">
            <button type="submit" value="update" className="edit-position-button" onClick={updateInfo}>
              저장
            </button>

            <button type="submit" value="delete" className="delete-position-button" onClick={deleteInfo}>
              삭제
            </button>
          </div>
        </form>
      </Styled.FormContainer>
    </>
  );
}

export default ModalVisited;
