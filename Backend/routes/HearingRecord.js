const _ = require('lodash');
const { HearingRecord } = require('../models/hearing');
const express = require('express');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');
const moment = require('moment');
const router = express.Router();


// router.get('/', async (req, res) => {
// router.post('/findCase', async (req, res) => {
//     await CaseRecord.findOne({ caseNumber: req.body.caseNumber }, function (err, doc) {
//         if (err) console.log(err)
//         if (doc) {
//             res.send(doc)
//         } else {
//             res.sendStatus(404)
//         }
//     })
// })

const findHearing=router.post('/findHearing', async (req, res) => {
    await HearingRecord.findOne({ caseNumber: req.body.caseNumber }, function (err, doc) {
        if (err) console.log(err)
        if (doc) {
            res.send(doc)
        } else {
            res.sendStatus(404)
        }
    })
})


const addHearing=router.post('/addHearing', async (req, res) => {


    hear = new HearingRecord({
        name: req.body.name,
        cnic: req.body.cnic,
        address: req.body.address,
        phone: req.body.phone,
        date: req.body.date,
        title: req.body.title,
        hearingDate: req.body.hearingDate,
        caseFile: req.body.caseFile,
        caseNumber: req.body.caseNumber,
    });

    await HearingRecord.insertMany(hear)

    res
        .sendStatus(200);
});

module.exports = {findHearing,addHearing}
