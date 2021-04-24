const mongoose=require("mongoose");

const Graphschema=new mongoose.Schema({
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
    CaseName:{
        type:String,
        required:true

    },
    
 



})

module.exports=mongoose.model("Chart",Graphschema);