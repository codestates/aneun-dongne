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
    const authorization = req.headers["authorization"];
    console.log(req.headers);
    // const authorization = req.headers["cookie"].split("=")[1].split(",")[0];
    console.log("isAuthorizaed함수에 찍히는 authorization : ", authorization);
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    // const token = authorization;
    console.log("토큰", token);
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },
};
