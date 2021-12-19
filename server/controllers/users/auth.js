// 승이님 update를 안쓰고 createfid를 쓰는 이유를 아까 듣고 저도 이걸로 어떻게든 해보려고 했는데
// 결국에는 console.log('same info exists')로 가더라구요.
// 우선은 전에 만들었던 update 이용하는 patch 메소드를
// subAuth.js에 만들어서 쓰고 있어요. 이거 완성되면
// index/controller에  주석만 바꾸시면 될 것 같아요.
// 그리고 이메일은 고유값이라 안바꾸는걸로 바뀌었어요. 말씀을 못드렸네요
// 클라이언트에서 오는 프사,닉넴,비번,이메일중 이메일값은 바꾸지 않고 닉넴, 비번, 프사만 바뀌어요
// 클라이언트에서 확인하고 싶으시다면 /src/components/Profile/Profile.js에 있는 axios.patch를 보시면 돼요
//
const { isAuthorized, generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { User } = require("../../models");

const updateUserInfo = async (userId, newNickname, newPassword, imagePath, thumbnailPath) => {
  await User.update(
    {
      nickname: newNickname,
      password: newPassword,
      user_image_path: imagePath,
      user_thumbnail_path: thumbnailPath,
    },
    {
      where: {
        id: userId,
      },
    }
  );
};

const getUserInfo = async (userId) => {
  let result = {};
  await User.findOne({
    raw: true,
    where: {
      id: userId,
    },
  }).then((data) => {
    if (!data) {
      result = {};
    } else {
      delete data.password;
      result = data;
    }
  });
  return result;
};

module.exports = {
  get: async (req, res) => {
    const accessTokenData = isAuthorized(req);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      res.status(200).json({ data: { userInfo: accessTokenData }, message: "ok" });
    }
  },
  patch: async (req, res) => {
    const accessTokenData = isAuthorized(req);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      //토큰이 존재한다면
      const { id, email } = accessTokenData;
      const { password, checkPassword, nickname, newPassword } = req.body;

      let validUser = {};
      let new_Nickname = "";
      let new_Password = "";
      let check_Password = "";

      await User.findOne({
        raw: true,
        where: {
          email: email,
        },
      }).then((data) => {
        validUser = data;
      }); // 유저정보 조회

      if (nickname === "") {
        new_Nickname = validUser.nickname;
      } else {
        new_Nickname = nickname;
      }

      if (newPassword === "") {
        new_Password = validUser.password;
      } else {
        new_Password = newPassword;
      }

      if (checkPassword === "") {
        check_Password = validUser.password;
      } else {
        check_Password = checkPassword;
      }

      if (Object.keys(validUser).length === 0) {
        //유저 없으면 컷
        await res.status(400).json({ data: null, message: "no such user in the database" });
      } else {
        if (!validUser.password || validUser.provider === "kakao") {
          //카카오 로그인하면 비번 없음
          await res.status(403).send({ message: "Cannot edit kakao profile" });
        } else if (validUser.password !== password || check_Password !== new_Password) {
          //보통 password 실수한 경우
          await res.status(400).send({ message: "Type your password again" });
        } else {
          //validUser가 존재하며 카카오로그인도 아니고 비번도 일치할 때
          // 업로드시 삭제해줄 애, 지금은 운영자가 직접삭제해야함..
          let imagePath =
            "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png";
          let thumbnailPath =
            "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%8B%E1%85%B5%E1%84%86%E1%85%B5%E1%84%8C%E1%85%B5.png";

          if (!req.file) {
            // 변경하려는 프사가 없을떄
            //기존프사가 있다면 기존프사 사용
            if (!!validUser.user_image_path && !!validUser.user_thumbnail_path) {
              imagePath = validUser.user_image_path;
              thumbnailPath = validUser.user_thumbnail_path;
            }
            //기존프사도 없다면 기본프사 그대로
          } else {
            //변경하고싶은 프사 있을때
            //s3 서버에 저장된 이미지의 url 경로 획득

            // const imagesInfo = req.file.transforms;
            thumbnailPath = req.file.transforms[0].location;
            imagePath = req.file.transforms[1].location;
            // imagesInfo.forEach((imageInfo) => {
            //   if (imageInfo.id === "thumbnail") thumbnailPath = imageInfo.location;
            //   else if (imageInfo.id === "origin") imagePath = imageInfo.location;
            // });
          }

          await updateUserInfo(id, new_Nickname, new_Password, imagePath, thumbnailPath).then(async () => {
            const userInfo = await getUserInfo(id);
            const accessToken = generateAccessToken(userInfo);
            // await res.status(200).json({ data: userInfo, message: "ok" });
            await res.cookie("jwt", accessToken, {
              maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
              domain: ".aneun-dongne.com",
              path: "/",
              secure: true,
              sameSite: "None",
            });
            // sendAccessToken(res, accessToken);
            res.json({
              data: {
                accessToken,
                email,
                nickname: new_Nickname,
                user_image_path: imagePath,
                user_thumbnail_path: thumbnailPath,
              },
              message: "okkk",
            });
          });
        }
      }
    }
  },
  delete: async (req, res) => {
    //회원탈퇴

    const accessTokenData = isAuthorized(req);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      const { id } = accessTokenData;
      await User.destroy({
        where: { id: id },
      });
      await res.status(200).json({ message: "bye" });
    }
  },
};
