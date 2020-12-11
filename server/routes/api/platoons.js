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
        res.json(platoonSoldiers);
    } catch (e) { res.json({ error: e.message }); }
  });

  router.post("/", async (req, res) => {
    const newPlatoon = await Platoon.create(req.body);
    res.json(newPlatoon);
  });

  router.patch("/:platoonId", async (req, res) => {
    const platoon = await Platoon.findByPk(req.params.platoonId);
    await platoon.update(req.body);
    res.json(platoon);
  });
  
  router.delete("/:platoonId", async (req, res) => {
    const platoon = await Platoon.findByPk(req.params.platoonId);
    await platoon.destroy();
    res.json({ deleted: true });
  });

  module.exports = router ;