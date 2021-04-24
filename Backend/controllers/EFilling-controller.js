const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")
const fileUpload = require("../middleware/file-upload")
const EFile = require("../models/EFile-model")




const createPlace = async (req, res, next) => {
  

  const { LawyerName, PartyName } = req.body;


  console.log(req.files);
  console.log(LawyerName, PartyName);

  const title = req.body.title;
  const createdPlace = new EFile({
    LawyerName,
    PartyName,
    // uploadPlaint: req.files[0],
    uploadPlaint: req.files[0],

    uploadDocx: req.files[1]
  });

  createdPlace.save().then(savedData => {
    console.log(savedData);
    res.status(201).json({ place: savedData });
  })
    .catch(err => {
      const error = new HttpError(
        'Creating case failed, please try again.',
        500
      );
      return next(error);
    });
};

const getcases = (req, res) => {
  EFile.find().then(dataL => {
      res.status(200).send({
          dataL
          
      });
      console.log(dataL)
  }).catch(err => {
      res.status(500).json(err);
      console.log(err)
  });
};


// exports.createPlace = createPlace;
// exports.getcases = getcases;
module.exports={createPlace,getcases}