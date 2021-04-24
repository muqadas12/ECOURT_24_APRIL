const express=require("express")
const mongoose=require("mongoose");
const bodyParser=require("body-parser")
const cors=require('cors')
const cookieParser=require("cookie-parser")
const multer = require("multer");

const HttpError=require("./models/http-error")
const router = express.Router();
const userRoute=require("./routes/User-route")

const EfillingRoute=require("./routes/EFilling-routes");
const EmailRoute=require("./routes/Email-routes")


const recordRoute=require("./routes/caserecord");
const app=express();

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
app.use("/api",EmailRoute)


app.use('/public', express.static('public'));


// app.post("/api/sendMail",(req,res)=>{
//   console.log(req.body)

//   sendEmail(req.body.email,req.body.name,"Hello")
// })

//app.use("/api",EfillingRoute)

//
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

/////////////////////////////////////////////////


//creating db connection
mongoose.connect('mongodb+srv://muqaddas123:pr8x7n39jMK8wORp@cluster0.48lgo.mongodb.net/ECourt?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Isolated%20Edition&ssl=true')
.then(()=>{
    app.listen(2000);
}).catch(()=>{
    console.log("unable to connect");
})

