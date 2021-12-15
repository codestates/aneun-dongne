const { User } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { nickname, email, password, user_image_path, user_thumbnail_path } = req.body;
  if (!nickname || !email || !password) {
    return res.status(422).send("insufficient parameters supplied");
  }

  User.findOrCreate({
    where: {
      nickname: nickname,
      email: email,
    },
    defaults: {
      password: password,
      user_image_path: user_image_path,
      user_thumbnail_path: user_thumbnail_path,
    },
  })
    .then(([save, created]) => {
      if (!created) {
        return res.status(409).send("email exists");
      } else {
        delete save.dataValues.password;
        const accessToken = generateAccessToken(save.dataValues);
        res.cookie("jwt", accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 7, // 7일간 유지
          domain: ".aneun-dongne.com",
          path: "/",
          secure: true,
          sameSite: "None",
        });
        res.status(201).json({ message: "ok" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
