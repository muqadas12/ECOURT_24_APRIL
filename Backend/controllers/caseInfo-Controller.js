const dataCaseInfo=require("./CaseInfo.json");
const  caseinfoSchema=require("../models/CaseInfo-model")

const getInfo = (req, res) => {
    caseinfoSchema.find().then(dataCaseInfo => {
        res.status(200).send({
            dataCaseInfo
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};



const addDataInfo = (req, res) => {

    console.log('inside adddata');
    dataCaseInfo.map(dataa => {
        const {Caseno,Caseyear,partyName,LastHearing, NextDate, caseStatus } = dataa;
        const data = new  caseinfoSchema({
            Caseno,Caseyear,partyName,LastHearing, NextDate, caseStatus
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

const getCaseInfo= (req, res) => {
    caseinfoSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}


const updateCauseInfo = (req, res,next) => {
    const query = { $set: req.body };
    caseinfoSchema.findByIdAndUpdate(
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


module.exports = { getInfo,addDataInfo,getCaseInfo,updateCauseInfo};