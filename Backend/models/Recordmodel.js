const mongoose=require("mongoose")

const RecordSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Party:{
        type:String,
        required:true
    },
    Affidavit:{
        type:String,
     
    },
    VaqalatNama:{
        type:String
    },
    witness:{
        type:String
    },
    uploadAffidavit:{
        data: Buffer,
        contentType: String
    },
    uploadVaqalat:{
        data: Buffer,
        contentType: String
    },
    uploadWitness:{
        data: Buffer,
        contentType: String
      
    }

})
const  Record=mongoose.model("Record",RecordSchema)

module.exports= Record;