require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const { generateAccessToken , authenticateToken} = require("../../authFunction");
const {
  User,
  Role,
  Rank,
  Class,
  Platoon,
  RefreshTokens,
} = require("../../models");

router.get("/validate-token",authenticateToken , (req,res)=>{
  res.json({user: req.user});
})
router.post("/token", async (req, res) => {
  const token = req.body.token;
  if (token == null) return res.status(401);
  const refreshToken = await RefreshTokens.findOne({
    where: { token: token },
  });
  if (!refreshToken)
    return res.status(401).json({ message: "Invalid Refresh Token" });
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ message: "Invalid Refresh Token" });
    delete user.iat ;
    delete user.exp ;
    const accessToken = generateAccessToken(user);
    res.cookie("accessToken", accessToken);
    res.json({ message: "Token Updated" });
  });
});

router.post("/logout", async (req, res) => {
  try {
    const refreshToken = await RefreshTokens.findOne({
      where: { token: req.body.token },
    });
    await refreshToken.destroy();
    res.status(204).json({ message: "User Logged Out" });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/login", async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  console.log('hash',hashPassword);
  const user = await User.findOne({
    where: {
      id: Number(req.body.username),
      password: hashPassword,
    },
    attributes: ["id", "firstName", "lastName"],
  });
  const info = {
      userId: user.dataValues.id
  }
  if (!user) return res.sendStatus(404);
  // const user = { name: username };
    const accessToken = generateAccessToken(info);
    const refreshToken = jwt.sign(
        info,
      process.env.REFRESH_TOKEN_SECRET
    );
    await RefreshTokens.create({ token: refreshToken });
    res.cookie("id", info.userId);
    res.cookie("accessToken", accessToken);
    res.cookie("refreshToken", refreshToken);
    res.json(user.dataValues);
});

module.exports = router;
