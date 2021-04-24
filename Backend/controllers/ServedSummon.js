const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")

const SummonservedModel = require("../models/ServedSummon-model")




const servedSummonrep = async (req, res, next) => {
  

  const { caseNumber,DateofHearing,status} = req.body;
    console.log(caseNumber,DateofHearing,status);

  const servedsummon = new SummonservedModel({
    caseNumber,
    DateofHearing,
    status
   
  });

  servedsummon.save().then(savedData => {
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
const getservedsummoncases = (req, res) => {
    SummonservedModel.find().then(dataL => {
      res.status(200).send({
          dataL
          
      });
      console.log(dataL)
  }).catch(err => {
      res.status(500).json(err);
      console.log(err)
  });
};




module.exports={servedSummonrep,getservedsummoncases}