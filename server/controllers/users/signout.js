module.exports = (req, res) => {
  res.clearCookie("jwt");
  res.status(205).send("Logged out successfully");
};
