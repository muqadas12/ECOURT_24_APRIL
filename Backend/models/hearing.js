const mongoose = require('mongoose');

const hearingSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    cnic: {
        type: String,
    },
    address: {
        type: String,
    },
    date: { type: String },
    title: { type: String },
    caseFile: { type: String },
    phone: { type: String },
    caseNumber: { type: Number },
    hearingDate: { type: String }

});


const HearingRecord = mongoose.model('hearing', hearingSchema);



exports.HearingRecord = HearingRecord;