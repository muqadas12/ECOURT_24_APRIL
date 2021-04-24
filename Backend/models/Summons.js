const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const summonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    judge: {
        type: String,
    },
    address: {
        type: String,
    },
    date: { type: String },
    status: { type: String },
    tehsil: { type: String },
    station: { type: String },
    caseNumber: { type: Number },
});


const Summon = mongoose.model('Summons', summonSchema);



exports.Summon = Summon;
