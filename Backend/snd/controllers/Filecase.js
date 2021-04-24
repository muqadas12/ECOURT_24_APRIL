const EFile=require("../models/EFile-model")
const {validationResult}=require("express-validator");
const HttpError=require("../models/http-error")

const createCase = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
  
   const { LawyerName,PartyName } = req.body;
  const file = req.body.file;
  

    const createdCase = new EFile({
      LawyerName,
      PartyName,
      file
      
     
    });
  
    try {
      await createdCase.save();
    } catch (err) {
      const error = new HttpError(
        'Creating case failed, please try again.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ case: createdCase });
  };
    
  
  exports.createCase=createCase;