const express = require("express");
const router = express.Router();
const { Pakal } = require("../../models");

router.get("/", async (req, res) => {
    try {
      const pakals = await Pakal.findAll({});
      res.json(pakals);
    } catch (e) {
      res.status(400).json({ message: "Cannot process request" });
    }
  });

  module.exports = router;
