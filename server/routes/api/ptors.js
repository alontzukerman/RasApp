const express = require("express");
const router = express.Router();

const { Ptor, PtorPerSoldier, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const ptors = await Ptor.findAll({});
    res.json(ptors);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get("/soldier/:soldierId", async (req, res) => {
  try {
    const ptorPerSoldier = await PtorPerSoldier.findAll({
      where: { soldierId: req.params.soldierId },
      include: [
        {model:Ptor},
        {model:User, attributes: ["id", "firstName", "lastName"]},
      ],
    });
    res.json(ptorPerSoldier);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
  const newPtor = await PtorPerSoldier.create(req.body);
  res.json(newPtor);
});

module.exports = router;
