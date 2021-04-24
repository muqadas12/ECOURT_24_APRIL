const EFile=require("../models/EFile-model")
 

const getCasesdata= (req, res) => {
  EFile.find().then(data => {
      res.status(200).send({ data });
  })
//   console.log(data)
      .catch(err => {
          return res.status(500).send({
              Message: 'Unable to get. Please Try later.',
              err,
          });
      });
}

const deletefilecase = (req, res,next) => {
    const query = { $set: req.body };
    EFile.findByIdAndDelete(
        req.params.id,
        query,
        { upsert: true, new: true },
        (err, doc) => {
            if (err) {
                res.status(500);
                next(
                    new Error(
                        `Internal Server Error, Please Try later.`,
                    ),
                );
            } else {
                res.status(200).send({ doc });
            }
        }
    );
}




module.exports = {getCasesdata,deletefilecase};

