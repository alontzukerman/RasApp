const express = require("express");
const router = express.Router();

const { Soldier, Platoon, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const { dataValues: user } = await User.findOne({
      where: { id: req.user.userId },
    });
    let platoons;
    switch (user.platoonId) {
      case null:
        platoons = await Platoon.findAll({ where: { plugaId: user.plugaId } });
        break;
      default:
        platoons = await Platoon.findAll({
          where: { id: user.platoonId },
        });
    }

    res.json(platoons);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});
router.get("/soldiers/:platoonId", async (req, res) => {
  try {
    const platoonSoldiers = await Soldier.findAll({
      where: { platoonId: req.params.platoonId },
    });
    res.json(platoonSoldiers);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPlatoon = await Platoon.create(req.body);
    res.json(newPlatoon);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:platoonId", async (req, res) => {
  try {
    const platoon = await Platoon.findByPk(req.params.platoonId);
    await platoon.update(req.body);
    res.json(platoon);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:platoonId", async (req, res) => {
  try {
    const platoon = await Platoon.findByPk(req.params.platoonId);
    await platoon.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
