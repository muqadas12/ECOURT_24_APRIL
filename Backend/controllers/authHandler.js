import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import Model from '../Models/User-model';

const createToken = (user, res, next) => {
    const { _id, email, username, password } = user;
    const payload = {
        _id,
        email,
        username,
        password
        
    };
    // create a token                                        
    jwt.sign(
        payload,
        process.env.JwtSecret,
        {
            expiresIn: '365d',
        },
        (err, token) => {
            // Error Create the Token
            if (err) {
                res.status(500);
                next(new Error('Unable to generate Token.'));
            } else {
                // Token Created
                res.status(200).send({
                    token,
                    user: payload
                });
            }
        },
    );
};

const userSignIn = async (req, res, next) => {
    const { email, password } = req.body;
    // const users = await Model.UserModel.find();
    // res.status(200).send(users);
    // Find user with the passed email
    Model.UserModel.findOne({ email }).then(user => {
        if (user) {
            // if email found compare the password
            bcryptjs.compare(password, user.password).then(result => {
                // if password match create payload
                if (result) {
                    createToken(user, res, next);
                } else {
                    res.status(400);
                    next(new Error('Invalid Password'));
                }
            });
        } else {
            res.status(404);
            next(new Error('No User Exist With This Email'));
        }
    });
};

export default { userSignIn, createToken };