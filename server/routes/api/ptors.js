const express = require("express");
const router = express.Router();

const { Ptor, PtorPerSoldier, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const ptors = await Ptor.findAll({});
    res.json(ptors);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/soldier/:soldierId", async (req, res) => {
  try {
    const ptorPerSoldier = await PtorPerSoldier.findAll({
      where: { soldierId: req.params.soldierId },
      include: [
        { model: Ptor },
        { model: User, attributes: ["id", "firstName", "lastName"] },
      ],
    });
    res.json(ptorPerSoldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPtor = await PtorPerSoldier.create(req.body);
    res.json(newPtor);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:ptorId", async (req, res) => {
  try {
    const ptor = await User.findByPk(req.params.ptorId);
    await ptor.update(req.body);
    res.json(ptor);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:ptorId", async (req, res) => {
  try {
    const ptor = await PtorPerSoldier.findByPk(req.params.ptorId);
    await ptor.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
