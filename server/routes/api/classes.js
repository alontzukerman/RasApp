const express = require('express');
const router = express.Router() ;

const { Soldier,User } = require('../../models');


router.get("/:classId", async (req, res) => {
    try {
        const classSoldiers = await Soldier.findAll({ where:{classId: req.params.classId} });
        res.json(classSoldiers);
    } catch (e) { res.json({ error: e.message }); }
  });


 router.post("/", async (req, res) => {
    const newClass = await User.create(req.body);
    res.json(newClass);
  });
  
  router.patch("/:soldierId", async (req, res) => {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.update(req.body);
    res.json(soldier);
  });
  
  router.delete("/:soldierId", async (req, res) => {
    const soldier = await Soldier.findByPk(req.params.soldierId);
    await soldier.destroy();
    res.json({ deleted: true });
  });

  module.exports = router ;