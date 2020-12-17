const express = require("express");
const router = express.Router();

const {
  Soldier,
  Platoon,
  Certification,
  CertificationPerSoldier,
} = require("../../models");

router.get("/", async (req, res) => {
  try {
    const certifications = await Certification.findAll({});
    res.json(certifications);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.get("/soldier/:soldierId", async (req, res) => {
  try {
    const certiPerSoldier = await CertificationPerSoldier.findAll({
      where: { soldierId: req.params.soldierId },
      include: [Certification],
    });
    res.json(certiPerSoldier);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newCertification = await CertificationPerSoldier.create(req.body);
    res.json(newCertification);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.patch("/:certificationId", async (req, res) => {
  try {
    const certification = await User.findByPk(req.params.certificationId);
    await certification.update(req.body);
    res.json(certification);
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

router.delete("/:certificationId", async (req, res) => {
  try {
    const certification = await CertificationPerSoldier.findByPk(
      req.params.certificationId
    );
    await certification.destroy();
    res.json({ deleted: true });
  } catch (e) {
    res.status(400).json({ message: "Cannot process request" });
  }
});

module.exports = router;
