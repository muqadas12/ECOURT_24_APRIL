const mongoose=require("mongoose")

const EmailSchema=new mongoose.Schema({
    to:{
        type:String,
        required:true
    },
subject:{
        type:String,
        required:true
    }
})
const Email=mongoose.model("Email",EmailSchema)

module.exports=Email;