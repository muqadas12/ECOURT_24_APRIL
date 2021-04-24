// const mailer=require('nodemailer')
// const {Hello}=require('../hello_template')
// const {Thanks}=require('../thanks_template')



// const getEmailData=(to,name,template)=>{
//     let data=null;
   

//     switch (template){
//         case "hello":
//             data={
//                 from:"muqaddas shaaban <muqaddasshaaban@gmail.com>",
//                 to:"horainnoor735@gmail.com",
//                 subject:`Hello ${name}`,
//                 html:Hello()
//             }
//             break;
//             case "Thanks":
//                 data={
//                     from:"muqaddas shaaban <muqaddasshaaban@gmail.com>",
//                     to,
//                     subject:`Hello ${name}`,
//                     html:Thanks()
//                 }
//                 break;
//                 default:
//                     data;

//     }
//     return data;
// }

// const sendEmail=(to,name,type)=>{
//     const smtpTransport=mailer.createTransport({
       
//         host: 'smtp.office365.com.',
//         secure: false,
//         port: 587,
       
//         auth:{
//             user:"muqaddasshaaban@gmail.com",
//             pass:"umsekehdcrzosrrp"
//         }
        
//     })
//      const mail=getEmailData(to,name,type)
//     smtpTransport.sendMail(mail,function(error,response){
//         if(error){
//             console.log(error)
//         }else{
//             console.log("email sent successfully")
//         }
//         smtpTransport.close();

//     })
// }


// module.exports={sendEmail}


const nodemailer = require('nodemailer');

const SendEmail = (to, subject) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com.',
            secure: false,
            port: 587,
            auth: {
                user: 'muqaddasshaaban@gmail.com',
                pass: 'shaaban1973'
            },
        });
        const mailOptions = {
            
            to,
            subject,
            html:'<h1>hello</h1>',
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject();
            } else {
                resolve();
            }
        });
    });
};

const emailToExec = (req, res, next) => {
    const {  subject, to } = req.body;
    SendEmail( subject, to)
        .then(sent => {
            SendEmail(  'Sort My Will', 'ff@dif.ie')
                .then(res => {
                    res.status(200).json({
                        Message: 'Email Sent!',
                    });
                })
                .catch(err => {
                    res.status(500);
                    next(new Error('Email Not Sent!'));
                });
        })
        .catch(err => {
            res.status(500);
            next(new Error('Email Not Sent!'));
        });
};

module.exports= { emailToExec };

