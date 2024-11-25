const jwt = require("jsonwebtoken");
module.exports.loginController = (req, res) => {
  let { username } = req.body;
  const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("refresh_Token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    signed: true,
  });

  res.json({ accessToken });
};

module.exports.refreshTokenController = (req, res) => {
  const refreshToken = req.signedCookies.refresh_Token;
  if (!refreshToken) {
    return res
      .status(401)
      .json({ message: "Refresh token missing or invalid" });
  }
  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ message: "Invalid or expired refresh token" });
    }
    const { username } = user;
    const accessToken = jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "15m",
    });
    res.send(accessToken);
  });
};
