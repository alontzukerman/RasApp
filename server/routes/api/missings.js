const express = require("express");
const router = express.Router();

const { Missing } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const missings = await Missing.findAll({});
    res.json(missings);
  } catch (e) {
    res.json({ error: e.message });
  }
});

module.exports = router;