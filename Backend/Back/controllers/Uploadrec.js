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