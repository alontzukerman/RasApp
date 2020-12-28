const express = require("express");
const router = express.Router();
const { Rank } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const ranks = await Rank.findAll({});
      res.json(ranks);
    } catch (e) {
      res.status(400).json({ message: "Cannot process request" });
    }
  });

  module.exports = router;
