const mongoose=require("mongoose");

const SummonservedSchema=new mongoose.Schema({
    caseNumber:{
        type:String,
        required:true
    },
    DateofHearing:{
        type:String,
        required:true

    },
     status:{
        type:String,
        required:true

    },
  
})

module.exports=mongoose.model("Summonserved",SummonservedSchema);