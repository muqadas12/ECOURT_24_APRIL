
const dataList=require("../controllers/Records.json")
const RecordSchema = require("../models/Recordmodel")
const getRecord = (req, res) => {
    RecordSchema.find().then(dataList => {
        res.status(200).send({
            dataList
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};


const updateRecord = (req, res,next) => {
    const query = { $set: req.body };
    RecordSchema.findByIdAndUpdate(
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


const addRecord = (req, res) => {

    console.log('inside adddata');
    dataList.map(dataa => {
        const { Name,Party,Affidavit,VaqalatNama,witness } = dataa;
        const data = new RecordSchema({
            Name,Party,Affidavit,VaqalatNama,witness
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

const getCaseRecord = (req, res) => {
    RecordSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}

module.exports = { getRecord, addRecord, getCaseRecord , updateRecord };

