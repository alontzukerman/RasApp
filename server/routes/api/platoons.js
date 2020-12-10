const express = require('express');
const router = express.Router() ;

const { Soldier,Platoon } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const platoons = await Platoon.findAll({});
        res.json(platoons);
    } catch (e) { res.json( {error: e.message }); }
})
router.get("/soldiers/:platoonId", async (req, res) => {
    try {
        const platoonSoldiers = await Soldier.findAll({ 
            where: { platoonId: req.params.platoonId } 
        });
        console.log(platoonSoldiers);
        res.json(platoonSoldiers);
    } catch (e) { res.json({ error: e.message }); }
  });

  module.exports = router ;