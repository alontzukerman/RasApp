const express = require("express");
const router = express.Router();

const { Missing, MissingPerSoldier } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const missings = await Missing.findAll({});
    res.json(missings);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/daily/:currentDate", async (req, res) => {
  try {
    const currentDate = req.params.currentDate;
    const missings = await MissingPerSoldier.findAll({
      where: { date: currentDate },
    });
    res.json(missings);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/daily", async (req, res) => {
  try {
    const nohehut = req.body;
    const missings = await MissingPerSoldier.bulkCreate(nohehut);
    res.json(missings);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.patch("/daily", async (req, res) => {
  try {
    const missing = await MissingPerSoldier.findOne({
      where: { soldierId: req.body.soldierId, date: req.body.date },
    });
    await missing.update(req.body);
    res.json(missing);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
