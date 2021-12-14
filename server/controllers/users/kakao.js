const axios = require("axios");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { User } = require("../../models");
module.exports = async (req, res) => {
  console.log("뭐가왔나", req.body.authorizationCode);
  axios
    .post(
      //   `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code`,
      //   `https://kauth.kakao.com/oauth/authorize?client_id=6d44f5b3a39f09658ad4d72515a788d4&redirect_uri=https://localhost:3000&response_type=code`,
      `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.REST_API_KEY}&redirect_uri=${process.env.REDIRECT_URI}&code=${req.body.authorizationCode}`,
      { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
    )
    .then((response1) => {
      console.log(response1.data.access_token);
      axios
        .get(`https://kapi.kakao.com/v2/user/me?access_token=${response1.data.access_token}`, {
          headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" },
        })
        .then(async (response2) => {
          console.log("여긴왔을까요");
          console.log(response2.data);
          console.log(response2.data.kakao_account.profile.thumbnail_image_url);
          const [getUserInfo, created] = await User.findCreateFind({
            where: { id: response2.data.id },
            defaults: {
              id: response2.data.id,
              email: response2.data.kakao_account.email,
              password: null,
              user_image_path: response2.data.kakao_account.profile.thumbnail_image_url,
              nickname: response2.data.properties.nickname,
            },
          });
          const userInfo = getUserInfo.dataValues;
          delete userInfo.password;

          const accessToken = generateAccessToken(userInfo);
          console.log("토큰왔니?", accessToken);
          res.cookie("jwt", accessToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
            domain: ".aneun-dongne.com",
            path: "/",
            secure: true,
            sameSite: "None",
            // httpOnly: true,
            sameSite: "none",
            // // secure: true,
          });
          sendAccessToken(res, accessToken);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};
