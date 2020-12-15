const express = require("express");
const router = express.Router();

const { Soldier, Platoon, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.user.userId } });
    let platoons;
    if (user.roleId === 7 || user.roleId === 6 || user.roleId === 5) {
      // סמל / מ"מ / מ"כ
      platoons = await Platoon.findAll({ where: { id: user.platoonId } });
      return res.json(platoons);
    }
    platoons = await Platoon.findAll({where: {plugaId: user.plugaId}});
    return res.json(platoons);
  } catch (e) {
    res.json({ error: e.message });
  }
});
router.get("/soldiers/:platoonId", async (req, res) => {
  try {
    const platoonSoldiers = await Soldier.findAll({
      where: { platoonId: req.params.platoonId },
    });
    res.json(platoonSoldiers);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const newPlatoon = await Platoon.create(req.body);
  res.json(newPlatoon);
});

router.patch("/:platoonId", async (req, res) => {
  const platoon = await Platoon.findByPk(req.params.platoonId);
  await platoon.update(req.body);
  res.json(platoon);
});

router.delete("/:platoonId", async (req, res) => {
  const platoon = await Platoon.findByPk(req.params.platoonId);
  await platoon.destroy();
  res.json({ deleted: true });
});

module.exports = router;
