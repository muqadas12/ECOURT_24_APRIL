const mongoose=require("mongoose");

const FeeSchema=new mongoose.Schema({
    Caseno:{
        type:String,
        required:true
    },
    Caseyear:{
        type:String,
        required:true

    },
    Status:{
        type:String,
        required:true

    },
 



})

module.exports=mongoose.model("Fee",FeeSchema);