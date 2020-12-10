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


module.exports = router;