// const dataCases=require("./case_data.json");

// const getCase = (req, res) => {
//     try {
//         // console.log(dataCases[1].);
//         // console.logdataCases[0].judgmentDate);
//         // console.log(dataList[0].lawyer);
//         // console.log(dataList[0].partyName);
//         //     console.log(dataList[0].caseNumber);
//         res.status(200).send({
//             dataCases
//         });
//     }catch(err) {
//         res.status(500).json(err);
//     }
// };

// module.exports = { getCase };



const dataCases=require("./case_data.json");
const casesSchema=require("../models/casesModel")

const getCase = (req, res) => {
    try {
        // console.log(dataCases[1].);
        // console.logdataCases[0].judgmentDate);
        // console.log(dataList[0].lawyer);
        // console.log(dataList[0].partyName);
        //     console.log(dataList[0].caseNumber);
        res.status(200).send({
            dataCases
        });
    }catch(err) {
        res.status(500).json(err);
    }
};


// module.exports = { getStatus };


const addData = (req, res) => {

    console.log('inside adddata');
    dataCases.map(dataa => {
        const {caseCode,caseName,Caseno,Caseyear,Bench,Circuitcode,CASETITLE,Matter,LastHearing,NextDate,pdf} = dataa;
        const data = new casesSchema({
            caseCode,caseName,Caseno,Caseyear,Bench,Circuitcode,CASETITLE,Matter,LastHearing,NextDate,pdf
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

const getCasesdata= (req, res) => {
    casesSchema.find().then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to get. Please Try later.',
                err,
            });
        });
}

const updateCasesdata= (req, res) => {
    casesSchema.updateOne({caseCode: "4039"},{$set:{caseCode: "4044"}}).then(data => {
        res.status(200).send({ data });
    })
        .catch(err => {
            return res.status(500).send({
                Message: 'Unable to update. Please Try later.',
                err,
            });
        });
}
module.exports = { getCase,addData,getCasesdata,updateCasesdata };
