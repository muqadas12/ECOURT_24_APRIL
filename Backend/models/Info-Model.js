const mongoose=require("mongoose");

const InfoSchema=new mongoose.Schema({
    caseNumber:{
        type:String,
        required:true
    },
    crimeNumber:{
        type:String,
        required:true

    },
     address:{
        type:String,
        required:true

    },
    judgeName:{
        type:String,
        required:true

    },
    policeOfficer:{
        type:String,
        required:true

    },
    criminalName:{
        type:String,
        required:true

    },
    locationCrime:{
        type:String,
        required:true

    }
  
})

module.exports=mongoose.model("Info",InfoSchema);