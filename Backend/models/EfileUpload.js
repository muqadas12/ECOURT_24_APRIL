const mongoose=require("mongoose");

var PSchema = mongoose.Schema({
    LawyerName: { type: String, requied: true },
    PartyName: { type: String, requied: true },
    CaseType: { type: String, requied: true },
    Tehsil: { type: String, requied: true },
    Address: { type: String, requied: true },



    pathi:{type: String, requied: true },
     pathu:{type: String, requied: true },
     pathq:{type: String, requied: true },
     Captionone:{type: String},
     captiontwo:{type: String},



     img: { data: Buffer, contentType: String }
  });
  module.exports=mongoose.model('Personss', PSchema);
