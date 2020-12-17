const express = require("express");
const router = express.Router();

const { Soldier, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user.userId } });
    let allSoldiers;
    switch (user.roleId) {
      case 7: // מ"כ
        allSoldiers = await Soldier.findAll({
          where: { classId: user.classId },
        });
      case 6 || 5: // סמל מ"מ
        allSoldiers = await Soldier.findAll({
          where: { platoonId: user.platoonId },
        });
      default:
        // תפקיד פלוגתי
        allSoldiers = await Soldier.findAll({});
    }

    res.json(allSoldiers);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const specificSoldier = await Soldier.findByPk(req.params.id);
    res.json(specificSoldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newSoldier = await Soldier.create(req.body);
    res.json(newSoldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:soldierId", async (req, res) => {
  try {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.update(req.body);
    res.json(soldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:soldierId", async (req, res) => {
  try {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
