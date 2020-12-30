const express = require("express");
const router = express.Router();
const { Pluga, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const { dataValues: user } = await User.findOne({
      where: { id: req.user.userId },
    });
    const pluga = await Pluga.findOne({
      where: { id: user.plugaId },
    });
    res.json(pluga);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/:plugaId", async (req, res) => {
  try {
    const pluga = await Pluga.findOne({ where: { id: req.params.plugaId } });
    res.status(200);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
module.exports = router;
