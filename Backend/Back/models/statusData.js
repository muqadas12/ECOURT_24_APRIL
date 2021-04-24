const mongoose=require("mongoose")

const statusSchema=new mongoose.Schema({
  
    caseName:{
        type:String,
        required:true
    },
    Caseno:{
        type:Number,
        required:true
    },
    Caseyear:{
        type:String,
        required:true
    },
   
    CASETITLE:{
        type:String,
        required:true
    },
    Matter:{
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
    lawyer:{
        type:String,
        required:true

    }

})

const Status=mongoose.model("Status",statusSchema)

module.exports=Status;