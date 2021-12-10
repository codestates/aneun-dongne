require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "6000s" });
  },
  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken }, message: "ok" });
  },
  isAuthorized: (req) => {
    console.log("이거봐라 쿠키", req.cookies);
    // const authorization = req.headers["authorization"].split(" ")[1];
    const authorization = req.cookies.jwt;
    console.log("토큰함수 토큰", authorization);
    if (!authorization) {
      return null;
    }

    // const token = authorization.split(" ")[1];
    // console.log("11111");
    // console.log("alksdjfl", authorization);
    // console.log("22222");
    try {
      console.log("해독된 토큰", verify(authorization, process.env.ACCESS_SECRET));
      return verify(authorization, process.env.ACCESS_SECRET);
    } catch (err) {
      console.log("에러", err);
      return null;
    }
  },
};
