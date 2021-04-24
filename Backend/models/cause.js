const mongoose = require('mongoose');

const causeSchema = new mongoose.Schema({

    date: { type: String },
    title: { type: String },
    causeFile: { type: String },


});


const CauseRecord = mongoose.model('Cause', causeSchema);



exports.CauseRecord = CauseRecord;
