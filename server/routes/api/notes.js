const express = require("express");
const router = express.Router();

const { Note, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll({
      where: { userId: req.user.userId },
    });
    res.json(notes);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/:noteId", async (req, res) => {
  try {
    const noteById = await Note.findByPk(req.params.noteId);
    res.json(noteById);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/user/:userId", async (req, res) => {
  try {
    const notesPerUser = await Note.findAll({
      where: { userId: req.params.userId },
      include: [{ model: User, attributes: ["firstName", "lastName"] }],
    });
    res.json(notesPerUser);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    req.body.userId = req.user.userId ;
    const newnote = await Note.create(req.body);
    res.json(newnote);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:noteId", async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.noteId);
    await note.update(req.body);
    res.json(note);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:noteId", async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.noteId);
    await note.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
