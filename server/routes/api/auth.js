require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {
  generateAccessToken,
  authenticateToken,
} = require("../../authFunction");
const {
  User,
  Role,
  Rank,
  Class,
  Platoon,
  RefreshTokens,
} = require("../../models");

router.get("/validate-token", authenticateToken, (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.post("/token", async (req, res) => {
  try {
    const token = req.body.token;
    if (token == null) return res.status(401);
    const refreshToken = await RefreshTokens.findOne({
      where: { token: token },
    });
    if (!refreshToken)
      return res.status(401).json({ message: "Invalid Refresh Token" });
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(401).json({ message: "Invalid Refresh Token" });
      delete user.iat;
      delete user.exp;
      const accessToken = generateAccessToken(user);
      res.cookie("accessToken", accessToken);
      res.json({ message: "Token Updated" });
    });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    const refreshToken = await RefreshTokens.findOne({
      where: { token: req.body.token },
    });
    await refreshToken.destroy();
    res.status(204).json({ message: "User Logged Out" });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/login", async (req, res) => {
  // const hashPassword = bcrypt.hashSync(req.body.password, 10);
  // console.log('hash',hashPassword);
  try {
    const user = await User.findOne({
      where: {
        id: Number(req.body.username),
        password: Number(req.body.password),
      },
      attributes: ["id", "firstName", "lastName"],
    });
    if (!user) return res.status(404).json({ message: "No User Found" });
    const info = {
      userId: user.dataValues.id,
    };
    // const user = { name: username };
    const accessToken = generateAccessToken(info);
    const refreshToken = jwt.sign(info, process.env.REFRESH_TOKEN_SECRET);
    await RefreshTokens.create({ token: refreshToken });
    res.cookie("id", info.userId);
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);
    res.json(user.dataValues);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
