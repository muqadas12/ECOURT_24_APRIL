const Personss = require("../models/EfileUpload")
const express=require("express");
const multer = require("multer");
var path = require('path');
var fs = require('fs');
const Acceptcase = require("../models/AcceptCase-model")

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
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
  }
   const uploads = multer({ storage: storage});
   //var cpUpload = uploads.fields([{ name: 'fileone', maxCount: 1 }, { name: 'filetwo', maxCount: 8 }])

const postfile=app.post('/upload',uploads.array('image'), (req, res, next) => {
    var file = req.files;
    var rec = new Personss;
    var path=req.files.map(recfile=>
      path=recfile.path)
   
 


      rec.LawyerName= req.body.LawyerName;
      rec.PartyName= req.body.PartyName;
      rec.CaseType= req.body.CaseType;
      rec.Tehsil= req.body.Tehsil;
      rec.Address=req.body.Address;

   

       
      

     rec.pathi="http://localhost:2000/"+path;
     rec.Captionone=req.files[0].originalname;
     rec.captiontwo=req.files[1].originalname;

     console.log(rec.Captionone)
     console.log(rec.captiontwo)

     var s=rec.pathi.slice(22,51)
     var t=rec.pathi.slice(52,81);
     console.log(s)
     rec.pathu="http://localhost:2000/"+s;//ok
     rec.pathq="http://localhost:2000/"+t;


    
      
  
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
  const delfile=app.delete('/delete/:id',function(req,res,next){
      const id=req.params.id;
      Personss.findByIdAndRemove(id).exec()
      res.send("deleted!")



  })

  module.exports={getfile,postfile,delfile}