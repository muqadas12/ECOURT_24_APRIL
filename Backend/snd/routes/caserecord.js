const express=require("express");
const HttpError=require("../models/http-error")
const router=express.Router();

const records=[
    {
        id:"r1",
        name:"affiavit",
        description:"this is case record searching"
    }
]
router.get("/:rid",(req,res)=>{
    const recid=req.params.rid;
    const record=records.find(r=>{
        return r.id===recid;
    })
    if(!record){
        throw  new HttpError("could not find such record");
        
    
    }
    res.json({record})

})

module.exports=router;






