const mongoose=require("mongoose")

const UploadRecord=new mongoose.Schema({
   
    uploadAffidavit:{
        type:Object
    },
    uploadVaqalat:{
        type:Object
    },
    uploadWitness:{
        type:Object
      
    }

})
const  UploadRecordss=mongoose.model("UploadRecord",UploadRecord)

module.exports=UploadRecordss;