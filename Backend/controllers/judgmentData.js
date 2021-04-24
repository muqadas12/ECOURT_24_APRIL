const dataJudgment=require("./JudgmentData.json");
const judgmentSchema=require("../models/judgmentData")



const getListjudgment = (req, res) => {
    judgmentSchema.find().then(dataJudgment => {
        res.status(200).send({
            dataJudgment
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};

const addjudgmentData = (req, res) => {

    console.log('inside adddata');
    dataJudgment.map(dataaa => {
        const {judgmentDate,caseSubject,caseNo, caseTitle, authorJudge,download } = dataaa;
        const data = new judgmentSchema({
            judgmentDate,caseSubject,caseNo, caseTitle, authorJudge,download 
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

const getJudgmentdata= (req, res) => {
    judgmentSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}


const UpdateJudgment = (req, res,next) => {
    const query = { $set: req.body };
    judgmentSchema.findByIdAndUpdate(
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


module.exports = { getListjudgment,getJudgmentdata,addjudgmentData,UpdateJudgment };
