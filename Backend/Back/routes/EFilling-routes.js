// const express = require("express");
// const multer = require('multer')
// const { check } = require('express-validator');

// const auth = require("../middleware/check-auth");

// const EfileController = require("../controllers/Filecase");
// const efilingController = require("../controllers/EFilling-controller");
// const fileUpload = require("../middleware/file-upload");
// const dataController=require("../controllers/causlistData");
// const judgmentData=require("../controllers/judgmentData");
// const casesData=require("../controllers/casesData")
// const Feestatus=require("../controllers/feeData")
// const Fees=require("../controllers/Fees")
// const statusData=require("../controllers/status")
// const router = express.Router();
// const storage = multer.memoryStorage();


// const upload = multer({
//   storage,
// });

// router.post(
//   '/',
//   upload.array('images'),
//   efilingController.createPlace,
// );
// router.get("/data/yearchart", Feestatus.getYearChartData);
// router.get("/data/fees",Fees.getFee)
// //posting and adding judgment data/////
// router.get("/data/judgment",judgmentData.getJudgment);
//  router.patch("/data/judgment",judgmentData.addjudgmentData);




//  //Causelist/////
// // router.get("/data/list",dataController.getList);
// router.get("/data/list",dataController.getList)
// router.patch("/data/listadd",dataController.addCauseList)



// //online casesearch//
// router.get("/data/cases",casesData.getCase);
//  router.patch("/data",casesData.addData)
// // router.put("/update",casesData.up)

//  router.get("/data/status",statusData.getStatus);



// router.post("/Efile", upload.single('file')


//   , EfileController.createCase,
//   [
//     check('LawyerName')
//       .not()
//       .isEmpty(),
//     check('PartyName')
//       .not()
//       .isEmpty(),

//   ],
// )

  
  
// module.exports = router;








const express = require("express");
const multer = require('multer')
const { check } = require('express-validator');

const auth = require("../middleware/check-auth");

const EfileController = require("../controllers/Filecase");
const efilingController = require("../controllers/EFilling-controller");
const fileUpload = require("../middleware/file-upload");
const dataController = require("../controllers/causlistData");
const judgmentData = require("../controllers/judgmentData");
const casesData = require("../controllers/casesData")
const casesRecord = require("../controllers/Uploadrec")
const Law = require("../controllers/Law")



const Feestatus = require("../controllers/feeData")
const File=require("../controllers/Law")
const Fileupload=require("../controllers/EfileUploading")

const Fees = require("../controllers/Fees")
const statusData = require("../controllers/status")
const acceptCase = require("../controllers/AcceptCase")

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploadFiles');
  },
  filename: (req, file, cb) => {
      console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
  } else {
      cb(null, false);
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });















router.post(
  '/',
  upload.array('images'),
  Fileupload.postfile,
);
router.get(
  '/file',
 
 Law.getCasesdata
);
router.delete("/delete/file/:id", Law.deletefilecase)



// router.post("/prac",Practice.createPrac)


router.post(
  '/accept',
  acceptCase.acceptCases
 
);
router.get(
  '/viewaccept',
  acceptCase.getAcceptedcases
 
);

router.post(
  '/upload',
  upload.array('pdf'),
  casesRecord.createR,
);
router.get("/data/yearchart", Feestatus.getYearChartData);
router.get("/data/fees", Fees.getFee)
//posting and adding judgment data/////
router.get("/data/judgment", judgmentData.getJudgment);
router.patch("/data/judgment", judgmentData.addjudgmentData);




//Fees/////
 router.get("/data/fee/all",Fees.getFee)
router.patch("/data/feeadd",Fees.addFee)







//Causelist/////
// router.get("/data/list",dataController.getList);
router.get("/data/list/all", dataController.getList)
router.patch("/data/listadd", dataController.addCauseList)
router.patch("/update/causelist/data/:id", dataController.updateCauselist)



//online casesearch//
router.get("/data/cases", casesData.getCase);
router.get("/data/cases", casesData.addData);

// router.patch("/data", casesData.addData)


router.get("/data/status", statusData.getStatus);



router.post("/Efile", upload.single('file')


  , EfileController.createCase,
  [
    check('LawyerName')
      .not()
      .isEmpty(),
    check('PartyName')
      .not()
      .isEmpty(),

  ],
)



module.exports = router;