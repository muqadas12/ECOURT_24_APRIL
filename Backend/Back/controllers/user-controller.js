
const HttpError = require("../models/http-error");
const { validationResult } = require("express-validator");
const User = require("../models/User-model");
const uuid = require("uuid");
const bcryptjs = require('bcrypt')
const jwt = require('jsonwebtoken')

const Dummy_user = [
  {
    id: "u1",
    name: "Muqaddas",
    email: "ms@gmail.com",
    password: "m123"


  }
]

const getUserById = (req, res, next) => {
  res.json(Dummy_user);

}

const SignUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { name, email, password, } = req.body;
  console.log(name, email, password);
  User.findOne({ email: email }).then(user => {
    if (user) {
      if (user.email == email) {
        console.log(user.email, email);
        console.log('email matched');
        const error = new HttpError(
          'User exists already, please login instead.',
          422
        );
        return next(error);
      }
    } else {
      bcryptjs.hash(password, 12).then((hashedpassword) => {
        const createdUser = new User({
          name,
          email,
          password: hashedpassword
        });
        createdUser.save()
          .then((SavedUser) => {

            let token;
            try {
              token = jwt.sign({ userId: SavedUser._id, email: SavedUser.email }, 'supersecret_dont_share', { expiresIn: '1h' })
            } catch (err) {
              const error = new HttpError(
                'Signing up failed, please try again later.',
                500
              );
              return next(error);
            }
            console.log(token, SavedUser);
            res
              .status(201)
              .json({ userId: SavedUser._id, email: SavedUser.email, token: token });
          })
          .catch(err => {
            const error = new HttpError(
              'Signing up failed, please try again later.',
              500
            );
            return next(error);
          });
      });
    }
  }).catch(err => {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  });
}




const Login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later.',
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      'Invalid credentials, could not log you in.',
      401
    );
    return next(error);
  }
  // let isValidPassword = false;
  // try {
  //   isValidPassword = bcrypt.compare(password, existingUser.password)
  //   console.log(password, existingUser.password);
  //   console.log(isValidPassword);
  // } catch (err) {
  //   const error = new HttpError('couldnot log u in,check your credentials and try again')
  //   return next(error)
  // }
  // if (!isValidPassword) {
  //   console.log('invalid');
  //   const error = new HttpError('Invalid credential');
  //   return next(error)
  // }
  console.log(password, existingUser.password);
  bcryptjs.compare(password, existingUser.password).then(result => {
    // if password match create payload
    console.log(result);
    if (result) {
      console.log('matched');
      let token;
      try {
        token = jwt.sign(
          { userId: existingUser.id, email: existingUser.email },
          'supersecret_dont_share',
          { expiresIn: '1h' }
        );
      } catch (err) {
        const error = new HttpError(
          'Logging in failed, please try again later.',
          500
        );
        return next(error);
      }

      res.json({
        userId: existingUser.id,
        email: existingUser.email,
        token: token
      });

    } else {
      console.log('invalid');
      const error = new HttpError('Invalid credential');
      return next(error)
    }
  });

}

exports.getUserById = getUserById;
exports.SignUp = SignUp;
exports.Login = Login;