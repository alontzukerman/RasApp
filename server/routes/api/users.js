require("dotenv").config();
const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const {
  User,
  Role,
  Rank,
  Class,
  Platoon,
  RefreshTokens,
} = require("../../models");

// router.get('/', async (req,res)=> {
//     const allUsers = await User.findAll();
//     res.json(allUsers);
// })

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: [Role],
    });
    res.json(allUsers);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    // const user = await User.findByPk( req.params.userId);
    const user = await User.findOne({
      where: { id: req.params.userId },
      attributes: [
        "id",
        "firstName",
        "lastName",
        "address",
        "phoneNumber",
        "email",
      ],
      include: [Role, Rank, Class, Platoon],
    });
    res.json(user);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

router.patch("/:userId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  await user.update(req.body);
  res.json(user);
});

router.delete("/:userId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  await user.destroy();
  res.json({ deleted: true });
});

// JWT

const { generateAccessToken } = require("../../authFunction");

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
