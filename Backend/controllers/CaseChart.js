







 const  dataChart= require("./Caseschart.json");





const CaseChartSchema = require("../models/Casechart")
const getChartdata = (req, res) => {
    CaseChartSchema.find().then(dataChart => {
        res.status(200).send({
            dataChart
        });
    }).catch(err => {
        res.status(500).json(err);
    });
};




const addChart = (req, res) => {

    console.log('inside adddata');
    dataChart.map(dataa => {
        const { Caseno,Caseyear,Status,CaseName } = dataa;
        const data = new CaseChartSchema({
            Caseno,Caseyear,Status,CaseName 
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


module.exports = { addChart,getChartdata};

