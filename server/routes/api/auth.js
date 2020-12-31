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
  Pluga,
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
    if (refreshToken) {
      await refreshToken.destroy();
      return res.status(204).json({ message: "User Logged Out" });
    }
    throw new Error();
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/login", async (req, res) => {
  // const hashPassword = bcrypt.hashSync(req.body.password, 10);
  // console.log('hash',hashPassword);
  try {
    const { dataValues: user } = await User.findOne({
      where: {
        id: Number(req.body.username),
        password: Number(req.body.password),
      },
      attributes: ["id", "firstName", "lastName", "roleId"],
    });
    if (!user) return res.status(404).json({ message: "No User Found" });
    const info = {
      userId: user.id,
      roleId: user.roleId,
      firstName: user.firstName,
      lastName: user.lastName,
    };
    // const user = { name: username };
    const accessToken = generateAccessToken(info);
    const refreshToken = jwt.sign(info, process.env.REFRESH_TOKEN_SECRET);
    await RefreshTokens.create({ token: refreshToken });
    res.cookie("id", info.userId);
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/valid-pluga/:plugaId", async (req, res) => {
  try {
    const pluga = await Pluga.findOne({ where: { id: req.params.plugaId } });
    console.log(pluga);
    if (pluga) return res.status(200).json({ valid: true });
    return res.json({ valid: false });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/valid-id/:userId", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId } });
    console.log(user);
    if (!user) return res.status(200).json({ valid: true });
    return res.json({ valid: false });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
module.exports = router;
