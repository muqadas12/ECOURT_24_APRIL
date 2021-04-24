const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  type: { type: String },
  phone: { type: String, trim: true },
  address: { type: String },
  city: { type: String, trim: true },


});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      password: this.password,
      type: this.type,
      phone: this.phone,
      address: this.address,
      city: this.city,
    },
    config.get('jwtPrivateKey')
  );
  return token;
};

module.exports = mongoose.model('Users', userSchema);

function validateUser(user) {
  const schema = {
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    phone: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),

  };

  return Joi.validate(user, schema);
}

// exports.User = User;
exports.validate = validateUser;
