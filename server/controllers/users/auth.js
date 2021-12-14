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

const updateUserInfo = async (newNickname, newEmail, newPassword, imagePath, thumbnailPath) => {
  let isUserInfoCreated = false;
  //findOrCreate 메소드로 새 데이터를 생성하기 때문에 기존 데이터를 삭제하는 로직이 추가되어야 함
  await User.findOrCreate({
    defaults: {
      password: newPassword,
      user_image_path: imagePath,
      user_thumbnail_path: thumbnailPath,
    },
    where: {
      nickname: newNickname,
      email: newEmail,
    },
  }).then(([save, created]) => {
    if (!created) {
      console.log("same info exists");
    } else {
      isUserInfoCreated = true;
      delete save.dataValues.password;
      const accessToken = generateAccessToken(save.dataValues);
      res.cookie("jwt", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
        domain: ".aneun-dongne.com",
        path: "/",
        secure: true,
        sameSite: "None",
      });
      res.status(200).json({ data: save.dataValues, message: "ok" });
    }
  });
  return isUserInfoCreated;
};

const getUserInfo = async (userId) => {
  let result = {};
  await User.findOne({
    raw: true,
    where: {
      id: userId,
    },
  }).then((data) => {
    // console.log("하이하이하이", data);
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
    console.log("AUTH 겟 토큰", req.headers);
    const accessTokenData = isAuthorized(req);
    // console.log("토큰도착", accessTokenData);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      res.status(200).json({ data: { userInfo: accessTokenData }, message: "ok" });
    }
  },
  patch: async (req, res) => {
    // console.log("리코그바디, auth.put", req.file);
    // 확인용 => password,email
    // 변경용 => nickname,password,newPassword, image
    // if (req.file !== undefined) {
    //   //링크를 DB에 넣기 위한 값
    //   image = req.file.location;
    // } else {
    //   //! 없으면 기본 프사들어가는데 이걸 회원가입에서 그냥 기본값으로 해야할듯
    //   //! image =
    //   //! "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
    // }

    //요청바디에서 유저정보 획득

    // console.log(image, nickname, email, password, newPassword);

    // console.log(req.cookies);
    console.log("리코그바디, auth.put", req.file);
    console.log("AUTH 겟 토큰", req.headers);

    const accessTokenData = isAuthorized(req);
    console.log("토큰도착", accessTokenData);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      const { id, email, password } = accessTokenData;
      const { checkPassword, newNickname, newEmail, newPassword } = req.body;

      if (password !== checkPassword) {
        res.status(400).send({ message: "type your password again" });
      } else {
        // 확인용 => password,email
        // 변경용 => nickname,password,newPassword, image
        console.log(req.cookies);

        let validUser = {};
        await User.findOne({
          raw: true,
          where: {
            id: id,
          },
        }).then((data) => {
          validUser = data;
        });
        //이메일이나 비번이 일치하는 자료가 DB에 없다면 컷
        if (Object.keys(validUser).length === 0) {
          return res.status(405).json({ data: null, message: "no such user in the database" });
        } else {
          // console.log(req.file.key) // 업로드시 삭제해줄 애, 지금은 운영자가 직접삭제해야함..
          // 변경하려는 프사가 없을떄
          if (!req.file) {
            //기존프사가 있다면 기존프사 사용
            if (validUser.user_image_path !== null && validUser.user_thumbnail_path !== null) {
              imagePath = validUser.user_image_path;
              thumbnailPath = validUser.user_thumbnail_path;
            }
            //기존프사도 없다면,
            else {
              //기본 프사 사용
              imagePath =
                "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
              thumbnailPath =
                "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
            }
          } else {
            //프사 있을때
            // image = req.file.location; //링크를 DB에 넣기위한 값
            //s3 서버에 저장된 이미지의 url 경로 획득
            const imagesInfo = req.file.transforms;
            let imagePath = "";
            let thumbnailPath = "";
            imagesInfo.forEach((imageInfo) => {
              if (imageInfo.id === "thumbnail") thumbnailPath = imageInfo.location;
              else if (imageInfo.id === "origin") imagePath = imageInfo.location;
            });
            console.log("바꿀이미지", imagePath);
            if (imagePath === "" || thumbnailPath === "") {
              imagePath =
                "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
              thumbnailPath =
                "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
              await res.status(400).json({ message: "Image upload failed" });
            }
          }

          let isUserInfoCreated = await updateUserInfo(newNickname, newEmail, newPassword, imagePath, thumbnailPath);

          if (!isUserInfoCreated) {
            res.status(400).json({ message: "Same info exists" });
          }
        }
      }
    }
  },
};

// const accessTokenData = isAuthorized(req);
// try {
//   if (!accessTokenData) {
//     await res.status(400).json({ data: null, message: "invalid access token" });
//   } else {
//     const { id } = accessTokenData;
//     const { area, sigg, mapx, mapy, memo } = req.body;
//     const { visitedId } = req.query;

//     if (!req.file) {
//       console.log("이미지 없음");
//       await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, null, null);
//       await res.status(200).json({ data: await getMyVisiteds(id) });
//     }

//     //s3 서버에 저장된 이미지의 url 경로 획득
//     const imagesInfo = req.file.transforms;
//     let imagePath = "";
//     let thumbnailPath = "";

//     imagesInfo.forEach((imageInfo) => {
//       if (imageInfo.id === "thumbnail") thumbnailPath = imageInfo.location;
//       else if (imageInfo.id === "origin") imagePath = imageInfo.location;
//     });

//     if (imagePath === "" || thumbnailPath === "") {
//       await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, null, null);
//       await res.status(200).json({ data: await getMyVisiteds(id), message: "Image upload failed" });
//     } else {
//       await updateMyVisited(visitedId, id, area, sigg, mapx, mapy, memo, imagePath, thumbnailPath);
//       await res.status(200).json({ data: await getMyVisiteds(id) });
//     }
//   }
// } catch (err) {
//   res.status(500).json({ message: "server err" });
// }
