const _ = require('lodash');
const { CauseRecord } = require('../models/cause');
const express = require('express');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');
const moment = require('moment');
const { CaseRecord } = require('../models/case');
const router = express.Router();


// router.get('/', async (req, res) => {

//     const users = await User.find().sort();
//     res.send(users);
// });
const findCause=router.post('/findCause', async (req, res) => {

    await CauseRecord.find({ date: req.body.date }, function (err, doc) {
        if (err) console.log(err)
        if (doc) {
            res.send(doc)
        } else {
            res.sendStatus(404)
        }
    })
})



const addCause=router.post('/addCause', async (req, res) => {


    caseRcrd = new CauseRecord({

        date: req.body.date,
        title: req.body.title,
        causeFile: req.body.causeFile,

    });
    await CauseRecord.insertMany(caseRcrd)

    res
        .sendStatus(200);
});

module.exports = {addCause,findCause}
