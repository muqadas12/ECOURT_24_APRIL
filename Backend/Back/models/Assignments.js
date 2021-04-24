const mongoose=require("mongoose");

const UploadCasechema=new mongoose.Schema({
    course:{
    type:String
    },
    ass_name:{
     type:String
            },
    ass_deadline:{
      type:String
    }




})

module.exports=mongoose.model("UploadCasechema",UploadCasechema);