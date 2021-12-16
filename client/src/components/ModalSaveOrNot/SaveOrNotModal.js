import React from "react";
import { Styled } from "./style";
import { saveOrNotModal } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
function SaveOrNotModal() {
  const [isSaveOrNotModal, setIsSaveOrNotModal] = useRecoilState(saveOrNotModal);
  const history = useHistory();
  const yesFunc = () => {
    setIsSaveOrNotModal(false);
    history.push("/mypage/visited");
  };
  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsSaveOrNotModal(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <h2>마이페이지로 이동하시겠습니까??</h2>
        <div className="button-wrapper">
          {/* <Link to="/mypage/visited"> */}
          <button onClick={() => yesFunc()}>예</button>
          {/* </Link> */}

          <button onClick={() => setIsSaveOrNotModal(false)}>더 구경하기</button>
        </div>
      </Styled.FormContainer>
    </>
  );
}

export default SaveOrNotModal;
