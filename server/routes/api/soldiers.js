const express = require('express');
const router = express.Router() ;

const { Soldier } = require('../../models');

router.get('/', async (req,res)=> {
    const allSoldiers = await Soldier.findAll();
    res.json(allSoldiers);
})


module.exports = router ;