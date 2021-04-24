const _ = require('lodash');
const { CaseRecord } = require('../models/case');
const express = require('express');

const moment = require('moment');
const router = express.Router();



const findCase=router.post('/findCase', async (req, res) => {
    await CaseRecord.findOne({ caseNumber: req.body.caseNumber }, function (err, doc) {
        if (err) console.log(err)
        if (doc) {
            res.send(doc)
        } else {
            res.sendStatus(404)
        }
    })
})



const addCase=router.post('/addCase', async (req, res) => {


    caseRcrd = new CaseRecord({
        name: req.body.name,
        cnic: req.body.cnic,
        address: req.body.address,
        phone: req.body.phone,
        date: req.body.date,
        title: req.body.title,
        caseFile: req.body.caseFile,
        caseNumber: req.body.caseNumber,
        dateAdded: req.body.date,
    });
    await CaseRecord.insertMany(caseRcrd)

    res
        .sendStatus(200);
});

module.exports = {findCase,addCase}
