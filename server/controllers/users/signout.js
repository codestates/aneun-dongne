module.exports = (req, res) => {
  // TODO: 로그아웃 로직을 작성합니다.
  // console.log("로그아웃 작동");
  // console.log(res);
  console.log("쿠키", req.cookies);
  res.clearCookie("jwt");
  res.status(205).send("Logged out successfully");
};
