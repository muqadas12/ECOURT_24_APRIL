const mongoose=require("mongoose")

const caseinfoSchema=new mongoose.Schema({
  
    Caseno:{
        type:String,
        required:true
    },
    Caseyear:{
        type:Number,
        required:true
    },
    partyName:{
        type:String,
        required:true
    },
   
    LastHearing:{
        type:String,
        required:true
    },
    NextDate:{
        type:String,
        required:true
    },
    caseStatus:{
        type:String,
        required:true
    },
    
})

const CaseInfo=mongoose.model("CaseInfo",caseinfoSchema)

module.exports=CaseInfo;