const express = require("express");
const router = express.Router();

const { Calendar, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const calendars = await Calendar.findAll({
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

router.post("/", async (req, res) => {
  try {
    const newCalendar = await Calendar.create({...req.body}); // לעדכן מיגרציות ומודלים רלוונטים
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
