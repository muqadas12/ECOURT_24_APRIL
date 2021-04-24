const jwt=require("jsonwebtoken");
const HttpError=require("../models/http-error");
module.exports=(req,res,next)=>{
    try{
        const token=req.header.authorization.split('')[1];
        if(!token){
            throw new Error('Authentication failed');
        }
        const decodetoken=jwt.verify(token,'supersecret_dont_share');
        req.userData={userId:decodetoken.userId}
        next();

    }catch(err){
        const error=new HttpError('Authentication failed',401)
        return next(error)
    }
}