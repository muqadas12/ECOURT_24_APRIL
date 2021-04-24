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
    const id=req.params.id
EFile.findByIdAndRemove(id).exec()
    res.send("deleted")
}




module.exports = {getCasesdata,deletefilecase};

