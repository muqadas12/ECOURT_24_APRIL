const {sendEmail}=require("../controllers/Email")
const express=require("express")

const  router=express.Router();

router.post("/sendMail",(req,res)=>{
   console.log(req.body)
  
    sendEmail(req.body.email,req.body.name,"Hello")
  })

module.exports=router;