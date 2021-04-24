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
    if (file.mimetype == 'application/pdf' || file.mimetype == 'application/pdf') {
        cb(null, true);
    } else {
        cb(null, false);
    }
  }
  const uploads = multer({ storage: storage, fileFilter: fileFilter });
const postfile=app.post('/upload', uploads.single('image'), (req, res, next) => {
    var file = req.files
    var rec = new Personss;
   
      rec.LawyerName= req.body.LawyerName;
      rec.PartyName= req.body.PartyName;
      rec.img.data = fs.readFileSync(req.files);
      // rec.pic.data = fs.readFileSync(req.pic.path);

    rec.pathi="http://localhost:2000/"+req.file.path;
   rec.pathu="http://localhost:2000/"+req.file.path;

    
      
  
      rec.img.contentType = 'image/png';
      rec.save((err, result) => {
          console.log(result)
  
          if (err) return console.log(err)
          console.log('saved to database')
          res.send(rec);
      })
  });
  
  app.get('/img/:fname', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../uploadFiles/' + req.params.fname));
  });
  const getfile=app.get('/record', function(req, res, next) {
    Personss.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
  });
//   exports.getfile=function(res,req){
//       res.download('../uploadFiles/'+req.params)
//   }
//   exports.postfile=postfile;
  module.exports={getfile,postfile}