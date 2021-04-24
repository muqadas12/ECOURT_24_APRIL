const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    caseNumber: { type: Number }


});


const CaseRecord = mongoose.model('Case', userSchema);



exports.CaseRecord = CaseRecord;
