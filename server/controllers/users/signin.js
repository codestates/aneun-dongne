const { User } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  // TODO: 로그인 정보를 통해 사용자 인증 후 토큰 전달
  const { email, password } = req.body;
  User.findOne({
    where: {
      email,
      password,
    },
  })
    .then((data) => {
      if (!data) {
        res.status(404).send("invalid user");
      } else {
        delete data.dataValues.password;
        const accessToken = generateAccessToken(data.dataValues);

        res.cookie("jwt", accessToken);
        sendAccessToken(res, accessToken);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
