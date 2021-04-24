const _ = require('lodash');
const { User } = require('../models/user');
const express = require('express');
// const crypto = require('crypto');
// const nodemailer = require('nodemailer');
const moment = require('moment');
const router = express.Router();
// const keys = require('../config/dev');

router.get('/me', async (req, res) => {
  res.json({ "message": "Hello WOrld" })
});

// router.get('/', async (req, res) => {
//   const user = await User.findById(req.params.id);

//   if (!user)
//     return res.status(404).send('The product with the given ID was not found.');
//   res.send(user);
// });


router.get('/', async (req, res) => {

  const users = await User.find().sort();
  res.send(users);
});


const loginf=router.post('/login', async (req, res) => {
  await User.findOne({ email: email, password: password }, function (err, doc) {
    if (err) console.log(err)
    if (doc) {
      res.send(doc)
    } else {
      res.send("notFound")
    }
  })
})


const adduser=router.post('/adduser', async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send(user);

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    type: req.body.type,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    dateAddes: moment().toJSON(),
  });
  await User.insertMany(user)
  const token = user.generateAuthToken();
  res
    .header('x-auth-token', token)
    .header('access-control-expose-headers', 'x-auth-token')
    .send(_.pick(user, ['_id', 'name', 'email', 'password']));
});





module.exports ={loginf,adduser}
