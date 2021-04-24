const express=require("express")
const { body, validationResult,check} = require('express-validator');

const router=express.Router();

const UserController=require("../controllers/user-controller");

router.get("/",UserController.getUserById);

router.post("/signUp",
[
check('name').not().isEmpty(),
check('email').normalizeEmail().isEmail(),
check('password').isLength({max:20})



],UserController.SignUp);

router.post("/login",UserController.Login);

module.exports=router;