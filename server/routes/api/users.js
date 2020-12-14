require('dotenv').config();
const express = require('express');
const router = express.Router() ;

const jwt = require('jsonwebtoken')

const { User,Role,Rank,Class,Platoon } = require('../../models');

// router.get('/', async (req,res)=> {
//     const allUsers = await User.findAll();
//     res.json(allUsers);
// })

router.get("/", async (req, res) => {
try {  
  const allUsers = await User.findAll({
    include:[Role]
  });
  res.json(allUsers);
} catch (e) { res.json({ error: e.message });}
});

router.get("/:userId", async (req, res) => {
    try {
        // const user = await User.findByPk( req.params.userId);
        const user = await User.findOne({
          where: {id: req.params.userId},
          attributes: ['id','firstName','lastName','address','phoneNumber','email'],
          include: [Role,Rank,Class,Platoon]
        })
        res.json(user);
    } catch (e) { res.json({ error: e.message }); }
 });
  

 router.post("/", async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
 });
  
  router.patch("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    await user.update(req.body);
    res.json(user);
  });
  
  router.delete("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.json({ deleted: true });
  });



module.exports = router ;