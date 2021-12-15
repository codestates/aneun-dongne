const axios = require("axios");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { User } = require("../../models");
module.exports = async (req, res) => {
  console.log("뭐가왔나 ", req.query.code); // 클라이언트에서 로그인하고 인가 코드 받아옴
  axios
    .get(
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.CALLBACK_URL}&client_secret=${process.env.CLIENT_SECRET}&code=${req.query.code}`,
      { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
    ) //토큰 요청하는 url
    .then((tokendata) => {
      console.log(tokendata.data);
      axios
        .get(`https://kapi.kakao.com/v2/user/me?access_token=${tokendata.data.access_token}`, {
          headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" },
        }) //토큰을 주면 유저정보를 주는 url
        .then((response) => {
          console.log("여긴왔을까요", response.data);
          //이제 이 유저정보들을 db에 넣고 쿠키를 전달해서 로그인을 완료한다
          User.findOrCreate({
            where: {
              email: response.data.kakao_account.email,
            },
            defaults: {
              nickname: response.data.kakao_account.profile.nickname,
              user_image_path: response.data.kakao_account.profile.profile_image_url,
              user_thumbnail_path: response.data.kakao_account.profile.thumbnail_image_url,
              kakao_id: response.data.id,
              provider: "kakao",
            }, //이메일을 기준으로 유저가 db에 없으면 새로 생성한다, 이미지는 기존 카톡 프로필이미지로
          }).then(([save, created]) => {
            if (!created) {
              User.update(
                {
                  nickname: response.data.kakao_account.profile.nickname,
                  user_image_path: response.data.kakao_account.profile.profile_image_url,
                  user_thumbnail_path: response.data.kakao_account.profile.thumbnail_image_url,
                },
                {
                  where: {
                    email: response.data.kakao_account.email,
                  },
                }
              ).then(() => {
                User.findOne({
                  where: {
                    email: response.data.kakao_account.email,
                  },
                }).then((data) => {
                  console.log(data);
                  delete data.dataValues.password;
                  const accessToken = generateAccessToken(data.dataValues);
                  res.cookie("jwt", accessToken, {
                    // maxAge: 1000 * 60 * 60 * 24 * 7,
                    // domain: ".aneun-dongne.com", (배포)
                    path: "/",
                    secure: true,
                    sameSite: "None",
                  }); //토큰 담은 쿠키 전달
                  res.redirect(`${process.env.URL_AFTER_LOGIN}`); //로그인 후 이동할 페이지 : MAIN_URL
                  // sendAccessToken(res, accessToken);
                  // 로그인 인증 완료});
                });
              });
            } // 카톡 프사, 닉네임 등등이 바뀌면 여기도 자동으로 바뀌어야 해서
            else {
              delete save.dataValues.password;
              const accessToken = generateAccessToken(save.dataValues);
              res.cookie("jwt", accessToken, {
                // maxAge: 1000 * 60 * 60 * 24 * 7,
                // domain: ".aneun-dongne.com", (배포)
                path: "/",
                secure: true,
                sameSite: "None",
              }); //토큰 담은 쿠키 전달
              res.redirect(`${process.env.URL_AFTER_LOGIN}`); //로그인 후 이동할 페이지 : MAIN_URL
              // sendAccessToken(res, accessToken);
              // 로그인 인증 완료
            }
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "server err" });
    });
};

//     console.log(response2.data);
//     console.log(response2.data.kakao_account.profile.thumbnail_image_url);
//     const [getUserInfo, created] = await User.findCreateFind({
//       where: { id: response2.data.id },
//       defaults: {
//         id: response2.data.id,
//         email: response2.data.kakao_account.email,
//         password: null,
//         user_image_path: response2.data.kakao_account.profile.thumbnail_image_url,
//         nickname: response2.data.properties.nickname,
//       },
//     });
//     const userInfo = getUserInfo.dataValues;
//     delete userInfo.password;

//     const accessToken = generateAccessToken(userInfo);
//     console.log("토큰왔니?", accessToken);
//     res.cookie(
//       "jwt",
//       accessToken
//       //   {
//       //     maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
//       //     domain: ".aneun-dongne.com",
//       //     path: "/",

//       //     secure: true,
//       //     sameSite: "None",
//       //   }
//     );
//     sendAccessToken(res, accessToken);
// });