const express = require('express');
const router = express.Router() ;

const { Soldier,Platoon,Certification,CertificationPerSoldier } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const certifications = await Certification.findAll({});
        res.json(certifications);
    } catch (e) { res.json( {error: e.message }); }
  })

  router.get('/soldier/:soldierId', async (req, res) => {
      try{
        const certiPerSoldier = await CertificationPerSoldier.findAll({
            where:{soldierId: req.params.soldierId},
            include:[Certification]
          });
          res.json(certiPerSoldier);

      }catch(e){res.json( {error: e.message });}
  })

  router.post("/", async (req, res) => {
    const newCertification = await CertificationPerSoldier.create(req.body);
    res.json(newCertification);
 });

 router.patch("/:certificationId", async (req, res) => {
  const certification = await User.findByPk(req.params.certificationId);
  await certification.update(req.body);
  res.json(certification);
});

router.delete("/:certificationId", async (req, res) => {
  const certification = await certificationPerSoldier.findByPk(req.params.certificationId);
  await certification.destroy();
  res.json({ deleted: true });
});


module.exports = router;