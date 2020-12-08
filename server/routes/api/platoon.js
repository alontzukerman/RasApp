const express = require('express');
const router = express.Router() ;

const { Soldier,User } = require('../../models');


router.get("/:platoonId", async (req, res) => {
    try {
        const platoonSoldiers = await Soldier.findAll({ where:{platoonId: req.params.platoonId} });
        res.json(platoonSoldiers);
    } catch (e) { res.json({ error: e.message }); }
  });

  module.exports = router ;