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
 file: { type: Object }
    // uploadPlaint:{
    //     type:String,
    //     required:true
    // },
    // uploadDocx:{
    //     type:String,
    //     required:true
    // }


})

module.exports=mongoose.model("EFile",Efileschema);