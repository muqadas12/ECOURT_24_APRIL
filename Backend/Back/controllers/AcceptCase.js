const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")

const Acceptcase = require("../models/AcceptCase-model")




const acceptCases = async (req, res, next) => {
  

  const { caseNumber,DateofHearing } = req.body;
    console.log(caseNumber,DateofHearing);

  const accepted = new Acceptcase({
    caseNumber,
    DateofHearing
   
  });

  accepted.save().then(savedData => {
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
const getAcceptedcases = (req, res) => {
  Acceptcase.find().then(dataL => {
      res.status(200).send({
          dataL
          
      });
      console.log(dataL)
  }).catch(err => {
      res.status(500).json(err);
      console.log(err)
  });
};




module.exports={acceptCases,getAcceptedcases}