const { FilePondFile } = require("filepond");
const mongoose=require("mongoose")

const judgmentSchema=new mongoose.Schema({
    judgmentDate:{
        type:String,
        required:true
    },
    caseSubject:{
        type:String,
        required:true
    },
    caseNo:{
        type:String,
        required:true
    },
    caseTitle:{
        type:String,
        required:true
    },
    authorJudge:{
        type:String,
        required:true
    },
    download:{
        type:String,
        required:true
    },
    
})
const Judgment=mongoose.model("judgment",judgmentSchema)

module.exports=Judgment;