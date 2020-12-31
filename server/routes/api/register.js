const express = require("express");
const router = express.Router();
const { Platoon, Class, Role, Rank , User} = require("../../models");

router.get("/platoons/:plugaId", async (req, res) => {
  try {
    const platoons = await Platoon.findAll({
      where: {
        plugaId: req.params.plugaId,
      },
    });
    res.json(platoons);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/classes/:plugaId", async (req, res) => {
  try {
    const classes = await Class.findAll({where: {
        plugaId: req.params.plugaId
    }});
    res.json(classes);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/roles", async (req, res) => {
  try {
    const roles = await Role.findAll({});
    res.json(roles);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/ranks", async (req, res) => {
  try {
    const ranks = await Rank.findAll({});
    res.json(ranks);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/user", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
