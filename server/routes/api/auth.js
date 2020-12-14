require("dotenv").config();
const express = require('express');
const router = express.Router() ;
const jwt = require("jsonwebtoken");

const { generateAccessToken } = require("../../authFunction");
const {
    User,
    Role,
    Rank,
    Class,
    Platoon,
    RefreshTokens,
  } = require("../../models");

router.post("/token", async (req, res) => {
  const token = req.body.token;
  if (token == null) return res.sendStatus(401);
  const refreshToken = await RefreshTokens.findOne({
    where: { token: token },
  });
  if (!refreshToken) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user);
    res.json({ accessToken: accessToken });
  });
});

router.delete("/logout/:refToken", async (req, res) => {
  const refreshToken = await RefreshTokens.findOne({
    where: { token: req.params.refToken },
  });
  await refreshToken.destroy();
  res.sendStatus(204);
});

router.post("/login", async (req, res) => {
    console.log('akaka')
  const user = await User.findOne({
    where: {
      id: Number(req.body.username),
      password: Number(req.body.password),
    },
    attributes: ["id", "firstName", "lastName"],
  });
  console.log(user);
  if (!user) return res.sendStatus(404);
  // const user = { name: username };
  else {
    const accessToken = generateAccessToken(user.dataValues);
    const refreshToken = jwt.sign(
      user.dataValues,
      process.env.REFRESH_TOKEN_SECRET
    );
    await RefreshTokens.create({ token: refreshToken });
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
  }
});

module.exports = router;