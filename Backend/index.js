const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors')
 const pino = require('express-pino-logger')();
const client = require('twilio')(
    "ACac535f0b5a224c32bb6d005c4023e493",
    "0ff3997ee1c3579bbfc6f13975806295"
);
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 app.use(pino);
app.post('/api/msg', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: "+14083530994",
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        //console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });

 app.listen(2000,()=>{
     console.log("port 2000")
 })