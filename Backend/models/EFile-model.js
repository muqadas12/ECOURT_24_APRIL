const mongoose=require("mongoose");

const Efileschema=new mongoose.Schema({
    LawyerName:{
        type:String,
        required:true
    },
    PartyName:{
        type:String,
        required:true

    },
  uploadPlaint: { type:Object},
// uploadPlaint: {type:String},

 uploadDocx: {type:Object}



})

module.exports=mongoose.model("EFile",Efileschema);