require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "6000s" });
  },
  sendAccessToken: (res, accessToken) => {
    res.status(201).json({ data: { accessToken }, message: "ok" });
  },
  isAuthorized: (req) => {
    const authorization = req.headers["cookie"];
    if (!authorization) {
      return null;
    }

    let token = authorization;

    if (authorization.split(" ")[1]) {
      token = authorization.split(" ")[0].slice(4, authorization.split(" ")[0].length - 1);
    } else {
      token = authorization.slice(4);
    }

    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
