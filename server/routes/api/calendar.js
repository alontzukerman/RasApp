const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const { Calendar, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const { dataValues: user } = await User.findOne({
      where: { id: req.user.userId },
    });
    const calendars = await Calendar.findAll({
      where: { plugaId: user.plugaId },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    res.json(calendars);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});

router.get("/smp", async (req, res) => {
  try {
    console.log("Cdscs");
    const users = await User.findAll({
      where: { roleId: 2 },
    });
    if(users.length===0) return res.json([])
    const usersId = users.map(({ dataValues: user }) => user.id);
    console.log(usersId);
    const calendar = await Calendar.findAll({
      where: { userId: { [Op.or]: usersId } },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    console.log(calendar);
    res.json(calendar);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});
router.get("/mm", async (req, res) => {
  try {
    const users = await User.findAll({
      where: { roleId: 5 },
    });
    if(users.length===0) return res.json([])
    const usersId = users.map(({ dataValues: user }) => user.id);
    const calendar = await Calendar.findAll({
      where: { userId: { [Op.or]: usersId } },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    res.json(calendar);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});
router.get("/mp", async (req, res) => {
  try {
    const users = await User.findAll({
      where: { roleId: 1 },
    });
    if(users.length===0) return res.json([]) 
    const usersId = users.map(({ dataValues: user }) => user.id);
    const calendar = await Calendar.findAll({
      where: { userId: { [Op.or]: usersId } },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    res.json(calendar);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});

router.get("/samal", async (req, res) => {
  try {
    const users = await User.findAll({
      where: { roleId: 6 },
    });
    console.log(users)
    if(users.length===0) return res.json([]) 
    const usersId = users.map(({ dataValues: user }) => user.id);
    const calendar = await Calendar.findAll({
      where: { userId: { [Op.or]: usersId } },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    res.json(calendar);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});

router.get("/mac", async (req, res) => {
  try {
    const users = await User.findAll({
      where: { roleId: 7 },
    });
    if(users.length===0) return res.json([]) 
    const usersId = users.map(({ dataValues: user }) => user.id);
    const calendar = await Calendar.findAll({
      where: { userId: { [Op.or]: usersId } },
      attributes: [
        ["id", "Id"],
        ["subject", "Subject"],
        ["start_time", "StartTime"],
        ["end_time", "EndTime"],
      ],
    });
    res.json(calendar);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
});

router.post("/", async (req, res) => {
  try {
    const { dataValues: user } = await User.findOne({
      where: { id: req.user.userId },
    });
    const newCalendar = await Calendar.create({
      ...req.body,
      userId: user.id,
      plugaId: user.plugaId,
    });
    if (newCalendar.Subject !== null) {
      res.json(newCalendar);
    }
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:calendarId", async (req, res) => {
  try {
    const calendar = await Calendar.findByPk(req.params.calendarId);
    await calendar.update(req.body);
    res.json(calendar);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:calendarId", async (req, res) => {
  try {
    const mission = await Calendar.findByPk(req.params.calendarId);
    await mission.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
