const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "not authorized" });
  } else {
    res.status(200).json({ data: { userInfo: accessTokenData }, message: "ok" });
  }
};
