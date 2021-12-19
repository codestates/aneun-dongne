module.exports = (req, res) => {
  // res.clearCookie("jwt", {
  res.clearCookie("kakao-jwt", {
    domain: ".aneun-dongne.com",
    path: "/",
    secure: true,
    sameSite: "None",
  });
  // res.status(205).send("Logged out successfully");
  res.redirect(`${process.env.URL_AFTER_LOGOUT}`); //로그아웃하고 갈 페이지
};
