const mongoose=require("mongoose");

const LawCasesFileInfo=new mongoose.Schema({
    Tehsil:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true

    },
     PartyName:{
        type:String,
        required:true

    },
    caseName:{
        type:String,
        required:true

    },
  
})

module.exports=mongoose.model("LawCasesFileInfo",LawCasesFileInfo);