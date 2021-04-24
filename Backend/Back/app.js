const express=require("express")
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require('cors')
const cookieParser=require("cookie-parser")
const caseInfoModel=require("./models/CaseInfo-model")
const multer = require("multer");
var RecordModel=require("./models/UploadRecord")
var path = require('path');
const session = require('express-session')
var path = require('path');

var MongoDBStore = require('connect-mongodb-session')(session);
const mongo_URI='mongodb+srv://muqaddas123:pr8x7n39jMK8wORp@cluster0.48lgo.mongodb.net/ECourt?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Isolated%20Edition&ssl=true'
//causelist
var data=require("./controllers/Records.json")
 
const uuid = require('uuid').v4;
uuid();
const nodemailer=require('nodemailer')
const pdf=require('html-pdf')
const pdfTemplate=require("./documents/Summongenerate")
const stripe = require("stripe")("sk_test_51I7iePJ9U6iFySQkMeltiPiTS9ZEPzfxGBSYagDpksC4UG3wk0nePJ28x125yL5acF3vMUgo6jf85glB3AzQHgJQ00lp41ZRGF");

const HttpError=require("./models/http-error")
const router = express.Router();
const userRoute=require("./routes/User-route")

const EfillingRoute=require("./routes/EFilling-routes");
const updateCaseInfoRoute=require("./routes/UpdateCaseInfo")
const EmailRoute=require("./routes/Email-routes")
const fs=require('fs')
const Police=require("./routes/Email-routes")
const fileupload=require("./routes/EfileUpload")
const recordRoute=require("./routes/caserecord");
const Caser=require("./routes/Caser")
var path = require('path');
var indexRouter = require('./routes/indexx');

const app=express();
app.use('/uploadFiles', express.static(path.join(__dirname, '/uploadFiles')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });
app.use("/api/record",recordRoute)
app.use("/api/users",userRoute)
app.use("/api/lawyer",EfillingRoute)
// app.use("/api/pdf",EfillingRoute)

app.use("/api/summon",Police)
app.use("/api",fileupload.postfile)
app.use("/api",fileupload.getfile)


app.use("/api/CMS",updateCaseInfoRoute)
app.use('/', indexRouter);



////session////
app.use(session({
  'secret': '343ji43j4n3jn4jk3n',
  resave:false,
  saveUninitialized:false,
  store:store
}))







//Genearte summon pdf///////////////////////////////////////////////////////////

app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
      if(err) {
          return res.send(Promise.reject());
      }

      return res.send(Promise.resolve());
  });
});

app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})




//
app.put("/update",async(req,res)=>{
const newdata=req.body.newdata;
const id=req.body.id;
causelistSchema.update().then(data => {
  res.status(200).send({ data });
})
  .catch(err => {
      return res.status(500).send({
          Message: 'Unable to get. Please Try later.',
          err,
      });
  });
})
































//notifying email/////////////////////

app.post("/api/mail",(req,res)=>{

    nodemailer.createTestAccount((err,account)=>{

        const htmlEmail=`
        <h3>Contact detail</h3>
        <ul>
        <li>Name:${req.body.name}</li>
        <li>Email:${req.body.email}</li>
        <li>To:${req.body.to}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
     
        
       
        `
        
let trasporter=nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'muqaddasshaaban@gmail.com',
        pass: 'vejulrhditiysqds'
    }
})

let mailOption={
    from:"muqaddasshaaban@gmail.com",
    to:req.body.to,
    // to:"horainnoor735@gmail.com,ahmadali280298@gmail.com",
    replyTo:"muqaddasshaaban@gmail.com",
    subject:"New message",
    text:req.body.message,
  
   


    html:htmlEmail,
   

}
trasporter.sendMail(mailOption,(err,info)=>{
    if(err){
        return console.log(err);
    }
    console.log("Msg sent")
    console.log("Msg url:%s",nodemailer.getTestMessageUrl(info()))
})

    })
  
})


/////////billinng/////
app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
       const idempotency_key = uuid();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              line1: token.card.address_line1,
              line2: token.card.address_line2,
              city: token.card.address_city,
              country: token.card.address_country,
              postal_code: token.card.address_zip
            }
          }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
  
    res.json({ error, status });
  });



//unknwn route
app.use((req,res,next)=>{
    const error=new HttpError("could not found such route",404);

    throw error;

})

//error occured
app.use((error,req,res,next)=>{
    if(res.headerSent){
        return next(error);

    }
    res.status(error.code || 500)
    res.json({message:error.message || 'An unknow error occured'})
    
})
//testing













//creating db connection
mongoose.connect(mongo_URI)
.then(()=>{
    app.listen(2000);
}).catch(()=>{
    console.log("unable to connect");
})
var store = new MongoDBStore(
  {
    uri:mongo_URI,
    collection: 'mySessions'
  })

