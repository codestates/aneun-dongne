import React from "react";
import { Styled } from "./style";
import { warningDeleteUserModal, loginState, token, kToken } from "../../recoil/recoil";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import axios from "axios";
function WarningDeleteUserModal() {
  const [isWarningModal, setWarningModal] = useRecoilState(warningDeleteUserModal);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [accessToken, setAccessToken] = useRecoilState(token);
  const kakaoToken = useRecoilValue(kToken);
  const history = useHistory();

  //회원탈퇴
  const deleteHandler = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setWarningModal(false);
        setIsLogin(false);
        setTimeout(() => {
          history.push("/");
        }, 500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setWarningModal(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <h2>확인을 누르시면 회원 탈퇴가 진행됩니다. 계속하시겠습니까?</h2>
        <div className="button-wrapper">
          <button onClick={() => deleteHandler()}>확인</button>
        </div>
      </Styled.FormContainer>
    </>
  );
}

export default WarningDeleteUserModal;
