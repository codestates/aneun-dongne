const { User } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { nickname, email, password } = req.body;
  if (!nickname || !email || !password) {
    return res.status(422).send("insufficient parameters supplied");
  }

  User.findOrCreate({
    where: {
      nickname,
      email,
      password,
    },
  })
    .then(([save, created]) => {
      if (!created) {
        return res.status(409).send("email exists");
      } else {
        delete save.dataValues.password;
        const accessToken = generateAccessToken(save.dataValues);
        res.cookie("jwt", accessToken);
        res.status(201).json({ message: "ok" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
