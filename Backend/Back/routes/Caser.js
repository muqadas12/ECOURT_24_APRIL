const express=require("express");
const HttpError=require("../models/http-error")
const router=express.Router();
const fs=require("fs")
const multer = require("multer");

const Recordmodel=require("../models/Recordmodel")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Newuploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   var uploads=multer({storage:storage}).single('file')


   router.post("/multiple",uploads,(req,res,next)=>{
       const file=req.file;
       if(!file){
           const error=new HttpError('please upload file')
           return next(error)
       }
       var rec=new Recordmodel;
       rec.img.data=fs.readFileSync(req.file.path)
       rec.save((err,result)=>{
           console.log(result)
           if(err) return console.log(err)
           console.log('save to db')
           res.send(rec)
           
       })
    })
   
   module.exports=router;