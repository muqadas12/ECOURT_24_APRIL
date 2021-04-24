const datafee=require("./fee_data.json");





const FeesSchema = require("../models/FeeModel")
const getFee = (req, res) => {
    FeesSchema.find().then(dataFee => {
       res.status(200).send({
        dataFee
       });
   }).catch(err => {
       res.status(500).json(err);
   });
};





const addFee = (req, res) => {

   console.log('inside adddata');
   datafee.map(dataa => {
       const { Caseno,Caseyear,Status } = dataa;
       const data = new FeesSchema({
        Caseno,Caseyear,Status
       });
       data.save()
           .then(SavedData => {
               console.log(SavedData);
           })
           .catch(err => {
               return res.status(500).send({
                   Message: 'Unable to Create Unable. Please Try later.',
                   err,
               });
           });
   })

}

const getFees = (req, res) => {
    FeesSchema.find().then(data => {
       res.status(200).send({ data });
   })
       .catch(err => {
           return res.status(500).send({
               Message: 'Unable to get. Please Try later.',
               err,
           });
       });
}

module.exports = {getFee, addFee,getFees };

