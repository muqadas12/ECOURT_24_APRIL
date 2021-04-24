const mongoose=require("mongoose")

const Fileschema=new mongoose.Schema({
    LawyerName:{
        type:String,
        required:true
    },
    PartyName:{
        type:String,
        required:true
    }
})
const File=mongoose.model("EFile",Fileschema)

module.exports=File;