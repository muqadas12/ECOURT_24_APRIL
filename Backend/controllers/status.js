  const dataStatus=require("./Status_data.json");

const getStatus = (req, res) => {
    try {
        // console.log(dataStatus[1].caseStatus.length);
        // console.log(dataStatus[1].caseStatus.length);
         console.count(dataStatus[5].caseStatus)
        // console.logdataStatus[0].judgmentDate);
        res.status(200).send({
            dataStatus
        });
    }catch(err) {
        res.status(500).json(err);
    }
    
};

// module.exports = { getStatus };


const addData = (req, res) => {

    console.log('inside adddata');
    dataStatus.map(dataa => {
        const { caseName, Caseno, Caseyear, CASETITLE, Matter, LastHearing, NextDate, caseStatus, lawyer } = dataa;
        const data = new statusSchema({
            caseName, Caseno, Caseyear, CASETITLE, Matter, LastHearing, NextDate, caseStatus, lawyer
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

const getStatusdata= (req, res) => {
    statusSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}
module.exports = { getStatus };