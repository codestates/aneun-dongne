import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import dotenv from "dotenv";
import { userInfo, loginState, loginModal } from "../../recoil/recoil";
import hamtori from "../../img/hamtori.png";
import ProfileUpload from "../../components/UploadImage/ProfileUpload";
import Menubar from "./Menubar";

const UserInfopage = styled.div`
  top: 0;
  margin-left: 300px;
  /* width: 100%; */
  /* height: 100%; */
  /* border: 1px gray solid; */

  /* background-color: yellowgreen; */
  display: flex;
  justify-content: center;
`;
const View = styled.div`
  margin-top: 40px;

  width: 60%;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;

  /* background: yellow; */

  .btn-exit {
    margin: 20px auto;
    width: 80px;
    border: 1px gray solid;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }
  .btn-exit:hover {
    transform: scale(1.1);
  }
`;

// export const ProfileImg = styled.img`
//   margin: 30px;
//   width: 170px;
//   height: 170px;
//   border-radius: 100%;
//   cursor: pointer;
// `;
const ContentBox = styled.div`
  margin-top: 40px;
  margin-left: 10%;
  width: 100%;
  /* display: flex; */
  /* flex-direction: column; */

  > form {
    display: flex;
    flex-direction: column;
    /* background: red; */
  }
  > button {
    margin: auto;
    width: 80px;
    border: none;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }
  > form .userinfo-each-label {
    /* background: skyblue; */
    margin-top: 30px;
    position: relative;
  }
  > form .userinfo-each-label span {
    float: left;
  }
  > form .userinfo-each-label input {
    /* background: yellow; */

    font-size: 1.2rem;
    width: 80%;
    border-left: none;
    border-right: none;
    border-top: none;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    /* position: absolute; */
    /* float: right; */
  }
  > form .userinfo-each-label .btn-edit {
    position: absolute;
    right: 1%;
    width: 80px;
    border: 1px gray solid;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:active {
    transform: scale(1.1);
  }
`;

