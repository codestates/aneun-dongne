import React from "react";
import { Styled } from "./style";
import { warningDeleteUserModal } from "../../recoil/recoil";
import { useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
function WarningDeleteUserModal() {
  const [isWarningModal, setWarningModal] = useRecoilState(warningDeleteUserModal);
  const history = useHistory();
  const checkFunc = () => {
    setWarningModal(false);
    history.push("/");
  };
  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setWarningModal(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <h2>확인을 누르시면 회원 탈퇴가 진행됩니다. 계속하시겠습니까?</h2>
        <div className="button-wrapper">
          <button onClick={() => checkFunc()}>확인</button>
        </div>
      </Styled.FormContainer>
    </>
  );
}

export default WarningDeleteUserModal;
