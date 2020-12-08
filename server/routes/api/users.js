const express = require('express');
const router = express.Router() ;

const { User } = require('../../models');

router.get('/', async (req,res)=> {
    const allUsers = await User.findAll();
    res.json(allUsers);
})


module.exports = router ;