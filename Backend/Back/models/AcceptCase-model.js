const mongoose=require("mongoose");

const AcceptCaseschema=new mongoose.Schema({
    caseNumber:{
        type:String,
        required:true
    },
    DateofHearing:{
        type:String,
        required:true

    },
  
})

module.exports=mongoose.model("AcceptCase",AcceptCaseschema);