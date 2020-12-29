require("dotenv").config();
const express = require("express");
const router = express.Router();

const {
  User,
  Role,
  Rank,
  Class,
  Platoon,
  RefreshTokens,
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: [Role],
    });
    res.json(allUsers);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const allUsers = await User.findOne(req.params.userId,{
      include: [Role],
    });
    res.json(allUsers);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/profile", async (req, res) => {
  try {
    console.log("req", req.user);
    // const user = await User.findByPk( req.params.userId);
    const user = await User.findOne({
      where: { id: req.user.userId },
      attributes: [
        "id",
        "firstName",
        "lastName",
        "address",
        "phoneNumber",
        "email",
        "roleId"
      ],
      include: [Role, Rank, Class, Platoon],
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:userId", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.update(req.body);
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
