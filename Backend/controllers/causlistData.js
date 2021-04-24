







 const  dataList= require('./data.json');
 const getcauselist = (req, res) => {
    try {
        // console.log(dataList[1].caseTitle);
        // console.log(dataList[0].judgmentDate);
       
        res.status(200).send({
            dataList
        });
    }catch(err) {
        res.status(500).json(err);
    }
};




const causelistSchema = require("../models/causelistData")
const getList = (req, res) => {
    causelistSchema.find().then(dataList => {
        res.status(200).send({
            dataList
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};


const updateCauselist = (req, res,next) => {
    const query = { $set: req.body };
    causelistSchema.findByIdAndUpdate(
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


const addCauseList = (req, res) => {

    console.log('inside adddata');
    dataList.map(dataa => {
        const { srNo, caseNumber, caseYear, partyName, lawyer, FixationTime } = dataa;
        const data = new causelistSchema({
            srNo, caseNumber, caseYear, partyName, lawyer, FixationTime
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

const getCauselist = (req, res) => {
    causelistSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}

module.exports = { getList, addCauseList, getCauselist, updateCauselist,getcauselist };

