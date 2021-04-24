const Personss = require("../models/EfileUpload")
const express=require("express");
const multer = require("multer");
var path = require('path');
var fs = require('fs');
const app=express();



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
const postfile=app.post('/upload',  (req, res, next) => {
    const file = req.file
    var rec = new Personss;
     
      rec.LawyerName= req.body.LawyerName;
      rec.PartyName= req.body.PartyName;
      rec.img.data = fs.readFileSync(req.file.path);
    rec.pathi=req.file.path;
    
      
  
      rec.img.contentType = 'image/png';
      rec.save((err, result) => {
          console.log(result)
  
          if (err) return console.log(err)
          console.log('saved to database')
          res.send(rec);
      })
  });
  
//  =app.get('/img/:fname', function(req, res, next) {
//     res.sendFile(path.join(__dirname, '../uploadFiles/' + req.params.fname));
//   });
const getfile=app.get('/record/:id', function(req, res, next) {
    Personss.findById(
      req.params.id,
      function(err, doc) {
          if (err) return next(err);
           res.contentType(doc.img.contentType);
          res.send(doc.img.data);
      });
  });
  module.exports={getfile,postfile}