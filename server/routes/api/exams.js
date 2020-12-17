const express = require("express");
const router = express.Router();

const { Exam, ExamPerSoldier } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const exams = await Exam.findAll({});
    res.json(exams);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/soldier/:soldierId", async (req, res) => {
  try {
    const examsPerSoldier = await ExamPerSoldier.findAll({
      where: { soldierId: req.params.soldierId },
      include: [Exam],
    });
    res.json(examsPerSoldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newExam = await ExamPerSoldier.create(req.body);
    res.json(newExam);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:examId", async (req, res) => {
  try {
    const exam = await Exam.findByPk(req.params.examId);
    await exam.update(req.body);
    res.json(exam);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:examId", async (req, res) => {
  try {
    const exam = await ExamPerSoldier.findByPk(req.params.examId);
    await exam.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
