const {emailToExec}=require("../controllers/Email")
const express=require("express")
const bodyParser=require("body-parser")
const multer = require('multer')
const nodemailer=require('nodemailer')
var  path = require('path');
const storage = multer.memoryStorage();

const  app=express.Router();
app.use(bodyParser.urlencoded({extended:true}))
// const upload = multer({
//   storage,
// });
var to;
var from;
var msg;
var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+"_"+file.originalname)
  }
})
 var uploads=multer({storage:Storage}).single('files')


app.post("/police",(req,res)=>{
  uploads(req,res,function(err){
    if(err){
      console.log(err)
      return res.end("something went wrong")
    }
    else{
      to=req.body.to,
      from=req.body.from,
      msg=req.body.msg,
      path=req.file.path

      console.log(to)
      console.log(path)
      nodemailer.createTestAccount((err,account)=>{

        const htmlEmail=`
        <h3>Contact detail</h3>
        <ul>
       
        <li>To:${req.body.to}</li>
        <li>From:${req.body.from}</li>
        <h3>Message:${req.body.msg}</h3>
       
        </ul>
       
      
        `

      var transporter=nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'muqaddasshaaban@gmail.com',
            pass: 'vejulrhditiysqds'
        }
      })
      var mailOptions={
        to:to,
        from:from,
        msg:msg,
        attachments:[
          {
            path:path

          }
          
        ],
        html:htmlEmail,
      }
      transporter.sendMail(mailOptions,(err,info)=>{
        if(err){
            return console.log(err);
        }
        console.log("Msg sent")
        console.log("Msg url:%s",nodemailer.getTestMessageUrl(info()))
      })
    })
    }
  })
})





// app.post("/police",upload.single('files'),(req,res)=>{

  // nodemailer.createTestAccount((err,account)=>{

  //     const htmlEmail=`
  //     <h3>Contact detail</h3>
  //     <ul>
     
  //     <li>To:${req.body.to}</li>
  //     <li>${req.path}</li>
  //     </ul>
     
      
     
  //     `
      
// let trasporter=nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//       user: 'muqaddasshaaban@gmail.com',
//       pass: 'vejulrhditiysqds'
//   }
// })

// let mailOption={
 
//   to:req.body.to,
//   // to:"horainnoor735@gmail.com,ahmadali280298@gmail.com",
//   html:htmlEmail,
 

//   attachments: [{                                       
//     filename: "summon.pdf",
//     path: req.file.path
  
  
  
//   }],

// }
// transporter.sendMail(mailOption,(err,info)=>{
//   if(err){
//       return console.log(err);
//   }
//   console.log("Msg sent")
//   console.log("Msg url:%s",nodemailer.getTestMessageUrl(info()))
// })

//   })

// })


module.exports=app;