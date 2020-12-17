const express = require("express");
const router = express.Router();

const {
  Calendar,
  User
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const calendars = await Calendar.findAll({
      attributes: [["id",'Id'], ["subject",'Subject'], ["start_time",'StartTime'],["end_time",'EndTime']]
    });
    res.json(calendars);
  } catch (e) {
    res.status(400).json(console.log(e.message));
  }
  
});

module.exports = router;
