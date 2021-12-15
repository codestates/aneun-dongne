import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isSavepositionOpen, visitedModal, loginState, loginModal, token, newVisitedPlace } from "../../recoil/recoil";
import { Styled } from "./style";
import ImageUpload from "../UploadImage/ImageUpload";
import VisitedUpload from "../UploadImage/VisitedUpload";

function ModalVisited({ id, idx, visitedImg }) {
  const accessToken = useRecoilValue(token);
  const [isVisitedPlaceOpen, setIsVisitedPlaceOpen] = useRecoilState(visitedModal);
  const [image, setImage] = useState(""); //전역으로 바꿀수도
  const [memo, setMemo] = useState(""); //마찬가지 전역으로 바꿀수도
  const [loading, setLoading] = useState(false);
  const [placeList, setPlaceList] = useRecoilState(newVisitedPlace);
  console.log(visitedImg);
  const [placeImage, setPlaceImage] = useState(visitedImg);
  const [isUploaded, setIsUploaded] = useState(false);
  const [clickedBtn, setClickedBtn] = useState(false); //저장버튼 누른 후 인지 아닌지 확인하려는 용도
  const [errorMessage, setErrorMessage] = useState({
    image: "",
    memo: "",
  });
  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);

  //!모달창은 배열수만큼 있는게 아니라 컴퍼넌트 1개임 -> 그래서 여러개가 한방에 다 떴다.
  // async function getVisitedPlace() {
  //   // await setLoading(true);
  //   const result = await axios
  //     .get(`${process.env.REACT_APP_API_URL}/visited`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data.data);
  //       let list = res.data.data.filter((e) => {
  //         return e.id === id;
  //       });
  //       console.log(list[0].visited_thumbnail_path);
  //       setPlaceImage(list[0].visited_thumbnail_path);
  //     });
  //   // await setLoading(false);
  //   return result;
  // }

  // useEffect(async () => {
  //   await setLoading(true);
  //   getVisitedPlace();
  //   await setLoading(false);
  //   console.log("되나요");
  // }, []);
  //!-------------

  function updateInfo(e) {
    console.log(e);
    let formData = new FormData();
    // console.log("저장버튼 들어간다.", e);
    //form-data 객체의 기존 키에 새 값을 추가하거나 키가 없으면 키를 추가한다.

    formData.append("image", placeImage); // 파일
    formData.append("memo", memo); //메모
    console.log(memo);
    console.log("img", placeImage);
    console.log("폼데이터", formData);
    console.log("폼데이터imag", formData.get("image"));
    // headers: { "content-type": "multipart/form-data" },
    axios
      .patch(`${process.env.REACT_APP_API_URL}/visited`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        params: { visitedId: id },
        withCredentials: true,
      })

      .then((res) => {
        console.log(res.data.data);
        setPlaceList(res.data.data);

        setIsUploaded(true);
      })
      .catch((err) => {
        setClickedBtn(true);
        setIsUploaded(false);
        console.log(err);
        if (!isUploaded && clickedBtn) {
          setErrorMessage({ ...errorMessage, ...{ image: "이미지업로드 실패" } });
        }
      });
  }
  function deleteInfo(e) {
    console.log(e);
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
  console.log(idx);
  // console.log(isUploaded && clickedBtn);
  useEffect(() => {
    //onClick으로 하니까 필요없으려나?? 우선 납둬봐
  }, [isUploaded]);
  console.log(placeImage);

  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsVisitedPlaceOpen(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <form id="form-id" onSubmit={updateInfoRequest}>
          <h3>이미지</h3>
          <VisitedUpload placeImage={placeImage} setPlaceImage={setPlaceImage} />
          <div className="alert-box">{errorMessage.image}</div>

          <div className="form-memo">
            <h3>메모</h3>

            <input
              id="memo"
              value={memo}
              onChange={(e) => {
                console.log(e.target.value);
                setMemo(e.target.value);
              }}
            />
          </div>
          <div className="alert-box">{errorMessage.memo}</div>
          {/* //! 로긴안했으면 모달창뜨게하기, 모달창 여러개 떴을때 우선순위 정하기 */}
          <div className="button-wraaper">
            <button type="submit" value="update" className="edit-position-button" onClick={updateInfo}>
              저장
            </button>
            <button type="submit" value="delete" className="delete-position-button" onClick={() => console.log(idx)}>
              {/* <button type="submit" value="delete" className="delete-position-button" onClick={deleteInfo}> */}
              삭제
            </button>
          </div>
        </form>
      </Styled.FormContainer>
    </>
  );
}

export default ModalVisited;
