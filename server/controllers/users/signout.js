module.exports = (req, res) => {
  res.clearCookie("jwt", {
    // domain: ".aneun-dongne.com", (배포)
    path: "/",
    secure: true,
    sameSite: "None",
  });
  console.log("여기왔나요");
  res.status(205).send("Logged out successfully");
  // res.redirect(`${process.env.MAIN_URL}`);
};
