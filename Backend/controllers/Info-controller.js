const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error")

const Info = require("../models/Info-Model")




const savecasesInformation = async (req, res, next) => {
  

  const { caseNumber,crimeNumber,address,judgeName,policeOfficer,criminalName,locationCrime
} = req.body;
    console.log(caseNumber,crimeNumber,address,judgeName,policeOfficer,criminalName,locationCrime);

  const infos = new Info({
   caseNumber,
   crimeNumber,
   address,
   judgeName,
   policeOfficer,
   criminalName
   
  });

  infos.save().then(savedData => {
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
const getInformationofcases = (req, res) => {
    Info.find().then(dataL => {
      res.status(200).send({
          dataL
          
      });
      console.log(dataL)
  }).catch(err => {
      res.status(500).json(err);
      console.log(err)
  });
};




module.exports={savecasesInformation,getInformationofcases}