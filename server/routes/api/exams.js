const express = require('express');
const router = express.Router() ;

const { Exam,User,Role,ExamPerSoldier } = require('../../models');


router.get("/", async (req, res) => {
    try {
        const exams = await Exam.findAll({});
        res.json(exams);
    } catch (e) { res.json( {error: e.message }); }
  })

  router.get('/soldier/:soldierId', async (req, res) => {
    try{
      const examsPerSoldier = await ExamPerSoldier.findAll({
          where:{soldierId: req.params.soldierId},
          include:[Exam]
        });
        res.json(examsPerSoldier);

    }catch(e){res.json( {error: e.message });}
})

router.post("/", async (req, res) => {
    const newExam = await ExamPerSoldier.create(req.body);
    res.json(newExam);
 });





  module.exports = router ;