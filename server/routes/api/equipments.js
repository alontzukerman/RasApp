const express = require("express");
const router = express.Router();

const { Equipment, EquipmentPerUser } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const equipments = await EquipmentPerUser.findAll({
      where: { userId: req.user.userId },
      include: [Equipment],
    });
    console.log("equipments",equipments)
    res.json(equipments);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newEquipmentPerUser = await EquipmentPerUser.create(req.body);
    res.json(newEquipmentPerUser);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:equipmentUserId", async (req, res) => {
  try {
    const updateEquipmentPerUser = await EquipmentPerUser.findByPk(
      req.params.equipmentUserId
    );
    await updateEquipmentPerUser.update(req.body);
    res.json(updateEquipmentPerUser);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:equipmentUserId", async (req, res) => {
  try {
    const deleteEquipmentPerUser = await EquipmentPerUser.findByPk(
      req.params.equipmentUserId
    );
    await deleteEquipmentPerUser.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
