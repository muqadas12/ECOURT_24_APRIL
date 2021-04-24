const mongoose=require("mongoose");

var PSchema = mongoose.Schema({
    LawyerName: { type: String, requied: true },
    PartyName: { type: String, requied: true },
    pathi:{type: String, requied: true },
     pathu:{type: String, requied: true },
   
     img: { data: Buffer, contentType: String }
  });
  module.exports=mongoose.model('Personss', PSchema);
