const mongoose=require("mongoose")

const casesSchema=new mongoose.Schema({
    caseCode:{
        type:Number,
        required:true
    },
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
    Bench:{
        type:String,
        required:true
    },
    Circuitcode:{
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
    pdf:{
        type:String,
    }

})
const Cases=mongoose.model("Cases",casesSchema)

module.exports=Cases;