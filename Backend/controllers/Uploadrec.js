const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")
const fileUpload = require("../middleware/file-upload")
const Up = require("../models/UploadRecord")



const createR = async (req, res, next) => {
  



  console.log(req.files);

  // const title = req.body.title;
  const createdPlace = new Up({
    
    uploadAffidavit: req.files[0],
    uploadVaqalat: req.files[1],
    uploadWitness: req.files[2]

  });

  createdPlace.save().then(savedData => {
    console.log(savedData);
    res.status(201).json({ place: savedData });
  })
    .catch(err => {
      const error = new HttpError(
        'Creating rec failed, please try again.',
        500
      );
      return next(error);
    });
};


exports.createR  = createR ;










// const express=require("express");
// const Up = require("../models/UploadRecord")
// const multer = require("multer");
// var path = require('path');
// var fs = require('fs');
// const app=express();



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploadRecords');
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
//   });
//   const fileFilter = (req, file, cb) => {
//     if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpeg') {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
//   }
//    const uploads = multer({ storage: storage});
//    //var cpUpload = uploads.fields([{ name: 'fileone', maxCount: 1 }, { name: 'filetwo', maxCount: 8 }])

// const createR=app.post('/doc',uploads.array('pdf'), (req, res, next) => {
//     var file = req.files;
//     var rec = new Up;
//     var path=req.files.map(recfile=>
//       path=recfile.path)
 


//       // rec.LawyerName= req.body.LawyerName;
//       // rec.PartyName= req.body.PartyName;
       
        

//      rec.pathi="http://localhost:2000/"+path;
//      var s=rec.pathi.slice(22,51)
//      var t=rec.pathi.slice(52,81);
//      console.log(s)
//      rec.pathu="http://localhost:2000/"+s;//ok
//      rec.pathq="http://localhost:2000/"+t;


    
      
  
//       rec.img.contentType = 'image/png';
//       rec.save((err, result) => {
//           console.log(result)
  
//           if (err) return console.log(err)
//           console.log('saved to database')
//           res.send(rec);
//       })
//   });
  
//   app.get('/img/:fname', function(req, res, next) {
//     res.sendFile(path.join(__dirname, '../uploadRecords/' + req.params.fname));
//   });
//   const getfile=app.get('/record', function(req, res, next) {
//     Personss.find().then(data => {
//         res.status(200).send({ data });
//     })
//         .catch(err => {
//             return res.status(500).send({
//                 Message: 'Unable to get. Please Try later.',
//                 err,
//             });
//         });
//   });

//  exports.createR  = createR ;
