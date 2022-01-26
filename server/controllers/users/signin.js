const { User } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
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
        res.cookie("jwt", accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          domain: ".aneun-dongne.com",
          // httpOnly: true,
          path: "/",
          secure: true,
          sameSite: "None",
        });
        sendAccessToken(res, accessToken);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