const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px auto;
`;

//회원수정, 로그아웃시켜줘야힘.

function UserInfoPage({ imgUrl, setImgUrl }) {
  const [info, setInfo] = useRecoilState(userInfo);
  //   const [imgUrl, setImgUrl] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const [inputCheckPassword, setInputCheckPassword] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);

  // const [PasswordErr, setPasswordErr] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [passwordCheckError, setPasswordCheckError] = useState("");

  // console.log(imgUrl);

  const history = useHistory();
  // console.log(info);
  useEffect(() => {
    //! 우선 적음 나중에 지우게되도
    axios
      .get("https://localhost:80/user/info", { withCredentials: true })
      .then((res) => {
        console.log(res.data.data.userInfo);
        console.log(typeof res.data.data.userInfo.user_image_path);
        setInfo(res.data.data.userInfo);
        if (res.data.data.userInfo.user_image_path) {
          console.log(res.data.data.userInfo.user_image_path);
          setImgUrl(res.data.data.userInfo.user_image_path);
          setNickname(res.data.data.userInfo.nickname);
        }

        // const { , inputUsername, inputEmail } = res.data.data.userInfo;
        // setInputEmail(inputEmail);
        // setImgUrl(imgUrl);
        // setInputUsername(inputUsername);

        // props.accessToken(res.data.Info);
      })
      .then();
  }, []);

  const editInfo = (e) => {
    e.preventDefault();
    // 토큰만료시 컷
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
    let a = null;
    let formData = new FormData();
    // if(!imgUrl){
    //   formData.append("image", imgUrl);
    // }
    if (imgUrl) {
      formData.append("image", imgUrl);
      console.log(imgUrl);
    }
    formData.append("nickname", inputUsername);
    formData.append("email", info.email);
    formData.append("password", inputPassword);
    formData.append("checkPassword", inputCheckPassword);
    formData.append("newPassword", inputNewPassword);
    // formData.append("")

    axios
      .put(`https://localhost:80/user/info`, formData, { withCredentials: true })
      .then((res) => {
        if (res.status === 400) {
          alert("비번과 비번확인 불일치"); //지금만 alert으로 함
          return;
        }

        console.log(res.data.data.nickname);

        return res.data.data.nickname;
      })
      .then((name) => {
        setNickname(name);
        console.log(name);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    console.log(nickname);
  }, [nickname]);

  // console.log(inputEmail, imgUrl, inputUsername);
  //정보를 바로 받아온다면...?

  //app.js에서 login인인 상태에서 mypage로 들어온다.
  //아닐 경우에는 로그인 모달창이 뜨게 함.

  //로그인 상태를 recoil에서 true로 가져온다.

  // const accessTokenRequest = () => {

  //파일변경
  // const handleChangeFile = (e) => {
  //   let reader = new FileReader();
  //   reader.onloadend = () => {
  //     const url = reader.result;
  //     if (url) {
  //       setImgUrl(url.toString());
  //     }
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  //닉네임변경
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };
  //이메일변경불가
  // const handleInputEmail = (e) => {
  //   setInputEmail(e.target.value);
  // };

  //비밀번호변경//유효성검사추가해야함
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNewPassword = (e) => {
    setInputNewPassword(e.target.value);
  };
  const handleInputCheckPassword = (e) => {
    setInputCheckPassword(e.target.value);
  };

  //유효성검사
  const validePassword = (InputPassword, InputNewPassword) => {
    if (InputPassword !== InputNewPassword) {
      alert("동일한 비밀번호를 입력하세요!");
      return false;
    }
  };

  //빈칸이 있는지 확인
  const handleEdit = () => {
    if (imgUrl === "" || inputUsername === "" || inputEmail === "" || inputPassword === "") {
      alert("빈칸이 있어요!");
      return;
    }
  };

  // useEffect(() => {
  //   axios.post("http://localhost:3000/mypage").then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  const saveBtnHandler = () => {
    if (!validePassword || !handleEdit) {
      // const token = JSON.parse(localStorage.getItem("token"));
      axios
        .put(
          "https://localhost:80/mypage",
          {
            // email: inputUsername,
            nickname: userInfo.nikename,
            users_image_path: userInfo.users_image_path,
            password: userInfo.password,
            new_password: userInfo.new_password, //새로운 비밀번호 추가됨.
          },
          {
            "Content-Type": "application/json",
            withCredentials: true,
            // Authorization: `token ${token}`,
          }
        )
        .then((res) => {
          setConfirmMessage("변경된 내용이 저장되었습니다!");
          // localStorage.clear();
          history.push("/mypage");
        })
        .catch((err) => console.log(err));
    }
  };

  //회원탈퇴
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:80/user/mypage`, {
        headers: {
          // authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("탈퇴가 될지...", res);
        // isLogout();
        setIsDelete(true);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  console.log(nickname);
  return (
    <div>
      <UserInfopage>
        <View>
          <ImgDiv>
            <ProfileUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
          </ImgDiv>

          <ContentBox>
            <form onSubmit={editInfo}>
              <div className="userinfo-each-label">
                <input type="text" name="nickname" placeholder="닉네임" onChange={handleInputUsername} />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  // defaultValue=""
                  placeholder="현재 비밀번호"
                  value={inputPassword}
                  onChange={(e) => handleInputPassword(e)}
                />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호 확인"
                  // defaultValue=""
                  value={inputCheckPassword}
                  onChange={(e) => handleInputCheckPassword(e)}
                />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  // defaultValue=""
                  placeholder="수정 비밀번호"
                  value={inputNewPassword}
                  onChange={(e) => handleInputNewPassword(e)}
                />
                <button className="btn-edit" type="submit">
                  저장
                </button>
              </div>
            </form>
          </ContentBox>
          <button className="btn-exit" onClick={() => deleteHandler()}>
            회원탈퇴
          </button>
        </View>
      </UserInfopage>
    </div>
  );
}

export default UserInfoPage;
