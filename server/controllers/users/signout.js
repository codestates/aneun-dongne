module.exports = (req, res) => {
  res.clearCookie("jwt", {
    domain: ".aneun-dongne.com",
    path: "/",
    secure: true,
    sameSite: "None",
  });
  res.status(205).send("Logged out successfully");
  // res.redirect(`${process.env.MAIN_URL}`);
};
