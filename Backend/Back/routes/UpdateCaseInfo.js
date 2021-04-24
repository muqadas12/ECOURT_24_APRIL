const express = require("express");
const { check } = require('express-validator');
const multer = require('multer')
const auth = require("../middleware/check-auth");
const router = express.Router();
const CaseinfoController=require("../controllers/caseInfo-Controller")
const recordController=require("../controllers/Recors")

const storage = multer.memoryStorage();


const upload = multer({
  storage,
});
// router.post(
//     '/bb',
//     upload.array('file'),
//     recordController.createRecord,
//   );

// router.get("/data/updateInfo",CaseinfoController.getInfo)
// router.patch("/data/addInfo",CaseinfoController.addDataInfo)

//CaseInfo
router.get("/data/updateInfo",CaseinfoController.getInfo)
router.patch("/data/listaddinfo", CaseinfoController.addDataInfo)
router.patch("/update/caseInfo/dataa/:id", CaseinfoController.updateCauseInfo)


//  router.get("/data/updaterecord",recordController.addRecord)
 router.get("/data/updaterecord",recordController.getRecord)

router.patch("/update/caseRecord/dattaa/:id",recordController.updateRecord)

// router.patch("/data/addrecord",recordController.addRecord)
//  router.put("/up",CaseinfoController.update)

module.exports = router;
