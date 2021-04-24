const express=require("express");
const multer=require('multer')
const fs=require("fs");
const { body, validationResult,check} = require('express-validator');

const { promisify } = require("util");
const pipeline=promisify(require('stream').pipeline);


const EfileController=require("../controllers/Filecase");
const fileUpload=require("../middleware/file-upload");
const upload=multer();
const router=express.Router();

 router.post("/Efile",fileUpload.single('file'),EfileController.createCase,
  [
    check('LawyerName')
      .not()
      .isEmpty(),
      check('PartyName')
      .not()
      .isEmpty(),
    
  ],
 )

//  router.post("/sendMail",(req,res)=>{
//   console.log(req.body)

//   sendEmail(req.body.email,req.body.name,"Hello")

// })
 module.exports=router;



// router.post('/test', upload.any(), (req, res) => {
//   console.log(req.files)
//   res.send({sucess: true})
// })

// module.exports=router;




// router.post("/upload",upload.single("file"),function(req,res){
//   console.log(req.file)
//   console.log(req.body)
//   console.log(req.baseUrl)
//   var myData = new EFile(req.body);
//   myData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

 
 
 
  
 


 