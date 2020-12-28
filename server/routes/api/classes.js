const express = require("express");
const router = express.Router();

const { Soldier, User, Class } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const { dataValues: user } = await User.findOne({
      where: { id: req.user.userId },
    });
    let classes;
    console.log(user);
    switch (user.platoonId) {
      case null:
        classes = await Class.findAll({
          where: { plugaId: user.plugaId },
        });
        break;
      default:
        classes = await Class.findAll({
          where: { platoonId: user.platoonId },
        });
    }
    res.json(classes);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/:classId", async (req, res) => {
  try {
    const specificClass = await Class.findByPk(req.params.classId);
    res.json(specificClass);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/soldier/:classId", async (req, res) => {
  try {
    const classSoldiers = await Class.findByPk(req.params.classId, {
      include: [{ model: Soldier }],
    });
    res.json(classSoldiers);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newClass = await User.create(req.body);
    res.json(newClass);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:", async (req, res) => {
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
