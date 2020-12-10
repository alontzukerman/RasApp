const express = require("express");
const router = express.Router();

const { Note, User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll({});
    res.json(notes);
  } catch (e) {
    res.json({ error: e.message });
  }
});

router.get("/:noteId", async (req, res) => {
  try {
    const noteById = await Note.findByPk(req.params.noteId);
    res.json(noteById);
  } catch (e) {
    res.json({ error: e.message });
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
    res.json({ error: e.message });
  }
});

router.post("/", async (req, res) => {
    const newnote = await Note.create(req.body);
    res.json(newnote);
 });

 router.patch("/:noteId", async (req, res) => {
  const note = await note.findByPk(req.params.noteId);
  await note.update(req.body);
  res.json(note);
});

router.delete("/:noteId", async (req, res) => {
  const note = await Note.findByPk(req.params.noteId);
  await note.destroy();
  res.json({ deleted: true });
});



module.exports = router;
